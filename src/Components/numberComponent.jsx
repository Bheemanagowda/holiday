import React, { useEffect, useState } from "react";

import CommonHeading from "./ReuseComponent/CommonHeading";

const numbers = [
  {
    title: "Reviews",
    value: 800,
    suffix: "+",
   img: "/images/icons/google.webp",
  },
  {
    title: "Followers",
    value: 10000,
    suffix: "+",
  img: "/images/icons/insta.webp",
  },
  {
    title: "Happy Customers",
    value: 4500,
    suffix: "+",
img: "/images/icons/smile.webp",
  },
  {
    title: "Countries Served",
    value: 35,
    suffix: "+",
    img: "/images/icons/world.webp",
  },
];

const NumberComponent = () => {
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    numbers.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 5000;
      const increment = Math.ceil(end / (duration / 20));

      const counter = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 20);
    });
  }, []);

  const formatNumber = (num) => {
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num;
  };

  return (
    <div
      className="container max-auto py-8 "
      
    >
      <CommonHeading heading={`Our Achievements`} />
      <h5 className="text-[18px] md:text-[20px] max-w-[650px] mx-auto text-gray-600 mt-2 text-center  mt-2 mb-4 ">
           At Vision Fly Holiday, we make every journey effortless, safe, and memorable.
        </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {numbers.map((item, index) => (
          <div key={index} className="p-4">
            <div className="text-green-600 mb-2 flex justify-center">
               <img
    src={item.img}
    alt="icon"
    className="w-half h-half"
  />
            </div>
            <h2 className="text-3xl font-bold">
              {formatNumber(counts[index])}
              {item.suffix}
            </h2>
            <p className="text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberComponent;
