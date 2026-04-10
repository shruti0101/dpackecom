"use client";
import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "DPACK Contact Page",
      platformEmail: "dpacksolutionindia@gmail.com",
      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: 'NA',
      phone: formData.get("phone"),
      product: "Dunnage Bag",
      place: formData.get("city"),
      message: formData.get("message"),
    };
    if (!data.phone || data.phone.length < 10) return alert("Enter Valid Phone Number");

    try {
      setLoading(true);
      const res = await axios.post("https://brandbnalo.com/api/form/add", data,
        { validateStatus: (status) => status >= 200 && status < 500 }
      );
      if (res.status >= 200 && res.status < 300) {
        setSubmitted(true);
        setTimeout(() => {
          e.target.reset();      // reset after UI change
        }, 100);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      console.log("ERROR:", err?.response || err.message);
      alert("Something went wrong");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        style={{ backgroundImage: "url('/banner/1.jpeg')" }}
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Leading Dunnage Bag & Construction Equipment Manufacturer in India
          </p> */}
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Phone */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <Phone size={38} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg">+91 7669988825</p>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-red-600 p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <Mail size={38} className="mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Email Address
            </h3>
            <p className="text-gray-800 text-lg">
              dpacksolutionindia@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <MapPin size={38} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-sm leading-relaxed">
              Shakti Auto, Second Floor, 24/54B,<br />
              Lala Ganesh Das Marg, Tilak Nagar,<br />
              West Delhi New Delhi - 110018, Delhi, India
            </p>
          </div>

        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-amber-600">
                  🎉 Thank You!
                </h2>
                <p className="text-gray-800 mt-2">
                  Your enquiry has been submitted successfully.
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3C2012] mb-4 text-center">
                  Contact Us
                  <div className="w-20 h-1 bg-amber-500 mx-auto mt-1 rounded"></div>
                </h2>

                <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="Your Name"
                    className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="tel"
                    name="city"
                    placeholder="Enter Your City"
                    className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Requirement"
                    className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                  ></textarea>

                  <button type="submit" disabled={loading} className="bg-[#3C2012] text-white py-3 rounded-md hover:bg-amber-600 transition duration-300">
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border">
            {/* <iframe
              src="https://www.google.com/maps?q=Wazirpur%20Industrial%20Area%20Delhi&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448464.0016371671!2d77.186946!3d28.581021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0514d5bc617f%3A0x956288c4b1ee3c64!2sDpack!5e0!3m2!1sen!2sus!4v1775736735172!5m2!1sen!2sus"
              className="w-full h-[500px]" allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}