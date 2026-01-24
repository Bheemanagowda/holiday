"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  "/images/videos/2.mp4",
  "/images/videos/4.mp4",
  "/images/videos/5.mp4",
];

const ClientVideoSaying = () => {
  return (
    <div className="container mx-auto py-12 px-4">

      {/* Title + Button */}
      <div className="flex flex-wrap justify-between items-center gap-3">

        <h1 className="text-2xl lg:text-4xl font-bold font-secondary_font  md:text-left w-full md:w-auto">
          Real Stories • Real Experiences
        </h1>

        {/* Brush Image for Mobile */}
        <div className="block  w-20 h-6 relative mx-auto my-2">
          <Image
            src="/images/brush.webp"
            alt="intro"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <Link
          href="/video"
          className="px-4 py-2 text-lg font-semibold border text-white rounded bg-blue_c hover:bg-black transition flex items-center gap-2 group mx-auto md:mx-0 md:mx-0 mb-8 md:mb-0"
        >
          View All Videos
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Brush Image for Desktop */}
      <div className="hidden md:block mt-2 mb-6 w-20 lg:w-28 relative h-6 lg:h-7">
        <Image
          src="/images/brush.webp"
          alt="intro"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Videos */}
      <div className="flex flex-col md:flex-row gap-4">
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
