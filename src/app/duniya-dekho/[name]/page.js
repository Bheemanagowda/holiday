"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import PackagesBanner from "@/Components/ReuseComponent/PackagesBanner";
import DownloadDoc from "@/Components/ReuseComponent/DownloadDoc";
import CommonForm from "@/Components/ReuseComponent/CommonForm";
import duniyaDekhonData from "../../../data/DuniyaDekho.json";

const Cheading = ({ heading }) => (
  <h2 className="text-2xl lg:text-3xl text-[#3D3D3D] font-semibold font-secondary_font">
    {heading}
  </h2>
);

export default function Page() {
  const { name } = useParams();
  const [currentItinerary, setCurrentItinerary] = useState(0);

  const destination = duniyaDekhonData.find(
    (item) => item.slug.toLowerCase() === name.toLowerCase()
  );

  const bankDetails = [
    { type: "A/C TYPE", value: "Current Account" },
    { type: "A/C NAME", value: "VISIONFLY HOLIDAYS PRIVATE LIMITED" },
    { type: "A/C NO", value: "804905000027" },
    { type: "BRANCH", value: "GUBBALALA BRANCH" },
    { type: "IFSC CODE", value: "ICIC0008049" },
  ];

  if (!destination) {
    return (
      <div className="h-[100vh] flex items-center justify-center text-center">
        <div>
          <h2 className="text-3xl mb-4">Package Not Found</h2>
          <Link
            href="/duniya-dekho"
            className="bg-deep_green text-white px-4 py-2 rounded-md text-sm"
          >
            Explore More Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-24 font-light text-lg lg:text-xl text-[#343434]">
      <PackagesBanner
        images={destination.bannerImages}
        bannerLgImages={destination.bannerLgImages}
      />

      <div className="w-11/12 mx-auto mt-12">
        <h2 className="font-semibold font-secondary_font capitalize text-[#3D3D3D] text-3xl lg:text-4xl">
          {destination.name}
        </h2>
<div className="flex items-center justify-between lg:justify-start lg:gap-[600px]">
  <p className="bg-deep_green rounded-md font-medium w-max px-3 py-1 lg:text-lg text-white mt-3 mb-5">
    {destination.duration}
  </p>

  {destination.pdf && <DownloadDoc file={destination.pdf} />}
</div>


        <div className="lg:flex lg:flex-row-reverse gap-5">
          {/* Sidebar */}
          <div className="lg:w-4/12">
            <div className="bg-blue_c text-white py-9 px-6 rounded-xl">
              <p className="text-base">Starts From</p>
              <h3 className="font-bold text-4xl py-2">
                Rs.{destination.price}*
              </h3>
              <p className="text-base pt-1 pb-2">
                {destination.name} | {destination.duration}
              </p>
              <p className="text-[14px] capitalize">
                Balance payment <span className="font-medium">30 days prior</span>
              </p>
            </div>

            <div className="lg:h-[100vh] lg:sticky lg:top-0 mt-6 lg:mt-0">
              <CommonForm />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-8/12">
            {destination.description.map((ele) => (
              <div key={uuidv4()} className="my-4">
                {ele}
              </div>
            ))}

            {destination.additionalInfo?.map((ele) => (
              <div key={uuidv4()} className="my-12">
                <Cheading heading={ele.name} />
                <p className="mt-4">{ele.description}</p>
              </div>
            ))}

            {/* Itinerary */}
            <div id="itinerary" className="mt-8">
              <div className="bg-white border-b px-6 py-4 border-[#000000]/20">
                <Cheading heading="Itinerary" />
              </div>

              <div className="bg-white select-none px-6 py-2">
                {destination.itinerary.map((item, index) => (
                  <div
                    key={uuidv4()}
                    className={`py-4 ${
                      index !== destination.itinerary.length - 1
                        ? "border-b border-[#000000]/20"
                        : ""
                    }`}
                  >
                    <div
                      className="flex cursor-pointer items-start justify-between gap-4"
                      onClick={() =>
                        setCurrentItinerary(
                          currentItinerary === index ? null : index
                        )
                      }
                    >
                      <h4 className="text-[#343434] font-medium">
                        {item.day} {item.title}
                      </h4>

                      {currentItinerary === index ? (
                        <AiFillMinusCircle className="text-[#FBCA05]" />
                      ) : (
                        <AiFillPlusCircle className="text-[#2A892D]" />
                      )}
                    </div>

                    {currentItinerary === index && (
                      <div className="mt-4 space-y-3 text-base lg:text-lg">
                        <p>{item.description}</p>

                        {item.additionalInfo?.map((info) => (
                          <div
                            key={uuidv4()}
                            className="flex items-start gap-2"
                          >
                            <Image
                              src="/images/icons/write.webp"
                              alt="icon"
                              width={22}
                              height={22}
                              className="mt-[3px]"
                            />
                            <p>{info}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel */}
            {destination.hotel && (
              <div className="my-12">
                <Cheading heading={destination.hotel.name} />
                {destination.hotel.amenities.map((ele) => (
                  <div key={uuidv4()} className="flex items-start gap-3 mt-3">
                    <Image
                      src="/images/icons/write.webp"
                      alt="icon"
                      width={22}
                      height={22}
                      className="mt-[3px]"
                    />
                    <p>{ele}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Flight */}
            {destination.flight && (
              <div className="my-12">
                <Cheading heading={destination.flight.name} />
                {destination.flight.amenities.map((ele) => (
                  <div key={uuidv4()} className="flex items-start gap-3 mt-3">
                    <Image
                      src="/images/icons/write.webp"
                      alt="icon"
                      width={22}
                      height={22}
                      className="mt-[3px]"
                    />
                    <p>{ele}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Inclusions & Exclusions */}
            {destination.inclusionAndExclusion && (
              <div className="border-t border-b border-gray-300 my-12 py-8">
                <div className="lg:flex gap-4">
                  <div className="lg:w-4/12">
                    <Cheading heading="Inclusions" />
                  </div>
                  <div className="lg:w-8/12 bg-[#388C21]/10 p-5 space-y-4">
                    {destination.inclusionAndExclusion.inclusions.map((inc) => (
                      <div key={uuidv4()} className="flex items-start gap-4">
                        <Image
                          src="/images/icons/write.webp"
                          alt="icon"
                          width={22}
                          height={22}
                          className="mt-[3px]"
                        />
                        <p>{inc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:flex gap-4 mt-4">
                  <div className="lg:w-4/12">
                    <Cheading heading="Exclusions" />
                  </div>
                  <div className="lg:w-8/12 bg-[#FFF2F2] p-5 space-y-4">
                    {destination.inclusionAndExclusion.exclusions.map((exc) => (
                      <div key={uuidv4()} className="flex items-start gap-4">
                        <Image
                          src="/images/icons/cross.webp"
                          alt="cross"
                          width={28}
                          height={28}
                          className="mt-[3px]"
                        />
                        <p>{exc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bank Details */}
            <div className="my-12">
              <Cheading heading="Bank Details For Payment" />
              <div className="mt-6 space-y-2 uppercase lg:w-8/12">
                {bankDetails.map(({ type, value }) => (
                  <div
                    key={uuidv4()}
                    className="flex bg-gray-200 px-4 py-2 gap-4"
                  >
                    <span className="w-[120px]">{type}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Please Note */}
            {destination.pleaseNote && (
              <div>
                <Cheading heading={destination.pleaseNote.title} />
                <div className="mt-5 space-y-4">
                  {destination.pleaseNote.notes.map((note) => (
                    <div key={uuidv4()} className="flex items-start gap-4">
                      <Image
                        src="/images/icons/write.webp"
                        alt="icon"
                        width={22}
                        height={22}
                        className="mt-[3px]"
                      />
                      <p>{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions */}
            {destination.conditions && (
              <div className="my-12">
                <Cheading heading={destination.conditions.title} />
                <div className="mt-5 space-y-4">
                  {destination.conditions.conditions.map((cond) => (
                    <div key={uuidv4()} className="flex items-start gap-4">
                      <div className="w-3 h-3 mt-[8px] bg-deep_green rounded-full" />
                      <p>{cond}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
