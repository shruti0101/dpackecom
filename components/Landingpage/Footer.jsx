"use client";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer style={{ backgroundImage: "url(/footerbg.jpg)" }} className="relative bg-cover  text-white pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/wave.png')] bg-cover bg-center"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-3">
            <Image className="bg-white p-2" width={150} height={100} src="/logo-new.png"></Image>
          </div>

          <p className="text-white text-sm leading-relaxed mb-6">
            We provide high-quality dunnage bags and protective packaging solutions
            designed to secure cargo, prevent movement, and ensure safe transportation
            across all logistics environments.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <span className="text-sm">Follow :</span>

            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 hover:text-black transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="hover:text-white cursor-pointer"><Link href={"/"}>Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/products"}>Products</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/about"}>About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/contact"}>Contact Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/our-blogs"}>Our Articles</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/terms-conditions"}>Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/dunnage-bag"}>Dunnage Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/air-column-roll"}>Air Column Roll</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/air-column-bag"}>Air Column Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/packaging-air-bag"}>Packaging Air Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/gap-filler"}>Gap Filler</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>

          <p className="text-sm text-white mb-4 leading-relaxed">
            Get in touch with us for customized packaging solutions and bulk
            requirements. Our team is ready to assist you.
          </p>

          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-start gap-2">
              <MapPin size={16} /> Shakti Auto, Second Floor, 24/54B, <br /> Lala Ganesh Das Marg, Tilak Nagar, <br /> West Delhi New Delhi - 110018, Delhi, India
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> +91 76699 88825
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> dpacksolutionindia@gmail.com
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div>
          <h3 className="text-white font-semibold mb-3">Trust Elite</h3>
          <p className="text-base">
          We are proud to present the TrustElite Certificate of Excellence to D Pack, recognizing their commitment to exceptional customer service, outstanding business practices, and a dedication to building trust with their customers.
          </p>

          <div className="mt-4 flex justify-center md:justify-start">
            <img
              src="/TRUST-ELITE.webp"
              alt="Trust Seal"
              onClick={() => setOpen(true)}
              className="h-20 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

      </div>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full">

                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <img
                  src="/Dpack-1-1024x791.webp"
                  alt="Trust Seal Large"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">
        © 2025 DunnagePro. All rights reserved.
      </div>
    </footer>
  );
}