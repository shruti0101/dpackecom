"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Sangam Garbage Bag popup Form",
        platformEmail: "info@polywell.co.in",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/919810057441?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => setIsOpen(false), 3000);
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div
        className="relative rounded-3xl shadow-2xl p-10 max-w-sm md:max-w-2xl text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/bag/try2.webp)" }}
      >



        {/* Close button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide">
          Get In Touch With Us
        </h2>
        <div className="w-28 h-[4px] bg-blue-600 mx-auto mt-3 mb-8 rounded-full"></div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-1/2 p-3 rounded-md text-black text-sm border border-black border-2 bg-blue-50 focus:outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
     <select
                  name="products"
                  required
                  disabled={loading}
                  defaultValue=""
                  className="w-1/2 p-3 rounded-md text-black text-sm border-2 focus:outline-none bg-blue-50"
                >
                  <option value="">Select Product</option>
              <option value="Black Garbage Bags">Biodegradable Garbage Bags</option>
                  <option value="Green Garbage Bags">Disposable Garbage Bags</option>
                  <option value="Biomedical Waste Bags">Biomedical garbage bags</option>
                </select>
          </div>

          <div className="flex items-center bg-white rounded-md border border-black border-2 overflow-hidden">
            
            <span className="text-lg">🇮🇳</span>
            <input
              type="tel"
              name="phone"
              maxLength={10}
              placeholder="081234 56789"
              className="w-full bg-blue-50 p-3 text-black text-sm focus:outline-none border-0"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none bg-blue-50"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full bg-blue-50 p-3 rounded-md text-black text-sm border-black border-2 focus:outline-none h-28 resize-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center text-sm mt-2 font-medium ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
