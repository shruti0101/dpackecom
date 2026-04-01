import About from "@/components/Landingpage/About";

export default function AboutSection() {


 const features = [
    {
      title: "10+ Years of Industry Experience",
      desc: "With over a decade of expertise, we understand packaging challenges and provide solutions that ensure maximum product protection.",
    },
    {
      title: "Trusted Manufacturer & Supplier",
      desc: "We are a reliable Packaging Air Bag Manufacturer, Supplier, and Wholesaler, known for consistent quality and dependable service.",
    },
    {
      title: "Premium Quality Materials",
      desc: "Our Packaging Air Bags, including Air Cushion Bags, Dunnage Air Bags, and Air Column Bags, are made using high-grade materials for durability and performance.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "We offer affordable packaging solutions that help reduce damage, minimize losses, and optimize shipping costs.",
    },
    {
      title: "Customized Packaging Options",
      desc: "We provide tailored solutions to meet specific packaging requirements across different industries.",
    },
    {
      title: "Timely Delivery & Support",
      desc: "Our efficient supply chain ensures on-time delivery, backed by responsive customer support for a smooth experience.",
    },
  ];


  const features2 = [
    {
      title: "High Strength & Durable Packaging Solutions",
      desc: "Our Packaging Air Bags and Dunnage Air Bags are made from high-quality materials, ensuring excellent strength and durability for securing cargo and protecting products during transit.",
    },
    {
      title: "Superior Cushioning with Air Cushion Bags & Air Column Bags",
      desc: "Our Air Cushion Bags and Air Column Bags provide exceptional shock absorption, protecting fragile items from impact, vibration, and external pressure.",
    },
    {
      title: "Lightweight & Cost-Efficient Air Packaging",
      desc: "All our Packaging Air Bags, including Air Tube Bag Packaging and Air Column Packaging Rolls, are lightweight, helping reduce shipping costs while maintaining strong protective performance.",
    },
    {
      title: "Easy-to-Use & Quick Inflation Technology",
      desc: "Our Air Cushion Bags and Air Tube Bag Packaging solutions are designed for quick inflation and easy handling, improving packaging speed and operational efficiency.",
    },
    {
      title: "Eco-Friendly & Recyclable Materials",
      desc: "Our Packaging Air Bags and Air Column Bags are made using recyclable materials, making them an environmentally responsible choice for modern businesses.",
    },
    {
      title: "Versatile Applications Across Industries",
      desc: "From Dunnage Air Bags for logistics to Air Column Bags for laptops and electronics, our solutions are suitable for e-commerce, manufacturing, automotive, and fragile product packaging.",
    },
  ];

  return (

    <>
    
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          10+ Years of Industry Experience
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          At <span className="font-semibold text-gray-900">D Pack</span>, we appreciate your trust in choosing us as your packaging solutions partner. Supporting your business with dependable and innovative products is something we take great pride in.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          With over 10 years of experience, we specialize in manufacturing high-performance Packaging Air Bags, including Air Cushion Bags, Dunnage Air Bags, and Air Column Bags.
        </p>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Our goal is to deliver packaging solutions that ensure maximum protection, efficiency, and cost savings for your business.
        </p>

        {/* Grid Sections */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Journey */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Our Journey
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Over the years, D Pack has built a strong reputation as a trusted Packaging Air Bag Manufacturer, Supplier, and Wholesaler. Driven by innovation and consistency, we have expanded our product range from Air Column Packaging Rolls to advanced Air Tube Bag Packaging, serving multiple industries with reliable solutions.
            </p>
          </div>

          {/* Customer Commitment */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Customer Commitment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Customer satisfaction is at the core of our business. We work closely with our clients to understand their needs and deliver customized packaging solutions that improve product safety and efficiency. Our commitment to quality and service helps us build long-term relationships.
            </p>
          </div>

          {/* Quality Standards */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Quality Standards
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We follow strict quality control processes to ensure every product meets high-performance standards. Our Packaging Air Bags, including Air Cushion Bags, Dunnage Bags, and Air Column Bags, are made using premium materials and advanced technology to ensure durability and reliability.
            </p>
          </div>

        </div>
      </div>
    </section>

            <About />


  <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose D Pack as Your Packaging Air Bag Partner
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          At D Pack, we are committed to delivering reliable, high-quality packaging solutions that meet the evolving needs of modern businesses. Our focus on innovation, quality, and customer satisfaction makes us a trusted choice in the industry.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features2.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


<section className="bg-white py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Features of Our Packaging Air Bags
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
            Designed for protection, efficiency, and reliability across all packaging needs.
          </p>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-6">
          {features2.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition text-center"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-full bg-orange-600 text-white text-sm font-semibold">
                {index + 1}
              </div>

              <h3 className="text-md font-semibold text-black mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-black leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    </>
  );
}