"use client"
import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";

function Offers() {
 const OffersImages = [
  "/images/offer1.webp",
  "/images/offer2.webp",
];

  return (
    <div className="mt-3 md:mt-4 relative  xl:mt-4">
      <img src="/images/tp_globe.webp" alt="" className="absolute -top-20  right-0" />
      <CommonHeading
        heading={`Big Offers To Inspire You`}
        intro={"Special Offers"}
      />
      <div className="pt-5 w-full mx-auto offers-section">
        <div className="w-[90%]  md:w-[80%] lg:w-[70%] mx-auto">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {OffersImages.map((ele) => (  
              <SwiperSlide key={uuidv4()}>
                <div className="overflow-hidden rounded-xl ">
                  <img
                    src={ele}
                    alt="offer"
                    loading="lazy"
                    className="w-full  min-w-[300px] min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] bg-gray-300 object-cover duration-700 hover:scale-110"
                  />{" "}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Offers;
