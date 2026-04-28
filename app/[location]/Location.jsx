"use client";
import { useParams } from 'next/navigation';
import React from 'react'
import Image from "next/image";
import Otherproduct from "@/components/Landingpage/Otherpro";
import Slidecat from "@/components/Landingpage/Slidecat";
import Categories from "@/components/Landingpage/Categories";
import { MdEmojiTransportation } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaCheckDouble } from "react-icons/fa6";
import { categories } from '@/Data';
import Form  from "./Form"





export default function Location() {

  const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
      const [status, setStatus] = useState("");

   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });
   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


 
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("Sending...");

  try {
    const formData = {
      platform: "DPACK Popup Form",
      platformEmail: "dpacksolutionindia@gmail.com",
      ...form, // ✅ all fields from state
      place: "N/A",
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData
    );

    if (data?.success) {
      setStatus("✅ Your enquiry has been submitted successfully!");

      const whatsappText = `Hi, I am ${form.name}.
Email: ${form.email}
Product: ${form.product}
Message: ${form.message}
Contact: ${form.phone}`;

      setTimeout(() => {
        window.open(
          `https://wa.me/917669988825?text=${encodeURIComponent(
            whatsappText
          )}`,
          "_blank"
        );
      }, 1000);

      // ✅ Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

      setTimeout(() => setOpen(false), 3000); // or setOpen(false)
    } else {
      setStatus("❌ Failed to send. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("❌ Server error. Try again later.");
  } finally {
    setLoading(false);
  }
};

  const products = [
    {
      img: "/air bubble roll/1.webp",
      img2: "/Dunnage2.jpg",
      hoverImg: '/360/Dunnage Air Bags/1.png',
      title: "Dunnage Air Bags",
      price: "Rs. 450.00",
      old: "Rs. 540.00",
      reviews: 22,
    },
    {
      img: "/air bubble roll/5.webp",
      img2: "/Dunnage2.jpg",
      hoverImg: '/360/PP Dunnage Bag/1.png',
      title: "PP Dunnage Bag",
      price: "Rs.575.00",
      old: "Rs. 669.00",
      reviews: 58,
      tag: "New",
    },
    {
      img: "/air bubble roll/8.webp",
      img2: "/Dunnage2.jpg",
      hoverImg: '/360/Square Dunnage Air Bags/1.png',
      title: "Square Dunnage Air Bags",
      price: "Rs. 349.00",
      old: "Rs. 439.00",
      reviews: 44,
    },
    {
      img: "/air bubble roll/10.webp",
      img2: "/columnroll.png",
      hoverImg: '/360/Perfume Packaging Air Column Roll/1.png',
      title: "Perfume Packaging Air Column Roll",
      price: "Rs. 341.00",
      old: "Rs. 459.00",
      reviews: 98,
    },
  ]

   const [openIndex, setOpenIndex] = useState(0);

 

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




     const faq = [
  {
    q: "What is a packing air bag used for?",
    a: "A packing air bag is used to protect products during storage, shipping, and transportation. It helps absorb shocks, reduce product movement, and minimize damage during transit. Businesses commonly use packing air bags for fragile, lightweight, and valuable goods."
  },
  {
    q: `Do you supply dunnage bags in bulk in ${cityName}?`,
    a: `Yes, Dpack is a trusted dunnage bag supplier in ${cityName} offering bulk quantities for logistics companies, exporters, manufacturers, and warehouses. As a reliable dunnage bag wholesaler, we provide quality products at competitive prices.`
  },
  {
    q: `Why choose Dpack as a packing air bag manufacturer in ${cityName}?`,
    a: `Dpack is a leading packing air bag manufacturer in ${cityName} known for premium quality products, affordable pricing, timely delivery, and custom packaging solutions. We help businesses reduce transit damage with durable packaging products.`
  },
  {
    q: "Can I get packing air bags in wholesale quantity?",
    a: `Yes, we are a dependable packing air bag wholesaler in ${cityName} supplying bulk orders to businesses of all sizes. Our wholesale packaging solutions are cost-effective and suitable for regular commercial use.`
  },
  {
    q: "Are air cushion bags suitable for fragile products?",
    a: `Yes, Dpack is a trusted air cushion bag manufacturer in ${cityName} offering protective packaging for delicate items such as electronics, glassware, cosmetics, and appliances. We are also a reliable air cushion bag supplier for bulk requirements.`
  },
  {
    q: "What are air column bags used for?",
    a: `Air column bags are used for 360-degree product protection during shipping. As an experienced air column bag manufacturer in ${cityName}, Dpack provides strong cushioning solutions for fragile and premium products.`
  },
  {
    q: `Do you offer fast delivery in ${cityName}?`,
    a: `Yes, as a professional packing air bag supplier in ${cityName}, we ensure fast and reliable delivery across ${cityName} and nearby regions for all bulk and custom packaging orders.`
  },
  {
    q: "How can I place an order with Dpack?",
    a: `You can contact Dpack directly for pricing, custom sizes, and bulk requirements. Whether you need a packing air bag manufacturer, dunnage bag supplier, or air column bag supplier in ${cityName}, our team is ready to assist you.`
  }
];
console.log(open)

    

    return (<>
   {open && <Form setOpen={setOpen} />}
        <section style={{ backgroundImage: "url('/banner/2.jpeg')" }}
            className="w-full h-[35vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

            <div className="relative text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                   Packing Air Bag Manufacturer in <span className='text-[#D95026]'> {cityName} </span>
                </h1>
            </div>
        </section>

       

<section className="bg-gray-100 text-gray-800">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-8 md::py-12 gap-10">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl">
      
      <h1 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight mb-4">
        Packing <span className='text-[#d95026]'>Air Bag</span> Manufacturer in {cityName}
      </h1>

      <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed mb-4">
        Dpack is a trusted name in protective packaging solutions, known as a leading packing air bag manufacturer in {cityName} and a reliable supplier of high-quality air packaging products. With a strong focus on innovation, quality, and customer satisfaction, we help businesses protect their goods during storage, handling, and transportation.
      </p>

      <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed mb-6">
        We specialize in manufacturing premium-grade dunnage bags, packing air bags, air cushion bags, and air column bags designed to minimize transit damage and improve packaging efficiency. As an experienced dunnage bag manufacturer in  {cityName}, we serve industries such as logistics, e-commerce, automotive, electronics, pharmaceuticals, and export businesses.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button 
          onClick={()=>setOpen(!open)}
          className="px-8 py-3 text-lg font-semibold rounded bg-[#d95026] text-white hover:scale-105 transition"
        >
          Get Quote
        </button>

        <a
          href="/contact"
          className="px-8 py-3 text-lg font-semibold border border-gray-800 rounded hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>
    </div>


   

    {/* RIGHT IMAGE */}
    <div className="relative w-full max-w-lg h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src="/cat/1.webp"
        alt="Packing Air Bag Manufacturer"
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>

  </div>
</section>


        <section className="bg-orange-200/60 md:py-6 px-4 text-center text-black">
  
  {/* TOP TEXT */}
  <p className="text-red-600 text-lg font-semibold leading-5 mb-4 md:mb-2">
    Contact Dpack today and get the best protective packaging solutions for your business.
  </p>

  {/* HEADING */}
  <h1 className="text-[clamp(28px,5vw,35px)] leading-tight font-bold mb-2 md:mb-4">
    High-Quality Packing Air Bags & Protective Packaging Solutions
  </h1>

  {/* DESCRIPTION */}
  <p className="max-w-3xl mx-auto text-black mb-8">
    Whether you need secure packaging for shipping, storage, or transportation, 
    Dpack offers premium <b>packing air bags, dunnage bags, air cushion bags,</b> 
    and <b>air column bags</b>. Fill out the form below and our team will get in 
    touch within 24 hours with the right solution for your business.
  </p>

  {/* FORM */}
  <form
    onSubmit={handleSubmit}
    className="max-w-6xl mx-auto grid text-black grid-cols-1 md:grid-cols-5 gap-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="border border-black  placeholder:text-black  p-3 rounded-lg w-full"
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      className="border border-black  placeholder:text-black  p-3 rounded-lg w-full"
      onChange={handleChange}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      className="border border-black p-3 placeholder:text-black rounded-lg w-full"
      onChange={handleChange}
    />

    {/* DROPDOWN */}
    <select
      name="product"
      className="border border-black p-3 rounded-lg w-full text-black"
      onChange={handleChange}
    >
      <option value="">Select Product</option>

      {categories.map((item, i) => (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>

    {/* BUTTON */}
    <button
      type="submit"
      disabled={loading}
      className="bg-[#D95026] text-white font-semibold rounded-lg px-6 py-3  transition"
    >
      {loading ? "Sending..." : "Send a Qoute"}
    </button>
  </form>
</section>


<section className='max-w-7xl mx-auto'>

<Otherproduct></Otherproduct>
</section>
<section className="bg-white  pb-4  px-4">
  <div className="max-w-5xl mx-auto text-center">

    <h1 className="text-[clamp(34px,7vw,70px)] font-bold text-gray-900 mb-1 md:mb-3">
      Our Mission
    </h1>
<div className='text-start md:text-center'>
    <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed text-gray-600 mb-4">
      At Dpack, our mission is to deliver reliable and eco-friendly packaging products that ensure product safety while reducing shipping losses. Whether you need a trusted air cushion bag supplier in  {cityName} or an expert air column bag manufacturer in  {cityName}, Dpack is committed to delivering excellence with every order.
    </p>

    <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed text-gray-600">
      Our modern production processes and strict quality standards make us a preferred packing air bag supplier and wholesaler in  {cityName}. We provide durable, lightweight, and cost-effective packaging solutions in bulk quantities to meet the growing needs of businesses of all sizes.
    </p>
</div>
  </div>
</section>

<section className='max-w-7xl mx-auto'>

<Slidecat></Slidecat>
</section>


    <section className="bg-[#D95026] text-white py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-3 md:gap-10">

        <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px]">
          <Image
            src="/newBanner.jpeg" 
            alt="Packaging Solutions"
            fill
            className="object-fit rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[clamp(28px,4vw,40px)] font-bold mb-1 md:mb-3">
            Get Premium Packaging Solutions in  {cityName}
          </h2>

          <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed mb-4">
            Looking for a trusted packing air bag manufacturer in  {cityName}? Dpack offers high-quality dunnage bags, air cushion bags, and air column bags at competitive prices.
          </p>

          <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed mb-6">
            Contact us today for bulk orders, custom packaging solutions, and reliable supply across  {cityName}.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button
              onClick={()=>setOpen(!open)}
              className="bg-white text-[#0a1a3c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request a Quote
            </button>

            <a
              href="tel:+7669988825"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0a1a3c] transition"
            >
              Call Now
            </a>

          </div>
        </div>

        
        

      </div>

      
    </section>

    <section className="text-gray-600 body-font bg-gray-50">
  <div className="container px-5 py-6  mx-auto">

    {/* HEADING */}
    <div className="text-center mb-12">
      <h2 className="text-[clamp(24px,4vw,40px)] font-bold text-gray-900 mb-4">
        Why Businesses Trust Dpack as a Packing Air Bag Manufacturer in  {cityName}
      </h2>

      <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed max-w-3xl mx-auto">
        Dpack is a trusted name for businesses looking for reliable protective packaging solutions in  {cityName}
        . As a leading packing air bag manufacturer in  {cityName}, we focus on delivering high-quality products that help keep goods safe during storage and transportation. Our commitment to quality, affordability, and timely service makes us the preferred choice for many industries.
      </p>

      <p className="text-[clamp(14px,1.5vw,18px)] leading-relaxed max-w-3xl mx-auto mt-4">
        We understand that every business has different packaging needs, which is why we offer customized solutions along with bulk supply capabilities. Whether you need dunnage bags, air cushion bags, or air column bags, Dpack ensures durable products and dependable support.
      </p>
    </div>

    {/* FEATURES GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

  {[
    "Premium quality packaging products made from durable materials",
    "Competitive wholesale pricing for bulk orders",
    "Large-scale supply capabilities for all business sizes",
    `Fast and reliable delivery across  ${cityName}`,
    "Custom sizes and packaging options available",
    "Strong quality control for consistent performance"
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-4 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start"
    >

      {/* ICON */}
      <FaCheckDouble
        size={30} // ✅ 30px size
        className="text-[#D95026] mb-2 sm:mb-0 sm:mr-4 flex-shrink-0"
      />

      <span className="text-gray-800 font-medium leading-relaxed">
        {item}
      </span>

    </div>
  ))}

</div>

   

  </div>
</section>

<section className='max-w-7xl mx-auto'>
   <Categories />
  </section> 



  <section className="bg-gray-50 py-2 md:py-4  px-4">
  <div className="max-w-6xl mx-auto text-center">

    

    {/* HEADING */}
    <h2 className="text-[clamp(24px,4vw,40px)] font-bold mt-4 md:mt-1 text-gray-900">
      Industries We Serve in  {cityName}
    </h2>

    {/* DESCRIPTION */}
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-[clamp(14px,1.5vw,18px)]">
      Dpack provides reliable protective packaging solutions for a wide range of industries in  {cityName}. As a trusted packing air bag manufacturer in  {cityName}, we understand the packaging challenges faced by different businesses and deliver products that ensure safety during storage, handling, and transportation.
    </p>

    <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-[clamp(14px,1.5vw,18px)]">
      Our high-quality dunnage bags, air cushion bags, and air column bags are widely used by companies that require secure and efficient packaging solutions. We offer bulk supply, custom options, and timely delivery to meet industry-specific needs.
    </p>

    {/* MINI CARDS GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-2 md:gap-4 mt-6">

      {[
        {
          title: "Logistics & Transportation",
          desc: "Secure cargo during transit and reduce movement damage.",
          icon: <MdEmojiTransportation size={30} />
        },
        {
          title: "E-commerce & Retail",
          desc: "Protect fragile and valuable products during delivery."
          ,
          icon: <FaCartShopping size={30} />
        },
        {
          title: "Electronics & Appliances",
          desc: "Cushion sensitive devices and prevent impact damage."
          ,
          icon: <FaLaptop size={30} />
        },
        {
          title: "Automotive Parts",
          desc: "Safe packaging for spare parts and components."
          ,
          icon: <IoSettings size={30} />
        },
        {
          title: "Pharmaceuticals",
          desc: "Reliable packaging for delicate and essential products."
          ,
          icon: <GiMedicines size={30} />
        },
        {
          title: "Warehousing & Storage",
          desc: "Added protection for stored inventory and goods."
          ,
          icon: <FaWarehouse size={30} />
        },
        {
          title: "Manufacturing Units",
          desc: "Secure finished products during shipment."
          ,
          icon: <MdPrecisionManufacturing size={30} />
        },
        {
          title: "Export & Import",
          desc: "Strong packaging solutions for domestic and international transport."
          ,
          icon: <FaTruck size={30} />
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-3 md:p-6 flex flex-col justify-center items-center rounded-xl shadow-sm hover:shadow-md transition text-center border"
        >
          {/* ICON */}
          <div className="w-15 h-15 p-3 flex  items-center justify-center rounded-full bg-[#D95026]/10 text-[#D95026] mb-4">
           {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 h-full items-center text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* FOOT NOTE */}
    <p className="mt-5 md:mt-5 text-gray-600 max-w-3xl mx-auto text-[clamp(16px,1.5vw,18px)]">
      With quality products and dependable service, Dpack is the preferred packaging partner for businesses across multiple industries in  {cityName}.
    </p>

  </div>
</section>

<section className='max-w-7xl mx-auto'>
   <div className="bg-gray-50 py-10 lg:px-15 px-4">
         <div className="flex items-center justify-between mx-auto mb-4">
           <h2 className="text-3xl font-semibold relative">
             <span className="relative z-10">Featured Products</span>
             {/* <Image height={100} width={100} src="/heading_shapes.png" className="absolute -left-6 -top-4 w-54 h-14 border-2  rounded-full z-20"></Image> */}
           </h2>
   
           <Link href="/products" className="text-sm hover:text-blue-600 text-gray-800 cursor-pointer hover:underline">
             View All →
           </Link>
         </div>
   
         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
           {products.map((item, i) => (
             <SwiperSlide key={i}>
               <div onClick={() => { setSelected(item); setActiveImg(item.img); }}
                 className="group bg-white h-96 rounded-2xl p-4 shadow-md hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
                 {/* IMAGE BOX */}
                 <div className="relative bg-[#F6F6F6] rounded-xl h-[300px] flex items-center justify-center overflow-hidden">
                   {/* NEW TAG */}
                   {item.tag && (
                     <span className="absolute top-10 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                       {item.tag}
                     </span>
                   )}
   
                   {/* 🔥 IMAGE SWITCH */}
                   <div className="relative w-full h-full">
                     {/* MAIN IMAGE */}
                     <Image
                       src={item.img}
                       alt="loading"
                       width={500}
                       height={500}
                       className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                     />
   
                     {/* HOVER IMAGE */}
                     <Image
                       src={item.hoverImg}
                       alt="loading"
                       width={900}
                       height={500}
                       className="object-contain absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125"
                     />
   
                   </div>
                   {/* HOVER OVERLAY */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
                     <div className="flex gap-3 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                       <button
                         onClick={() => {
                           setSelected(item);
                           setActiveImg(item.img);
                         }}
                         className="w-10 h-10 bg-white cursor-pointer flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition"
                       >
                         <Eye size={18} />
                       </button>
   
                     </div>
   
                   </div>
                 </div>
   
                 {/* CONTENT */}
                 <div className="mt-4">
                   <h3 className="text-[15px] font-semibold text-gray-800 leading-tight group-hover:text-orange-500 transition">
                     {item.title}
                   </h3>
   
                   {/* RATING */}
                   <div className="flex items-center gap-1 mt-2 text-orange-500">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={15} fill="orange" />
                     ))}
                     <span className="text-gray-500 text-sm ml-1">
                       ({item.reviews} Reviews)
                     </span>
                   </div>
                 </div>
               </div>
             </SwiperSlide>
           ))}
   
         
         </div>
       </div>
</section>

      <section className='max-w-7xl mx-auto py-2 mt-5'>
        <div className="max-w-5xl  md:py-12 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-[#0a1a3c] rounded-2xl p-5 md:p-10 text-white">
                      <div>
                          <h1
                              className="text-3xl md:text-5xl md:leading-[60px] font-semibold ">
                              Ready to Protect Your Products?
                          </h1>
                          <p className="text-xl">
                              Get in touch today for bulk supply, custom requirements, and the best pricing in  {cityName}.
                          </p>
                      </div>
                      <a href='/contact' className="px-6 py-3 text-slate-800 bg-white rounded-full text-sm mt-4">
                          Contact us
                      </a>
                  </div>
      </section>

         <section className="w-full py-3 md:py-6 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 md:mt-4">
            Everything you need to know about our packaging solutions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">

          {faq.map((item, i) => (

            <div
              key={i}
              className="border rounded-2xl overflow-hidden transition bg-[#FAFAFA]"
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.q}
                </span>

                <span className="text-orange-500 text-2xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  

    </>)
}
