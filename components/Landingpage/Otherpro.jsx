"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Dunnage air bags",
    price: "$89.00",
    old: "$12.00",
    img: "/cat/1.png",
  },
  {
    title: "Air Bag (120mm x 180mm) 85 Pcs",
    price: "$75.00",
    old: "$99.00",
    img: "/cat/2.png",
  },
  {
    title: "Air column Roll",
    price: "$60.00",
    old: "$65.00",
    img: "/cat/3.png",
  },
  {
    title: "Gap fillers",
    price: "$55.00",
    old: "$80.00",
    img: "/cat/4.png",
  },

    {
    title: "Air column Roll",
    price: "$55.00",
    old: "$80.00",
    img: "/cat/5.png",
  },
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


        <div className="text-md text-black cursor-pointer">
          View All →
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT SLIDER */}
        <div className="lg:col-span-3">

          <Swiper
            modules={[Navigation,Autoplay]}
            
            autoplay={{ delay: 3000}}
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
                  <div className="relative h-[230px] mb-4">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[21px] font-medium text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* PRICE */}
                  {/* <div className="flex items-center gap-2 mb-3">
                    <span className="text-orange-500 font-semibold text-lg">
                      {item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      {item.old}
                    </span>
                  </div> */}

                  {/* CTA */}
                  <button className="text-md group-hover:text-orange-500 flex items-center gap-1 text-gray-700 hover:text-black">
                    Buy Now <ArrowUpRight size={14} />
                  </button>

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

 
    <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition flex items-center gap-2">
      Buy Now →
    </button>
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