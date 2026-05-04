"use client";

import Image from "next/image";
import { Calendar, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
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

const articles = [
  {
    id: 1,
    title: "How To Plop Hair For Bouncy, Beautiful Curls",
    img: "/cat/2.webp",
    author: "Adnan Alvi",
    date: "12 Mar 2025",
    comments: 15,
    tag: "Beauty",
  },
  {
    id: 2,
    title: "Fast Fashion: How Clothes Are Linked To Climate Change",
    img: "/cat/1.webp",
    author: "Hasib Sing",
    date: "20 Apr 2025",
    comments: 42,
    tag: "Fashion",
  },
  {
    id: 3,
    title: "Which Foundation Formula Is Right For Your Skin?",
    img: "/cat/3.webp",
    author: "Smith Jhon",
    date: "07 Mar 2025",
    comments: 36,
    tag: "Skincare",
  },

];

export default function ArticlesSection() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <section className="w-full bg-slate-100 py-12 px-4 md:px-10 lg:px-20">

      {/* HEADER */}
      <div className="flex items-center justify-between max-w-[1250px] mx-auto mb-6">
        <h2 className="text-4xl font-semibold relative">
          <span className="relative z-10">Our News & Articles</span>
          <Image alt="news-&-article" height={100} width={100} src="/heading_shapes.png" className="absolute -left-6 -top-4 w-54 h-14 border-2  rounded-full z-20"></Image>
        </h2>


        <Link href={"/our-blogs"} className="text-md text-black cursor-pointer">
          View All →
        </Link>
      </div>

      {/* GRID */}
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
    </section>
  );
}