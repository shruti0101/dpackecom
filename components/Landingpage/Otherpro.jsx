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

      <div className="">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
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
    </div>
  );
}