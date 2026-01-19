import React from "react";
import Image from "next/image";

function ExploreTheWorld() {
  return (
    <div className="bg-[#E6EAED] mt-5">
      <div className="w-11/12 mx-auto py-5 lg:py-10 lg:flex items-center justify-between">
        <div className="lg:w-6/12">
          <h1 className="px-3 w-max font-medium text-lg bg-yellow-400">
            {" "}
            LET'S EXPLORE THE THE WORLD
          </h1>
          <h1 className="text-2xl lg:text-4xl font-bold pt-2 md:w-5/12  lg:w-full xl:w-9/12 font-secondary_font">
            {" "}
            WE MAKE YOUR TRAVEL MORE ENJOYABLE
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
          <div>
            <div className="relative flex items-start break-words">
              <div className="explore_line  w-[100px] md:w-[50px] lg:w-[78px] xl:w-[55px]">
                <img
                  src="/images/icons/globe.webp"
                  alt="globe"
                  className="w-[30px] md:w-[30px] lg:w-[85px] xl:w-[35px] xl:h-[35px]"
                />
              </div>{" "}
              <div className="w-max">
                <h1 className="font-medium text-xl  lg:text-2xl">
                  {" "}
                  Most Popular Destinations
                </h1>
                <p className="pt-2  md:w-9/12 lg:w-11/12  xl:w-8/12">
                  Discover the world's most sought-after destinations, from
                  breathtaking wonders to vibrant cityscapes.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5 mt-5 items-start break-words">
              <div className="explore_line   w-[100px] md:w-[50px] lg:w-[85px] xl:w-[60px] ">
                <img
                  src="/images/icons/wallet.webp"
                  alt="wallet"
                  className="w-[100px] md:w-[50px] lg:w-[85px] xl:w-[50px] xl:h-[35px]"
                />
              </div>
              <div>
                <h1 className="font-medium text-xl  pt-1 lg:text-2xl">
                  {" "}
                  Budget Friendly Packages
                </h1>
                <p className="pt-2 md:w-9/12 lg:w-11/12  xl:w-8/12">
                  Travel doesn't have to break the bank! Explore our curated
                  selection of budget-friendly packages, where you can
                  experience incredible adventures
                </p>
              </div>
            </div>
            <div className="relative flex gap-5 mt-5 items-start break-words">
              <div className="explore_line  w-[100px] md:w-[50px] lg:w-[85px] xl:w-[60px] ">
                <img
                  src="/images/icons/like_star.webp"
                  alt="globe"
                  className="w-full"
                />
              </div>{" "}
              <div>
                <h1 className="font-medium text-xl  pt-1 lg:text-2xl">
                  {" "}
                  Satisfaction Guarranted
                </h1>
                <p className="pt-2 md:w-9/12 lg:w-11/12  xl:w-8/12">
                  Your satisfaction is our top priority. With meticulous
                  planning and personalized service, we ensure your travel
                  experiences exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 pt-4 lg:pt-0">
          {" "}
          <img
            src="/images/globe.webp"
            className="w-full md:w-6/12  lg:w-full mx-auto"
            alt="Explore The World"
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default ExploreTheWorld;
