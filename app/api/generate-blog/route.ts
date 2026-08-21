import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Vercel execution limit

export async function POST(request: Request) {
  const apiKey = process.env.HELLO_DROP_CHOO || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret is not set. Please ensure HELLO_DROP_CHOO or OPENAI_API_KEY is configured in your environment." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

  try {
    const body = await request.json();
    const primaryKeyword = body.primaryKeyword || body.context || body.writeup;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords || "";
    const requestedCategory = body.category || "";

    if (!primaryKeyword) {
      return NextResponse.json({ error: "Primary Keyword or Topic Brief is required" }, { status: 400 });
    }

    console.log(`[AI Generator] Step 1: Deep Topic Analysis via Structured Outputs for: "${primaryKeyword}"`);

    // STEP 1: Deep Topic Analysis via OpenAI Structured Outputs (gpt-4o)
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the Lead Web Architect, Principal UI/UX Strategist, and Chief SEO/AEO Strategist at DesignNCode (https://www.designandcode.com) - a premier digital engineering and design agency specializing in high-performance Next.js 16 applications, Figma design systems, headless Shopify/e-commerce, and enterprise web architecture.

Analyze the given topic/keyword and generate an authoritative, highly comprehensive blueprint for a flagship agency blog article.

Agency Taxonomy Categories:
1. "Web Development & Architecture": Full-stack Next.js/React frameworks, SSR vs SSG vs ISR, edge computing, API scalability, headless CMS, micro-frontends, server actions.
2. "UI/UX Design & Frontend Engineering": Design systems, accessible UI, Tailwind CSS architecture, GSAP/Framer micro-interactions, conversion-focused UX, WebGL.
3. "Tech Comparisons & ROI Frameworks": Next.js vs Remix/Astro, Custom Code vs WordPress, Headless Shopify vs monoliths, performance benchmarks, engineering cost/ROI breakdowns.

Requirements:
- title: Captivating H1 title with target keyword (strictly max 70 characters).
- subtitle: Engaging, high-converting subtitle explaining the engineering value (max 120 characters).
- metaTitle: SEO/AEO meta title ending in " | DesignNCode" (60 to 70 characters total).
- metaDescription: High-CTR meta description containing target keyword and clear value proposition (140 to 160 characters).
- slug: Clean, URL-friendly kebab-case slug.
- category: Select the most appropriate category among the 3 agency categories.
- exactTopic: Specific engineering or design subject matter.
- techFramework: Primary technologies involved (e.g., "Next.js 16 App Router, TypeScript, Tailwind CSS, Server Actions").
- outline: Exactly 5 to 6 comprehensive H2 headings. The headings must cover: Architecture/Foundation, Deep Technical Breakdown, Practical Implementation/Code Patterns, Comparison/Tradeoffs (must contain words like 'Comparison', 'Benchmarking', or 'Analysis'), and Future-Proof Scaling & Strategic Conclusions.
- keyTakeaways: Exactly 5 actionable, punchy takeaways summarizing core engineering decisions and takeaways.
- popularSearches: Exactly 10 high-intent search queries and long-tail keywords that senior developers, CTOs, and founders search for regarding this topic.`
        },
        {
          role: "user",
          content: `Topic / Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword}
Preferred Category: ${requestedCategory || "Auto-detect"}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "blog_metadata",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: { type: "string", description: "H1 Title under 70 chars" },
              subtitle: { type: "string", description: "Engaging subtitle under 120 chars" },
              metaTitle: { type: "string", description: "Meta title ending in | DesignNCode (60-70 chars)" },
              metaDescription: { type: "string", description: "Meta description (140-160 chars)" },
              slug: { type: "string", description: "URL-friendly slug" },
              category: {
                type: "string",
                enum: [
                  "Web Development & Architecture",
                  "UI/UX Design & Frontend Engineering",
                  "Tech Comparisons & ROI Frameworks"
                ],
                description: "Agency taxonomy category"
              },
              exactTopic: { type: "string", description: "Specific topic" },
              techFramework: { type: "string", description: "Key tech frameworks" },
              outline: {
                type: "array",
                items: { type: "string" },
                description: "Exactly 5 to 6 H2 headings"
              },
              keyTakeaways: {
                type: "array",
                items: { type: "string" },
                description: "Exactly 5 actionable takeaways"
              },
              popularSearches: {
                type: "array",
                items: { type: "string" },
                description: "Exactly 10 high-intent search terms"
              }
            },
            required: [
              "title",
              "subtitle",
              "metaTitle",
              "metaDescription",
              "slug",
              "category",
              "exactTopic",
              "techFramework",
              "outline",
              "keyTakeaways",
              "popularSearches"
            ],
            additionalProperties: false
          }
        }
      },
      temperature: 0.6,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    const metaData = JSON.parse(step1ResultStr);
    const outline: string[] = metaData.outline || [];

    console.log(`[AI Generator] Step 2 & 3: Running Parallel Concurrent Generation for ${outline.length} Sections + FAQs/Reviews/Prompts...`);

    // STEP 2: Parallel Concurrent Section Generation (Promise.all)
    const generateSection = async (heading: string, index: number, total: number) => {
      const isFirst = index === 0;
      const isLast = index === total - 1;
      const isComparison = /vs|comparison|benchmark|tradeoff|matrix|analysis|evaluation/i.test(heading);

      const sectionPrompt = `
You are a Lead Web Architect and Principal Engineer at DesignNCode (https://www.designandcode.com).
Write an authoritative, deeply technical, and production-grade HTML section for a flagship agency blog article.

Article Title: "${metaData.title}"
Category: ${metaData.category}
Tech Stack: ${metaData.techFramework}
Target Primary Keyword: "${primaryKeyword}"
Section Heading: "<h2>${heading}</h2>"
Position: Section ${index + 1} of ${total}

**CRITICAL INSTRUCTIONS & WORD COUNT**:
1. Write 350 to 450 words of rich, semantic HTML for this section ONLY.
2. Begin immediately with the exact tag "<h2>${heading}</h2>".
3. Use semantic HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <code>, <pre>, <blockquote>, <table>, <thead>, <tbody>, <tr>, <th>, <td>, <strong>, <em>, <a>.
4. Voice & Tone: Highly authoritative, polished, human-written, senior engineering depth. No fluff, no generic AI filler words.
${isComparison ? `
5. **MANDATORY COMPARISON TABLE**: Because this section discusses comparisons/benchmarks/tradeoffs, you MUST include a comprehensive multi-column HTML <table> with <thead> and <tbody> comparing key parameters (e.g. Performance Score, Latency, Dev Velocity, Maintenance Overhead, TTFB, Scalability).` : ''}
${isLast ? `
5. **OFFICIAL SOURCES & DOCUMENTATION**: As this is the final concluding section, write an inspiring engineering summary, and then append an exact subsection:
<h3>Official Sources, Documentation & Industry References</h3>
<p>For official specifications and in-depth engineering documentation, refer to the following authoritative resources:</p>
<ul>
  <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Next.js Documentation & App Router Architecture</a> - Official production guidelines and React Server Component paradigms.</li>
  <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Official Documentation</a> - Concurrent rendering, hooks, and modern frontend mental models.</li>
  <li><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> - Web standards, modern JavaScript APIs, and performance best practices.</li>
  <li><a href="https://web.dev/" target="_blank" rel="noopener noreferrer">Google Web Vitals & Search Central</a> - Core Web Vitals, Lighthouse metrics, and technical SEO guidelines.</li>
  <li><a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">W3C Web Standards</a> - Universal accessibility (a11y) and global web architecture protocols.</li>
</ul>` : `
5. **NO GENERIC CONCLUSIONS**: This is section ${index + 1} of a multi-part deep dive. Do not write concluding paragraphs or "In conclusion" phrases in this intermediate section.`}
6. Contextual Agency Internal Links: Where relevant and natural in the prose, link to:
   - <a href="/Service">DesignNCode Engineering Services</a>
   - <a href="/ecommerce">Headless E-Commerce Solutions</a>
   - <a href="/enterprise">Enterprise Web Architecture</a>
   - <a href="/Projects">Client Case Studies</a>
   - <a href="/ContactUs">Book an Architecture Consultation</a>
7. Return RAW HTML ONLY. Do not wrap in markdown \`\`\`html or \`\`\` code blocks.
`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: sectionPrompt },
          { role: "user", content: `Generate the 350-450 word HTML section for "<h2>${heading}</h2>".` }
        ],
        temperature: 0.7,
      });

      let rawContent = sanitizeText(completion.choices[0]?.message?.content || "");
      let cleanContent = rawContent.trim();
      if (cleanContent.startsWith("```html")) cleanContent = cleanContent.slice(7).trim();
      else if (cleanContent.startsWith("```markdown")) cleanContent = cleanContent.slice(11).trim();
      else if (cleanContent.startsWith("```")) cleanContent = cleanContent.slice(3).trim();
      if (cleanContent.endsWith("```")) cleanContent = cleanContent.slice(0, -3).trim();

      return cleanContent;
    };

    // STEP 3: Concurrent Structured Outputs for FAQs, Reviews, and Visual Prompts
    const generateFaqsReviewsPrompts = async () => {
      const step3Completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are the Lead Digital Strategist at DesignNCode.
Generate:
1. 8 to 10 highly practical technical, architectural, and business FAQs tailored specifically to the article "${metaData.title}". Provide clear, actionable answers.
2. 5 realistic client reviews and testimonials from Startup Founders, CTOs, VP of Product, and Enterprise Directors who partnered with DesignNCode for web engineering, design systems, and digital transformations. Include realistic ratings (5), roles, company niches, authentic comments, and recent dates.
3. suggestedImagePrompt: A high-converting editorial photographic scene for the article's hero banner (e.g., "A modern collaborative digital engineering team in a sleek glass architectural studio working on next-gen interactive design systems with multi-monitor dashboards, ambient studio lighting, cinema-grade 8k photography").
4. infographicPrompt: A tailored visual prompt describing a 3D isometric problem-solving flowchart visual (Problem Diagnosis -> Architecture & Component Design -> Full-Stack Engineering -> Production Deployment & 100/100 Lighthouse) with 3D tech icons (code terminal, cloud server, lightning bolt, speed gauge) on a clean, minimal background. STRICT CONSTRAINT: Specify NO small paragraphs, NO tiny illegible text.`
          },
          {
            role: "user",
            content: `Article Title: ${metaData.title}
Category: ${metaData.category}
Key Tech: ${metaData.techFramework}
Key Takeaways: ${metaData.keyTakeaways.join("; ")}`
          }
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "blog_faqs_reviews_prompts",
            strict: true,
            schema: {
              type: "object",
              properties: {
                faqs: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      question: { type: "string", description: "In-depth technical or business question" },
                      answer: { type: "string", description: "Detailed, actionable answer" }
                    },
                    required: ["question", "answer"],
                    additionalProperties: false
                  },
                  description: "8 to 10 FAQs"
                },
                reviews: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      author: { type: "string", description: "Client name" },
                      role: { type: "string", description: "Executive role (e.g. CTO, Founder, VP Engineering)" },
                      company: { type: "string", description: "Company name or niche (e.g. FinTech SaaS, Apex Commerce)" },
                      rating: { type: "number", description: "Review rating 5" },
                      comment: { type: "string", description: "Authentic, enthusiastic testimonial" },
                      date: { type: "string", description: "Review date (e.g. 2026-06-15)" }
                    },
                    required: ["author", "role", "company", "rating", "comment", "date"],
                    additionalProperties: false
                  },
                  description: "5 client reviews"
                },
                suggestedImagePrompt: { type: "string", description: "High-converting editorial photo prompt" },
                infographicPrompt: { type: "string", description: "3D isometric flowchart prompt without tiny text" }
              },
              required: ["faqs", "reviews", "suggestedImagePrompt", "infographicPrompt"],
              additionalProperties: false
            }
          }
        },
        temperature: 0.7,
      });

      const resStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
      return JSON.parse(resStr);
    };

    // Execute Section Generation and Step 3 in Parallel!
    const [sectionChunks, step3Data] = await Promise.all([
      Promise.all(outline.map((heading, idx) => generateSection(heading, idx, outline.length))),
      generateFaqsReviewsPrompts()
    ]);

    const fullHtmlBody = sectionChunks.join('\n\n');

    const finalResponse = {
      title: metaData.title,
      subtitle: metaData.subtitle,
      metaTitle: metaData.metaTitle,
      metaDescription: metaData.metaDescription,
      slug: metaData.slug,
      category: metaData.category,
      exactTopic: metaData.exactTopic,
      techFramework: metaData.techFramework,
      outline: metaData.outline,
      keyTakeaways: metaData.keyTakeaways,
      popularSearches: metaData.popularSearches,
      description: fullHtmlBody,
      faqs: step3Data.faqs || [],
      reviews: step3Data.reviews || [],
      suggestedImagePrompt: step3Data.suggestedImagePrompt || "",
      infographicPrompt: step3Data.infographicPrompt || ""
    };

    const finalJsonStr = JSON.stringify(finalResponse);

    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(finalJsonStr));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });

  } catch (error: any) {
    console.error("[generate-blog] Pipeline Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
