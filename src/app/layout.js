



import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Barlow, Kumbh_Sans } from "next/font/google";
import Whatsapp from "../Components/ReuseComponent/Whatsapp.jsx";
import Footer from "@/Components/Footer";
export const metadata = {
  title:
    "VisionFly Holidays - Best Holiday Packages in India & Worldwide Tours",
  description: "Best Holiday Packages in India & Worldwide Tours",
};

const primary_font = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});
const secondary_font = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative font-primary_font ${primary_font.variable} ${secondary_font.variable} max-w-[1700px] mx-auto bg-[#F5F5F5]`}
      >
        <Navbar/>
        {children}
        <Whatsapp/>
        
        <Footer/>
      </body>
    </html>
  );
}
