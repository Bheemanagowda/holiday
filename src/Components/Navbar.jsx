"use client";

import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { IoIosArrowDown, IoMdClose, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import RecommendedSearch from "./RecommendedSearch";
import tourMenu from "../data/tourMenu.json";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searchvisible, setSearchvisible] = useState(false);

  const [activeMegaIndex, setActiveMegaIndex] = useState(null);
  const [desktopRegionIndex, setDesktopRegionIndex] = useState(0);

  const [mobileMegaIndex, setMobileMegaIndex] = useState(null);
  const [mobileRegionIndex, setMobileRegionIndex] = useState(null);

  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = searchvisible ? "hidden" : "unset";
  }, [searchvisible]);

  const navdata = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    {
      name: "Bharat Dekho",
      type: "mega",
      link: "/bharat-dekho",
      data: tourMenu["bharat-dekho"],
    },
    {
      name: "Duniya Dekho",
      type: "mega",
      link: "/duniya-dekho",
      data: tourMenu["duniya-dekho"],
    },
    {
      name: "MICE",
      link: "/mice-services-meetings-incentives-conferences-exhibitions",
    },
    {
      name: "Gallery",
      type: "gallery",
      data: {
        sections: [
          {
            links: [
              { name: "Photo Gallery", link: "/gallery" },
              { name: "Video Gallery", link: "/video" },
            ],
          },
        ],
      },
    },
    { name: "Contact Us", link: "/contact-us" },
    { name: "View All Bharat Dekho", link: "/bharat-dekho", mobileOnly: true, className: "lg:hidden" },
    { name: "View All Duniya Dekho", link: "/duniya-dekho", mobileOnly: true, className: "lg:hidden" },
  ];

  return (
    <div className={`fixed w-full z-50 max-w-[1700px] ease-in-out duration-700 ${visible ? "top-0" : "-top-full"}`}>
      <div className="font-medium text-gray_c text-primary bg-white shadow-md">

        <div className="flex items-center py-3 md:py-4 lg:py-0 justify-between w-full xl:w-11/12 mx-auto relative z-[60] bg-white px-[15px] md:px-0">

          <div className="flex-shrink-0 lg:basis-1/5 xl:basis-2/12">
            <Link href="/">
              <img className="w-[240px] md:w-[240px] lg:w-[240px] xl:w-[270px]" src="/logo.png" alt="logo" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-center flex-1 relative">
            {navdata.map((ele, index) => (
              <div
                key={uuidv4()}
                className={`navitem group px-2 xl:px-3 ${ele.className || ""}`}
                onMouseEnter={() => ele.type && setActiveMegaIndex(index)}
                onMouseLeave={() => setActiveMegaIndex(null)}
              >
                {!ele.type ? (
                  <Link
                    href={ele.link}
                    className={`capitalize py-6 block text-[18px] font-semibold hover:text-[#028680] ${
                      path === ele.link ? "text-[#028680] border-b-2 border-[#028680]" : ""
                    }`}
                  >
                    {ele.name}
                  </Link>
                ) : (
                  <>
                    <div className="capitalize py-6 flex items-center gap-1 text-[18px] font-semibold cursor-pointer group-hover:text-[#028680]">
                      {ele.name}
                      <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />
                    </div>

                    {/* BHARAT & DUNIYA DEKHO */}
                    {activeMegaIndex === index && ele.type === "mega" && (
                      <div className="hidden md:block absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t border-gray-100">
                        <div className="flex min-h-[450px] max-h-[70vh] overflow-hidden">

                          <div className="w-1/4 max-w-[220px] bg-gray-50 border-r border-gray-200 overflow-y-auto">
                            {ele.data.regions.map((region, rIdx) => (
                              <div
                                key={region.name}
                                onMouseEnter={() => setDesktopRegionIndex(rIdx)}
                                className={`block px-6 py-4 text-[18px] font-bold tracking-wide transition-all ${
                                  desktopRegionIndex === rIdx
                                    ? "bg-white text-[#028680] border-r-4 border-[#028680]"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                              >
                                {region.name}
                              </div>
                            ))}
                          </div>

                          <div className="flex-1 p-8 grid grid-cols-3 gap-8 overflow-y-auto max-h-[70vh] bg-white relative">
                            <div className="absolute top-4 right-4">
                              <Link
                                href={ele.link}
                                className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 text-[15px] font-medium border border-[#028680] text-[#028680] rounded hover:bg-[#028680] hover:text-white transition"
                              >
                                View All {ele.name} <span className="text-[13px]">→</span>
                              </Link>
                            </div>

                            {ele.data.regions[desktopRegionIndex]?.sections?.map((section) => (
                              <div key={section.heading}>
                                <h4 className="text-[#028680] font-black border-b border-gray-50 pb-2 mb-3 mt-6 text-[17px] tracking-tight">
                                  {section.heading}
                                </h4>
                                <ul className="space-y-1.5">
                                  {section.links.map((link) => (
                                    <li key={link.name}>
                                      <Link
                                        href={link.link}
                                        className="text-gray-700 hover:text-[#028680] block text-[16px] font-normal"
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* GALLERY */}
                    {activeMegaIndex === index && ele.type === "gallery" && (
                      <div className="hidden md:block absolute top-full w-[200px] bg-white shadow-2xl z-50 border-t border-gray-100">
                        <div className="p-5 grid grid-cols-1 gap-5">
                          {ele.data.sections.map((section) => (
                            <div key={section.heading}>
                              <ul className="space-y-2">
                                {section.links.map((link) => (
                                  <li key={link.name}>
                                    <Link href={link.link} className="text-gray-700 hover:text-[#028680] block text-[15px]">
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-2 lg:gap-4 lg:basis-1/4 justify-end">
            <div className="hidden lg:block w-full"><RecommendedSearch /></div>
            <button onClick={() => setSearchvisible(true)} className="lg:hidden p-2 text-2xl text-[#028680]">
              <IoSearch />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-3xl">
              {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {/** unchanged code below **/}
        {/* ... MOBILE SECTION SAME */}
        {/* ... SEARCH SECTION SAME */}
      </div>
    </div>
  );
}

export default Navbar;
