import React from "react";
import { v4 as uuidv4 } from "uuid";
function OurVisionAndMission() {
  const data = [
    {
      name: "Our Vision",
      logo: "/images/our_vision_icon.webp",
      brush: "/images/blue_brush.webp",
      hColor: "#0087B7",

      desription:
        "At VisionFly Holidays, we envision a world where travel is accessible, enjoyable, and transformative for everyone. We are committed to creating exceptional travel experiences that inspire and connect people, fostering a greater understanding and appreciation of the diverse cultures and landscapes our world has to offer.",
    },
    {
      name: "Our Mission",
      logo: "/images/our_mission_icon.webp",
      hColor: "#F2A418",
      brush: "/images/yellow_brush.webp",
      desription:
        "Our mission at VisionFly Holidays is to inspire and enable our clients to explore the world through personalized, high-quality travel experiences. We are dedicated to providing exceptional service, fostering meaningful connections, and ensuring every journey is seamless, enjoyable, and transformative.",
    },
  ];
  return (
    <div className="pt-8 ">
      {data?.map((item) => (
        <div key={uuidv4()} className="text-center md:text-start md:justify-between pb-7 md:flex items-center">
         
            <img src={item.logo} className="w-8/12 mx-auto md:mx-0 md:w-[28%] lg:w-[20%]" alt={item.name} />
       
          <div className="md:w-[70%] lg:w-[75%]">
            <h1
              style={{ color: item.hColor }}
              className="font-secondary_font font-bold text-3xl xl:text-4xl pt-4"
            >
              {item.name}{" "}
            </h1>
            <img src={item.brush} className="w-20 mx-auto md:mx-0 py-1" alt="brush" />
            <p className="pt-3 text-lg md:text-base xl:text-xl text-light_black_c capitalize">{item.desription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurVisionAndMission;
