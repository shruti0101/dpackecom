"use client";

import Image from "next/image";
import Link from "next/link";

const category = [
  {
    id: 1,
    name: "Premium Dunnage Bags Collection",
    image: "/banner/1.jpeg",
    link: "/categories/dunnage-bag",
    subtext: "Secure cargo with high-strength void filling solutions",
  },
  {
    id: 2,
    name: "Gap Fillers",
    link: "/categories/gap-filler",
    image: "/banner/2.jpeg",
    subtext: "Prevent load movement with reliable cushioning support",
  },
  {
    id: 3,
    name: "Air Column Bags",
    link: "/categories/air-column-bag",
    image: "/banner/3.jpeg",
    subtext: "Advanced air cushioning for fragile product protection",
  },
  {
    id: 4,
    name: "Courier Bags",
    image: "/banner/4.jpeg",
    link: "/categories/dunnage-bag",
    subtext: "Durable and tamper-proof packaging for safe deliveries",
  },
  {
    id: 5,
    name: "Air Bags",
    image: "/banner/5.jpeg",
    link: "/categories/packaging-air-bag",
    subtext: "Lightweight inflatable protection for transit safety",
  },
];

export default function BestsellerSection() {
  return (
    <section className="w-full py-10 px-4 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:gap-8 gap-4">
        {category.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="col-span-1 md:col-span-3 h-[330px] relative rounded-[22px] overflow-hidden group"
          >
            <Image
              src={item.image}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              alt={item.name}
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute left-6 bottom-10 z-10 max-w-[75%]">
              <h3 className="text-white text-xl md:text-4xl font-semibold mb-2 leading-snug">
                {item.name}
              </h3>

              <p className="text-white text-sm mb-3">
                {item.subtext}
              </p>

              <Link href={item.link} className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition">
                View More →
              </Link>
            </div>
          </div>
        ))}

        {category.slice(2, 5).map((item) => (
          <div
            key={item.id}
            className="col-span-1 md:col-span-2 h-[260px] relative rounded-[22px] overflow-hidden group"
          >
            <Image
              src={item.image}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              alt={item.name}
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute left-4 bottom-10 z-10">
              <h4 className="text-white text-3xl font-semibold mb-1">
                {item.name}
              </h4>

              <p className="text-white text-sm mb-2">
                {item.subtext}
              </p>

              <Link href={item.link} className="bg-white text-black px-3 py-2 rounded-md text-xs hover:bg-gray-200 transition">
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}