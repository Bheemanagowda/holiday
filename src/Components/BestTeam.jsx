"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkedAlt, FaHeadset, FaPassport, FaPlaneDeparture } from "react-icons/fa";

const team = [
  { name: "Aarav Sharma", role: "Senior Travel Planner", img: "/images/team/team.jpg" },
  { name: "Nisha Patel", role: "Customer Support Manager", img: "/images/team/team.jpg" },
  { name: "Rohan Mehta", role: "Visa Expert", img: "/images/team/team.jpg" },
  { name: "Priya Singh", role: "Tour Coordinator", img: "/images/team/team.jpg" },
  { name: "Kunal Verma", role: "International Booking Specialist", img: "/images/team/team.jpg" },
  { name: "Meera Rao", role: "Domestic Tour Specialist", img: "/images/team/team.jpg" },
  { name: "Manish Gupta", role: "Ticketing Specialist", img: "/images/team/team.jpg" },
  { name: "Sneha Desai", role: "Customer Relations Executive", img: "/images/team/team.jpg" },
];

const icons = [FaMapMarkedAlt, FaHeadset, FaPassport, FaPlaneDeparture];

const BestTeam = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#027D72]">Meet Our Travel Experts</h2>
        <p className="text-gray-600 mt-2">
          Real People • Real Guidance • Real Travel Experience
        </p>

        <div className="flex justify-center gap-6 mt-6">
          {icons.map((Icon, i) => (
            <div key={i} className="p-3 rounded-full border border-[#027D72]/30">
              <Icon className="text-[#027D72]" size={22} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300 group overflow-hidden"
          >
            <div className="relative w-full h-100 overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-[#027D72] font-medium text-sm">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">
                Making your travel seamless, safe, and memorable.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestTeam;
