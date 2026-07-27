import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Allow long execution time on Vercel Pro/Enterprise

export async function POST(request: Request) {
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret is not set. Please add HELLO_DROP_CHOO to your .env file." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");
  const MAX_TOTAL_TOKENS = 15000;

  try {
    let totalInputTokens = 0;
    let totalOutputTokens = 0;
    const body = await request.json();
    const primaryKeyword = body.primaryKeyword || body.context || body.writeup;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords;

    if (!primaryKeyword) {
      return NextResponse.json({ error: "Primary Keyword is required" }, { status: 400 });
    }

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata for: [${primaryKeyword}]...`);

    // STEP 1: Generate Metadata
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional Web Development, UI/UX Design, and Performance Marketing SEO and AEO strategist working for a premium web agency named DesignnCode.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and an outline of exactly 8 to 9 highly detailed H2 headings for a blog article.
Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "outline": ["H2 Heading 1", "H2 Heading 2", "H2 Heading 3", "H2 Heading 4", "H2 Heading 5", "H2 Heading 6", "H2 Heading 7", "H2 Heading 8"]
}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    
    if (step1Completion.usage) {
      totalInputTokens += step1Completion.usage.prompt_tokens;
      totalOutputTokens += step1Completion.usage.completion_tokens;
    }

    const step1Result = JSON.parse(step1ResultStr);
    const outline: string[] = step1Result.outline || [];

    // STEP 2: Generate Body via Iterative Chunking
    let finalHtmlBodyChunks: string[] = [];
    
    for (let i = 0; i < outline.length; i++) {
      if (totalInputTokens + totalOutputTokens > MAX_TOTAL_TOKENS - 2000) {
        break;
      }

      const heading = outline[i];
      const isLastHeading = i === outline.length - 1;
      
      const chunkSystemPrompt = `
You are a professional content writer for DesignnCode, a premium web agency. Write a fully human-written, SEO-optimized section.
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}

**CRITICAL REQUIREMENT**:
Write EXACTLY 300-380 words of content specific ONLY to this section: "## ${heading}".
Start the response directly with the "## ${heading}" markdown header, followed by the content.

**Requirements**:
- **Structure**: Use standard Markdown formatting (## for headers, - for lists, ** for bold, etc.).
- **Tone**: Professional, authoritative, human, premium agency voice.
- **No HTML**: Do NOT use HTML tags. Use markdown formatting instead.${isLastHeading ? "" : "\n- **NO CONCLUSIONS**: This is merely ONE section of a larger article. DO NOT write any concluding paragraphs, summaries, 'in conclusion', or wrap-ups at the end of this section. End the section factually and leave it open-ended."}
- **Do NOT** include any title (H1), FAQs, or Reviews.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`markdown or \`\`\`. Output raw text only.
`;

      const chunkUserMessage = `Write the 300-380 word section for "## ${heading}".`;

      try {
        const chunkCompletion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: chunkSystemPrompt },
            { role: "user", content: chunkUserMessage },
          ],
          temperature: 0.8,
        });

        if (chunkCompletion.usage) {
          totalInputTokens += chunkCompletion.usage.prompt_tokens;
          totalOutputTokens += chunkCompletion.usage.completion_tokens;
        }

        let rawChunk = sanitizeText(chunkCompletion.choices[0]?.message?.content || "");
        let cleanedChunk = rawChunk.trim();
        if (cleanedChunk.startsWith("```markdown")) cleanedChunk = cleanedChunk.slice(11).trim();
        else if (cleanedChunk.startsWith("```html")) cleanedChunk = cleanedChunk.slice(7).trim();
        else if (cleanedChunk.startsWith("```")) cleanedChunk = cleanedChunk.slice(3).trim();
        if (cleanedChunk.endsWith("```")) cleanedChunk = cleanedChunk.slice(0, -3).trim();

        finalHtmlBodyChunks.push(cleanedChunk);
      } catch (chunkError) {
        console.error(`Error generating chunk for heading "${heading}":`, chunkError);
        continue;
      }
    }

    const cleanedDescription = finalHtmlBodyChunks.join('\n\n');

    // STEP 3: Generate FAQs and Image Prompt
    let faqs = [];
    let suggestedImagePrompt = "Professional digital illustration";

    if (totalInputTokens + totalOutputTokens < MAX_TOTAL_TOKENS) {
      try {
        const step3SystemPrompt = `
Analyze the following generated article Title and Description, and generate:
1. At least 5-8 highly relevant FAQs related to web design, development, and marketing.
2. A suggested image prompt describing an illustration suitable for this article's header image.
Article Title: ${step1Result.title}

Article Description:
${cleanedDescription.substring(0, 4000)}

Return ONLY a JSON object with this exact structure:
{
  "faqs": [ { "question": "Detailed question?", "answer": "Detailed helpful answer." } ],
  "suggestedImagePrompt": "Visual description for the article's featured image"
}`;

        const step3Completion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "system", content: step3SystemPrompt }],
          response_format: { type: "json_object" },
          temperature: 0.8,
        });

        const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
        const step3Result = JSON.parse(step3ResultStr);

        faqs = step3Result.faqs || [];
        suggestedImagePrompt = step3Result.suggestedImagePrompt || suggestedImagePrompt;
      } catch (step3Error) {
        console.error("Error in Step 3:", step3Error);
      }
    }

    const finalResult = {
      title: step1Result.title,
      subtitle: step1Result.subtitle,
      metaTitle: step1Result.metaTitle,
      metaDescription: step1Result.metaDescription,
      slug: step1Result.slug,
      description: cleanedDescription,
      faqs: faqs,
      suggestedImagePrompt: suggestedImagePrompt
    };

    const finalJsonStr = JSON.stringify(finalResult);

    // Stream the final JSON to the client
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(finalJsonStr));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
