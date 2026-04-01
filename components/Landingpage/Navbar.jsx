"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Search,
  Phone,
  Menu,
  ChevronDown,
} from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false)


  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <>
      <section>

        {/* ================= TOP HEADER ================= */}
        <div className="bg-white px-4 md:px-10 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-sm">

          {/* LOGO + MOBILE MENU */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Image width={120} height={80} src="/logo.webp" alt="logo" />

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="w-full lg:w-[500px] flex items-center bg-[#F5F5F5] rounded-full overflow-hidden border">

            <div className="hidden sm:flex px-4 items-center gap-2 text-sm text-gray-600 border-r">
              All Categories <ChevronDown size={14} />
            </div>

            <input
              placeholder="Search your product..."
              className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
            />

            <button className="bg-black text-white w-10 h-10 flex items-center justify-center m-1 rounded-full">
              <Search size={16} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-6 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <div>
                <p className="text-gray-500 text-xs">Hotline:</p>
                <p className="font-semibold text-sm">+(91) - 7632824643</p>
              </div>
            </div>

            <select className="bg-gray-100 px-3 py-1 rounded-md text-sm">
              <option>English</option>
            </select>

          </div>
        </div>

        {/* ================= NAVBAR ================= */}
        <div className="bg-[#EDF5FF] border-t px-4 md:px-10 lg:px-9 flex flex-col lg:flex-row items-start lg:items-center justify-between">

          {/* LEFT SIDE */}
          <div className={`flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-sm md:text-[17px] w-full ${open ? "block" : "hidden"} lg:flex`}>

            {/* BROWSE CATEGORIES */}
            <div className="relative group w-full lg:w-auto">

              <div className="bg-[#D95026] text-white px-4 py-4 flex items-center justify-between lg:justify-center gap-2 cursor-pointer">
                <Menu size={20} />
                Browse Categories
                <ChevronDown size={20} />
              </div>

              {/* DROPDOWN */}
              <div className="absolute top-full left-0 mt-2 w-[220px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                {[
                  "Dunnage Bag",
                  "Air Column Roll",
                  "Air Column Bag",
                  "Packaging Air Bag",
                  "Gap Filler",

                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-6 border-b border-gray-200 text-lg border-b border-gray-200  flex justify-between items-center hover:bg-gray-50 text-gray-600 cursor-pointer"
                  >
                    {item}
                    <span>›</span>
                  </div>
                ))}

<div className="my-4">

                <Link href="/products" className="px-4 py-3 text-md font-medium">
                  View All Products →
                </Link>
</div>
              </div>
            </div>

            {/* NAV ITEMS */}
            <Link href="/" className="text-black hover:text-orange-500 font-medium">Home</Link>
         <Link href="/" className="text-black hover:text-orange-500 font-medium">Shop</Link>
            <Link href="/" className="text-black hover:text-orange-500 font-medium">Flash Deals</Link>
            <Link href="/about" className="text-black hover:text-orange-500 font-medium">About Us</Link>
            <Link href="/news" className="text-black hover:text-orange-500 font-medium">News & Articles</Link>
            <Link href="/contact" className="text-black hover:text-orange-500 font-medium">Contact Us</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-50  mt-3 lg:mt-0"> 
            <button className="w-full  capitalize cursor-pointer bg-black text-white text-sm md:text-md px-4 py-4">
              download brochure
            </button>
          </div>
        </div>

      </section>
    </>
  )
}