"use client";

import React, {
  useEffect,
  useState,
} from "react";

import {
  Loader2,
  X,
} from "lucide-react";

import Image from "next/image";

const AllProduct = () => {

  const [products, setProducts] =
    useState([]);

  const [loadingProducts, setLoadingProducts] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      setLoadingProducts(true);

      const res = await fetch(
        "/api/products"
      );

      const data =
        await res.json();

      setProducts(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoadingProducts(false);

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>

      {/* PRODUCTS LIST */}
      <div className="mt-20 max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            All Products
          </h2>

          <p className="text-gray-500">
            {products.length} Products
          </p>

        </div>

        {loadingProducts ? (

          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" />
          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product) => (

              <div
                key={product._id}
                className="border rounded-3xl overflow-hidden bg-white shadow-sm"
              >

                {/* IMAGE */}
                <div className="relative h-64">

                  <Image
                    src={
                      product.images?.[0]
                        ?.src ||
                      "/placeholder.png"
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-sm text-orange-500 font-medium">
                    {
                      product.category
                        ?.name
                    }
                  </p>

                  <h3 className="text-xl font-bold mt-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-red-600 text-md">{product.price}</p>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {
                      product.overview
                    }
                  </p>

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      setSelectedProduct(
                        product
                      )
                    }
                    className="mt-5 w-full bg-black text-white py-3 rounded-2xl font-medium"
                  >
                    Read Details
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProduct && (

        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden relative max-h-[95vh] overflow-y-auto">

            {/* CLOSE */}
            <button
              onClick={() =>
                setSelectedProduct(null)
              }
              className="absolute top-5 right-5 z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10">

              {/* LEFT */}
              <div>

                {/* MAIN IMAGE */}
                <div className="relative h-[450px] rounded-3xl overflow-hidden border">

                  <Image
                    src={
                      selectedProduct
                        .images?.[0]
                        ?.src ||
                      "/placeholder.png"
                    }
                    alt={
                      selectedProduct.name
                    }
                    fill
                    className="object-cover"
                    unoptimized
                  />

                </div>

                {/* GALLERY */}
                {selectedProduct.images
                  ?.length > 1 && (

                  <div className="grid grid-cols-4 gap-4 mt-5">

                    {selectedProduct.images.map(
                      (
                        img,
                        index
                      ) => (

                        <div
                          key={index}
                          className="relative h-24 rounded-2xl overflow-hidden border"
                        >

                          <Image
                            src={img.src}
                            alt={
                              img.alt
                            }
                            fill
                            className="object-cover"
                            unoptimized
                          />

                        </div>
                      )
                    )}

                  </div>
                )}

              </div>

              {/* RIGHT */}
              <div>

                <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
                  {
                    selectedProduct
                      .category
                      ?.name
                  }
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  {
                    selectedProduct.name
                  }
                </h2>

                {/* OVERVIEW */}
                <div className="mt-6">

                  <h3 className="font-bold text-lg mb-2">
                    Overview
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {
                      selectedProduct.overview
                    }
                  </p>

                </div>

                {/* META */}
                {selectedProduct.metaTitle && (

                  <div className="mt-6">

                    <h3 className="font-bold text-lg mb-2">
                      Meta Title
                    </h3>

                    <p className="text-gray-600">
                      {
                        selectedProduct.metaTitle
                      }
                    </p>

                  </div>
                )}

                {/* SPECS */}
                {selectedProduct.specs
                  ?.length > 0 && (

                  <div className="mt-8 border rounded-3xl overflow-hidden">

                    <div className="bg-gray-100 px-5 py-4 font-bold">
                      Specifications
                    </div>

                    {selectedProduct.specs.map(
                      (
                        spec,
                        i
                      ) => (

                        <div
                          key={i}
                          className="grid grid-cols-2 border-t px-5 py-4"
                        >

                          <div className="font-medium">
                            {
                              spec.label
                            }
                          </div>

                          <div className="text-gray-600">
                            {
                              spec.value
                            }
                          </div>

                        </div>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

            {/* DESCRIPTION */}
            {selectedProduct.description && (

              <div className="px-6 md:px-10 pb-10">

                <h2 className="text-3xl font-bold mb-6">
                  Product Description
                </h2>

                <div
                  className="
                    prose
                    prose-lg
                    max-w-none

                    prose-headings:font-bold
                    prose-headings:text-black

                    prose-p:text-gray-700
                    prose-p:leading-8

                    prose-li:text-gray-700
                    prose-li:leading-8

                    prose-strong:text-black
                  "
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedProduct.description,
                  }}
                />

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default AllProduct;