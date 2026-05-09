"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import { useRouter } from "next/navigation";

import {
  ChevronDown,
  Search,
} from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] =
    useState("");

  const [filtered, setFiltered] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [show, setShow] =
    useState(false);

  const [activeIndex, setActiveIndex] =
    useState(-1);

  const router = useRouter();

  const wrapperRef = useRef(null);

  // FETCH PRODUCTS FROM BACKEND
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "/api/products"
      );

      const data = await res.json();

      setProducts(data || []);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target
        )
      ) {
        setShow(false);

        setActiveIndex(-1);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // SEARCH
  const handleSearch = (value) => {
    setQuery(value);

    setActiveIndex(-1);

    if (value.trim() === "") {
      setFiltered([]);

      setShow(false);

      return;
    }

    const results = products.filter(
      (item) =>
        item.name
          ?.toLowerCase()
          .includes(
            value.toLowerCase()
          )
    );

    setFiltered(results);

    setShow(true);
  };

  // SELECT PRODUCT
  const handleSelect = (slug) => {
    setQuery("");

    setShow(false);

    setActiveIndex(-1);

    router.push(
      `/products/${slug}`
    );
  };

  // KEYBOARD NAVIGATION
  const handleKeyDown = (e) => {
    if (!show) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActiveIndex((prev) =>
        prev < filtered.length - 1
          ? prev + 1
          : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActiveIndex((prev) =>
        prev > 0
          ? prev - 1
          : filtered.length - 1
      );
    }

    if (e.key === "Enter") {
      if (
        activeIndex >= 0 &&
        filtered[activeIndex]
      ) {
        handleSelect(
          filtered[activeIndex].slug
        );
      }
    }

    if (e.key === "Escape") {
      setShow(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full lg:w-[500px]"
    >
      {/* SEARCH BAR */}
      <div className="flex items-center bg-[#F5F5F5] rounded-full overflow-hidden border">

        <div className="hidden sm:flex px-4 items-center gap-2 text-sm text-gray-600 border-r">
          All Products

          <ChevronDown size={14} />
        </div>

        <input
          value={query}
          onChange={(e) =>
            handleSearch(
              e.target.value
            )
          }
          onKeyDown={handleKeyDown}
          placeholder="Search your product..."
          className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
        />

        <button className="bg-black text-white w-10 h-10 flex items-center justify-center m-1 rounded-full">
          <Search size={16} />
        </button>
      </div>

      {/* DROPDOWN */}
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-2 z-50 max-h-60 overflow-y-auto">

          {filtered.length > 0 ? (
            filtered.map(
              (item, index) => (
                <div
                  key={item._id}
                  onClick={() =>
                    handleSelect(
                      item.slug
                    )
                  }
                  className={`px-4 py-3 cursor-pointer text-sm flex items-center gap-3 border-b
                  ${
                    index ===
                    activeIndex
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {/* PRODUCT IMAGE */}
                  <img
                    src={
                      item.images?.[0]
                        ?.src
                    }
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border"
                  />

                  {/* PRODUCT INFO */}
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {
                        item.category
                          ?.name
                      }
                    </p>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}