"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "DUANNAGE BAGS", img: "/cat/1.png" },
  { name: "AIRCOLUMNS ROLLS", img: "/cat/2.png" },
  { name: "AIRCOLUMNS ROLLS", img: "/cat/3.png" },
  { name: "GAP FILLERS", img: "/cat/4.png" },
  { name: "AIR BAGS", img: "/cat/5.png" },
  { name: "COURIER BAGS", img: "/cat/1.png" },
  { name: "DUANNAGE BAGS", img: "/cat/3.png" },
  { name: "GAP FILLERS", img: "/cat/2.png" },
];

export default function CategorySlider() {
  return (
    <div className="w-full bg-[#fffcf7] pb-7  relative">

      {/* NAV BUTTONS */}
      <button className="swiper-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-13 h-13 bg-orange-400/30 rounded-full shadow flex items-center justify-center">
        <ChevronLeft size={22} />
      </button>

      <button className="swiper-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-13 h-13 bg-orange-400/30 rounded-full shadow flex items-center justify-center">
        <ChevronRight size={22} />
      </button>

      <div className="max-w-7xl mx-auto px-7">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          spaceBetween={10}
          slidesPerView={6}
          breakpoints={{
            0: { slidesPerView: 2.2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center group cursor-pointer">

                {/* BLOB BACKGROUND */}
               <div className="flex flex-col items-center group cursor-pointer">

  {/* BLOB */}
  <div className="relative w-[250px] h-[250px] flex items-center justify-center transition-all duration-500">

    {/* SVG Blob */}
    <svg
      viewBox="0 0 200 200"
      className="absolute w-full h-full transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6"
    >
      <path
        fill="#e9e9e9"
        className="transition-all duration-500 group-hover:fill-[#e3e3e3]"
        d="M42.3,-66.4C45.3,-47.7,66.4,-46.3,72.5,-32.4C78.5,-18.5,79.4,-2.1,75.1,12.7C70.9,27.5,61.6,40.7,49.3,50.6C37,60.5,21.5,67.1,5.3,70.3C-10.9,73.5,-21.9,73.3,-35.6,69.2C-49.3,65,-65.7,56.8,-73.5,44.2C-81.4,31.6,-80.7,14.6,-77.8,-1.9C-74.9,-18.4,-69.7,-34.4,-59.5,-45.6C-49.3,-56.9,-34,-63.3,-19,-69.2C-4,-75.1,10.6,-80.5,24.7,-77.8C38.8,-75.1,52.3,-64.4,42.3,-66.4Z"
        transform="translate(100 100)"
      />
    </svg>

    {/* IMAGE */}
    <div className="relative w-[165px] h-[165px] z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110">
      <Image
        src={item.img}
        alt={item.name}
        fill
        className="object-cover rounded-full  group-hover:drop-shadow-xl"
      />
    </div>

    {/* SOFT GLOW */}
    <div className="absolute w-[120px] h-[120px] bg-black/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>

  </div>

  {/* TEXT */}
  <p className="mt-4 text-[19px] font-medium text-black transition-all duration-300 group-hover:text-orange-600 group-hover:tracking-wide group-hover:font-semibold">
    {item.name}
  </p>

</div>  

             

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}