"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { categories } from "@/Data";

const allProducts = categories.flatMap((cat) =>
    cat.products.map((product) => ({
        ...product,
        link: `/product/${product.id}`,
    }))
);

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const router = useRouter();

    const handleSearch = (value) => {
        setQuery(value);
        setActiveIndex(-1);

        if (value.trim() === "") {
            setFiltered([]);
            setShow(false);
            return;
        }

        const results = allProducts.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setFiltered(results);
        setShow(true);
    };

    const handleSelect = (id) => {
        setQuery("");
        setShow(false);
        setActiveIndex(-1);
        router.push(`/products/${id}`);
    };

    const handleKeyDown = (e) => {
        if (!show) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev < filtered.length - 1 ? prev + 1 : 0
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev > 0 ? prev - 1 : filtered.length - 1
            );
        }

        if (e.key === "Enter") {
            if (activeIndex >= 0 && filtered[activeIndex]) {
                handleSelect(filtered[activeIndex].id);
            }
        }

        if (e.key === "Escape") {
            setShow(false);
        }
    };

    return (
        <div className="relative w-full lg:w-[500px]">
            {/* Search Bar */}
            <div className="flex items-center bg-[#F5F5F5] rounded-full overflow-hidden border">
                <div className="hidden sm:flex px-4 items-center gap-2 text-sm text-gray-600 border-r">
                    All Products <ChevronDown size={14} />
                </div>

                <input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search your product..."
                    className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
                />

                <button className="bg-black text-white w-10 h-10 flex items-center justify-center m-1 rounded-full">
                    <Search size={16} />
                </button>
            </div>

            {/* Dropdown */}
            {show && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-2 z-50 max-h-60 overflow-y-auto">
                    {filtered.length > 0 ? (
                        filtered.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(item.id)}
                                className={`px-4 py-2 cursor-pointer text-sm ${
                                    index === activeIndex
                                        ? "bg-gray-200"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {item.name}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">
                            No products found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}