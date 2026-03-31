"use client"

import Image from "next/image"

export default function PackagingSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-15 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

    

        {/* RIGHT CONTENT */}
        <div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Packaging Air Bag Manufacturer, Supplier and Wholesaler
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            D Pack is a leading{" "}
            <span className="font-semibold text-gray-900">
              Packaging Air Bag Manufacturer, Supplier, and Wholesaler
            </span>{" "}
            offering high-performance air packaging solutions.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            We manufacture premium Packaging Air Bags, including{" "}
            <span className="font-semibold text-gray-900">
              Air Cushion Bags, Dunnage Air Bags, Air Column Bags, and Air Tube Bag Packaging
            </span>
            , designed for maximum protection during storage and transportation.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            As a trusted{" "}
            <span className="font-semibold text-gray-900">
              Air Cushion Bag Manufacturer and Dunnage Bag Manufacturer
            </span>
            , we focus on delivering durable, lightweight, and cost-effective solutions.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our advanced{" "}
            <span className="font-semibold text-gray-900">
              Air Column Packaging Rolls and Inflatable Air Column Bags
            </span>{" "}
            ensure superior shock absorption and product safety.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
              Get Quote
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Products
            </button>
          </div>

        </div>


    {/* LEFT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[620px]">
          
          <Image
            src="/sidebanner.png" // 👈 replace with your image
            alt="Packaging Air Bags"
            fill
            className="object-contain md:object-cover rounded-xl"
          />

          {/* OPTIONAL GLOW / BACKGROUND EFFECT */}
          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>

    </section>
  )
}