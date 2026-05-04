"use client";
import Link from "next/link";
import Image from "next/image";


const articles = [
  {
    id: 1,
    title: "How Air Cushion Bags Reduce Packaging Costs",
    img: "/blog1.jpg",
    link:"/our-blogs/how-air-cushion-bags-reduce-packaging-costs",
    date: "April 27, 2026",
 
  },
  {
    id: 2,
    title: "Why Dpack is a Trusted Packing Air Bag Manufacturer in India",
    img: "/blog2.jpg",
link:"/our-blogs/why-dpack-trusted-packing-air-bag-manufacturer-india",
    date: "April 20, 2026",
  
  },
  {
    id: 3,
    title: "Best Air Column Bag Manufacturer in India – Dpack",
    img: "/blog3.jpg",
 link:"/our-blogs/best-air-column-bag-manufacturer-india-dpack",
    date: "April 20, 2026",
  
  },

];

export default function ArticlesSection() {
  return (
    <section className="w-full bg-slate-100 py-12 px-4 md:px-10 lg:px-20">

      {/* HEADER */}
      <div className="flex items-center justify-between max-w-[1250px] mx-auto mb-6">
        <h2 className="text-4xl font-semibold relative">
          <span className="relative z-10">Our News & Articles</span>
          <Image height={100} width={100} src="/heading_shapes.png" className="absolute -left-6 -top-4 w-54 h-14 border-2  rounded-full z-20"></Image>
        </h2>


        <div className="text-md text-black cursor-pointer">
          View All →
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item) => (
          <Link
          href={item.link}
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
          >

            {/* IMAGE */}
            <div className="relative h-[220px] overflow-hidden">

              <Image
                src={item.img}
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

         
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* META */}


              {/* TITLE */}
              <h3 className="text-[16px] font-semibold leading-snug mb-4 group-hover:text-orange-500 transition">
                {item.title}
              </h3>

              {/* FOOTER */}
              <div className="flex justify-between items-center">

                <button className="text-sm text-gray-700 hover:text-black flex items-center gap-1">
                  Read More →
                </button>



              </div>

            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}