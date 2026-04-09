import React from "react";

const Cta = () => {
  return (
    <section style={{ backgroundImage: "url(/cta.png)" }}
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center px-6"
    >
      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center">
        <h2 className="text-black text-3xl md:text-5xl font-semibold mb-4 leading-snug">
          Elevate Your Packaging Experience
        </h2>

        <p className="text-black/80 text-base md:text-lg mb-10 max-w-3xl">
          Discover premium dunnage bags and protective packaging solutions
          designed for safety, durability, and performance.
        </p>

        <a target="black" href="tel:+917669988825" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition text-sm md:text-base font-medium">
          Get Started →
        </a>
      </div>
    </section>
  );
};

export default Cta;