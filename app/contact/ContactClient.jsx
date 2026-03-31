"use client";

import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = {
        platform: "Kapmix Machinery Contact Form",
        platformEmail: "info@kapmix.com",
        name,
        phone,
        email,
        city,
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("success");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
City: ${city}
Message: ${message}
Contact: ${phone}`;

        window.open(
          `https://wa.me/919810057441?text=${encodeURIComponent(
            whatsappText
          )}`,
          "_blank"
        );

        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/Anti-smog-gun-copy.jpg')" }}
        className="w-full h-[60vh] md:h-[85vh] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact Kapmix Machinery
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Leading Anti Smog Gun & Construction Equipment Manufacturer in India
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-16 px-6 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Phone */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <Phone size={38} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg">+91-9810057441</p>
            <p className="text-lg">+91-9810026034</p>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-red-600 p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <Mail size={38} className="mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Email Address
            </h3>
            <p className="text-gray-800 text-lg">
              info@kapmix.com
            </p>
          </div>

          {/* Address */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
            <MapPin size={38} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Factory Address</h3>
            <p className="text-sm leading-relaxed">
              Kapmix Machinery Pvt. Ltd. <br />
              Wazirpur Industrial Area, <br />
              New Delhi – 110052, India
            </p>
          </div>

        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send Your Requirement
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <select
                  className="border rounded-lg px-4 py-3 w-full bg-red-600 text-white font-semibold"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                >
                  <option value="">Select Product</option>
                  <option value="Anti Smog Gun">Anti Smog Gun</option>
                  <option value="Truck Mounted Smog Gun">Truck Mounted Smog Gun</option>
                  <option value="Industrial Dust Suppression">Dust Suppression System</option>
                </select>
              </div>

              <input
                type="email"
                required
                placeholder="Email Address"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 transition text-white px-6 py-3 rounded-xl font-semibold w-full shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-semibold">
                  ✅ Thank you! We will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold">
                  ❌ Something went wrong. Try again.
                </p>
              )}

            </form>
          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border">
            <iframe
              src="https://www.google.com/maps?q=Wazirpur%20Industrial%20Area%20Delhi&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}