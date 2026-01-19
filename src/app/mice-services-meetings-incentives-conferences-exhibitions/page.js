import React from "react";
import MiceHero from "../../Components/MiceHero";
import CommonHeading from "../../Components/ReuseComponent/CommonHeading";
import { v4 as uuidv4 } from 'uuid';

export const metadata={
    title: "MICE Services by VisionFly Holidays | Elevate Your Corporate Experience",
    description: "Discover tailored MICE services by VisionFly Holidays. From small meetings to large international conferences, we ensure flawless execution for all your corporate needs. Elevate your business events with personalized, memorable experiences."
}

function Mice() {
  const MiceBanner = [
    "/images/mice1.webp",
    "/images/mice2.webp",
    "/images/mice3.webp",
    "/images/mice4.webp",
  ];
  const miceDetails = [
    {
      heading: "meeting",
      cName: "meeting_heading",
      description:
        "We handle­ everything for your company mee­tings. We pick the best place­, provide top-notch sound and video tools, and make sure­ everyone has cozy lodgings. Our te­am takes care of all the little­ things. We want to make a space whe­re teamwork and new ide­as can grow. This lets your group concentrate on making your busine­ss better.",
    },
    {
      heading: "incentives",
      cName: "incentives_heading",
      description:
        "Boost your team's spirit with our custom-made incentive schemes. We provide a variety of thrilling places and activities. Choose from lavish resorts, adve­nture journeys, insightful cultural outings, or wellness getaways. Our tailored travel re­wards aim to ignite inspiration and passion, thus enhancing efficie­ncy and allegiance within your work sphere.",
    },
    {
      heading: "conferences",
      cName: "conferences_heading",
      description: `Setting up a top-notch conference needs detail and know how. VisionFly Holidays gives you complete help with conference planning, picking the right place, managing sign-ups, coordinating stuff and giving support on the spot. Our group makes sure your conference goes as planned, letting you give powerful talks and interact well with your listeners.
 `,
    },
    {
      heading: "EXHIBITIONS",
      cName: "exhibitions_heading",
      description: `Catch eyes at your next show with our top-notch services. We handle all areas, from booth creation to advertising, transport and visitor control. This shows your brand in the best light. With our broad experience in managing shows, you enjoy a smooth journey. So, you can concentrate on making important business connections and friendships.
 `,
    },
  ];

  const whyChose = [
    {
      heading: "Expert Planning",
      description: `Our seasoned professionals handle every detail, ensuring your meetings, incentives, conferences and exhibitions are flawlessly executed.
            `,
    },
    {
      heading: `Tailored Experiences
            `,
      description: `
            We offer customized MICE packages to meet your specific goals, whether it's a small meeting or a large conference.`,
    },
    {
      heading: `Global Options`,
      description: `
            With a vast network of partners and venues worldwide, we provide exciting destinations and top-notch facilities.`,
    },
    {
      heading: `Smooth Execution`,
      description: `From planning to on-site coordination, we manage everything so you can focus on your business.
            `,
    },
    {
      heading: `Cutting-Edge Tech`,
      description: `
            We use the latest event technology to enhance your experience with virtual meetings, interactive apps and real-time analytics.`,
    },
  ];
  return (
    <div>
 
      <MiceHero />
      {/* Mice Soluations */}
      <div className="mt-8">
        <CommonHeading
          intro={"MICE is the growth engine for corporates"}
          heading={`Comprehensive  <span class="font-extrabold tracking-tighter "> <span class="text-[#065E90]"> M</span> <span class="text-[#008137]"> I</span> <span class="text-[#B10121]">C </span> <span class="text-[#FF6201]">E </span> </span> Solutions`}
        />
        <div className="bg-[#FFF7E8] py-10">
          <div className=" w-11/12 mx-auto grid grid-cols-2  gap-5 lg:gap-0 lg:grid-cols-4">
            {MiceBanner.map((item, index) => (
              <div key={index} className="">
                <img src={item} alt="" className=" lg:h-[400px] w-full" />
              </div>
            ))}
          </div>{" "}
        </div>
      </div>

      <div className="w-11/12 mb-8 m-auto">
        {miceDetails?.map((ele) => (
          <div key={ele.heading} className="pt-5">
            <div
              id={ele.cName && ele.cName}
              className="miceHeading flex items-center  font-bold font-secondary_font text-2xl text-white mb-3 px-5 py-2 uppercase pr-8"
            >
              {ele.heading}
            </div>

            <h2 className="text-[#343434] text-xl">{ele.description}</h2>
          </div>
        ))}
      </div>

      <div className="relative">
        <CommonHeading
          heading={
            'Why Choose VisionFly Holidays for Your   <span class="font-extrabold tracking-tighter"> <span class="text-[#065E90]"> M</span> <span class="text-[#008137]"> I</span> <span class="text-[#B10121]">C </span> <span class="text-[#FF6201]">E </span> </span> Needs?'
          }
          intro={"MICE Services by VisionFly Holidays"}
        />

        <div className="w-11/12 mx-auto mb-10">
          {whyChose?.map((ele) => (
            <div key ={uuidv4()} className="text-[#343434] mt-5 border-l-4 pl-2 border-orange_c">
              {" "}
              <h1 className="font-semibold text-2xl lg:text-3xl">{ele.heading}</h1>
              <h2 className="text-xl">{ele.description}</h2>
            </div>
          ))}
        </div>
        <img src="/images/mice_glob.webp" className="absolute top-5 w-7/12 left-0 right-0 mx-auto object-contain   " alt="" />
      </div>
    </div>
  );
}

export default Mice;
