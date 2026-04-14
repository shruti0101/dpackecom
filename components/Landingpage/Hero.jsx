"use client";
import Image from "next/image";
import { Truck, Headphones, ShieldCheck, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/Data";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroPixelPerfect() {
  const slides = [
    { title: "Discover Your Best Fitting Clothes", subtitle: "Best Selling Of 2025", img: "/homeBanner (1).jpeg" },
    { title: "Discover Your Best Fitting Clothes", subtitle: "Best Selling Of 2025", img: "/homeBanner (2).jpeg" },
    { title: "Discover Your Best Fitting Clothes", subtitle: "Best Selling Of 2025", img: "/bg1.jpeg" },
    { title: "Upgrade Your Style Today", subtitle: "Trending Now", img: "/bg2.jpeg" },
    { title: "New Arrivals Just Landed", subtitle: "Limited Offer", img: "/bg3.jpeg" },
  ];

  const features = [
    {
      icon: <Truck size={26} />,
      title: "Hassle-Free Support",
      desc: "Get assistance for product selection, setup, and queries.",
      bg: "bg-[#F5E6C8]",
      iconBg: "bg-orange-500",
    },
    {
      icon: <Headphones size={26} />,
      title: "Expert Guidance",
      desc: "Our team provides complete technical consultation.",
      bg: "bg-[#D9EEF3]",
      iconBg: "bg-[#20B2C9]",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Reliable Solutions",
      desc: "High-quality machines designed for long-term performance.",
      bg: "bg-[#DDF2E1]",
      iconBg: "bg-green-500",
    },
    {
      icon: <Tag size={26} />,
      title: "Industry Insights",
      desc: "Stay updated with latest trends and manufacturing solutions.",
      bg: "bg-[#D9EEF3]",
      iconBg: "bg-[#0FB9B1]",
    },
  ];

  const [active, setActive] = useState(0);
  const [hover, sethover] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto mt-2 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="hidden lg:block lg:col-span-2 bg-white">
          {categories.map((item, i) => (
            <div key={i} onMouseEnter={() => sethover(i)} onMouseLeave={() => sethover(null)}
              className="relative"
            >
              <Link
                href={`/categories/${item.id}`}
                className="px-4 py-4 border-b border-gray-200 text-lg flex justify-between items-center text-gray-600 hover:bg-gray-50 transition"
              >
                {item.name}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ›
                </span>
              </Link>

              <AnimatePresence>
                {hover === i && (
                  <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-full top-1 w-64 bg-white shadow-xl rounded-lg z-50 border"
                  >
                    <div className="flex flex-col gap-2">
                      {item.products.map((prod, idx) => (
                        <Link
                          key={idx}
                          href={`/products/${prod.id}`}
                          className="text-base p-4 border-b border-gray-200 text-gray-700 hover:text-orange-600 hover:translate-x-1 transition-all duration-200"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="px-4 py-4 border-b border-b-gray-200">
            <Link href="/products" className="text-md font-medium">
              View All Products →
            </Link>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 rounded-md  relative overflow-hidden flex  w-full">
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
                className={`w-2 h-2 rounded-full cursor-pointer ${i === active ? "bg-orange-500" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 mt-3 flex flex-col sm:flex-row lg:flex-col gap-2">
          {/* BOTTOM CARD */}
          <div className="relative w-full h-[280px] sm:h-[250px] lg:h-[270px] rounded-2xl overflow-hidden group">

            <Image
              src="/dpack banner (2).webp"
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 right-4 z-10 gap-2">
              <span className="text-orange-500 text-[12px] bg-white px-2 py-1 rounded-full inline-block">
                Secure Packaging
              </span>

              <Link href={"/products"} className="mt-2 bg-white text-black px-3 py-1.5 rounded text-sm">
                Explore →
              </Link>
            </div>
          </div>

          {/* TOP CARD */}
          <div className="relative w-full h-[280px] sm:h-[250px] lg:h-[250px] rounded-2xl overflow-hidden group">

            <Image
              src="/newBanner.jpeg"
              alt=""
              fill
              // style={{objectPosition:"50% 35%"}}
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 right-4 z-10 gap-2">
              <span className="text-orange-500 text-[13px] bg-white px-2 py-1 rounded-full inline-block">
                Heavy Duty
              </span>

              <Link href={"/products"} className="mt-2 bg-orange-500 text-white px-3 py-1.5 rounded text-sm">
                Shop →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-6 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl px-4 sm:px-6 py-5 flex items-center gap-4`}
            >
              <div className={`${item.iconBg} text-white w-12 h-12 sm:w-16 sm:h-14 flex items-center justify-center rounded-xl`}>
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