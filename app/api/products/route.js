import { connectDB } from "@/lib/Db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import "@/models/Category";
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    console.log(body);

    const product = await Product.create(body);

    return NextResponse.json({
      success: true,
      product,
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

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find()
      .populate("category");

    return NextResponse.json(products);

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}