"use client"; // Retained and ensures it's a client component

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// Assuming CommonHeading is a component that you want to keep
import CommonHeading from "./ReuseComponent/CommonHeading";

// --- Star Rating Component ---
// This is a simple, reusable component to display 5 filled stars.
const FiveStarRating = () => {
  // Use a star icon (e.g., a Unicode character or an SVG/Tailwind icon class)
  // For simplicity, we'll use a standard star icon and color it gold/yellow.
  return (
    <div className="flex justify-center my-3 text-2xl text-yellow-500">
      <span className="mx-0.5">★</span>
      <span className="mx-0.5">★</span>
      <span className="mx-0.5">★</span>
      <span className="mx-0.5">★</span>
      <span className="mx-0.5">★</span>
    </div>
  );
};
// --- End Star Rating Component ---

function GuestReviews({
  reviews,

}) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            // Check if autoplay is available before starting
            swiperRef.current.autoplay?.start();
          } else {
            // Check if autoplay is available before stopping
            swiperRef.current.autoplay?.stop();
          }
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Ensure disconnection only happens if the observer exists
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="py-10 pb-20 overflow-hidden text-center bg-blue_c" // Added a light background for visual pop
      ref={containerRef}
    >
      <h2 className="text-center text-white font-medium text-3xl lg:text-4xl">What Our Guests Are Saying</h2>
      <p className=" text-white pt-2 font-light">Real Experiences, Real Smiles</p>
      <div className="w-11/12 lg:w-10/12 relative xl:w-9/12 mx-auto">
        <img
          src="/images/icons/double-quotes.webp"
          className="w-15 h-15 lg:h-24 lg:w-24 mb-3 mx-auto opacity-70 filter absolute -bottom-20 -right-2 lg:-right-24 lg:-bottom-15 grayscale" // Smaller, subtler quote icon
          alt="quote"
          loading="lazy"
        />
        
       <img
          src="/images/icons/double-quotes.webp"
          className="w-15 h-15 lg:h-24 lg:w-24 mb-3 mx-auto opacity-70 filter absolute -top-17 -left-2 lg:-left-24 lg:-top-15 rotate-180 grayscale" // Smaller, subtler quote icon
          alt="quote"
          loading="lazy"
        />


        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mt-12 pb-5" // Adjusted margin top and added padding bottom for potential shadow
          autoplay={{
            delay: 3000, // Slightly slower delay for better reading
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30, // Consistent spacing
            },
          }}
        >
          {reviews?.map((ele) => (
            <SwiperSlide
              key={uuidv4()}
              // **Enhanced Card Design:**
              // Added border, shadow, slightly darker background, and hover effect.
              className="capitalize bg-white   text-white pt-2 font-light p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform "
            >
              <div className="flex flex-col h-full">
                {/* 5-Star Rating Added Here */}
                <FiveStarRating />

                <p className="line-clamp-5 text-base italic text-gray-700  font-light  mb-4">
                  {/* Note: changed <h3> to <p> for semantic correctness for a quote */}
                  {ele.review}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200 ">
                  <h2 className="text-lg font-semibold text-gray-900 ">
                    {/* Used a clearer font weight and size */}
                    {ele.name}
                  </h2>
                  {/* Optionally add a title/location if available in your data (e.g., ele.location) */}
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400">{ele.location}</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GuestReviews;