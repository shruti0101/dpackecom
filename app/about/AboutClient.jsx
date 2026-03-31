"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Categories from "@/components/Landingpage/Categories";

import "swiper/css";

export default function AboutPage() {
  return (
    <>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[50vh] md:h-[95vh] overflow-hidden">

        {/* BG IMAGE */}
        <Image
          src="/Anti-smog-gun-copy.jpg"
          alt="About"
          fill
          className="object-cover"
          priority
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-3xl md:text-6xl font-bold">
            About Us
          </h2>
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="w-full bg-white py-20 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-block px-4 py-1 text-sm text-red-600 bg-red-100 rounded-full mb-4">
              About Kapmix Machinery
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-6">
              Leading Manufacturer of{" "}
              <span className="text-red-600">
                Anti Smog Gun & Dust Control Equipment
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-[18px]">
           Kapmix Machinery Pvt. Ltd. is a leading manufacturer and supplier of high-performance construction machinery Anti Smog Gun and dust suppression equipment in India. Established around 2012, the company is headquartered in Noida, Uttar Pradesh, and has built a strong reputation in the construction and industrial equipment sector. 
            </p>

            {/* CARD */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <h3 className="text-lg font-semibold text-red-600 mb-3">
                Who We Are
              </h3>

              <p className="text-gray-700 text-md leading-relaxed">
               Kapmix Machinery is a private limited company engaged in manufacturing, exporting, importing, and supplying a wide range of construction and industrial machinery. With a dedicated team of skilled engineers and professionals, the company focuses on delivering reliable, durable, and cost-effective equipment solutions. 

              </p>

              <p className="text-gray-700 text-md mt-3 leading-relaxed">
                Under the leadership of Mr. Amit Chauhan (CEO), Kapmix has grown into a trusted brand known for quality, innovation, and customer satisfaction.
              </p>

            </div>

          </div>

          {/* RIGHT SLIDER */}
          <div>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              {[
                "/cat1_1.webp",
                "/cat2_2.avif",
                "/cta.webp",
                "/cat4_4.avif",
                "/slider.webp"
              ].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={img}
                      alt="machine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </section>

<Categories></Categories>

      {/* ================= VISION ================= */}
      <section className="w-full bg-[#fafafa] py-20 px-6 md:px-16 relative overflow-hidden">

        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-600/10 blur-[120px]" />

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-1 text-sm text-red-600 bg-red-100 rounded-full mb-4">
            Our Vision
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
            Building the Future of{" "}
            <span className="text-red-600">Dust Control Solutions</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-xl max-w-3xl mx-auto">
           At Kapmix Machinery Pvt. Ltd., our vision is to set new benchmarks in the construction machinery sector by being the most trusted Anti Smog Gun supplier in India. To become a trusted global brand by delivering innovative, durable, and efficient machinery solutions that perform even in the toughest working conditions. 
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        {/* BG */}
        <Image
          src="/bag/cta.jpg"
          alt="cta"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />

        {/* RED GLOW */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/30 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-500/20 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get in Touch
            </h2>

            <p className="text-white max-w-3xl mx-auto leading-relaxed mb-8 text-lg">
              Partner with <span className="text-red-400 font-medium">Kapmix Machinery Pvt. Ltd.</span>, 
              a trusted Anti Smog Gun manufacturer delivering reliable dust suppression solutions across India.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 transition rounded-full font-medium shadow-lg hover:scale-105"
              >
                Request a Quote
              </a>

              <a
                href="/products"
                className="px-8 py-4 border border-white/30 hover:border-red-400 hover:text-red-400 transition rounded-full font-medium"
              >
                Explore Products
              </a>

            </div>

          </div>
        </div>
      </section>

    </>
  );
}