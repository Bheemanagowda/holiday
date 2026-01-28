import React from "react";

const videos = [
    "/images/videos/5.mp4",
      "/images/videos/2.mp4",
        "/images/videos/4.mp4",
  "/images/videos/1.mp4",

  "/images/videos/3.mp4",


  "/images/videos/6.mp4",
  "/images/videos/7.mp4",


  "/images/videos/10.mp4",
 
  "/images/videos/12.mp4",
  "/images/videos/13.mp4",
];

const VideoGallery = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 my-30">
      {videos.map((src, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <video
            src={src}
            className="w-full h-[450px] object-cover"
            controls
          />
         
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
