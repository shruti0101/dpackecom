"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Popup2({
  isOpen,
  onClose,
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10 digit phone number");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const formData = {
        platform: "DPACK Popup Form",
        platformEmail: "dpacksolutionindia@gmail.com",
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
        setStatus("success");

        const whatsappText = `Hi, I am ${name}
Email: ${email}
Product: ${product}
Message: ${message}
Phone: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/917669988825?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 700);

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => {
          onClose();
          setStatus("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex justify-center items-center px-4">

      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl hover:text-orange-500"
        >
          ✕
        </button>

        <h2 className="text-center text-3xl font-bold">
          Get In Touch With Us
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-3 mb-8" />

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div className="grid md:grid-cols-2 gap-4">

            <input
              required
              value={name}
              disabled={loading}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              className="border-2 rounded-lg p-3"
            />

            <select
              required
              value={product}
              disabled={loading}
              onChange={(e)=>setProduct(e.target.value)}
              className="border-2 rounded-lg p-3"
            >
              <option value="">Select Product</option>
              <option>Dunnage Bag</option>
              <option>Air Column Roll</option>
              <option>Air Column Bag</option>
              <option>Packaging Air Bag</option>
              <option>Gap Filler</option>
            </select>

          </div>

          <input
            required
            maxLength={10}
            value={phone}
            disabled={loading}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border-2 rounded-lg p-3"
          />

          <input
            type="email"
            required
            value={email}
            disabled={loading}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border-2 rounded-lg p-3"
          />

          <textarea
            required
            value={message}
            disabled={loading}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Message"
            className="w-full border-2 rounded-lg p-3 h-32"
          />

          <button
            disabled={loading}
            className="
              w-full
              py-3
              rounded-lg
              text-white
              bg-orange-600
              hover:bg-orange-700
            "
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">
              Enquiry submitted successfully
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center">
              Failed to submit
            </p>
          )}

        </form>

      </div>

    </div>
  );
}