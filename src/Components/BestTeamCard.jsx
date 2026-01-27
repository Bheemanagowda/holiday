"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function BestTeamCard({ member, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 50,
        translateX: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col md:flex-row items-center relative"
    >
      {/* Image Section */}
  <div className="relative w-full h-120 md:h-130 md:w-1/2 flex-shrink-0">
  <Image
    src={member.img}
    alt={member.name}
    fill
    className="object-cover"
  />
</div>


      {/* Content Section */}
      <div className="p-5 md:p-6 w-full md:w-1/2 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          {member.name}
        </h3>
        <p className="text-[#027D72] font-medium text-sm md:text-md mt-1">
          {member.role}
        </p>
        <p className="pt-3 text-base md:text-md xl:text-lg text-gray-700">
          {member.description || "Making your travel seamless, safe, and memorable."}
        </p>
      </div>
    </motion.div>
  );
}

export default BestTeamCard;
