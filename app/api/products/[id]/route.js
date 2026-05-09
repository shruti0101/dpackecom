import { connectDB } from "@/lib/Db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

// GET SINGLE PRODUCT
export async function GET(req, { params }) {
  try {
    await connectDB();

    const product = await Product.findById(
      params.id
    ).populate("category");

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });

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

// UPDATE PRODUCT
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();

    const updatedProduct =
      await Product.findByIdAndUpdate(
        params.id,
        body,
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      product: updatedProduct,
    });

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

// DELETE PRODUCT
export async function DELETE(
  req,
  { params }
) {
  try {
    await connectDB();

    await Product.findByIdAndDelete(
      params.id
    );

    return NextResponse.json({
      success: true,
      message:
        "Product deleted successfully",
    });

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