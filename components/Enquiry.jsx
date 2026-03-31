"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm({ isOpen, onClose }) {

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => onClose();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        {
          platform: "Sangam Garbage Bag enquiry Form",
          platformEmail: "info@polywell.co.in",
          name,
          phone,
          email,
          place: "N/A",
          product,
          message,
        }
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/+919810057441?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        form.reset();

        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
        }, 4000);
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        className="relative rounded-3xl shadow-2xl p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/bag/descbg.png)" }}
      >
        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

        <div className="relative z-10">
          <button
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
            onClick={handleClose}
          >
            ✕ 
          </button>

          <h2 className="text-center text-white text-xl md:text-3xl font-semibold">
            Get In Touch With Us
          </h2>
          <div className="w-28 h-[4px] bg-cyan-600 mx-auto mt-3 mb-8 rounded-full"></div>

          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={loading}
                  className="w-1/2 p-3 placeholder-white rounded-md text-white border-2 border-white bg-transparent focus:outline-none"
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

              <div className="flex items-center rounded-md border-2 border-white overflow-hidden">
            
                <span className="ml-1">🇮🇳</span>
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  required
                  disabled={loading}
                  placeholder="08123456789"
                  className="w-full p-3 bg-transparent text-white focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                disabled={loading}
                placeholder="Email"
                className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white focus:outline-none"
              />

              <textarea
                name="message"
                required
                disabled={loading}
                placeholder="Message"
                className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white h-28 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] rounded-md font-semibold text-white shadow-md"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <p className="text-center text-white font-semibold text-lg">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
