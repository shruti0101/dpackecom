import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


import Whatsapp from "@/components/Whatsapp";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Packaging Air Bag Manufacturer & Supplier | Air Column & Dunnage Bags | Dpack",
  description:
    "Leading packaging air bag supplier & wholesaler of air cushion bags, air column packaging, dunnage bags & laptop air bags. Durable, cost-effective solutions by Dpack.",
  icons: {
    icon: "/logo-new.png",
  },
};

export default function RootLayout({ children }) {
  return (


    <html lang="en">


      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

      </head>




      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>

        <Whatsapp />


        <LayoutWrapper>


          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
