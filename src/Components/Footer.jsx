import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube,FaWhatsapp } from "react-icons/fa";
import Whatsapp from "./ReuseComponent/Whatsapp";

function Footer() {
  return (
    <div className="pt-10   relative text-center md:text-start bg-blue_c ">
      <div className="w-11/12    lg:flex gap-10 items-start mx-auto">
        <div className="">
          <img
            src="/images/white_big_logo.webp"
            className="w-[250px] mx-auto "
            alt="Logo"
          />
        </div>
        <div className="  lg:w-4/12 mt-5 lg:mt-0 text-white lg:pl-3">
          <h1 className="text-2xl   md:text-xl  pt-2 md:p-0 font-semibold">
            Get In Touch
          </h1>
          <div className="w-[20vw] md:w-[3vw] mx-auto md:mx-0 my-1 bg-orange_c h-[2px] "></div>

          <p>
            <span className="font-medium"> M : </span>{" "}
            <a href="tel:+919845248323">+91 9845248323</a> /{" "}
            <a href="tel:+919036100528"> +91 9036100528</a>
          </p>

          <p className="py-1">
            {" "}
            <span className="font-medium"> Email : </span>
            <a href="mailto:sales@visionflyholidays.com">
              sales@visionflyholidays.com
            </a>{" "}
          </p>

          <p>
            {" "}
            <span className="font-medium"> Address : </span>
            <a href="https://maps.app.goo.gl/zMVtmoFMSGoQfYoH9">
              15/22, 1st main ashtalakshmi Layout, puttenahalli main road, JP
              nagar 6th phase bangalore -560078
            </a>{" "}
          </p>
        </div>
        <div className="  mt-5 lg:mt-0">
          <h1 className=" text-white text-2xl md:text-xl font-semibold pt-3  lg:pt-0">
            Follow Us
          </h1>
          <div className="w-[20vw]  md:w-[3vw] mx-auto md:mx-0 my-1 bg-orange_c h-[2px] "></div>

          <div className="flex text-blue_c w-max mx-auto  md:mx-0 items-center   py-3">
            <a
              href="https://www.instagram.com/visionfly_holidays?igsh=MTB4ZDh3OGR0aHhoOQ=="
              target="_blank"
            >
              {" "}
              <div
                className="hover:scale-110  ease-in duration-300 text-xl
                 md:text-lg mr-2 w-max p-2 rounded-full bg-white "
              >
                <FaInstagram />
              </div>
            </a>
            <a href="##" target="_blank">
              {" "}
              <div
                className="hover:scale-110  ease-in duration-300 text-xl md:text-lg mr-2
                 w-max p-2 rounded-full bg-white "
              >
                <FaFacebookF />
              </div>
            </a>
            <a href="##" target="_blank">
              <div
                className="hover:scale-110  ease-in duration-300 text-xl
                 md:text-lg mr-2 w-max p-2 rounded-full bg-white "
              >
                <FaYoutube />
              </div>
            </a>
           <div className="flex justify-center gap-4 md:hidden z-50">
   <a
    href="https://wa.me/+919845248323" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className="p-2 bg-[#1FB141] rounded-full cursor-pointer">
      <FaWhatsapp color="white" size={25} />
    </div>
  </a>
</div>


          </div>
        </div>
      </div>
      <img
        src="/images/tp_logo.webp"
        className="absolute  bottom-0 right-0  w-[180px]"
        alt=""
      />

      <div className="w-11/12 mx-auto font-light md:flex items-center text-white  mt-4 py-2 border-t border-t-gray-400 justify-between">
        <h3> Copyright © {new Date().getFullYear()} VisionFly Holidays Pvt Ltd </h3>
        <div className="pt-2 lg:pt-0 relative z-10">
          <Link href="/terms-of-service">Terms of Service</Link> /{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
