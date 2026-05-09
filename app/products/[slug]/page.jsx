// app/products/[slug]/page.jsx

import { connectDB } from "@/lib/Db";
import Product from "@/models/Product";
import "@/models/Category";

import ProductDetailsClient from "./ProductDetailsClient";

// SEO META
export async function generateMetadata({
  params,
}) {
  await connectDB();

  const product =
    await Product.findOne({
      slug: params.slug,
    });

  if (!product) {
    return {
      title: "Product Not Found",
      description:
        "Product does not exist",
    };
  }

  return {
    title:
      product.metaTitle ||
      product.name,

    description:
      product.metaDescription ||
      product.overview,

    openGraph: {
      title:
        product.metaTitle ||
        product.name,

      description:
        product.metaDescription ||
        product.overview,

      images: [
        {
          url:
            product.images?.[0]
              ?.src || "",
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}) {
  await connectDB();

  const product =
    await Product.findOne({
      slug: params.slug,
    }).populate("category");

  if (!product) {
    return (
      <div className="p-10 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const safeProduct = JSON.parse(
    JSON.stringify(product)
  );

  return (
    <ProductDetailsClient
      product={safeProduct}
    />
  );
}