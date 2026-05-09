import { connectDB } from "@/lib/Db";
import Category from "@/models/Category";
import Product from "@/models/Product";
import { NextResponse } from "next/server";


// GET ALL CATEGORIES
export async function GET() {
  try {
    await connectDB();

    const categories =
      await Category.find()
        .sort({
          createdAt: -1,
        })
        .lean();

    // ATTACH PRODUCTS
    const categoriesWithProducts =
      await Promise.all(
        categories.map(
          async (
            category
          ) => {
            const products =
              await Product.find({
                category:
                  category._id,
              }).select(
                "name slug images"
              );

            return {
              ...category,
              products,
            };
          }
        )
      );

    return NextResponse.json(
      categoriesWithProducts
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}


// CREATE CATEGORY
export async function POST(
  req
) {
  try {
    await connectDB();

    const body =
      await req.json();

    // VALIDATION
    if (!body.name) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Category name is required",
        },
        {
          status: 400,
        }
      );
    }

    // SLUG GENERATOR
    const slug = body.slug
      ? body.slug
      : body.name
          .toLowerCase()
          .trim()
          .replace(
            /\s+/g,
            "-"
          )
          .replace(
            /[^\w-]+/g,
            ""
          );

    // CHECK EXISTING
    const existing =
      await Category.findOne({
        slug,
      });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Category already exists",
        },
        {
          status: 400,
        }
      );
    }

    // CREATE CATEGORY
    const category =
      await Category.create({
        name: body.name,
        slug,
      });

    return NextResponse.json({
      success: true,
      category,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}