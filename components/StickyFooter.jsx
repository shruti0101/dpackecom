"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
  FaBoxes,
} from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

const categories = [
  { name: "Dunnage Bag", link: "/categories/dunnage-bag", img: "/cat/1.webp" },
  { name: "Air Column Roll", link: "/categories/air-column-roll", img: "/cat/2.webp" },
  { name: "Air Column Bag", link: "/categories/air-column-bag", img: "/cat/5.webp" },
  { name: "Packaging Air Bag", link: "/categories/packaging-air-bag", img: "/cat/3.webp" },
  { name: "Gap Filler", link: "/categories/gap-filler", img: "/sideimg.png" },
  { name: "Dunnage Bag", link: "/categories/dunnage-bag", img: "/cat/1.webp" },
  { name: "Air Column Roll", link: "/categories/air-column-roll", img: "/cat/2.webp" },
  { name: "Air Column Bag", link: "/categories/air-column-bag", img: "/cat/5.webp" },
  { name: "Packaging Air Bag", link: "/categories/packaging-air-bag", img: "/cat/3.webp" },
  { name: "Gap Filler", link: "/categories/gap-filler", img: "/sideimg.png" },
];

export default function StickyFooter() {
  const [showProducts, setShowProducts] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsHomeActive(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Categories Bottom Sheet */}
      {showProducts && (
        <>
          {/* Overlay */}
          <div
            
            onClick={() => setShowProducts(false)}
          />

          {/* Bottom Sheet */}
          <div className="fixed bottom-[72px] left-0 right-0 z-40 rounded-t-[30px] bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
            
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-[30px] border-b bg-white px-5 py-4">
              <div >
                <h3 className="text-lg w-full mx-auto text-center font-bold text-[#062347]">
                  Our Products Range
                </h3>
                
              </div>

              <button
                onClick={() => setShowProducts(false)}
                className="flex absolute right-7 top-2 h-10 w-10 items-center justify-center rounded-full bg-gray-100"
              >
                <FaTimes className="text-2xl text-[#d95026]" />
              </button>
            </div>

            {/* Categories */}
            <div className="max-h-[65vh]  overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-3">
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={() => setShowProducts(false)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#C8921C] hover:shadow-lg"
                  >
                    <div className="relative h-24 overflow-hidden bg-gray-100">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-3">
                      <h4 className="text-center text-sm font-semibold text-[#062347] line-clamp-2">
                        {item.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
          <div className="grid h-[72px] grid-cols-5">

            {/* Home */}
            <Link
              href="/"
              className="flex flex-col items-center justify-center gap-1"
            >
              <FaHome className="text-[22px] text-[#062347]" />
              <span className="text-[11px] font-medium text-[#062347]">
                Home
              </span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="flex flex-col items-center justify-center gap-1"
            >
              <FaInfoCircle className="text-[22px] text-[#062347]" />
              <span className="text-[11px] font-medium text-[#062347]">
                About
              </span>
            </Link>

            {/* Products Button */}
            <button
              onClick={() => setShowProducts((prev) => !prev)}
              className="relative flex flex-col items-center justify-center"
            >
              <div className="absolute -top-7 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#062347] to-[#0b4aa2] shadow-[0_10px_25px_rgba(6,35,71,0.35)]">
                <FaBoxes className="text-2xl text-[#d95026]" />
              </div>

              <span className="mt-8 text-[11px] font-semibold text-[#062347]">
                Products
              </span>
            </button>

            {/* Contact */}
            <Link
              href="/contact"
              className="flex flex-col items-center justify-center gap-1"
            >
              <  FaEnvelope className="text-[22px] text-[#062347]" />
              <span className="text-[11px] font-medium text-[#062347]">
                Contact
              </span>
            </Link>

            {/* Call */}
            <a
              href="tel:+917669988825"
              className="flex flex-col items-center justify-center gap-1"
            >
              <FaPhoneAlt className="text-[22px] text-[#062347]" />
              <span className="text-[11px] font-medium text-[#062347]">
                Call
              </span>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}