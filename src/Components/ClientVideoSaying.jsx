import React from 'react';

const videoInfo = [
  {
    video: "https://www.youtube.com/embed/your-video",
    desc: "Customers share their real travel experiences with Vision Fly Holiday, expressing how our team supported them throughout their journeys. They speak about the smooth planning, stress-free arrangements, and clear communication at every step. Many highlight the comfort, safety, and convenience they enjoyed from their first inquiry to their return. Their stories reveal how we turn travel plans into memorable and enjoyable experiences. These videos also reflect the trust, satisfaction, and confidence our travelers place in us. Through their words, you can see how every trip becomes seamless and well-organized. Watch their testimonials to understand why Vision Fly Holiday is a preferred choice for hassle-free travel. Their feedback inspires us to continuously improve, innovate, and serve every traveler with care. For us, each journey is not just a trip, but a meaningful memory created with passion and responsibility.",
    desc1:"Travelers appreciate the personalized attention they receive, ensuring their unique needs and expectations are understood and fulfilled. They share how our dedicated team provided timely guidance, transparent communication, and genuine hospitality. Some speak about how their first international trip became stress-free with our support, while others highlight how diverse destinations became more meaningful through curated itineraries. These shared experiences showcase how we don’t just book holidays — we create journeys that stay in the heart long after the trip ends. Their words motivate us to continue building trust, delivering excellence, and shaping better travel stories for the future."
  }
];

const ClientVideoSaying = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {videoInfo[0].desc}
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mt-3">
            {videoInfo[0].desc1}
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src={videoInfo[0].video}
            title="client video"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ClientVideoSaying;
