"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const videos = [
  "/images/videos/2.mp4",
  "/images/videos/4.mp4",
  "/images/videos/5.mp4",
];

const ClientVideoSaying = () => {
  return (
    <div className="container mx-auto py-12 px-4">

      {/* Title + Button */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl lg:text-4xl font-bold font-secondary_font">
          REAL STORIES • REAL EXPERIENCES
        </h1>

       <Link
  href="/video"
  className="px-4 py-2 text-lg font-semibold border text-white rounded bg-blue_c hover:bg-black hover:text-white transition flex items-center gap-2 group"
>
  View All Videos
  <span className="transform transition-transform group-hover:translate-x-1">→</span>
</Link>

      </div>

      <div className="mt-2 mb-6 w-20 lg:w-28 relative h-6 lg:h-7">
        <Image
          src="/images/brush.webp"
          alt="intro"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Videos */}
      <div className="flex flex-row gap-4">
        {videos.map((vid, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 rounded-lg overflow-hidden border border-gray-300"
          >
            <video
              src={vid}
              controls
              className="w-full h-[650px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ClientVideoSaying;
