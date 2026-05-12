"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden animate-pulse">
      {/* Image */}
      <div className="w-full h-72 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">
        <div className="h-7 bg-gray-200 rounded-lg w-3/4"></div>

        <div className="mt-5 h-12 bg-gray-200 rounded-xl w-full"></div>
      </div>
    </div>
  );
};

const Page = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <>
      {/* Banner */}
      <section
        style={{ backgroundImage: "url('/banner/1.jpeg')" }}
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All Products
          </h1>

          <p className="text-white text-xl md:text-3xl mt-3">
            Explore premium packaging solutions from Dpack
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Skeleton Loader */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  ?.slice(0, visibleProducts)
                  ?.map((product) => (
                    <div
                      key={product?._id}
                      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product?.images?.[0]?.src}
                          alt={product?.name}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Category */}
                        <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs px-4 py-1 rounded-full">
                          {product?.category?.name}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gray-900 line-clamp-2">
                          {product?.name}
                        </h3>

                        {/* Button */}
                        <div className="mt-auto pt-5 flex justify-center">
                          <Link
                            href={`/products/${product.slug}`}
                            className="bg-black text-white py-3 px-8 rounded-xl hover:bg-[#d95026] transition-all duration-300"
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
                    className="px-8 py-3 bg-[#d95026] text-white rounded-full hover:bg-black transition-all duration-300 font-medium"
                  >
                    View More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;