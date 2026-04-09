"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

async function getBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // ✅ initially show 6 blogs

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/banner/4.jpeg')" }}
        className="w-full bg-cover h-[50vh] md:h-[90vh]  relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
           <p className="text-emerald-700 text-lg ">Home / Blogs</p>
          <h2 className="text-white text-6xl font-bold z-10 ">
            Our Blogs
          </h2>
        </div>
      </section>

      {/* Blog Listing */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((b) => (
            <article
              key={b.slug?.current || b.title}
              className="bg-white border rounded-lg shadow"
            >
              {b.imageUrl && (
                <Image
                  src={b.imageUrl}
                  alt={b.title}
                  width={1200}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{b.title}</h2>
                <p className="text-sm text-gray-500 mb-3">
                  {b.date
                    ? new Date(b.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </p>

                <p className="text-gray-700 text-sm">{b.excerpt}</p>
                <Link
                  href={`/our-blogs/${b.slug.current}`}
                  className="text-blue-600 font-medium hover:underline mt-3 block"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)} // load +6 blogs each click
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
