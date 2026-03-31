"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  const data = [
    {
      text: "D Pack’s Packaging Air Bags have greatly reduced product damage during our shipments. The quality is excellent and the service is always reliable.",
      author: "Logistics Company",
      location: "Delhi",
    },
    {
      text: "We have been using their Air Column Bags for packaging electronics, and the protection level is outstanding. Highly recommended for fragile items.",
      author: "Electronics Distributor",
    },
    {
      text: "The Dunnage Air Bags we sourced from D Pack are strong, easy to use, and perfect for securing our cargo during transportation.",
      author: "Supply Chain & Warehouse Manager",
    },
    {
      text: "D Pack offers cost-effective packaging solutions without compromising on quality. Their team is very supportive and ensures timely delivery.",
      author: "E-commerce Business Owner",
    },
    {
      text: "We needed customized Packaging Air Bags, and D Pack delivered exactly what we were looking for. Great quality and professional service.",
      author: "Manufacturing Company",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Trusted by logistics companies, manufacturers, and e-commerce businesses across India.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition duration-500 relative h-full">

                {/* QUOTE */}
                <div className="absolute -top-4 left-6 text-5xl text-orange-500 opacity-20">
                  “
                </div>

                {/* TEXT */}
                <p className="text-gray-700 text-[15px] leading-relaxed relative z-10">
                  {item.text}
                </p>

                {/* FOOTER */}
                <div className="mt-6 pt-4 border-t flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.author}
                    </p>
                    {item.location && (
                      <p className="text-gray-500 text-xs">
                        {item.location}
                      </p>
                    )}
                  </div>

                  {/* STARS */}
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}