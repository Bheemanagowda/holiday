"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/galleryintro.css";
import "swiper/css/pagination";
import CommonHeading from "./ReuseComponent/CommonHeading";
import Link from "next/link";
function GalleryIntro({ images }) {
  return (
    <div className="my-8 lg:my-10 gallery_intro ">
      <CommonHeading
        intro={"Explore Our Memories"}
        heading={"Gallery section"}
      />
      <Swiper
        className="mt-8 lg:mt-12"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        loop={true}
        modules={[Autoplay, FreeMode, Pagination]}
        slidesPerView={1.2}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1600: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={uuidv4()} className="md:mb-16">
           <Image
  src={image} // your image path, e.g., "/images/gallery1.webp"
  alt="gallery"
  width={520}  // approximate width for large screens
  height={350} // approximate height
  className="w-full lg:max-w-[520px] h-[350px] bg-gray-300 lg:h-[290px] xl:max-w-[440px] xl:h-[350px] object-cover"
  priority={false} // lazy loading by default; true if you want to load immediately
/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/gallery" aria-label="Gallery Page">
        {" "}
        <button className="text-center cursor-pointer text-xl  text-gray_c block w-max mx-auto mt-4">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default GalleryIntro;
