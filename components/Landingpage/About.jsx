"use client";

import Image from "next/image";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function FlashSale() {
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(null);

  const products = [
    {
      img: "/air bubble roll/1.png",
      hoverImg: '/360/Dunnage Air Bags/1.png',
      title: "Dunnage Air Bags",
      price: "Rs. 450.00",
      old: "Rs. 540.00",
      reviews: 22,
    },
    {
      img: "/air bubble roll/5.png",
      hoverImg: '/360/PP Dunnage Bag/1.png',
      title: "PP Dunnage Bag",
      price: "Rs.575.00",
      old: "Rs. 669.00",
      reviews: 58,
      tag: "New",
    },
    {
      img: "/air bubble roll/8.png",
      hoverImg: '/360/Square Dunnage Air Bags/1.png',
      title: "Square Dunnage Air Bags",
      price: "Rs. 349.00",
      old: "Rs. 439.00",
      reviews: 44,
    },
    {
      img: "/air bubble roll/10.png",
      hoverImg: '/360/Perfume Packaging Air Column Roll/1.png',
      title: "Perfume Packaging Air Column Roll",
      price: "Rs. 341.00",
      old: "Rs. 459.00",
      reviews: 98,
    },
    {
      img: "/air bubble roll/16.png",
      hoverImg: '/360/Jam Bottle Air Column Roll/1.png',
      title: "Jam Bottle Air Column Roll",
      price: "Rs. 340.00",
      old: "Rs. 418.00",

      reviews: 20,
      tag: "New",
    },
    {
      img: "/air bubble roll/21.png",
      hoverImg: '/360/Air Column Bag for Laptop/1.png',
      title: "Air Column Bag for Laptop",
      price: "Rs. 341.00",
      old: "Rs. 459.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/23.png",
      hoverImg: '/360/Air Column Cushion Bag for Wine/1.png',
      title: "Air Column Cushion Bag for Wine",
      price: "Rs. 741.00",
      old: "Rs. 859.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/28.png",
      hoverImg: '/360/Shoes Packing Air Cushion Bag/1.png',
      title: "Shoes Packing Air Cushion Bag",
      price: "Rs. 541.00",
      old: "Rs. 659.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/34.png",
      hoverImg: '/360/Air Tube Bag for Packaging/1.png',
      title: "Air Tube Bag for Packaging",
      price: "Rs. 241.00",
      old: "Rs. 359.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/31.png",
      hoverImg: '/360/Glass Bottle Air Column Roll/1.png',
      title: "Glass Bottle Airbag Packaging",
      price: "Rs. 241.00",
      old: "Rs. 359.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/38.png",
      hoverImg: '/360/Void or Gap Filling Air Cushion Bags/1.png',
      title: "Void or Gap Filling Air Cushion Bags",
      price: "Rs. 241.00",
      old: "Rs. 359.00",

      reviews: 98,
    },
    {
      img: "/air bubble roll/39.png",
      hoverImg: '/360/Gap Filler Pouch/1.png',
      title: "Gap Filler Pouch",
      price: "Rs. 241.00",
      old: "Rs. 359.00",

      reviews: 98,
    },
  ];

  const features = [
    "Trusted Packaging Air Bag Manufacturer, Supplier, and Wholesaler with proven industry expertise",
    "High-quality PP Dunnage Bags designed for durability, strength, and reliable performance",
    "Cost-effective solutions that help reduce cargo damage and optimize logistics operations",
    "Customized packaging options available to meet specific business requirements",
    "Strong production capacity ensuring timely delivery and bulk availability",
    "Dedicated customer support for product selection and after-sales assistance",
    "Commitment to quality, innovation, and long-term customer satisfaction"
  ];

  return (
    <div className="bg-white py-13 mt-9 px-6">
      {/* HEADER */}
      <div className="flex items-center justify-between max-w-[1250px] mx-auto mb-6">
        <h2 className="text-3xl font-semibold relative">
          <span className="relative z-10">Featured Products</span>
          <Image height={100} width={100} src="/heading_shapes.png" className="absolute -left-8 -top-5 w-54 h-14 border-2  rounded-full z-20"></Image>
        </h2>

        <Link href="/products" className="text-sm hover:text-blue-600 text-gray-800 cursor-pointer hover:underline">
          View All →
        </Link>
      </div>

      {/* SWIPER */}
      <div className="w-full px-12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white h-90 rounded-2xl p-4 shadow-md hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
                {/* IMAGE BOX */}
                <div className="relative bg-[#F6F6F6] rounded-xl h-[250px] flex items-center justify-center overflow-hidden">
                  {/* NEW TAG */}
                  {item.tag && (
                    <span className="absolute top-10 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                      {item.tag}
                    </span>
                  )}

                  {/* 🔥 IMAGE SWITCH */}
                  <div className="relative w-full h-full">
                    {/* MAIN IMAGE */}
                    <Image
                      src={item.img}
                      alt="loading"
                      width={500}
                      height={500}
                      className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                    />

                    {/* HOVER IMAGE */}
                    <Image
                      src={item.hoverImg}
                      alt="loading"
                      width={900}
                      height={500}
                      className="object-contain absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125"
                    />

                  </div>
                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
                    <div className="flex gap-3 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={() => {
                          setSelected(item);
                          setActiveImg(item.img);
                        }}
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
                    {item.title}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-1 mt-2 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="orange" />
                    ))}
                    <span className="text-gray-500 text-sm ml-1">
                      ({item.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

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
                <div>
                  {/* MAIN IMAGE */}
                  <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center p-3 h-[320px]">
                    <Image
                      src={activeImg || selected.img}
                      alt=""
                      width={350}
                      height={300}
                      className="object-contain"
                    />
                  </div>

                  {/* 🔥 THUMBNAILS */}
                  <div className="flex gap-3 mt-4">

                    {[selected.img, selected.hoverImg].map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveImg(img)}
                        className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border transition 
          ${activeImg === img ? "border-orange-500" : "border-gray-200"}
        `}
                      >
                        <Image
                          src={img}
                          alt=""
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}

                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    {selected.title}
                  </h2>
                  <ul className="space-y-2 text-gray-600 text-sm mb-4">
                    {features.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-center items-center">
                    <a href="tel:+917669988825" target="blank" className="bg-orange-500 mx-auto hover:bg-orange-600 text-white px-4 py-3 rounded-md">
                      Inquiry Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}