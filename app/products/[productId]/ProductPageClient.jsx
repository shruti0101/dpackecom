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
  Rotate3d,
  Download,
} from "lucide-react";
import { categories } from "@/Data";
import { ShoppingCart, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Product360Modal from "@/components/360View";

export default function ProductPage({ productId }) {
  const [selected, setSelected] = useState(null);
  const allProducts = categories.flatMap((cat) => cat.products);
  const product = allProducts.find((p) => p.id === productId);
  const [open, setOpen] = useState(false);
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const relatedProducts = allProducts.filter((p) => p.id !== productId).slice(0, 4);

  const [tab, setTab] = useState("description");
  const [index, setIndex] = useState(0);
  const images = product.image?.map((img) => img.src) || [];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeMedia, setActiveMedia] = useState({
    type: "image", // "image" | "video"
    src: images[0],
  });

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

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };
  const isVideo = activeMedia.type === "video";
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

      <div className="w-full mx-auto px-4 lg:px-15 lg:py-10 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-1 hidden lg:flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveMedia({
                    type: "image",
                    src: img,
                  });
                  setIndex(i);
                }}
                className={`p-2 rounded-lg border cursor-pointer transition
            ${activeMedia.src === img ? "border-orange-500" : "border-gray-200"}`}
              >
                <Image src={img} alt="no image" width={70} height={70} />
              </div>
            ))}
            {product.videoUrl && (
              <div
                onClick={() =>
                  setActiveMedia({
                    type: "video",
                    src: product.videoUrl,
                  })
                }
                className={`p-2 rounded-lg border cursor-pointer transition
                     ${activeMedia.type === "video" ? "border-orange-500" : "border-gray-200"}`}
              >
                <div className="w-[62px] h-[60px] bg-gray-200 rounded-md flex items-center justify-center relative">
                  <div className="text-xl">▶</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpen(true)}
              className="flex flex-col items-center justify-center gap-1 px-2 py-3 
  border border-orange-500 rounded-xl   text-orange-600 hover:bg-orange-50   transition-all duration-200   cursor-pointer shadow-sm hover:shadow-lg"
            >
              <Rotate3d size={28} />

              <span className="text-xs font-medium tracking-wide">
                360 View
              </span>
            </button>

            {/* {product.productBrochure && (
              <a
                href={product.productBrochure}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="flex flex-col items-center justify-center gap-1 px-4 py-3 
      border border-orange-500 rounded-xl text-orange-600 
      hover:bg-orange-50 transition-all duration-200 cursor-pointer 
      shadow-sm hover:shadow-lg"
                >
                  <Download size={28} />
                  <span className="text-xs font-medium tracking-wide">
                    Brochure
                  </span>
                </button>
              </a>
            )} */}
          </div>

          {/* MAIN IMAGE WITH ANIMATION */}
          <div className="lg:h-[520px] col-span-1 lg:col-span-5 bg-gray-100 rounded-xl flex items-center justify-center p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMedia.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <div
                  className={`w-full h-full overflow-hidden ${!isVideo && "cursor-zoom-in"}`}
                  onMouseMove={!isVideo ? handleMouseMove : undefined}
                  onMouseEnter={!isVideo ? () => setHover(true) : undefined}
                  onMouseLeave={!isVideo ? () => setHover(false) : undefined}
                >
                  <motion.div
                    animate={
                      hover
                        ? {
                          scale: 2,
                          x: `${50 - position.x}%`,
                          y: `${50 - position.y}%`,
                        }
                        : { scale: 1, x: 0, y: 0 }
                    }
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {activeMedia.type === "image" ? (
                      <Image
                        src={activeMedia.src}
                        width={600}
                        height={600}
                        alt={product.name || "no image"}
                        className="object-cover"
                      />
                    ) : (
                      <iframe
                        src={activeMedia.src}
                        className="w-full lg:h-full h-[350px] rounded-xl"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    )}
                  </motion.div>
                </div>
                {product.productBrochure && (
                  <a
                    href={product.productBrochure}
                    download
                    className='absolute bottom-0 right-2'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg">
                      <Download size={20} />
                    </button>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-1 lg:hidden flex gap-3 w-full overflow-x-auto no-scrollbar py-2">

            {/* Images */}
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveMedia({ type: "image", src: img });
                  setIndex(i);
                }}
                className={`min-w-[72px] h-[72px] flex-shrink-0 p-1 rounded-lg border cursor-pointer transition flex items-center justify-center
        ${activeMedia.src === img ? "border-orange-500" : "border-gray-200"}`}
              >
                <Image
                  src={img}
                  alt="product"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}

            {/* Video */}
            {product.videoUrl && (
              <div
                onClick={() =>
                  setActiveMedia({
                    type: "video",
                    src: product.videoUrl,
                  })
                }
                className={`min-w-[72px] h-[72px] flex-shrink-0 p-1 rounded-lg border cursor-pointer transition flex items-center justify-center
        ${activeMedia.type === "video" ? "border-orange-500" : "border-gray-200"}`}
              >
                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-lg">▶</span>
                </div>
              </div>
            )}

            {/* 360 View Button */}
            <button
              onClick={() => setOpen(true)}
              className="min-w-[80px] h-[72px] flex-shrink-0 flex flex-col items-center justify-center gap-1 
    border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-50 
    transition-all duration-200 cursor-pointer"
            >
              <Rotate3d size={22} />
              <span className="text-[10px] font-medium leading-tight">
                360 View
              </span>
            </button>

          </div>

          {/* PRODUCT DETAILS */}
          <div className="col-span-1 lg:col-span-4 space-y-12">
            <p className="text-gray-500 mb-4">{product.category}</p>

            <h1 className="text-5xl font-semibold mb-4">{product.name}</h1>

            {/* STOCK + RATING */}
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                In Stock
              </span>

              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={18} fill="orange" />
                <Star size={18} fill="orange" />
                <Star size={18} fill="orange" />
                <Star size={18} fill="orange" />
                <Star size={18} fill="orange" />
              </div>

              <span className="text-gray-500 text-sm">(93 Reviews)</span>
            </div>

            <p className="text-gray-800 mb-4">{product.overview}</p>

            {/* WISHLIST */}
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <a href="tel:917669988825" className="flex curspor-pointer bg-orange-600 items-center justify-center rounded-lg text-white px-2 py-3 text-lg gap-2 ">
                <ArrowUpRight size={18} />
                Enquire About Product
              </a>

              <a href={`https://wa.me/+917669988825?text=Hi, I have seen your product on https://dpack.com and I am interested in ${product.name}`}
                target="_blank" className="flex bg-green-700 curspor-pointer items-center justify-center rounded-lg text-white px-2 py-3 text-lg gap-2 ">
                <ArrowUpRight size={18} />
                Whatsapp Us
              </a>
            </div>

            {/* META */}
            <div className="border-t pt-4 text-sm text-gray-600">
              {product.id == 'air-bubble-packaging-film-roll' &&
                <div className="flex gap-2 mb-2 text-orange-500">
                  <span className='py-2 px-3 rounded-md border border-orange-400'>Self Inflated</span>
                  <span className='py-2 px-3 rounded-md border border-orange-400'>Machine Inflated</span>
                </div>}

              {product.specs.map((i, idx) => (
                <p key={idx} className="flex ju"><span className="font-bold">{i.label}</span>: {i?.value}</p>
              ))}

              <div className="flex items-center gap-3 mt-2">
                <span className="font-bold">Visit Us:</span>
                <Facebook className="text-orange-600" size={18} />
                <Instagram className="text-orange-600" size={18} />
                <Twitter className="text-orange-600" size={18} />
              </div>
            </div>
          </div>

          {/* SELLER CARD */}
          <div className="col-span-1 lg:col-span-2">
            <div className="border rounded-xl p-5 bg-gray-50 text-sm">



              <p className="font-bold text-red-500 text-xl">DPACK</p>
              <p className="text-lg mt-1 mb-4">
                Authentic and Premium Quality Products
              </p>

              <hr className="my-4" />

              {/* WHY CHOOSE DPACK */}
              <p className="font-semibold mb-2">Why Choose DPACK</p>
              <ul className="list-disc  mb-3 text-black space-y-1">
                <li>Quality-focused products</li>
                <li>Reliable and consistent standards</li>
                <li>Built for modern needs</li>
              </ul>





              {/* ABOUT DPACK */}
              <p className="font-semibold mb-2">About DPACK</p>
              <ul className="list-disc  text-black space-y-1">
                <li>Premium product solutions</li>
                <li>Trust and quality driven</li>
                <li>Commitment to excellence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PRODUCT DESCRIPTION SECTION */}
        <div className="lg:mt-15 mt-6">
          {/* TABS */}
          <div className="flex gap-4 mb-5 lg:mb-10">
            {["description", "info"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-6 py-2 rounded-full border text-sm capitalize transition
        ${tab === item
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
            <div className="text-gray-600">

              {/* 5 Star Rating */}
              <div className="text-yellow-500 text-lg mb-2">
                ★★★★★
              </div>

              <p> reviews </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white py-13 px-4">
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
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {relatedProducts.map((item, i) => (
              <SwiperSlide key={i}>
                <Link href={`/products/${item.id}`} className="group bg-white h-100 rounded-2xl p-4 shadow-lg hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden hover:-translate-y-2">

                  <div className="relative bg-[#F6F6F6] rounded-xl h-[300px] flex items-center justify-center overflow-hidden">

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
                          className="w-10 h-10 bg-white cursor-pointer flex items-center justify-center rounded-full shadow-lg hover:bg-black hover:text-white transition"
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

      <Product360Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        images={product.images360}
      />
    </>
  );
}
