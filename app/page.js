import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import  Slidecat  from "@/components/Landingpage/Slidecat";
import Cta from "@/components/Landingpage/Cta";


import Faq from "@/components/Landingpage/Blogdesign";
import TestimonialSlider from "@/components/Landingpage/Testimonials";

// import Popup from "@/components/Popup";
// import CityPage from "../components/City";

import Otherproduct from "@/components/Landingpage/Otherpro";

import Loactions from "@/components/Locations";



export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero />
  
      <About />
           <Slidecat></Slidecat>
         <Categories />
               <Otherproduct></Otherproduct>
    
      <Cta></Cta>
  
      
  
  
 
     
  

   

   

    
   

        <TestimonialSlider></TestimonialSlider>
       <Faq></Faq>
    </>
  );
}
