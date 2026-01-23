import React from "react";
import Image from "next/image";

const videoInfo = [
  {
    video: "/images/videos/home-video.mp4",
    desc: "Customers share their real travel experiences with Vision Fly Holiday, expressing how our team supported them throughout their journeys. They speak about the smooth planning, stress-free arrangements, and clear communication at every step. Many highlight the comfort, safety, and convenience they enjoyed from their first inquiry to their return. Their stories reveal how we turn travel plans into memorable and enjoyable experiences. These videos also reflect the trust, satisfaction, and confidence our travelers place in us. Through their words, you can see how every trip becomes seamless and well-organized. Watch their testimonials to understand why Vision Fly Holiday is a preferred choice for hassle-free travel. Their feedback inspires us to continuously improve, innovate, and serve every traveler with care. For us, each journey is not just a trip, but a meaningful memory created with passion and responsibility.",
    desc1: "Travelers appreciate the personalized attention they receive, ensuring their unique needs and expectations are understood and fulfilled. They share how our dedicated team provided timely guidance, transparent communication, and genuine hospitality. Some speak about how their first international trip became stress-free with our support, while others highlight how diverse destinations became more meaningful through curated itineraries. These shared experiences showcase how we don’t just book holidays — we create journeys that stay in the heart long after the trip ends. Their words motivate us to continue building trust, delivering excellence, and shaping better travel stories for the future.",

  desc2:"Every interaction with our travelers reinforces our commitment to going beyond standard service. From the initial planning stage to the final farewell, we focus on anticipating needs, offering expert advice, and adding thoughtful touches that turn ordinary trips into unforgettable memories. Our team takes pride in crafting experiences that reflect each traveler’s personality, interests, and pace, ensuring that every journey feels seamless, inspiring, and deeply personal. These moments of connection and satisfaction not only define our service but also inspire us to innovate, explore new destinations, and continually raise the standard of travel experiences we deliver."}
];

const ClientVideoSaying = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-start gap-8">

        {/* Left Content (col-md-8) */}
        <div className="w-full md:w-2/3">
          
          {/* Heading Section */}
        

          <h1 className="text-2xl lg:text-4xl font-bold pt-2 md:w-5/12 lg:w-full xl:w-9/12 font-secondary_font">
    REAL STORIES • REAL EXPERIENCES

          </h1>

          <div className="mt-2 mb-6 w-20 lg:w-28 relative h-6 lg:h-7">
            <Image
              src="/images/brush.webp"
              alt="intro"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Paragraphs */}
          <p className="text-gray-900 leading-relaxed text-[16px] black">
            {videoInfo[0].desc}
          </p>
          <p className="text-gray-900 leading-relaxed text-[16px] black mt-3">
            {videoInfo[0].desc1}
          </p>
            <p className="text-gray-900 leading-relaxed text-[16px] black mt-3">
            {videoInfo[0].desc2}
          </p>
        </div>

        {/* Right Video (col-md-4) */}
        <div className="w-full md:w-1/3 flex justify-center">
          <video
            src={videoInfo[0].video}
            className="w-full rounded-xl shadow-lg object-cover"
            controls
          />
        </div>

      </div>
    </div>
  );
};

export default ClientVideoSaying;
