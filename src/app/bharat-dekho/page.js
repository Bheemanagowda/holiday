import React from "react";
import BharatDekhoIntro from "../../data/BharatDekhoIntro.json";
import DestinationsPageIntro from "@/Components/ReuseComponent/DestinationsPageIntro";
import LatestTour from "@/Components/ReuseComponent/LatestTour";
import BharatDekhoLatestTour from "../../data/BharatDekhoLatestTour.json";


 export const metadata={
  title: "Bharat Dekho - Vision Fly Holidays",
  description:"Explore the beauty of India with Bharat Dekho tours. Discover diverse cultures, stunning landscapes, and vibrant traditions. Book your unforgettable journey today!"
 }
function page() {
  return (
    <div className="my-24 w-11/12 mx-auto">
      <div className="text-center">
        {" "}
        <h1 className="font-secondary_font font-medium text-2xl lg:text-4xl xl:text-5xl">
          Destinations
        </h1>
        <p className="text-lg text-[#343434] lg:text-xl">
          Discover The Amazing Tours Places Around World
        </p>
      </div>
      <div className="lg:flex items-start gap-5 mt-12">
        <div className="lg:w-[74%]">
          {" "}
          <DestinationsPageIntro destinations={BharatDekhoIntro} />
        </div>
        <div className="lg:w-[26%] mt-10 lg:mt-0">
          <LatestTour latestTours={BharatDekhoLatestTour} />

          <div className="text-[#343434] text-lg  border border-gray-500 rounded-lg px-4 py-6 mt-12">
            <h2 className="font-medium text-3xl pb-2">Need Help?</h2>
            <h2>
              {" "}
              <a href="tel:919845248323">+ 91 9845248323</a>
            </h2>
            <h3>
              {" "}
              <a href="mailto:sales@visionflyholidays.com">
                {" "}
                sales@visionflyholidays.com
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
