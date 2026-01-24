"use client"
import React, { useEffect, useRef } from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay ,Navigation} from "swiper/modules";

import HotSellingCard from "./HotSellingCard";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
function HotSelling() {

  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const hotSellingPackages = [
    {
      name: "Kenya",
      duration: "6 Days | 5 Nights",
      price: 172800,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp"],
      image: "/images/kenya_hot_selling.webp",
      link:"/duniya-dekho/kenya-victoria-falls-tour-package"
    },
    {
      name: "Bali",
      duration: "6 Days | 5 Nights",
      price: 104400,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp"],
      image: "/images/bali_hot_selling.webp",
      link:"/duniya-dekho/bali-tour-package"
    },
    {
      name: "Spain",
      duration: "9 Days | 8 Nights",
      new: true,
      price: 145900,
      facility: ["/images/icons/stay.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp"],
      image: "/images/spain_hot_selling.webp",
      link:"duniya-dekho/spain-portugal-tour-package"
    },
    {
      name: "Kashmir",
      duration: "6 Days | 5 Nights",
      price: 59400,
      facility: ["/images/icons/stay.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/food.webp", "/images/icons/flight.webp"],
      image: "/images/kashmir_hot_selling.webp",
      link:"/bharat-dekho/kashmir-delight-tour-package"
    },
    {
      name: "Vietnam",
      new: true,
      duration: "7 Days | 6 Nights",
      price: 138600,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/flight.webp"],
      image: "/images/vietnam_hot_selling.webp",
      link:"/duniya-dekho/vietnam-tour-package"
    },
    {
      name: "Sweden",
      duration: "9 Days | 8 Nights",
      price: 344800,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/flight.webp"],
      image: "/images/sweden_hot_selling.webp",
      link:"/contact-us"
    },
    {
      name: "Himachal",
      duration: "7 Days | 6 Nights",
      price: 54000,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/flight.webp"],
      image: "/images/himachal_hot_selling.webp",
      link:"/bharat-dekho/himachal-tour-package"
    },
    {
      name: "Singapore",
      duration: "5 Days | 4 Nights",
      price: 55800,
      facility: ["/images/icons/stay.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp"],
      image: "/images/singapore_hot_selling.webp",
      link:"/duniya-dekho/singapore-tour-package"
    },
    {
      name: "Rajasthan",
      duration: "9 Days | 8 Nights",
      price: 86400,
      facility: ["/images/icons/stay.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/food.webp", "/images/icons/flight.webp"],
      image: "/images/rajasthan_hot_selling.webp",
      link:"/bharat-dekho/best-rajasthan-tour-package"
    },
    {
      name: "Australia",
      duration: "8 Days | 7 Nights",
      price: 195400,
      facility: ["/images/icons/stay.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/flight.webp"],
      image: "/images/australia_hot_selling.webp",
      link:"/duniya-dekho/australia-tour-package"

    },
    {
      name: "Andaman",
      duration: "6 Days | 5 Nights",
      price: 37800,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp"],
      image: "/images/andaman_hot_selling.webp",
      link:"/bharat-dekho/andaman-tour-package"
    },
    {
      name: "North - East",
      duration: "7 Days | 6 Nights",
      price: 58500,
      facility: ["/images/icons/stay.webp", "/images/icons/food.webp", "/images/icons/transport.webp", "/images/icons/sightseeing.webp", "/images/icons/flight.webp"],
      image: "/images/northeast_hot_selling.webp",
      link:"/bharat-dekho/northeast-india-tour"
    },
  ];

  return (
    <div className="pt-8 w-11/12 mx-auto disble_select">
      <CommonHeading
        heading={"Hot Selling Destinations"}
        intro={"Special offers"}
      />
      <div className="" ref={containerRef}>
        <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
  
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          modules={[Autoplay,Navigation]}

          slidesPerView={1.2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {hotSellingPackages?.map((item) => (
            <SwiperSlide key={uuidv4()} >
              <HotSellingCard item={item} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" hidden md:flex justify-center text-blue_c text-3xl gap-4 mt-5">
          <div className="border-2 cursor-pointer custom-prev-button border-blue_c rounded-full ">
            <RiArrowLeftDoubleFill />
          </div>
          <div className="border-2 cursor-pointer custom-next-button border-blue_c rounded-full ">
            <RiArrowRightDoubleFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotSelling;
