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
              Return & Refund Policy
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
              <span className="text-lg uppercase tracking-[4px] text-orange-500 font-semibold">
                Dpack
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                Refund & Return Policy
              </h1>

              <div className="w-20 h-[3px] bg-orange-500 mx-auto rounded-full mt-4"></div>

              <p className="text-gray-600 mt-5 text-sm md:text-lg leading-7 max-w-3xl mx-auto">
                At Dpack, customer satisfaction is our priority. We aim to
                deliver high-quality packaging products with complete
                reliability and support. Please read our refund and return
                policy carefully before placing an order.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-5">
              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  1. Return Eligibility
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Product received damaged or defective</li>
                  <li>Incorrect item delivered</li>
                  <li> Return request raised within 48 hours</li>
                  <li> Proper proof such as images/videos required</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  2. Non-Returnable Products
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Customized or made-to-order products</li>
                  <li> Used or damaged items after delivery</li>
                  <li> Improperly handled products</li>
                  <li> Bulk orders processed as per specifications</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  3. Return Process
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Contact support via email or phone</li>
                  <li> Share invoice and issue proof</li>
                  <li> Product verification by our team</li>
                  <li> Approved returns processed accordingly</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  4. Refund Policy
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Refunds processed after inspection approval</li>
                  <li> Processing time: 5–7 business days</li>
                  <li> Amount credited to original payment method</li>
                  <li> Refund status shared via email/phone</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  5. Replacement Policy
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Replacement available for defective products</li>
                  <li> Subject to stock availability</li>
                  <li> Verification required before approval</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  6. Shipping Responsibility
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Dpack covers shipping for company-side errors</li>
                  <li> Customer bears shipping in other cases</li>
                  <li> Shipping charges are non-refundable</li>
                </ul>
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  7. Order Cancellation
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm md:text-lg leading-7">
                  <li> Orders can be cancelled before dispatch</li>
                  <li> No cancellation after shipment dispatch</li>
                  <li> Cancellation approval depends on order status</li>
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
