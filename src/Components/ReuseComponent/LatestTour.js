import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function LatestTour({ latestTours }) {
  return (
    <div>
      <h2 className="font-medium text-[#4B4B4B] text-2xl mb-4">
        {" "}
        Latest Tours
      </h2>

      {latestTours?.map((ele) => (
        <Link href={ele.slug} key={uuidv4()}>
          {" "}
          <div className="flex items-center gap-5  mt-3">
            <Image
              width={250}
              height={250}
              className="w-[100px] h-[100px]  bg-gray-300 object-cover"
              src={ele.image}
              alt={ele.name}
            />{" "}
            <div className="text-[#3B3B3B] ">
              <h3 className="font-medium text-[21px]">{ele.name}</h3>
              <p className="text-[13px] font-medium ">{ele.duration}</p>
              <h5 className="font-bold text-[18px]">
                <span className="text-[14px] font-normal mr-2">
                  Starting From
                </span>
                Rs.{ele.price}
              </h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LatestTour;
