"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProductSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden animate-pulse">
      {/* Image */}
      <div className="w-full h-72 bg-gray-200" />

      {/* Content */}
      <div className="p-5">
        <div className="h-7 bg-gray-200 rounded-lg w-3/4 mx-auto" />

        <div className="mt-5 h-12 bg-gray-200 rounded-xl w-full" />
      </div>
    </div>
  );
};

const Page = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data || []);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <>
      {/* Banner */}
      <section
        style={{ backgroundImage: "url('/banner/1.jpeg')" }}
        className="relative flex items-center justify-center w-full h-[60vh] md:h-[75vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">All Products</h1>

          <p className="mt-3 text-xl md:text-3xl">
            Explore premium packaging solutions from Dpack
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-5 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Skeleton Loader */}
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* No Products */}
              {products.length === 0 ? (
                <div className="py-20 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    No Products Found
                  </h2>
                </div>
              ) : (
                <>
                  {/* Product Grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products?.slice(0, visibleProducts)?.map((product) => (
                      <div
                        key={product?._id}
                        className="group w-full h-full bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                      >
                        {/* Image */}
                        <div className="relative  w-full h-72 overflow-hidden bg-white">
                          <Image
                            src={
                              product?.images?.[0]?.src || "/placeholder.png"
                            }
                            alt={product?.name || "Product"}
                            fill
                            className="object-contain w-full scale-105 group-hover:scale-107 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 w-full p-5">
                          <h3 className="text-xl font-semibold text-center text-gray-900 line-clamp-2 min-h-[60px] w-full">
                            {product?.name}
                          </h3>

                          {/* Button */}
                          <div className="pt-5 mt-auto w-full">
                            <Link
                              href={`/products/${product?.slug}`}
                              className="flex items-center justify-center w-full px-8 py-3 text-white transition-all duration-300 bg-black rounded-xl hover:bg-[#d95026]"
                            >
                              View Product
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {visibleProducts < products.length && (
                    <div className="flex justify-center mt-12">
                      <button
                        onClick={loadMoreProducts}
                        className="px-8 py-3 font-medium text-white transition-all duration-300 rounded-full bg-[#d95026] hover:bg-black"
                      >
                        View More
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
