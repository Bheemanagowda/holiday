"use client";

import React from "react";
import BestTeamCard from "./BestTeamCard";

const team = [
  {
    name: "Shiv",
    role: "FOUNDER AND MD",
    img: "/images/team/shiv.webp",
    description: "Expert in planning seamless trips with safety and comfort."
  },
  {
    name: "Anu ",
    role: "CEO",
    img: "/images/team/anu.webp",
    description: "Ensures every traveler receives prompt and helpful support."
  },
  // Add more members here
];

const BestTeam = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#027D72]">Meet Our Travel Experts</h2>
        <p className="text-gray-600 mt-2">Real People • Real Guidance • Real Travel Experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, idx) => (
          <BestTeamCard key={idx} member={member} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default BestTeam;
