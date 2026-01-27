"use client";

import React from "react";
import BestTeamCard from "./BestTeamCard";
import CommonHeading from "./ReuseComponent/CommonHeading";

const teamMembers = [
  {
    name: "Mr. Shiva kumar Rathod",
    role: "Founder & MD",
    img: "/images/team/shiva.webp",
    description:
      "As a seasoned professional in the tourism industry, I've always envisioned creating unforgettable travel experiences. After 15 years of expertise as a Sales Executive and Sales Manager in Travel and tourism, I took the leap in March 2024 to establish VisionFly Holidays. My mission is simple: to craft bespoke journeys that exceed client expectations, fostering lifelong memories. With passion and dedication, I strive to make every trip special, ensuring our clients' experiences are truly unforgettable."
  },
  {
    name: "Ms. Anusha",
    role: "Co-Founder",
    img: "/images/team/anu.webp",
    description:
      "At VisionFly Holidays, we recognize that travel is a personal journey, driven by diverse desires - leisure, MICE, pilgrimage, honeymoon, adventure, and more. Our mission is to craft bespoke experiences that exceed expectations, tailoring every detail to match the essence of each trip. Whether you're seeking relaxation, exploration, or celebration, we're dedicated to delivering unforgettable moments that leave a lasting impression."
  }
];

const BestTeam = () => {
  return (
    <div className="container mx-auto py-14 ">
      <div className="text-center mb-10">
        <CommonHeading heading="Our Team" />
        <p className="text-gray-600 mt-2">
          Real People • Real Guidance • Real Travel Experience
        </p>
      </div>

 {teamMembers.map((member, index) => (
  <div key={index} className="mb-16"> 
    <BestTeamCard member={member} reverse={index % 2 !== 0} />
  </div>
))}


    </div>
  );
};

export default BestTeam;
