import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

export async function POST(req) {
  try {
    const data = await req.formData();

    const file = data.get("file");

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: "No file uploaded",
        },
        { status: 400 }
      );
    }

    // CONVERT FILE TO BUFFER
    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    // GENERATE FILE NAME
    const fileName = `${uuidv4()}.webp`;

    // HIGH QUALITY WEBP CONVERSION
    const optimizedImage = await sharp(buffer)
      .rotate() // auto orientation
      .resize({
        width: 2200, // keeps good quality
        withoutEnlargement: true,
      })
      .webp({
        quality: 90, // HIGH QUALITY
        effort: 6, // better compression optimization
      })
      .toBuffer();

    // UPLOAD TO R2
    await r2.send(
      new PutObjectCommand({
        Bucket:
          process.env
            .CLOUD_FLARE_R2_BUCKET,

        Key: fileName,

        Body: optimizedImage,

        ContentType:
          "image/webp",
      })
    );

    // FILE URL
    const fileUrl = `${process.env.CLOUD_FLARE_R2_PUBLIC_URL}/${fileName}`;

    return NextResponse.json({
      success: true,
      url: fileUrl,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}