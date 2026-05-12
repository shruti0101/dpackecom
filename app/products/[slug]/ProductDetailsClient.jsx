// components/ProductDetailsClient.jsx

"use client";

import {
  useState,
} from "react";

import Image from "next/image";

import {
  Star,
  Download,
  RotateCw,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import Product360Modal from "@/components/360View";

export default function ProductDetailsClient({
  product,
}) {
  const [activeImage, setActiveImage] =
    useState(
      product.images?.[0]?.src
    );

  const [
    activeTab,
    setActiveTab,
  ] = useState("description");

  const [
    open360,
    setOpen360,
  ] = useState(false);

  return (
    <>



<section
        style={{ backgroundImage: "url(/banner/4.jpeg)" }}
        className="relative w-full bg-cover bg-center h-[43vh] py-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 "></div>

        {/* CENTER CONTENT */}
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl font-semibold mb-3">Shop Details</h1>

          <div className="flex justify-center items-center gap-2 text-sm opacity-90">
            <span>Home</span>
            <span>›</span>
            <span>Shop</span>
            <span>›</span>
            <span className="font-medium">Shop Details</span>
          </div>
        </div>
      </section>



      <div className="bg-white  min-h-screen pb-16 mt-10">

        {/* MAIN */}
        <div className="w-full mx-auto px-4 md:px-8 pt-6 ">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-[90px_1fr_470px_200px] gap-8">

            {/* LEFT THUMBNAILS */}
            <div className="flex xl:flex-col gap-4 ">

              {product.images?.map(
                (
                  img,
                  index
                ) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveImage(
                        img.src
                      )
                    }
                    className={`w-[90px] h-[90px] rounded-xl border overflow-hidden bg-white flex items-center justify-center transition-all
                    ${
                      activeImage ===
                      img.src
                        ? "border-orange-500"
                        : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={
                        img.src
                      }
                      alt={
                        img.alt
                      }
                      width={90}
                      height={90}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </button>
                )
              )}

              {/* VIDEO */}
              {/* <div className="w-[90px] h-[90px] rounded-xl border border-gray-300 bg-[#ececec] flex items-center justify-center">
                <div className="w-14 h-14 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                  ▶
                </div>
              </div> */}

              {/* 360 */}
              {product.images360
                ?.length > 0 && (
                <button
                  onClick={() =>
                    setOpen360(
                      true
                    )
                  }
                  className="w-[90px] h-[90px] rounded-2xl border border-orange-500 bg-white flex flex-col items-center justify-center text-orange-500 text-[12px] font-medium"
                >
                  <RotateCw
                    size={
                      22
                    }
                  />

                  <span className="mt-1">
                    360
                    View
                  </span>
                </button>
              )}
            </div>

            {/* CENTER IMAGE */}
            <div className="   relative  w-full">

              <Image
                src={
                  activeImage ||
                  "/placeholder.png"
                }
                alt={
                  product.name
                }
                width={1200}
                height={500}
                unoptimized
                className="object-cover w-full p-2 "
              />

              {/* DOWNLOAD */}
              {/* <button className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 bg-white">
                <Download
                  size={
                    18
                  }
                />
              </button> */}
            </div>

            {/* PRODUCT INFO */}
            <div>

              <h1 className="text-[52px] leading-[62px] font-extrabold text-black tracking-[-2px]">
                {product.name}
              </h1>

              {/* STOCK */}
              <div className="flex items-center gap-4 mt-3">

                <span className="bg-[#dff6df] text-[#23923d] text-[13px] px-3 py-2 rounded">
                  In Stock
                </span>

                <div className="flex items-center gap-1 text-[#f4b400]">
                  <Star
                    size={
                      14
                    }
                    fill="currentColor"
                  />
                  <Star
                    size={
                      14
                    }
                    fill="currentColor"
                  />
                  <Star
                    size={
                      14
                    }
                    fill="currentColor"
                  />
                  <Star
                    size={
                      14
                    }
                    fill="currentColor"
                  />
                  <Star
                    size={
                      14
                    }
                    fill="currentColor"
                  />
                </div>

                <span className="text-[13px] text-gray-500">
                  (93
                  Reviews)
                </span>
              </div>

              {/* OVERVIEW */}
              <p className="my-5 text-[17px] leading-[32px] text-[#444]">
                {
                  product.overview
                }
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-7">

                <button className="bg-[#ff5a00] hover:bg-[#f04f00] transition-all text-white h-[54px] px-8 rounded-xl font-semibold flex items-center gap-3">
                  <ArrowUpRight
                    size={
                      18
                    }
                  />

                  Enquire
                  About
                  Product
                </button>

                <button className="bg-[#038b31] hover:bg-[#027528] transition-all text-white h-[54px] px-8 rounded-xl font-semibold flex items-center gap-3">
                  <MessageCircle
                    size={
                      18
                    }
                  />

                  Whatsapp
                  Us
                </button>
              </div>

              {/* LINE */}
              <div className="border-b mt-8 mb-4 " />

              {/* SPECS */}
              <div className="space-y-2">

                {product.specs?.map(
                  (
                    spec,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="text-[15px] text-[#4a4a4a]"
                    >
                      <span className="font-semibold text-[#2b2b2b]">
                        {
                          spec.label
                        }
                        :
                      </span>{" "}
                      {
                        spec.value
                      }
                    </div>
                  )
                )}
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 mt-5">

                <span className="font-semibold text-[15px]">
                  Visit
                  Us:
                </span>

                <div className="flex gap-3 text-orange-500">
                  <Facebook
                    size={
                      16
                    }
                  />
                  <Instagram
                    size={
                      16
                    }
                  />
                  <Youtube
                    size={
                      16
                    }
                  />
                  <Linkedin
                    size={
                      16
                    }
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="bg-[#efefef] border border-[#dddddd] rounded-2xl p-6 h-fit">

              <h3 className="text-[32px] font-bold text-[#f04200]">
                DPACK
              </h3>

              <p className="mt-2 text-[18px] leading-[34px] text-[#222]">
                Authentic
                and
                Premium
                Quality
                Products
              </p>

              <div className="border-b my-6" />

              <h4 className="font-bold text-[20px] mb-4">
                Why
                Choose
                DPACK
              </h4>

              <ul className="space-y-3 text-[15px] text-[#333] list-disc pl-5">
                <li>
                  Quality-focused
                  products
                </li>

                <li>
                  Reliable
                  and
                  consistent
                  standards
                </li>

                <li>
                  Built for
                  modern
                  needs
                </li>
              </ul>

              <h4 className="font-bold text-[20px] mt-8 mb-4">
                About
                DPACK
              </h4>

              <ul className="space-y-3 text-[15px] text-[#333] list-disc pl-5">
                <li>
                  Premium
                  product
                  solutions
                </li>

                <li>
                  Trust and
                  quality
                  driven
                </li>

                <li>
                  Commitment
                  to
                  excellence
                </li>
              </ul>
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-4 ">

            <button
              onClick={() =>
                setActiveTab(
                  "description"
                )
              }
              className={`px-8 h-[48px] rounded-full border text-[15px] transition-all
              ${
                activeTab ===
                "description"
                  ? "bg-[#f9e8d4] border-[#f2c28f] text-[#f76a00]"
                  : "bg-white border-gray-300 text-gray-600"
              }`}
            >
              Description
            </button>

            <button
              onClick={() =>
                setActiveTab(
                  "additional"
                )
              }
              className={`px-8 h-[48px] rounded-full border text-[15px] transition-all
              ${
                activeTab ===
                "additional"
                  ? "bg-[#f9e8d4] border-[#f2c28f] text-[#f76a00]"
                  : "bg-white border-gray-300 text-gray-600"
              }`}
            >
              Additional
              Info
            </button>
          </div>

          {/* DESCRIPTION */}
          {activeTab ===
            "description" && (
            <div className="mt-12">

              <div
                className="
                prose
                prose-lg
                max-w-none

                prose-headings:text-black
                prose-headings:font-bold

                prose-h2:text-[42px]
                prose-h2:mb-8

                prose-p:text-[#333]
                prose-p:leading-[38px]

                prose-li:text-[#333]
                prose-li:leading-[38px]

                prose-ul:pl-6
              "
                dangerouslySetInnerHTML={{
                  __html:
                    product.description,
                }}
              />
            </div>
          )}

          {/* ADDITIONAL */}
          {activeTab ===
            "additional" && (
            <div className="mt-12 bg-white border rounded-2xl overflow-hidden">

              {product.specs?.map(
                (
                  spec,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="grid grid-cols-2 border-b last:border-b-0 px-6 py-5"
                  >
                    <div className="font-semibold">
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

      {/* 360 MODAL */}
      <Product360Modal
        isOpen={open360}
        onClose={() =>
          setOpen360(false)
        }
        images={
          product.images360
        }
      />
    </>
  );
}