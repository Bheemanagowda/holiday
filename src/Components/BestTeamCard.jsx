"use client";

import React from "react";
import { motion } from "framer-motion";

function BestTeamCard({ member, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`
        w-full flex flex-col sm:flex-col md:flex-row 
        items-center justify-between gap-6 sm:gap-8 md:gap-10 
        px-2 sm:px-6 md:px-10 lg:px-16
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >

      {/* TEXT */}
      <div className="w-full md:w-3/5 text-left">
        <h3 className="text-gray-600 text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-2">
          {member.role}
        </h3>

      <h2 className="
  text-[32px]
  sm:text-[36px]
  md:text-[44px]

  font-bold text-gray-800 leading-tight mb-4
">
  {member.name}
</h2>



  <p class="member-desc">
  {member.description}
</p>




      </div>

      {/* IMAGE */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </motion.div>
  );
}

export default BestTeamCard;
