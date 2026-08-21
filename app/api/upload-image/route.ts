import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { base64Image, filename } = await request.json();

    if (!base64Image || !base64Image.startsWith("data:image")) {
      return NextResponse.json({ error: "Invalid base64 image" }, { status: 400 });
    }

    const matches = base64Image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return NextResponse.json({ error: "Invalid base64 string format" }, { status: 400 });
    }

    const ext = matches[1].split("/")[1] || "png";
    const imageBuffer = Buffer.from(matches[2], "base64");

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const safeName = (filename || "image").replace(/[^a-zA-Z0-9_-]/g, "");
    const finalFilename = `${safeName}-${Date.now()}.${ext}`;
    const filePath = path.join(uploadsDir, finalFilename);

    fs.writeFileSync(filePath, imageBuffer);

    const publicUrl = `/uploads/${finalFilename}`;
    return NextResponse.json({ success: true, url: publicUrl });

  } catch (error: any) {
    console.error("Upload Image API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload image" }, { status: 500 });
  }
}
