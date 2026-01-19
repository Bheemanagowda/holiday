"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/CustomSwiper.css";
import "swiper/css/effect-fade";
import { v4 as uuidv4 } from "uuid";

import {
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import RecommendedSearch from "./RecommendedSearch";

function BannerSlider({ images }) {
  return (
    <div className="homepage_banner   ">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        keyboard={true}
        effect={"fade"}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        modules={[Mousewheel, Autoplay, Keyboard, EffectFade, Pagination]}
      >
        {images?.map((ele, index) => (
          <SwiperSlide key={uuidv4()}>
            <div className="w-full  banner_oval_mask max-h-[1000px] md:max-h-[700px] object-cover   lg:max-h-[1000px] ">
             <picture>
  <source
    media="(min-width: 1024px)"
    srcSet={ele.img}
    fetchPriority={index < 2 ? "high" : "low"}  // <-- fixed
  />
  <source
    media="(min-width: 766px)"
    srcSet={ele.md_image}
    fetchPriority={index < 2 ? "high" : "low"}
  />
  <source
    media="(max-width: 765px)"
    srcSet={ele.sm_image}
    fetchPriority={index < 2 ? "high" : "low"}
  />
  <img
    src={ele.img}
    alt="Banner image"
    fetchPriority={index < 2 ? "high" : "low"}
    className="w-full h-full bg-gray-400 placeholder min-h-[400px] md:min-h-[500px]
       xl:min-h-[600px] object-cover"
  />
</picture>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute lg:hidden w-10/12 mx-auto left-0 right-0 top-20 z-10 ">
        <RecommendedSearch/>
      </div>
    </div>
  );
}

export default BannerSlider;
