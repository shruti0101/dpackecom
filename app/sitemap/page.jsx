"use client";
import React from 'react'
import Link from 'next/link';
import { categories, serviceLocations } from '@/Data';

export default function page() {
    const sitemapItems = [
        { name: "Home", link: "/" },
        { name: "Product", link: "/products" },
        { name: "About Us", link: "/about" },
        { name: "Articles", link: "/our-articles" },
        { name: "Contact", link: "/contact" },
        { name: "Terms and Conditions", link: "/terms-conditions" },
        { name: "Privacy Policy", link: "/privacy-policy" },
    ]

    const allProducts = categories.flatMap((c) => c.products);
    return (<>
        <section
            style={{ backgroundImage: "url('/banner/4.jpeg')" }}
            className="w-full bg-cover h-[50vh] md:h-[80vh]  relative"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
                <p className="text-orange-600 text-lg ">Home / Sitemap</p>
                <h2 className="text-white text-6xl font-bold z-10 ">
                    Sitemap
                </h2>
            </div>
        </section>

        <section className='relative z-10 py-10 px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 text-orange-500 text-xl font-semibold">
                {sitemapItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="p-6 bg-white rounded-xl border border-orange-400 content-center
                         hover:border-orange-600 hover:shadow-lg transition-all text-center items-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {categories.map((item) => (
                    <Link
                        key={item.name}
                        href={`categories/${item.id}`}
                        className="p-6 bg-white rounded-xl border border-orange-400 content-center
                         hover:border-orange-600 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {allProducts.map((item) => (
                    <Link
                        key={item.name}
                        href={`/products/${item.id}`}
                        className="p-6 bg-white rounded-xl border border-orange-400 content-center
                         hover:border-orange-600 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {serviceLocations.map((item) => (
                    <Link
                        key={item.id}
                        href={`${item.href}`}
                        className="p-6 bg-white rounded-xl border border-orange-300 content-center
                         hover:border-orange-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </section>
    </>)
}