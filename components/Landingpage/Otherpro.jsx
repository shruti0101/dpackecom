"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
 { name: "Dunnage Bag", link: "/categories/dunnage-bag", img: "/cat/1.png" },
  { name: "Air Column Roll", link: "/categories/air-column-roll", img: "/cat/2.png" },
  { name: "Air Column Bag", link: "/categories/air-column-bag", img: "/cat/5.png" },
  { name: "Packaging Air Bag", link: "/categories/packaging-air-bag", img: "/cat/3.png" },
  { name: "Gap Filler", link: "/categories/gap-filler", img: "/sideimg.png" },
  { name: "Dunnage Bag", link: "/categories/dunnage-bag", img: "/cat/1.png" },
  { name: "Air Column Roll", link: "/categories/air-column-roll", img: "/cat/2.png" },
  { name: "Air Column Bag", link: "/categories/air-column-bag", img: "/cat/5.png" },
  { name: "Packaging Air Bag", link: "/categories/packaging-air-bag", img: "/cat/3.png" },
  { name: "Gap Filler", link: "/categories/gap-filler", img: "/sideimg.png" },
];

export default function BestSelling() {
  return (
    <div className="w-full bg-white py-14 px-6 md:px-10">

      {/* HEADER */}
      <div className="flex items-center justify-between max-w-[1250px] mx-auto mb-7">

        <h2 className="text-4xl font-semibold relative">
          <span className="relative z-10">Our Best Selling Products</span>
          <Image height={100} width={100} src="/heading_shapes.png" className="absolute -left-8 -top-5 w-54 h-14 border-2  rounded-full z-20"></Image>
        </h2>


        <Link href={"/products"} className="text-md text-black cursor-pointer hover:underline">
          View All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT SLIDER */}
        <div className="lg:col-span-3">

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white group rounded-2xl p-5 h-[400px] relative overflow-hidden group transition hover:shadow-lg border-1 border-gray-400">
                  {/* BG SHAPE */}
                  <div className="absolute top-0 right-0 w-[120px] h-[120px] z-20 bg-orange-200 rounded-full opacity-40"></div>

                  {/* IMAGE */}
                  <div className="relative h-[250px] mb-4">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[21px] font-medium text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  {/* CTA */}
                  <Link href={item.link} className="text-md group-hover:text-orange-500 flex items-center gap-1 text-gray-700 hover:text-black">
                    Buy Now <ArrowUpRight size={14} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* RIGHT STATIC BANNER */}
        <div className="relative bg-[#dfe6f2] rounded-2xl overflow-hidden h-[400px] flex items-center p-7">

          {/* BACKGROUND IMAGE */}
          <Image
            src="/banner.webp"
            alt=""
            fill
            className="object-contain"
          />

          {/* GRADIENT OVERLAY (PREMIUM) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-[70%]">

            <h3 className="text-2xl md:text-4xl font-semibold text-white leading-snug mb-4">
              Best Sales Discount <br /> And Offers
            </h3>

            <div className="w-fit">
              <Link href={"/products"} className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition flex items-center gap-2">
                Buy Now →
              </Link>
            </div>
          </div>

          {/* SOFT LIGHT GLOW */}
          <div className="absolute right-[-60px] top-[-60px] w-[200px] h-[200px] bg-orange-400/20 blur-[100px] rounded-full"></div>

          {/* DECOR SHAPES (REPLACE EMOJI) */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-orange-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-6 right-10 w-4 h-4 bg-orange-300 rounded-full opacity-60"></div>

        </div>

      </div>
    </div>
  );
}