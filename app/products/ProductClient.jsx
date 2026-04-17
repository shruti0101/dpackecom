"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/Data";

export default function Page() {

  return (
    <div>
      <section
        style={{ backgroundImage: "url('/banner/4.jpeg')" }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[70vh] relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-green-600 bg-white px-4 py-2 text-2xl md:text-6xl font-bold">
            All Products
          </h2>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <Link key={index} href={`/products/${product.id}`}
                  className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  <div className="relative w-full h-[280px] bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image?.[0]?.src || "/placeholder.png"}
                      alt={product.name} fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold group-hover:text-orange-500 transition">
                      {product.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}