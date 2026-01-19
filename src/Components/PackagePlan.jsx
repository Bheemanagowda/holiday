"use client"
import React, { useState } from "react";
import CommonHeading from "./ReuseComponent/CommonHeading";
import PackagePlanCard from "./PackagePlanCard";

function PackagePlan() {
    const[currentPackage,setCurrentPackge]=useState(0);
    const packages = [
        {
          name: "Family - Friendly",
          places: [
            {
              name: "Jammu Kashmir",
              image: "/images/jammu_kashmir_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/kashmir-delight-tour-package",
            },
            {
              name: "Singapore",
              image: "/images/singapore_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Goa",
              image: "/images/goa_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/goa-getaway-package",
            },
            {
              name: "Kerala",
              image: "/images/kerala_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/kerala-tour-package",
            },
            {
              name: "Thailand",
              image: "/images/thailand_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Sikkim",
              image: "/images/sikkim_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/sikkim-darjeeling-tour-package",
            },
          ],
        },
        {
          name: "Romantic",
          places: [
            {
              name: "Shimla Manali",
              image: "/images/shimla_manali_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/himachal-tour-package",
            },
            {
              name: "Leh Ladakh",
              image: "/images/leh_ladakh_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/hidden-gem-of-leh-ladakh",
            },
            {
              name: "Maldives",
              image: "/images/maldives_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Switzerland",
              image: "/images/switzerland_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Bali",
              image: "/images/bali_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "seychelles",
              image: "/images/seychelles_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
          ],
        },
        {
          name: "Cultural",
          places: [
            {
              name: "Hampi",
              image: "/images/hampi_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Delhi Agra",
              image: "/images/delhi_agra_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Mysore",
              image: "/images/mysore_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/mysore-ooty-tour-package",
              
            },
            {
              name: "Varanasi",
              image: "/images/varanasi_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/varanasi-tour-package",
            },
            {
              name: "Egypt",
              image: "/images/egypt_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Europe",
              image: "/images/europe_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
          ],
        },
        {
          name: "Nature",
          places: [
            {
              name: "Iceland",
              image: "/images/iceland_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Newzealand",
              image: "/images/newzealand_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "South Africa",
              image: "/images/south_africa_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Norway",
              image: "/images/norway_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Himachal Pradesh",
              image: "/images/himachal_pradesh_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/himachal-tour-package",
            },
            {
              name: "Japan",
              image: "/images/japan_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
          ],
        },
        {
          name: "Beach",
          places: [
            {
              name: "Andaman",
              image: "/images/andaman_intro.webp",
              description: "Flights . Hotels . Holidays",
              link:"/bharat-dekho/andaman-tour-package",
            },
            {
              name: "Lakshadweep",
              image: "/images/lakshadweep_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Phuket And Krabi",
              image: "/images/phuket_krabi_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Philippine",
              image: "/images/philippine_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Antalya",
              image: "/images/antalya_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
            {
              name: "Langkawi",
              image: "/images/langkawi_intro.webp",
              description: "Flights . Hotels . Holidays",
              
            },
          ],
        },
      ];
      

  return (
    <div className="pt-8 w-11/12 mx-auto">
      <CommonHeading
        heading={"Package plan your perfect trip"}
        intro={"Most popular destinations"}
      />
      <div className="flex flex-wrap gap-3  justify-center items-center pt-5">
        {packages.map((ele, index) => (
          <div key={index} onClick={()=>{
            setCurrentPackge(index)
          }}>
            <h1 className={`${index==currentPackage?"bg-light_green text-deep_green ":"bg-light_gray  text-deep_gray"} cursor-pointer font-medium rounded-md  py-1 px-4 md:px-6 md:py-2 text-xl `}>{ele.name}</h1>
          </div>
        ))}
      </div>
       {/* Places */}
        <PackagePlanCard places={packages[currentPackage].places}/>
    </div>
  );
}

export default PackagePlan;
