"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer style={{backgroundImage:"url(/footerbg.jpg)"}} className="relative bg-cover  text-white pt-16 pb-10 px-6 md:px-12 overflow-hidden">

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-10 bg-[url('/wave.png')] bg-cover bg-center"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* BRAND */}
        <div>
           {/* LOGO */}
              <div className="flex items-center gap-3">
              <Image width={150} height={100} src="/logo.webp"></Image>
              </div>

          <p className="text-white/70 text-sm leading-relaxed mb-6">
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

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Solutions</li>
            <li className="hover:text-white cursor-pointer">Industries We Serve</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Latest Updates</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Dunnage Air Bags</li>
            <li>Container Void Fillers</li>
            <li>Air Column Bags</li>
            <li>Inflatable Packaging</li>
            <li>Protective Courier Bags</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Delivery</li>
            <li>FAQs</li>
            <li>Request a Quote</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>

          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Get in touch with us for customized packaging solutions and bulk 
            requirements. Our team is ready to assist you.
          </p>

          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Industrial Area, Delhi, India
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> sales@dunnagepro.com
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">
        © 2025 DunnagePro. All rights reserved.
      </div>
    </footer>
  );
}