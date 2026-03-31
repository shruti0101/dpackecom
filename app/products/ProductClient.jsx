"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/Data";

export default function Page() {

  return (
    <div>

      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/bag/bg-other.webp')" }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[70vh] relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-green-600 bg-white px-4 py-2 text-2xl md:text-6xl font-bold">
            All Products
          </h2>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {categories.map((product) => (

            <Link
              key={product.id}
              href={`/products/${product.id}`} // ✅ slug routing
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[250px] bg-gray-100 overflow-hidden">
                <Image
                  src={product.images?.[0] || "/placeholder.png"} // ✅ FIXED
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold group-hover:text-orange-500 transition">
                  {product.name}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {product.category}
                </p>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}