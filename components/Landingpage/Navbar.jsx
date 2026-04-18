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
import SearchBar from "./SearchBar";
import { categories } from "@/Data";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cat = [
    { name: "Dunnage Bag", link: "/categories/dunnage-bag" },
    { name: "Air Column Roll", link: "/categories/air-column-roll" },
    { name: "Air Column Bag", link: "/categories/air-column-bag" },
    { name: "Packaging Air Bag", link: "/categories/packaging-air-bag" },
    { name: "Gap Filler", link: "/categories/gap-filler" },
  ]
  const [hover, sethover] = useState(null);
  return (<>
    <section>
      <div className="bg-white px-4 md:px-10 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-sm">

        {/* LOGO + MOBILE MENU */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={`/`} className="flex items-center gap-1">
            <Image width={120} height={80} src="/logo-new.png" alt="logo" />
            <p className='flex text-xs md:text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full'>GSTIN: 07AFXPJ4168A2Z9</p>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>

        {/* SEARCH BAR */}
        <SearchBar />

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-6 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={18} />
            <div>
              <p className="text-gray-500 text-xs">Hotline:</p>
              <p className="font-semibold text-sm">+(91) - 7669988825</p>
            </div>
          </div>

          <select className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            <option>English</option>
          </select>

        </div>
      </div>

      <div className="bg-[#EDF5FF] border-t px-4 md:px-10 lg:px-9 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* LEFT SIDE */}
        <div className={`flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-sm md:text-[17px] w-full ${open ? "block" : "hidden"} lg:flex`}>
          {/* BROWSE CATEGORIES */}
          <div className="relative group w-full lg:w-auto">
            {/* BUTTON */}
            <div
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="bg-[#D95026] text-white px-4 py-4 flex items-center justify-between lg:justify-center gap-2 cursor-pointer"
            >
              <Menu size={20} />
              Browse Categories
              <ChevronDown size={20} />
            </div>

            {/* DROPDOWN */}
            <div className={`absolute top-full left-0 w-[220px] bg-white shadow-xl rounded-lg z-50
          ${categoryOpen ? "block" : "hidden"} lg:block lg:opacity-0 lg:invisible 
          lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-all lg:duration-300 `}>
              {categories.map((item, i) => (
                <div key={i} onMouseEnter={() => sethover(i)} onMouseLeave={() => sethover(null)}
                  className="relative">
                  <Link href={`/categories/${item.id}`} onClick={() => { setOpen(false); setCategoryOpen(false) }}
                    className="px-4 py-4 border-b border-gray-200 text-lg flex justify-between items-center text-gray-600 hover:bg-gray-50 transition"
                  >
                    {item.name}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                  </Link>

                  <AnimatePresence>
                    {hover === i && (
                      <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 40, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-full top-1 w-64 bg-white shadow-xl rounded-lg z-50 border md:block hidden"
                      >
                        <div className="flex flex-col gap-2">
                          {item.products.map((prod, idx) => (
                            <Link key={idx} href={`/products/${prod.id}`}
                              className="text-base px-4 py-2 border-b border-gray-200 text-gray-700 hover:text-orange-600 hover:translate-x-1 transition-all duration-200"
                            >
                              {prod.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="my-4">
                <Link href="/products" className="px-4 py-2 text-md font-medium">
                  View All Products →
                </Link>
              </div>
            </div>
          </div>

          {/* NAV ITEMS */}
          <Link href="/" className="text-black hover:text-[#D95026] font-medium">Home</Link>
          <Link href="/products" className="text-black hover:text-[#D95026] font-medium">Shop</Link>
          <Link href="/about" className="text-black hover:text-[#D95026] font-medium">About Us</Link>
          <Link href="/our-blogs" className="text-black hover:text-[#D95026] font-medium">News & Articles</Link>
          <Link href="/contact" className="text-black hover:text-[#D95026] font-medium">Contact Us</Link>
          {/* <button className="w-full lg:hidden block capitalize cursor-pointer bg-black text-white text-sm md:text-md px-4 py-4">
            download brochure
          </button> */}
        </div>

        {/* RIGHT SIDE */}
        {/* <div className="w-50  mt-3 lg:mt-0 lg:block hidden">
          <button className="w-full  capitalize cursor-pointer bg-black text-white text-sm md:text-md px-4 py-4">
            download brochure
          </button>
        </div> */}
      </div>
    </section>
  </>)
}