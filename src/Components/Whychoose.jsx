"use client";

import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import OurServiceCard from "./OurServiceCard";
import { v4 as uuidv4 } from "uuid";

const whyChooseItems = [
  { 
    icon: "/images/banners/icons/women.webp", 
    name: "Women’s Special Holidays", 
    description: "Tailor-made holidays for women. Safe and comfortable journeys. Discover new destinations with confidence."
  },
  { 
    icon: "/images/banners/icons/tours.webp",
    name: "Group Tours & Flexi Holidays", 
    description: "Join exciting group tours.Flexible itineraries at your pace.Curated travel for every kind of explorer — with 24/7 support."
  },
  { 
    icon: "/images/banners/icons/trusted-partner.webp", 
    name: "Trusted Partner", 
    description: "More than a travel service. Guided support for smooth journeys. Creating memorable travel experiences with trust."
  },
  { 
    icon: "/images/banners/icons/price.webp", 
    name: "Affordable Pricing", 
    description: "Travel more while spending less. Quality without compromise. Transparent pricing with no hidden costs."
  },
  { 
    icon: "/images/banners/icons/booking.webp", 
    name: "Fast Bookings", 
    description: "Book holidays in minutes. Instant confirmations guaranteed. A smooth and hassle-free booking process."
  },
  { 
    icon: "/images/banners/icons/support.webp", 
    name: "24/7 Support", 
    description: "Support anytime and anywhere. Quick help for all travel needs. Travel worry-free with round-the-clock assistance."
  }
];


const Whychoose = () => {
  return (
    <div className="w-full py-16 bg-white my-20 rounded-[20px]">

      {/* Heading */}
      <div className="text-center mb-8">
        <CommonHeading heading="Why Choose Us" />
        <h5 className="text-[18px] md:text-[20px] max-w-[650px] mx-auto text-gray-600 mt-2">
          At Vision Fly Holiday, we deliver stress-free travel experiences with comfort, safety & convenience.
        </h5>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
        {whyChooseItems.map((item, index) => (
          <OurServiceCard item={item} index={index} key={uuidv4()} />
        ))}
      </div>

    </div>
  );
};

export default Whychoose;
