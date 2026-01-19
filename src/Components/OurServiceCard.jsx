"use client"
import React from "react";
import { motion } from "framer-motion"
function OurServiceCard({ item, index }) {
  return (

    <div className="bg-blue_c overflow-hidden  hover:bg-orange_c py-6 capitalize px-4 rounded-md lg:py-10 lg:px-10 text-white text-center">
      <motion.div
        initial={{
          opacity: 0,
          translateX: index % 2 === 0 ? -50 : 50,
          translateY: 50,
        }}
        whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
      >
        <img src={item.icon} className="w-8/12 lg:w-6/12 mx-auto " alt={item.name} />
        <h1 className="font-secondary_font font-medium pt-3 text-2xl">
          {item.name}
        </h1>
        <p className="text-lg pt-2 leading-6">
          {item.description}
        </p></motion.div>
    </div>
  );
}

export default OurServiceCard;
