import Product from "@/models/Product";
import Category from "@/models/Category";
import { connectDB } from "@/lib/Db";
import Image from "next/image";
import Link from "next/link"

// seo meta data 
export async function generateMetadata({
  params,
}) {
  await connectDB();

  const category = await Category.findOne({
    slug: params.slug,
  });

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title:
      category.metaTitle || category.name,

    description:
      category.metaDescription ||
      category.name,
  };
}

export default async function CategoryPage({
  params,
}) {
  await connectDB();

  // GET CATEGORY
  const category = await Category.findOne({
    slug: params.slug,
  });

  // GET PRODUCTS
  const products = await Product.find({
    category: category?._id,
  }).lean();

  return (

    <>
 <section
  style={{ backgroundImage: "url('/banner/4.jpeg')" }}
  className="bg-cover bg-center relative h-[60vh] flex items-center justify-center"
>
  {/* Overlay */}

<div className="absolute inset-0 bg-black/20"></div>
  {/* Content */}
  <h2 className="relative z-10 bg-white text-[#F5522E] text-4xl md:text-6xl font-bold capitalize text-center p-3">
    {category?.name}
  </h2>
</section>
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* CATEGORY TITLE */}




   

    

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Link 
          href={`/products/${product.slug}`}
       
            key={product._id}
            className="border group rounded-xl overflow-hidden"
          >
            <Image
              src={
                product.images?.[0]?.src
              }
              title={product.name}
              alt={product.name}
              width={500}
              height={500}
              className="h-80 w-full object-contain"
              unoptimized
            />

            <div className="p-4 ">
              <h2 className="font-semibold p-2 text-center bg-yellow-200/40  text-lg">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}