import React from "react";
import Image from "next/image";
import CommonHeading from "./ReuseComponent/CommonHeading";
import { v4 as uuidv4 } from "uuid";
function ContactHero() {
  const heroitem = [
    {
      intro: "Location",
      heading: "Visit Us At",
      icon: "/images/icons/location.svg",
      description:
        " 15/22, 1st  main ashtalakshmi Layout, puttenahalli main road, JP nagar 6th phase bangalore -560078",
      link: "##",
    },
    {
      intro: "24*7 SERVICE",
      heading: "Call Us On",
      icon: "/images/icons/call.svg",
      description: "Mob : +91 98452 48323",
      link: "tel:+91 98452 48323",
      mobile:"Mob : +91 90361 00528",
      mobilelink:"tel:+919036100528"
      
    },
    {
      intro: "DROP A LINE",
      heading: "Mail Address",
      icon: "/images/icons/mail.svg",
      description: "Sales@visionflyholidays.com",
      link: "mailto:sales@visionflyholidays.com",
    },
    {
      intro: "OFFICE HOURS",
      heading: "Opening Time",
      icon: "/images/icons/clock.svg",
      description: "Mon- Sat 10 AM to 6:30 PM | Sunday (Closed)",
      link: "#",
    },
  ];
  return (
    <div className="pt-24 pb-8">
      <p className="w-11/12 lg:w-6/12 mx-auto text-center lg:text-xl pb-2">
        Connect with us to be part of our vibrant community. Whether you want to
        get in touch, collaborate join us.{" "}
        <span className="text-blue_c"> Let's grow together!</span>{" "}
      </p>
      <CommonHeading
        heading={`
           <span class="text-blue_c"> Contact </span>  & Join Together
            `}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 w-11/12 mx-auto">
        {heroitem?.map((item) => (
          <div
            key={uuidv4()}
            className="bg-white rounded-2xl px-8 py-6 shadow-xl"
          >
            <div className="flex items-center gap-4  justify-center">
              <Image
                src={item.icon}
                alt={item.heading}
               
                priority={true} // optional: load icons immediately
              />
              <div className="">
                <h4 className="text-black font-medium uppercase text-base">
                  {" "}
                  {item.intro}
                </h4>
                <h1 className="text-orange_c leading-4 font-semibold text-xl">
                  {item.heading}
                </h1>
              </div>
            </div>

            <p className="pt-3 text-center">
              {" "}
              <a href={item.link}> {item.description}</a>{" "}
            </p>
            {item.mobile&& <p  className="pt-1 text-center"> 
              <a href={item.mobilelink}> {item.mobile}</a>
              </p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactHero;
