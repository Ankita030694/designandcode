import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 300;

export async function POST(request: NextRequest) {
  const apiKey = process.env.HELLO_DROP_CHOO || process.env.OPENAI_API_KEY;
  let parsedPrompt = "Professional digital illustration";

  try {
    const body = await request.json();
    const rawPrompt = typeof body.prompt === "string" ? body.prompt : undefined;
    const isInfographic = body.isInfographic === true || (rawPrompt && /isometric|flowchart|infographic|diagram|architecture flowchart/i.test(rawPrompt));

    if (!rawPrompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Intelligent prompt enhancement for 3D isometric infographics vs editorial photography
    let prompt = rawPrompt;
    if (isInfographic) {
      prompt = `3D isometric modern tech flowchart visualization: ${rawPrompt}. Problem Diagnosis leading into Architectural Engineering, Component Design, and 100/100 Lighthouse Performance. Glowing 3D tech icons, crisp isometric angles, clean minimalist studio background, ambient studio lighting. Negative constraint: NO small paragraphs, NO tiny illegible text, NO pseudo-words, ultra-clean premium vector 3D rendering.`;
    }

    parsedPrompt = prompt;

    if (!apiKey) {
      console.warn("OpenAI API key not set. Using Pollinations AI FLUX generator.");
      const encodedPrompt = encodeURIComponent(prompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=675&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      return NextResponse.json({
        success: true,
        url: dynamicFallbackUrl,
        imageUrl: dynamicFallbackUrl,
        isFallback: true,
      });
    }

    // Add a timeout controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 280000);

    // Try OpenAI DALL-E 3
    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt.slice(0, 1000),
        n: 1,
        size: "1024x1024",
        response_format: "url"
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.error("OpenAI API image error. Details:", JSON.stringify(data, null, 2));
      console.warn("Falling back to Pollinations AI (FLUX)...");

      const encodedPrompt = encodeURIComponent(prompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=675&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;

      return NextResponse.json({
        success: true,
        url: dynamicFallbackUrl,
        imageUrl: dynamicFallbackUrl,
        isFallback: true,
      });
    }

    const firstItem = data.data?.[0];
    if (!firstItem) throw new Error("No data returned from OpenAI");

    const imageUrl = firstItem.url || (firstItem.b64_json ? `data:image/png;base64,${firstItem.b64_json}` : null);

    if (!imageUrl) {
      throw new Error("No image URL returned. Forcing fallback.");
    }

    return NextResponse.json({ success: true, url: imageUrl, imageUrl: imageUrl });

  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);

    try {
      const encodedPrompt = encodeURIComponent(parsedPrompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=675&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;

      return NextResponse.json({
        success: true,
        url: dynamicFallbackUrl,
        imageUrl: dynamicFallbackUrl,
        isFallback: true,
      });
    } catch (fallbackErr: any) {
      console.error("Critical fallback failed:", fallbackErr);
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=675&q=80";

      return NextResponse.json({
        success: true,
        url: defaultFallbackUrl,
        imageUrl: defaultFallbackUrl,
        isFallback: true,
      });
    }
  }
}
