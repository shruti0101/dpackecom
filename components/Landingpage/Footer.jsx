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
import Link from "next/link";
export default function Footer() {

  const cat = [
    { name: "Dunnage Bag", link: "/categories/dunnage-bag" },
    { name: "Air Column Roll", link: "/categories/air-column-roll" },
    { name: "Air Column Bag", link: "/categories/air-column-bag" },
    { name: "Packaging Air Bag", link: "/categories/packaging-air-bag" },
    { name: "Gap Filler", link: "/categories/gap-filler" },
  ]
  return (
    <footer style={{ backgroundImage: "url(/footerbg.jpg)" }} className="relative bg-cover  text-white pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/wave.png')] bg-cover bg-center"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white cursor-pointer"><Link href={"/"}>Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/products"}>Products</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/about"}>About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/contact"}>Contact Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/our-blogs"}>Our Articles</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/dunnage-bag"}>Dunnage Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/air-column-roll"}>Air Column Roll</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/air-column-bag"}>Air Column Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/packaging-air-bag"}>Packaging Air Bag</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/categories/gap-filler"}>Gap Filler</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-white cursor-pointer"><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/terms-conditions"}>Terms & Conditions</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href={"/contact"}>Request a Quote</Link></li>
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