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

    const logs: string[] = [];
    const addLog = (msg: string) => {
      const time = new Date().toLocaleTimeString();
      logs.push(`[${time}] ${msg}`);
      console.log(`[Image Generator ${time}] ${msg}`);
    };

    addLog(`Initiating generation. Target: ${isInfographic ? "3D Isometric Infographic" : "Hero Cover"}`);
    addLog(`Prompt: "${prompt.slice(0, 120)}..."`);

    let finalImageUrl: string | null = null;
    let modelUsed = "unknown";
    const requestedModel = body.model || "gpt-image-2";
    const diagnostics: Record<string, any> = {};

    // 1. Primary generation attempt with gpt-image-2
    addLog(`Attempting primary image generation with model: "${requestedModel}"...`);
    try {
      const gptImageResponse = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: requestedModel,
          prompt: prompt.slice(0, 1000),
          n: 1,
          size: "1024x1024",
        }),
        signal: controller.signal,
      });

      const gptData = await gptImageResponse.json().catch(() => ({}));
      diagnostics[requestedModel] = { status: gptImageResponse.status, data: gptData };

      if (gptImageResponse.ok) {
        const first = gptData.data?.[0];
        if (first?.url || first?.b64_json) {
          finalImageUrl = first.url || (first.b64_json ? `data:image/png;base64,${first.b64_json}` : null);
          modelUsed = requestedModel;
          addLog(`✓ Success! ${requestedModel} generated image successfully.`);
        } else {
          addLog(`⚠ ${requestedModel} returned status 200 but no image URL was found.`);
        }
      } else {
        const errMsg = gptData.error?.message || JSON.stringify(gptData);
        addLog(`✖ ${requestedModel} failed (Status ${gptImageResponse.status}): ${errMsg}`);
      }
    } catch (e: any) {
      diagnostics[requestedModel] = { error: e.message };
      addLog(`✖ ${requestedModel} request error: ${e.message}`);
    }

    // 2. Secondary fallback attempt with dall-e-3 if gpt-image-2 did not return an image
    if (!finalImageUrl) {
      addLog(`Attempting secondary fallback model: "dall-e-3"...`);
      try {
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
          }),
          signal: controller.signal,
        });

        const data = await openAiResponse.json().catch(() => ({}));
        diagnostics["dall-e-3"] = { status: openAiResponse.status, data };

        if (openAiResponse.ok) {
          const firstItem = data.data?.[0];
          if (firstItem?.url || firstItem?.b64_json) {
            finalImageUrl = firstItem.url || (firstItem.b64_json ? `data:image/png;base64,${firstItem.b64_json}` : null);
            modelUsed = "dall-e-3";
            addLog(`✓ Success! DALL-E 3 generated image successfully.`);
          } else {
            addLog(`⚠ DALL-E 3 returned status 200 but no image data.`);
          }
        } else {
          const errMsg = data.error?.message || JSON.stringify(data);
          addLog(`✖ DALL-E 3 failed (Status ${openAiResponse.status}): ${errMsg}`);
        }
      } catch (e: any) {
        diagnostics["dall-e-3"] = { error: e.message };
        addLog(`✖ DALL-E 3 request error: ${e.message}`);
      }
    }

    clearTimeout(timeoutId);

    if (finalImageUrl) {
      return NextResponse.json({
        success: true,
        url: finalImageUrl,
        imageUrl: finalImageUrl,
        modelUsed,
        logs,
        diagnostics,
        isFallback: modelUsed !== requestedModel,
      });
    }

    // 3. Fallback to Pollinations AI (FLUX)
    addLog(`Initiating zero-failure fallback via Pollinations AI (FLUX engine)...`);
    const encodedPrompt = encodeURIComponent(prompt);
    const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=675&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
    modelUsed = "pollinations-flux";
    addLog(`✓ Image generated via Pollinations FLUX CDN.`);

    return NextResponse.json({
      success: true,
      url: dynamicFallbackUrl,
      imageUrl: dynamicFallbackUrl,
      modelUsed,
      logs,
      diagnostics,
      isFallback: true,
    });

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
