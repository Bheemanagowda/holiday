import React from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";

function InternationalHolidays() {
  const internationalholidays = [
    { name: "Thailand", image: "/images/thailand_holidays.webp" },
    { name: "Vietnam", image: "/images/vietnam_holidays.webp" },
    { name: "Kenya", image: "/images/kenya_holidays.webp" },
    { name: "Spain", image: "/images/spain_holidays.webp" },
    { name: "Singapore", image: "/images/singapore_holidays.webp" },
  ];
  return (
    <div className="pt-8 w-11/12 mb-8 mx-auto">
      <CommonHeading heading={"Mesmerizing International Holiday Locations"} />

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-9 p-4">
        {internationalholidays.map((destination, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              index == 1 ? "lg:row-span-2 lg:col-span-3" : ""
            } 
            ${index == 0 || index == 3 ? "lg:col-span-2" : ""}
          
          ${index == 2 || index == 4 ? "lg:col-span-4" : ""}
          `}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transform hover:scale-110 bg-gray-300 rounded-lg transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 leading-3 text-white">
              <p className="text-[#EB662B]"> Travel to</p>
              <h1 className="font-secondary_font font-semibold text-2xl lg:text-3xl">
                {" "}
                {destination.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternationalHolidays;
