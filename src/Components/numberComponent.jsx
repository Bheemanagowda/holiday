import React, { useEffect, useState } from "react";
import { FaGoogle, FaInstagram, FaSmile, FaGlobe } from "react-icons/fa";
import CommonHeading from "./ReuseComponent/CommonHeading";

const numbers = [
  {
    title: "Reviews",
    value: 800,
    suffix: "+",
    icon: <FaGoogle size={60} />,
  },
  {
    title: "Followers",
    value: 10000,
    suffix: "+",
    icon: <FaInstagram size={60} />,
  },
  {
    title: "Happy Customers",
    value: 4500,
    suffix: "+",
    icon: <FaSmile size={60} />,
  },
  {
    title: "Countries Served",
    value: 35,
    suffix: "+",
    icon: <FaGlobe size={60} />,
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
              {item.icon}
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
