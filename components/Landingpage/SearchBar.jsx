"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";

const cat = [
    { name: "Dunnage Bag", link: "/categories/dunnage-bag" },
    { name: "Air Column Roll", link: "/categories/air-column-roll" },
    { name: "Air Column Bag", link: "/categories/air-column-bag" },
    { name: "Packaging Air Bag", link: "/categories/packaging-air-bag" },
    { name: "Gap Filler", link: "/categories/gap-filler" },
];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [show, setShow] = useState(false);

    const router = useRouter();

    const handleSearch = (value) => {
        setQuery(value);

        if (value.trim() === "") {
            setFiltered([]);
            setShow(false);
            return;
        }

        const results = cat.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setFiltered(results);
        setShow(true);
    };

    const handleSelect = (link) => {
        setQuery("");
        setShow(false);
        router.push(link);
    };

    return (
        <div className="relative w-full lg:w-[500px]">
            {/* Search Bar */}
            <div className="flex items-center bg-[#F5F5F5] rounded-full overflow-hidden border">
                <div className="hidden sm:flex px-4 items-center gap-2 text-sm text-gray-600 border-r">
                    All Categories <ChevronDown size={14} />
                </div>

                <input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search your product..."
                    className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
                />

                <button className="bg-black text-white w-10 h-10 flex items-center justify-center m-1 rounded-full">
                    <Search size={16} />
                </button>
            </div>

            {/* Dropdown */}
            {show && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-2 z-50">
                    {filtered.length > 0 ? (
                        filtered.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(item.link)}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                            >
                                {item.name}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">
                            No results found
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}