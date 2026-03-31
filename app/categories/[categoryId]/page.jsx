import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found ",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/Anti-smog-gun-copy.jpg)" }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[90vh] relative"
      >
        <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-emerald-700 bg-white p-3 text-2xl md:text-6xl font-bold z-10">
            {category.name}
          </h2>
        </div>
      </section>

    

      {/* Products Grid */}
      <div className="p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg bg-green-50 shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="w-full  h-80 relative rounded-md overflow-hidden">
                <Image
                  src={product.image[0]?.src || "/placeholder.png"}
                  alt={product.image[0]?.alt || product.name}
                  title={product.name}
                  fill
                  className="object-contain "
                  unoptimized
                />
              </div>
              <h2 className="mt-3 font-semibold text-xl text-center p-2 bg-yellow-100">{product.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
