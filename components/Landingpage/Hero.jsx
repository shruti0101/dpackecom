"use client";

import Image from "next/image";
import { Truck, Headphones, ShieldCheck, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/Data";

export default function HeroPixelPerfect() {

  const slides = [
    { title: "Discover Your Best Fitting Clothes", subtitle: "Best Selling Of 2025", img: "/bg1.jpeg" },
    { title: "Upgrade Your Style Today", subtitle: "Trending Now", img: "/bg2.jpeg" },
    { title: "New Arrivals Just Landed", subtitle: "Limited Offer", img: "/bg3.jpeg" },
  ];

  const features = [
    {
      icon: <Truck size={26} />,
      title: "Return & refund",
      desc: "Money back guarantee",
      bg: "bg-[#F5E6C8]",
      iconBg: "bg-orange-500",
    },
    {
      icon: <Headphones size={26} />,
      title: "Quality Support",
      desc: "Always online 24/7",
      bg: "bg-[#D9EEF3]",
      iconBg: "bg-[#20B2C9]",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Secure Payment",
      desc: "30% off by subscribing",
      bg: "bg-[#DDF2E1]",
      iconBg: "bg-green-500",
    },
    {
      icon: <Tag size={26} />,
      title: "Daily Offers",
      desc: "20% off by subscribing",
      bg: "bg-[#D9EEF3]",
      iconBg: "bg-[#0FB9B1]",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white h-screen">

      {/* ================= MAIN ================= */}
      <div className="w-full mx-auto mt-2 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* ===== SIDEBAR ===== */}
        <div className="hidden lg:block lg:col-span-2 bg-white overflow-hidden">

        {categories.map((item, i) => (
  <Link
    href={`/categories/${item.id}`}
    key={i}
    className="px-4 py-6 border-b border-gray-200 text-lg flex justify-between items-center text-gray-600"
  >
    {item.name}  <span>›</span>
  </Link>
))}
         
<div className="mt-7">

          <Link href="/products" className="px-4 py-4  text-md font-medium">
            View All Products →
          </Link>
</div>
        </div>

        {/*  HERO CENTER  */}
        <div className="col-span-1 lg:col-span-7 rounded-md  relative overflow-hidden flex  w-full ">

          <Image
            src={slides[active].img}
            alt=""
            width={2000}
            height={1000}
            className="object-contain max-w-full h-auto mb-15"
          />

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === active ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="col-span-1 lg:col-span-3 mt-3 flex flex-col sm:flex-row lg:flex-col gap-5">

          {/* TOP CARD */}
          <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[260px] rounded-2xl overflow-hidden group">

            <Image
              src="/sidebanner.png"
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-orange-500 text-[13px] bg-white px-2 py-1 rounded-full inline-block">
                Heavy Duty
              </span>

              <button className="mt-2 bg-orange-500 text-white px-3 py-1.5 rounded text-sm">
                Shop →
              </button>
            </div>
          </div>

          {/* BOTTOM CARD */}
          <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[260px] rounded-2xl overflow-hidden group">

            <Image
              src="/sideimg.png"
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-orange-500 text-[12px] bg-white px-2 py-1 rounded-full inline-block">
                Secure Packaging
              </span>

              <button className="mt-2 bg-white text-black px-3 py-1.5 rounded text-sm">
                Explore →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="w-full bg-white py-6 px-4 md:px-6">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {features.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl px-4 sm:px-6 py-5 flex items-center gap-4`}
            >
              <div className={`${item.iconBg} text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl`}>
                {item.icon}
              </div>

              <div>
                <h4 className="text-sm sm:text-[16px] font-semibold text-[#2c2c2c]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}