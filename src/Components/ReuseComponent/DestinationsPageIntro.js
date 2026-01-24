import Link from "next/link";
import React from "react";

function DestinationsPageIntro({ destinations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {destinations?.map((item, index) => (
        /* Use index or a unique property like item.slug for the key */
        <div key={index} className="flex flex-col h-full bg-white shadow-md">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-[200px] lg:h-[240px] object-cover"
    loading="lazy"
  />
  <div className="flex flex-row flex-1 justify-between p-5 bg-[#FBFBFB]">
    <div>
      <p className="text-[#4B4B4B] text-sm">{item.intro}</p>
      <h2 className="text-2xl lg:text-3xl text-[#3D3D3D] font-semibold">{item.name}</h2>
      <h3 className="bg-deep_green w-max px-3 py-1 text-white mt-3 mb-5">
        {item.duration}
      </h3>
      <div>
        {item?.description?.map((ele, i) => (
          <p key={i} className="text-[#4B4B4B]">{ele}</p>
        ))}
      </div>
    </div>
    <div className="mt-4 lg:mt-0 flex flex-col gap-3 lg:block items-start lg:items-center">

      <div>
        <p className="text-sm text-[#4B4B4B]">Starting From</p>
        <h4 className="text-[#3D3D3D] font-bold text-3xl">Rs.{item.price}</h4>
      </div>
      <Link href={item.slug}>
        <button className="bg-[#FECF00] cursor-pointer px-4 py-1 lg:mt-16 text-[#4B4B4B]">
          View Details
        </button>
      </Link>
    </div>
  </div>
</div>

      ))}
    </div>
  );
}

export default DestinationsPageIntro;
