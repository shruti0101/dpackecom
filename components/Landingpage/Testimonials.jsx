"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.jpeg",
  "/brand4.jpeg",
  "/brand5.jpeg",
  "/brand6.jpeg",
  "/brand7.jpeg",
  "/brand8.jpeg",
  "/brand9.jpeg",
];

export default function TopBrands() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-28">

      <div className="flex items-center justify-between max-w-[1250px] mx-auto mb-10">

        <h2 className="text-5xl font-semibold relative">
          <span className="relative z-10">Our Top Brands</span>

          <Image
            height={120}
            width={120}
            src="/heading_shapes.png"
            className="absolute -left-8 -top-5 w-54 h-14 rounded-full z-20"
            alt="shape"
          />
        </h2>

      </div>


      {/* SWIPER SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >

        {brands.map((logo, i) => (
          <SwiperSlide key={i}>

            <div className="bg-[#eeeeee] border border-gray-200 rounded-xl h-[90px] flex items-center justify-center hover:shadow-sm transition">

              <div className="relative w-[235px] h-[100px]">

                <Image
                  src={logo}
                  alt="brand"
                  fill
                  className="object-contain p-2"
                />

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}