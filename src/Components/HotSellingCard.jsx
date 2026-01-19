import Link from "next/link";
import React from "react";
import { GoClock } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";
function HotSellingCard({ item }) {
  return (
    <div className="bg-white text-light_black_c rounded-2xl relative p-4 hover:border shadow-md transition-all  border-blue_c mr-4 mt-4 mb-2">
      {item?.new && (
        <img
          src="/images/new.webp"
          className="absolute -right-2 w-20 -top-2 "
          alt=""
        />
      )}
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-[200px] mx-auto bg-gray-300 rounded-lg"
      />
      <h1 className="font-secondary_font font-semibold text-2xl lg:text-3xl pt-2">
        {item.name}
      </h1>
      <div className="flex bg-deep_green font-medium text-white w-max px-2 rounded-[3px] mt-1 items-center text-sm py-[1px]">
        <GoClock />
        <span className="pl-2 "> {item.duration}</span>
      </div>
      <div className="flex items-center border-t mt-2 pt-1 whitespace-nowrap border-[#E8E8E8]">
        Includes :{" "}
        <div className="flex gap-2 pl-2 ">
          {item?.facility?.map((ele) => (
            <div key={uuidv4()}>
              {" "}
              <img src={ele} className="w-5"   alt="includes" />
            </div>
          ))}
        </div>{" "}
      </div>
      <div className="flex items-center justify-between lg:mt-2">
        <div className="pt-2 leading-3 text-sm ">
          Starting From
          <p className="font-bold  text-xl"> Rs.{item.price}</p>
        </div>

        <button className="bg-blue_c text-white font-semibold rounded-[3px] px-3 lg:py-1  text-lg">
          {" "}
          <Link href={item.link}> BOOK NOW </Link>
        </button>
      </div>
    </div>
  );
}

export default HotSellingCard;
