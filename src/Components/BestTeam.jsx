"use client";

import React from "react";
import BestTeamCard from "./BestTeamCard";
import CommonHeading from "./ReuseComponent/CommonHeading";

const team = [
  {
    name: "Mr. Shiva kumar Rathod ",
    role: "Founder & MD",
    img: "/images/team/shiv.webp",
    description: "As a seasoned professional in the tourism industry, I've always envisioned creating unforgettable travel experiences. After 15 years of expertise as a Sales Executive and Sales Manager in Travel and tourism, I took the leap in March 2024 to establish VisionFly Holidays. My mission is simple: to craft bespoke journeys that exceed client expectations, fostering lifelong memories. With passion and dedication, I strive to make every trip special, ensuring our clients' experiences are truly unforgettable."
  },
  {
    name: "Mrs. Anu Rathod",
    role: "CEO",
    img: "/images/team/anu.webp",
    description: "At VisionFly Holidays, we recognize that travel is a personal journey, driven by diverse desires - leisure, MICE, pilgrimage, honeymoon, adventure, and more. Our mission is to craft bespoke experiences that exceed expectations, tailoring every detail to match the essence of each trip. Whether you're seeking relaxation, exploration, or celebration, we're dedicated to delivering unforgettable moments that leave a lasting impression."
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
