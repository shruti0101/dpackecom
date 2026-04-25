"use client";
import { useParams } from 'next/navigation';
import React from 'react'

export default function Location() {
    const params = useParams();
    const formatCityName = (slug) => {
        if (!slug) return "India";

        return slug
            .replace(/\((.*?)\)/g, " ($1)")
            .replace(/-/g, " ")
            .replace(/\b\w/g, char => char.toUpperCase());
    };

    const citySlug = params?.location?.includes("-in-")
        ? params.location.split("-in-")[1] : null;

    const cityName = citySlug ? formatCityName(citySlug) : "India";

    return (<>
        <section style={{ backgroundImage: "url('/banner/2.jpeg')" }}
            className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

            <div className="relative text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {cityName}
                </h1>
            </div>
        </section>


    </>)
}
