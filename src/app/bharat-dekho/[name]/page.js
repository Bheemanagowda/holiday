"use client";
import PackagesBanner from "@/Components/ReuseComponent/PackagesBanner";
import bharatDekhoData from "../../../data/BharatDekho.json";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import CommonForm from "@/Components/ReuseComponent/CommonForm";
import Link from "next/link";

const Cheading = ({ heading }) => {
  return (
    <h2 className="text-2xl lg:text-3xl text-[#3D3D3D] font-semibold font-secondary_font">
      {" "}
      {heading}{" "}
    </h2>
  );
};

function Page() {
  const { name } = useParams();
  const [currentItinerary, setCurrentItinerary] = useState(0);

  const destination = bharatDekhoData?.find((item) => item.slug == name);

  const bankDetails = [
    {
      type: "A/C TYPE",
      value: "Current Account",
    },
    {
      type: "A/C NAME",
      value: "VISIONFLY HOLIDAYS PRIVATE LIMITED ",
    },
    {
      type: "A/C NO",
      value: "804905000027",
    },
    {
      type: "BRANCH",
      value: "GUBBALALA BRANCH",
    },
    {
      type: "IFSC CODE",
      value: "ICIC0008049",
    },
  ];

  if (!destination) {
    return (
      <div className="h-[100vh] flex items-center justify-center text-3xl">
        <div>
          {" "}
          <h2> Not found your package </h2>
          <Link href="/bharat-dekho" className="bg-deep_green text-white px-4 py-2 rounded-md text-sm mt-10 w-max mx-auto block">Explore more packages</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="my-24 font-light text-lg lg:text-xl text-[#343434]">
      <PackagesBanner
        images={destination?.bannerImages}
        bannerLgImages={destination?.bannerLgImages}
      />
      <div className="w-11/12 mx-auto mt-12">
        <h2 className="font-semibold font-secondary_font capitalize text-[#3D3D3D] text-3xl lg:text-4xl">
          {destination.name}
        </h2>
        <p className="bg-deep_green rounded-md font-medium w-max px-3 py-1 lg:text-lg text-white mt-3 mb-5">
          {destination.duration}
        </p>

        <div className="lg:flex lg:flex-row-reverse  gap-5">
          <div className="lg:w-4/12">
            <div className="bg-blue_c text-white py-9 px-6 rounded-xl">
              <p className="text-base">Starts From</p>
              <h3 className="font-bold text-4xl py-2">
                {" "}
                Rs.{destination?.price}*
              </h3>
              <p className="text-base  pt-1 pb-2">
                {destination.name} | {destination?.duration}
              </p>
              <p className="text-[14px] capitalize">
                Balance payment{" "}
                <span className="font-medium"> 30 days prior</span>
              </p>
            </div>
            <div className="lg:h-[100vh] lg:sticky lg:top-0">
              <CommonForm />{" "}
            </div>
          </div>
          <div className="lg:w-8/12">
            {destination?.description?.map((ele) => (
              <div key={uuidv4()} className="my-4">
                {ele}
              </div>
            ))}

            {destination?.additionalInfo && (
              <div>
                {destination?.additionalInfo?.map((ele) => (
                  <div key={uuidv4()} className="my-12">
                    <Cheading heading={ele.name} />
                    <p className="mt-4">{ele.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Itinerary section */}
            <div className="mt-8" id="itinerary">
              <div className="bg-white border-b px-6 py-4 text-darkBlack flex items-center gap-2 border-[#000000]/20">
                <Cheading heading="Itinerary" />
              </div>
              <div className="bg-white select-none px-6 py-2">
                {" "}
                {destination?.itinerary.map((item, index) => (
                  <div
                    className={`py-4 ${
                      destination.itinerary.length - 1 === index
                        ? ""
                        : "border-b  border-[#000000]/20"
                    }`}
                    key={item.title}
                  >
                    <div
                      className="flex cursor-pointer items-start gap-4 justify-between"
                      onClick={() =>
                        setCurrentItinerary(
                          currentItinerary === index ? null : index
                        )
                      }
                    >
                      {" "}
                      <h4 className=" text-[#343434] font-medium text-darkBlack">
                        {item.day} {item.title}
                      </h4>
                      <span className="mt-[5px]">
                        {currentItinerary === index ? (
                          <div className="text-[#FBCA05]">
                            {" "}
                            <AiFillMinusCircle />{" "}
                          </div>
                        ) : (
                          <div className="text-[#2A892D]">
                            {" "}
                            <AiFillPlusCircle />
                          </div>
                        )}
                      </span>
                    </div>

                    <div
                      className={` text-[#343434] text-base lg:text-lg font-light ${
                        currentItinerary === index ? "block" : "hidden"
                      } mt-4`}
                    >
                      <p>{item.description}</p>

                      {item?.additionalInfo &&
                        item?.additionalInfo?.map((ele) => (
                          <div
                            key={uuidv4()}
                            className="flex items-start gap-2 mt-3"
                          >
                            <img
                              src="/images/icons/write.webp"
                              alt="right"
                              className="w-[22px] mt-[3px]"
                            />
                            <p>{ele}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>

            {destination?.hotel && (
              <div className="my-12">
                <Cheading heading={destination.hotel.name} />

                {destination?.hotel?.amenities?.map((ele) => (
                  <div key={uuidv4()} className="flex items-start gap-3 mt-3">
                    <img
                      src="/images/icons/write.webp"
                      alt="right"
                      className="w-[22px] mt-[3px]"
                    />
                    <p>{ele}</p>
                  </div>
                ))}
              </div>
            )}
            {destination?.inclusionAndExclusion && (
              <div className="border-t border-b border-gray-300 my-12 py-8">
                <div className="lg:flex justify-between">
                  <h3 className="lg:w-4/12 mb-4 pt-5 font-medium lg:mb-0">
                    <Cheading heading="Inclusions" />
                  </h3>

                  <div className="lg:w-8/12 bg-[#388C21]/10 p-5">
                    {destination.inclusionAndExclusion.inclusions.map(
                      (inclusion) => (
                        <div
                          key={inclusion}
                          className="flex items-start gap-4 mb-4"
                        >
                          <img
                            src="/images/icons/write.webp"
                            alt="right"
                            className="w-[22px] mt-[3px]"
                          />

                          <p className="w-11/12">{inclusion}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="lg:flex mt-4">
                  <h3 className="lg:w-4/12 font-medium pt-9">
                    {" "}
                    <Cheading heading="Exclusions" />
                  </h3>

                  <div className="lg:w-8/12 bg-[#FFF2F2] p-5 mt-4">
                    {destination.inclusionAndExclusion.exclusions.map(
                      (exclusion) => (
                        <div
                          key={exclusion}
                          className="flex items-start gap-4 mb-4"
                        >
                          <img
                            src="/images/icons/cross.webp"
                            alt="cross"
                            className="w-[28px] mt-[3px]"
                          />
                          <p className="w-11/12">{exclusion}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="my-12">
              <Cheading heading="Bank Details For Payment" />

              <div className="mt-6 space-y-2 uppercase lg:w-8/12">
                {bankDetails.map(({ type, value }) => (
                  <div key={type} className="flex  bg-gray-200 px-4 py-2 gap-4">
                    <span className="w-[100px]">{type}</span>:
                    <span className="">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            {destination?.pleaseNote && (
              <div>
                <Cheading heading={destination?.pleaseNote?.title} />
                <div className="mt-5">
                  {destination.pleaseNote.notes.map((note) => (
                    <div key={uuidv4()} className="flex items-start gap-4 mb-4">
                      <img
                        src="/images/icons/write.webp"
                        alt="right"
                        className="w-[22px] mt-[3px]"
                      />

                      <p className="w-11/12">{note}</p>
                    </div>
                  ))}{" "}
                </div>
              </div>
            )}

            {destination?.conditions && (
              <div className="my-12">
                <Cheading heading={destination?.conditions?.title} />
                <div className="mt-5">
                  {destination.conditions.conditions.map((note) => (
                    <div key={uuidv4()} className="flex items-start gap-4 mb-4">
                      <div className="w-3 h-3 mt-[8px] bg-deep_green rounded-full" />

                      <p className="w-11/12">{note}</p>
                    </div>
                  ))}{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Page;
