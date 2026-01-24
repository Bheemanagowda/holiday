import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-10 relative text-center md:text-start bg-blue_c text-white">
      
      {/* Top Columns */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <img
            src="/images/white_big_logo.webp"
            className="w-[250px] mx-auto"
            alt="Logo"
          />
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="text-2xl md:text-xl font-semibold pt-2">Get In Touch</h1>
          <div className="w-[20vw] md:w-[3vw] mx-auto md:mx-0 my-1 bg-orange_c h-[2px]" />

          <p>
            <span className="font-medium">M: </span>
            <a href="tel:+919845248323">+91 9845248323</a> /{" "}
            <a href="tel:+919036100528">+91 9036100528</a>
          </p>

          <p className="py-1">
            <span className="font-medium">Email: </span>
            <a href="mailto:sales@visionflyholidays.com">
              sales@visionflyholidays.com
            </a>
          </p>

          <p>
            <span className="font-medium">Address: </span>
            <a href="https://maps.app.goo.gl/zMVtmoFMSGoQfYoH9">
              15/22, 1st main ashtalakshmi Layout, puttenahalli main road, JP nagar 6th phase bangalore - 560078
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-2xl md:text-xl font-semibold pt-2">Quick Links</h1>
          <div className="w-[20vw] md:w-[3vw] mx-auto md:mx-0 my-1 bg-orange_c h-[2px]" />

<ul className="space-y-1 text-center ">
  <li>
    <Link 
      href="/bharat-dekho" 
      className="flex justify-center md:justify-start items-center gap-2 no-underline hover:no-underline hover:text-[#fecf00] transition"
    >
      ➤ Bharath Dekho
    </Link>
  </li>

  <li>
    <Link 
      href="/duniya-dekho" 
      className="flex justify-center md:justify-start items-center gap-2 no-underline hover:no-underline hover:text-[#fecf00] transition"
    >
      ➤ Duniya Dekho
    </Link>
  </li>
</ul>


        </div>

        {/* Follow Us */}
        <div>
          <h1 className="text-2xl md:text-xl font-semibold pt-2">Follow Us</h1>
          <div className="w-[20vw] md:w-[3vw] mx-auto md:mx-0 my-1 bg-orange_c h-[2px]" />

          <div className="flex text-blue_c w-max mx-auto md:mx-0 items-center py-3">
            <a href="https://www.instagram.com/visionfly_holidays?igsh=MTB4ZDh3OGR0aHhoOQ==" target="_blank">
              <div className="hover:scale-110 duration-300 text-xl md:text-lg mr-2 w-max p-2 rounded-full bg-white">
                <FaInstagram />
              </div>
            </a>
            <a href="##" target="_blank">
              <div className="hover:scale-110 duration-300 text-xl md:text-lg mr-2 w-max p-2 rounded-full bg-white">
                <FaFacebookF />
              </div>
            </a>
            <a href="##" target="_blank">
              <div className="hover:scale-110 duration-300 text-xl md:text-lg mr-2 w-max p-2 rounded-full bg-white">
                <FaYoutube />
              </div>
            </a>

            {/* Mobile WhatsApp */}
            <div className="flex justify-center gap-4 md:hidden z-50">
              <a href="https://wa.me/+919845248323" target="_blank" rel="noopener noreferrer">
                <div className="p-2 bg-[#1FB141] rounded-full cursor-pointer">
                  <FaWhatsapp color="white" size={25} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TP Logo */}
      <img
        src="/images/tp_logo.webp"
        className="absolute bottom-0 right-0 w-[180px]"
        alt=""
      />

      {/* Bottom */}
      <div className="w-11/12 mx-auto font-light md:flex items-center justify-between mt-4 py-2 border-t border-gray-400">
        <h3>Copyright © {new Date().getFullYear()} VisionFly Holidays Pvt Ltd</h3>
        <div className="pt-2 lg:pt-0">
          <Link href="/terms-of-service">Terms of Service</Link> /{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
