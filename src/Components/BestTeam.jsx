"use client";

import React from "react";
import BestTeamCard from "./BestTeamCard";
import CommonHeading from "./ReuseComponent/CommonHeading";

const team = [
  {
    name: "Shiv",
    role: "Founder & MD",
    img: "/images/team/shiv.webp",
    description: "At Vision Fly Holidays, our mission is to make every journey memorable. We combine passion, experience, and personalized travel planning to ensure seamless, safe, and enriching experiences for every traveler."
  },
  {
    name: "Anu",
    role: "CEO",
    img: "/images/team/anu.jpg",
    description: "Our focus is on creating extraordinary travel experiences with utmost comfort and convenience. I ensure that each traveler receives expert guidance, prompt support, and unforgettable memories."
  },
];


const BestTeam = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <div className="text-center mb-10">
        <CommonHeading  heading="Our Team"/>
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
