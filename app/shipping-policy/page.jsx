import React from "react";

const page = () => {
  return (
    <>
      <div>
        <section
          style={{ backgroundImage: "url('/banner/1.jpeg')" }}
          className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

          <div className="relative text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Shipping Policy
            </h1>
            {/* <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Leading Dunnage Bag & Construction Equipment Manufacturer in India
          </p> */}
          </div>
        </section>

        <section className="bg-white py-7 md:py-10">
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            {/* Heading */}
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[4px] text-orange-500 font-semibold">
                Dpack   
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                Shipping Policy
              </h1>

              <div className="w-20 h-[3px] bg-orange-500 mx-auto rounded-full mt-4"></div>

              <p className="text-gray-600 mt-5 text-sm   md:text-lg leading-7 max-w-3xl mx-auto">
                At Dpack, we are committed to ensuring timely and secure
                delivery of all packaging products across India. Please read our
                shipping policy carefully for information related to order
                processing, delivery timelines, and shipping responsibilities.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-5">
              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  1. Order Processing
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>  All orders are processed after payment confirmation</li>
                  <li>  Standard processing time is 2–5 business days</li>
                  <li>
                      Bulk or custom orders may require extra processing time
                  </li>
                  <li>  Customers will be informed in case of delays</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  2. Shipping & Delivery Time
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>
                      Delivery timelines depend on location and order size
                  </li>
                  <li>  Metro cities: 3–7 business days</li>
                  <li>  Other locations: 7–14 business days</li>
                  <li>  Remote areas may require additional delivery time</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  3. Shipping Charges
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>
                      Shipping charges depend on product quantity and size
                  </li>
                  <li>  Charges may vary based on delivery location</li>
                  <li>
                      Final shipping cost is shared during checkout/order
                    confirmation
                  </li>
                  <li>  Extra handling charges may apply for bulk shipments</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  4. Delivery Method
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>
                      Orders are shipped through trusted logistics partners
                  </li>
                  <li>  Safe packaging is ensured before dispatch</li>
                  <li>
                      Large orders may be transported via specialized carriers
                  </li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  5. Order Tracking
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>  Tracking details are shared after dispatch</li>
                  <li>  Customers may receive updates via email or phone</li>
                  <li>  Tracking availability depends on courier service</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  6. Delivery Guidelines
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>  Customers should inspect packages upon delivery</li>
                  <li>
                      Delivery assistance such as unloading may not be included
                  </li>
                  <li>  Visible damage should be reported immediately</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  7. Damaged or Delayed Shipments
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>
                      Damaged shipments must be reported within 24–48 hours
                  </li>
                  <li>  Photos or videos may be required for verification</li>
                  <li>  Delivery delays due to external factors may occur</li>
                  <li>
                      Dpack is not responsible for delays caused by natural
                    events or transport disruptions
                  </li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  8. Service Availability
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm   md:text-lg leading-7">
                  <li>
                      Shipping services are available across most Indian
                    locations
                  </li>
                  <li>
                      Certain remote areas may have limited delivery service
                  </li>
                  <li>
                      Customers can contact us for shipping availability details
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 md:p-7 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>

                <p className="text-gray-600 text-sm   md:text-lg leading-7 mb-5">
                  For shipping, delivery, or order tracking related queries,
                  feel free to contact our support team.
                </p>

                <div className="space-y-2 text-gray-700 text-sm   md:text-lg">
                  <p>
                    <span className="font-semibold">Company:</span> Dpack
                      
                  </p>

                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    dpacksolutionindia@gmail.com
                  </p>

                  <p>
                    <span className="font-semibold">Phone:</span> +91 76699 88825
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
