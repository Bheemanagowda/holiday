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
      className="rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col md:flex-row items-center"
    >
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-full md:h-100 flex-shrink-0 overflow-hidden">
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Right Content */}
      <div className="p-4 md:p-6 w-full md:w-1/2 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-[#027D72] font-medium text-sm md:text-md mt-1">{member.role}</p>
        <p className="mt-2 text-gray-600 text-sm md:text-md leading-6">
          {member.description || "Making your travel seamless, safe, and memorable."}
        </p>
      </div>
    </motion.div>
  );
}

export default BestTeamCard;
