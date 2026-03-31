"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

import { categories } from "@/Data";

import { ShoppingCart, Eye } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductPage({ productId  }) {
  const [selected, setSelected] = useState(null);




  const allProducts = categories.flatMap((cat) => cat.products);

  const product = allProducts.find((p) => p.id === productId);

    if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const relatedProducts = allProducts
    .filter((p) => p.id !== productId)
    .slice(0, 4);

  const [tab, setTab] = useState("description");

  const [index, setIndex] = useState(0);
  const images = product.image?.map((img) => img.src) || [];

  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setActiveImage(images[index]);
  }, [index, images]);

  return (
    <>
      {/* SHOP BANNER */}
      <section
        style={{ backgroundImage: "url(/banner/4.jpeg)" }}
        className="relative w-full bg-cover bg-center h-[33vh] py-16 overflow-hidden"
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

      <div className="w-full mx-auto px-15 py-10">
        <div className="grid grid-cols-12 gap-10">
          {/* LEFT THUMBNAILS */}
          <div className="col-span-1 flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveImage(img);
                  setIndex(i);
                }}
                className={`p-2 rounded-lg border cursor-pointer transition
              ${activeImage === img ? "border-orange-500" : "border-gray-200"}`}
              >
                <Image src={img} alt="" width={70} height={70} />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE WITH ANIMATION */}
          <div className="col-span-5 bg-gray-100 rounded-xl flex items-center justify-center p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -120, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={activeImage}
                  width={600}
                  height={600}
                  alt={product.name}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="col-span-4 space-y-12">
            <p className="text-gray-500 mb-4">{product.category}</p>

            <h1 className="text-5xl font-semibold mb-4">{product.name}</h1>

            {/* STOCK + RATING */}
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                In Stock
              </span>

              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              <span className="text-gray-500 text-sm">(93 Reviews)</span>
            </div>

            <p className="text-gray-800 mb-7">{product.overview}</p>

            {/* WISHLIST */}
            <div className="flex items-center gap-6 text-black ">
              <button className="flex curspor-pointer bg-orange-600 items-center text-white px-1 py-3 text-md gap-2 ">
                <ArrowUpRight size={18} />
                Enquire About Product
              </button>

              <button className="flex bg-green-700 curspor-pointer items-center text-white px-2 py-3 text-md gap-2 ">
                <ArrowUpRight size={18} />
                Whatsapp Us
              </button>
            </div>

            {/* META */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-600">
              <p>SKU: HRYUSG67EG</p>
              <p>Category: Dunnage Bags</p>
              <p>Tag: Dunnage bags</p>

              <div className="flex  items-center gap-3 mt-2">
                <span>Visit Us:</span>
                <Facebook className="text-orange-600" size={18} />
                <Instagram className="text-orange-600" size={18} />
                <Twitter className="text-orange-600" size={18} />
              </div>
            </div>
          </div>

          {/* SELLER CARD */}
          <div className="col-span-2 ">
            <div className="border   rounded-xl p-5 bg-gray-50 text-sm">
              <p className="font-semibold mb-2">Shipping Worldwide</p>
              <p className="text-black mb-3">Always Authentic</p>
              <p className="text-black mb-3">Cash On Delivery Available</p>

              <hr className="my-4" />

              <p className="font-semibold mb-3">Return & Warranty</p>

              <p className="text-black mb-2">14 Days Easy Return</p>
              <p className="text-black mb-4">Warranty Not Available</p>

              <hr className="my-4" />

              <p className="font-bold text-red-500 text-xl ">DPACK </p>

              <p className="text-md  mt-1">
                Authentic and Premium Quality Products
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT DESCRIPTION SECTION */}
        <div className="mt-15 max-w-5xl px-10">
          {/* TABS */}
          <div className="flex gap-4 mb-10">
            {["description", "info", "reviews"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-6 py-2 rounded-full border text-sm capitalize transition
        ${
          tab === item
            ? "bg-orange-100 text-orange-600 border-orange-200"
            : "text-gray-600 border-gray-300 hover:border-gray-400"
        }`}
              >
                {item === "info" ? "Additional info" : item}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}

          {tab === "description" && (
            <div className="space-y-6 text-black text-lg leading-7">
              {product.description.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="text-2xl font-semibold">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2">
                      {block.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </div>
          )}

          {tab === "info" && (
            <div className="text-black space-y-3">
              {product.specs?.map((spec, i) => (
                <p key={i}>
                  <span className="font-medium text-gray-800">
                    {spec.label}:
                  </span>{" "}
                  {spec.value}
                </p>
              ))}
            </div>
          )}

          {tab === "vendor" && (
            <div className="text-gray-600 space-y-2">
              <p className="font-semibold text-gray-800">DPACK </p>
              <p>
                Manufacturer & supplier of high-quality dunnage air bags used in
                logistics and cargo transportation.
              </p>
              <p>
                Providing reliable packaging solutions for exporters, logistics
                companies, and warehouses.
              </p>
            </div>
          )}

          {tab === "reviews" && (
            <div className="text-gray-600">No reviews yet.</div>
          )}
        </div>
      </div>

      <div className="bg-white py-13   px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between max-w-[1300px] mx-auto mb-6">
          <h2 className="text-3xl font-semibold relative">
            <span className="relative z-10">Related Products</span>
            <Image
              height={100}
              width={100}
              src="/heading_shapes.png"
              className="absolute -left-8 -top-5 w-54 h-14 border-2  rounded-full z-20"
            ></Image>
          </h2>
        </div>

        {/* SWIPER */}
        <div className="max-w-[1300px] mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            spaceBetween={24}
            slidesPerView={5}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {relatedProducts.map((item, i) => (
              <SwiperSlide key={i}>
                <Link href={`/products/${item.id}`} className="group bg-white h-100 rounded-2xl p-4 shadow-md hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
              
                  <div className="relative bg-[#F6F6F6] rounded-xl h-[250px] flex items-center justify-center overflow-hidden">
                
                    <Image
                      src={item.image?.[0]?.src}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-125 "
                    />
                    

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
                      <div className="flex gap-3 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {/* QUICK VIEW */}
                        <button
                          onClick={() => setSelected(item)}
                          className="w-10 h-10 bg-white cursor-pointer flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    <h3 className="text-[15px] font-semibold text-gray-800 leading-tight group-hover:text-orange-500 transition">
                      {item.name}
                    </h3>

                    {/* RATING */}
                    <div className="flex items-center gap-1 mt-2 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="orange" />
                      ))}
                      <span className="text-gray-500 text-sm ml-1">
                        ({item.reviews || 20} Reviews)
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {selected && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
              <div className="bg-white rounded-2xl w-[800px] max-w-[90%] p-6 relative">
                {/* CLOSE */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                  ✕
                </button>

                <div className="grid grid-cols-2 gap-6">
                  {/* IMAGE */}
                  <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center p-3">
                    <Image
                      src={selected.img}
                      alt=""
                      width={350}
                      height={300}
                      className="object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      {selected.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4">
                      Premium quality product with modern design and comfort.
                    </p>

                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition">
                      ENQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
