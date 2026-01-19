"use client";

import Offers from "../Components/Offers";
import BannerSlider from "../Components/BannerSlider";
import PackagePlan from "../Components/PackagePlan";
import HotSelling from "../Components/HotSelling";
import ExploreTheWorld from "../Components/ExploreTheWorld";
import InternationalHolidays from "../Components/InternationalHolidays";
import GalleryIntro from "@/Components/GalleryIntro";
import GuestReviews from "@/Components/GuestReviews";

function Home() {
  const images = [
    {
      
        img: "/images/banner2_lg.webp",
      md_image: "/images/banner2_md.webp",
      sm_image: "/images/banner2_sm.webp",
    },
    {
      img: "/images/banner1_lg.webp",
      md_image: "/images/banner1_md.webp",
      sm_image: "/images/banner1_sm.webp",
    },
    {
      img: "/images/banner3_lg.webp",
      md_image: "/images/banner3_md.webp",
      sm_image: "/images/banner3_sm.webp",
    },
    {
      img: "/images/banner4_lg.webp",
      md_image: "/images/banner4_md.webp",
      sm_image: "/images/banner4_sm.webp",
    },
    {
      img: "/images/banner5_lg.webp",
      md_image: "/images/banner5_md.webp",
      sm_image: "/images/banner5_sm.webp",
    },
  ];

  const reviews = [
    {
      name: "Pavan Kumar s",
      review: `I recently had the best time during my trip to Thailand, and it was truly a memorable experience. From the moment the journey began until the day it ended, everything was perfectly organized and hassle-free. The credit goes to VisionFly Holidays for making the entire trip incredibly smooth and enjoyable. Their attention to detail, timely arrangements, and excellent customer service ensured that I could fully immerse myself in the beauty and culture of Thailand without any stress or worries. Every part of the itinerary was thoughtfully planned, which made the experience even more special.`,
    },
    {
      name: "pradeep pamboor",
      review: `This was our very first trip to Thailand, and it was an absolutely amazing experience!
We were a group of 54 people, and our company chose VisionFly Holidays to plan and manage the entire trip — and they truly exceeded our expectations.`,
    },
    {
      name: "Deepak",
      review: `We recently returned from an unforgettable trip to Bali organized by Vision Fly Holidays, and we were happier with the entire experience! From start to finish, everything was planned and professionally handled.
The hotels were clean, comfortable and in great locations.`,
    },
    {
      name: "Vinod T",
      review: `I had an amazing experience over the last four days exploring Pattaya and Bangkok, thanks to the incredible organization by Visionfly Holidays. The entire trip was seamless, from the smooth transfers to the well-planned itinerary. I enjoyed the vibrant culture, beautiful sights, and the overall excitement of these two cities.
      `,
    },
    {
      name: "Mastha Revanth",
      review: `I recently traveled to Pattaya and Bangkok with VisionFly Holidays along with my colleagues, and it has become the best trip on my travel list! Every aspect of the trip was exceptionally well-organized, and the services provided were simply excellent. From the smooth itinerary to the comfortable accommodations and seamless transport, everything exceeded our expectations. A big thanks to VisionFly Holidays for making this trip truly memorable!`,
    },
    {
      name: "Adhithya Yash",
      review: `Our recent Thailand tour with a group of 59 amazing members, organized by Shivu from Visionfly Holidays, was nothing short of spectacular. From start to finish, every detail was flawlessly managed, and the experience left all of us with memories to cherish for a lifetime.
`,
    },
    {
      name: "Murthy G",
      review: `I recently had the pleasure of traveling to Thailand with a group of 59 people, organized by VisionFly Holidays, and I must say – it was an absolutely incredible experience from start to finish!`,
    },
    {
      name: "Nanjunda Gowda",
      review: `My recent trip to Pattaya and Bangkok with Visionfly Holidays was nothing short of spectacular! From start to finish, every detail was taken care of, and the entire experience was seamless and unforgettable.`,
    },
    {
      name: "Nayeema Nayeema",
      review: `We recently traveled to Baku with a group of 38 people through VisionFly Holidays and had a wonderful experience. The trip was well-organized, with smooth logistics, comfortable accommodation, and excellent local support. The sightseeing was well-planned, and our guide was informative and friendly. Transportation was punctual and reliable throughout. Overall, it was a memorable trip, and we truly appreciate VisionFly’s efforts in ensuring everything ran seamlessly. Highly recommended for group tours!`,
    },
    {
      name: `Kotersh`,
      review: `The hotel accommodation, transportation, and delicious food at Indian restaurants all contributed to making our Pattaya trip enjoyable and stress-free. Every detail was well-managed, which allowed us to relax and fully enjoy the experience.`,
    },
    {
      name: "Kumaresh",
      review: `Just got back from Baku and wow — what a trip! Huge shoutout to Vision Fly Holidays for organizing such a smooth and fun vacation. The tours, the hotel, the local experiences... everything was just perfect. Definitely planning my next trip with them. Highly recommend!`,
    },
    {
      name: "V Raju",
      review: `Just got back from an amazing trip to Baku with VisionFly Holidays! ✈️🌍
Everything was on point – great hotels, super organized tours, and such a fun itinerary. Baku is stunning, and VisionFly made sure we enjoyed every minute.`,
    },
    {
      name: "Deepthi Manu",
      review: `We planned 7 day trip across kerela.Very well organised by vision fly team. Most humble & hospitable staff. Food & accommodation were perfect. Will surely recommend to my circle as it's economical yet top notch service.`,
    },
    {
      name: "Ashwath Nayak",
      review: `I had a best time in pattaya and bangkok hotel, transport, indian food everything made us feel like we are in our home. Thank you visionfly holidays for this wonderful trip.`,
    },
    {
      name: "Mohan Kumar",
      review: `I recently traveled to Baku with VisionFly Holidays along with a group of 38 people, and I must say it was a truly wonderful experience.

From the start to the end of the trip, everything was well-organized — the itinerary, accommodation, local transportation, and sightseeing were perfectly managed. The team at VisionFly Holidays was professional, responsive, and extremely helpful throughout the journey.`,
    },
    {
      name: "a channabasappa",
      review: `An Unforgettable Thailand Experience with VisionFly Holidays!

We recently booked our Thailand trip through VisionFly Holidays Pvt Ltd, and it was truly the experience of a lifetime! From the moment we landed to the day we returned, everything was perfectly organized and stress-free.
`,
    },
    {
      name: "Theju Thej",
      review: `I had the best time in Thailand, and it was truly an unforgettable experience. The trip was filled with stunning landscapes, vibrant culture, and delicious food. From the bustling streets of Bangkok to the serene beaches of Phuket, every moment was exciting and memorable.`,
    },
    {
      name: "inchara",
      review: `Wonderful arrangements and continuous follow up from the local tour operator made us feel cared.
Though the place we chose for our vacation (Arunachal Pradesh) is not so developed the hotels arranged and the staff their were very find and gave us the best hospitality`,
    },
    {
      name: "Subramanya",
      review: `We had an amazing time in Thailand with Vision Fly Holidays! 🌟
Everything was perfectly planned — from luxury hotels to fun local tours.
The guides were super friendly and made us feel very welcome.
We especially loved the island trips and cultural experiences.`,
    },
    {
      name: "Prajval Prajju",
      review: `Had an incredible trip to Bangkok and Pattaya with Visionfly Holidays, led by Shivu! From seamless travel arrangements to personalized experiences, everything was perfectly organized. Shivu ensured we had a memorable time exploring the best of both cities, with great attention to every detail. The tours were exciting, the local food amazing, and the vibe was just unforgettable. Highly recommend Visionfly Holidays for anyone looking to explore Thailand in style!`,
    },
  ];

  console.log(reviews.length);
  return (
    <div>
      <BannerSlider images={images} />
      <Offers />
      <PackagePlan />
      <HotSelling />
      <ExploreTheWorld />
      <InternationalHolidays />
      <GuestReviews reviews={reviews} />{" "}
      <GalleryIntro
        images={[
          "/images/guests/guest1.webp",
          "/images/guests/guest2.webp",
          "/images/guests/guest3.webp",
          "/images/guests/guest4.webp",
          "/images/guests/guest5.webp",
          "/images/guests/guest6.webp",

          "/images/guests/visionfly_guests_25.webp",

          "/images/guests/visionfly_guests_28.webp",

          "/images/guests/visionfly_guests_2.webp",
          "/images/guests/visionfly_guests_3.webp",
          "/images/guests/visionfly_guests_4.webp",
          "/images/guests/visionfly_guests_5.webp",
        ]}
      />
    </div>
  );
}

export default Home;
