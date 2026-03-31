"use client";

import { useState } from "react";

export default function FAQSection() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What are Packaging Air Bags and how do they work?",
      a: "Packaging Air Bags are advanced inflatable packaging solutions designed to protect products from damage during storage and transportation. They work by creating air-filled cushions that absorb shocks, vibrations, and external pressure. This protective layer ensures that products remain safe and intact throughout the shipping process, especially for fragile and high-value items.",
    },
    {
      q: "What are Dunnage Air Bags used for in transportation?",
      a: "Dunnage Air Bags are primarily used in logistics and shipping to secure cargo inside containers, trucks, and railcars. They are placed in the empty spaces between goods to prevent movement during transit. By stabilizing the load, they reduce the risk of shifting, collisions, and product damage, making them essential for safe and efficient transportation.",
    },
    {
      q: "What are Air Column Bags and why are they ideal for fragile items?",
      a: "Air Column Bags are specially designed packaging solutions made with multiple air chambers that surround a product completely. These air columns provide 360-degree protection, making them ideal for fragile items such as electronics, glassware, bottles, and laptops. Their strong structure ensures that even under pressure or impact, the product remains secure.",
    },
    {
      q: "Are Packaging Air Bags reusable and environmentally friendly?",
      a: "Yes, most Packaging Air Bags are reusable if they remain undamaged after use. They are also made using recyclable materials, making them a more eco-friendly alternative compared to traditional packaging materials like foam or thermocol. Their lightweight design also helps reduce carbon footprint during transportation.",
    },
    {
      q: "Do you offer bulk supply and wholesale pricing for Packaging Air Bags?",
      a: "Yes, as a trusted Packaging Air Bag Manufacturer, Supplier, and Wholesaler, D Pack provides bulk supply solutions tailored to businesses of all sizes. We offer competitive pricing, consistent quality, and timely delivery to meet large-scale packaging requirements across industries.",
    },
    {
      q: "Can Packaging Air Bags be customized as per product requirements?",
      a: "Absolutely. We offer customized Packaging Air Bags based on specific product dimensions, shapes, and industry needs. Whether you require specialized Air Column Bags, Dunnage Air Bags, or Air Cushion Bags, our team ensures the packaging solution fits perfectly and provides maximum protection.",
    },
  ];

  return (
    <section className="w-full py-10 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about our packaging solutions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((item, i) => (

            <div
              key={i}
              className="border rounded-2xl overflow-hidden transition bg-[#FAFAFA]"
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.q}
                </span>

                <span className="text-orange-500 text-2xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}