import React from "react";

const Cta = () => {
  return (
    <section
      style={{ backgroundImage: "url(/cta.png)" }}
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center px-6"
    >
   

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h2 className="text-black text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Elevate Your Packaging Experience
        </h2>

        <p className="text-black/80 text-sm md:text-base mb-6">
          Discover premium dunnage bags and protective packaging solutions
          designed for safety, durability, and performance.
        </p>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition text-sm md:text-base font-medium">
          Get Started →
        </button>

      </div>
    </section>
  );
};

export default Cta;