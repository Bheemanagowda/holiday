"use client"

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <div className="pt-24 lg:flex items-start justify-between">
      <div className="lg:w-[30%]">
        <img
          src="/images/about_page_hero.webp"
          className="w-full h-[420px] bg-gray-300 object-cover rounded-lg"
          alt="about us page hero"
        />
      </div>

      <div className="lg:w-[66%] pt-4 capitalize lg:pt-0">
        <p className="text-blue_c">VISIONFLY HOLIDAYS</p>
        <h1 className="font-bold text-[23px] lg:text-3xl xl:text-4xl font-secondary_font">
          Your Gateway to Exceptional Travel Experiences{" "}
        </h1>
        <p className="pt-4 text-light_black_c  text-lg lg:text-xl xl:text-[22px]">
          At VisionFly Holidays, we believe that travel is not just about
          visiting new destinations; it's about creating unforgettable memories,
          enriching experiences, and fostering meaningful connections.
          Established with a vision to redefine the travel industry, we strive
          to be more than just a travel agency. We are your trusted partner in
          crafting tailor-made journeys that cater to your unique preferences,
          ensuring every trip is a seamless blend of luxury, adventure, and
          cultural immersion.{" "}
        </p>

        <div className="flex overflow-hidden items-center gap-4 text-lg lg:text-xl xl:text-[22px] whitespace-nowrap pt-3 lg:pt-5">
          <motion.div
            initial={{
              opacity: 0,
              translateX: -50,
            }}
            whileInView={{ opacity: 1, translateX: 0}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {" "}
            <div className="flex items-center gap-2 bg-orange_c hover:bg-orange-500 text-white px-3 rounded-md py-1 lg:py-2">
              <MdOutlineMail />

              <a href="mailto:sales@visionflyholidays.com"> Let's talk now</a>
            </div> </motion.div>
            <motion.div
            initial={{
              opacity: 0,
              translateX: 50,
            }}
            whileInView={{ opacity: 1, translateX: 0}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >   <div className="flex items-center gap-2">
              <FiPhoneCall />
              <a href="tel:919845248323" className="font-medium">
                +91 9845248323
              </a>
            </div></motion.div>
         
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
