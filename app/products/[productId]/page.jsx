import { categories } from "@/Data";
import ProductPageClient from "./ProductPageClient";

// ✅ Dynamic metadata
export async function generateMetadata({ params }) {
const { productId } = params;

  const product = categories
    .flatMap((cat) => cat.products)
  .find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Foundrr",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.overview,

    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.overview,
      images:
        product.image?.map((img) => ({
          url: img.src,
        })) || [],
    },
  };
}

// ✅ Page render
export default async function Page({ params }) {
 const { productId } = await params;

  return <ProductPageClient productId={productId} />;
}