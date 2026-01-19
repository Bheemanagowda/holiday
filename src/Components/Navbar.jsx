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

  const navdata = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Bharat Dekho", type: "mega", link: "/bharat-dekho", data: tourMenu["bharat-dekho"] },
    { name: "Duniya Dekho", type: "mega", link: "/duniya-dekho", data: tourMenu["duniya-dekho"] },
    { name: "MICE", link: "/mice-services-meetings-incentives-conferences-exhibitions" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className={`fixed w-full z-50 max-w-[1700px] ease-in-out duration-700 ${visible ? "top-0" : "-top-full"}`}>
      <div className="font-medium text-gray_c text-primary bg-white shadow-md">

        <div className="flex items-center py-3 md:py-4 lg:py-0 justify-between w-[100%] lg:w-[100%] xl:w-11/12 mx-auto relative z-[60] bg-white">

          <div className="flex-shrink-0 lg:basis-1/5 xl:basis-3/12">
            <Link href="/">
              <img className="w-[140px] md:w-[150px] lg:w-[190px] xl:w-[230px]" src="/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-1 relative">
            {navdata.map((ele, index) => (
              <div
                key={uuidv4()}
                className="navitem group px-3 xl:px-4"
                onMouseEnter={() => ele.type === "mega" && setActiveMegaIndex(index)}
                onMouseLeave={() => setActiveMegaIndex(null)}
              >
                {!ele.type ? (
                  <Link href={ele.link} className={`capitalize py-6 block text-sm font-medium hover:text-[#028680] ${ele.link === path ? "active" : ""}`}>
                    {ele.name}
                  </Link>
                ) : (
                  <>
                    <div className="capitalize py-6 flex items-center gap-1 text-sm font-medium cursor-pointer group-hover:text-[#028680]">
                      {ele.name} <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />
                    </div>

                    {activeMegaIndex === index && (
                      <div className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t border-gray-100 animate-in fade-in duration-200">
                        <div className="flex min-h-[450px] max-h-[70vh] overflow-hidden">

                          {/* LEFT REGION LIST */}
                          <div className="w-1/4 max-w-[220px] bg-gray-50 border-r border-gray-200 overflow-y-auto">
                            {ele.data.regions.map((region, rIdx) => (
                              region.link ? (
                                <Link
                                  key={region.name}
                                  href={region.link}
                                  onMouseEnter={() => setDesktopRegionIndex(rIdx)}
                                  className={`block px-6 py-4 text-[15px] font-bold  tracking-widest transition-all ${
                                    desktopRegionIndex === rIdx ? "bg-white text-[#028680] border-r-4 border-[#028680]" : "text-gray-500 hover:bg-gray-100"
                                  }`}
                                >
                                  {region.name}
                                </Link>
                              ) : (
                                <div
                                  key={region.name}
                                  onMouseEnter={() => setDesktopRegionIndex(rIdx)}
                                  className={`block px-6 py-4 text-[15px] font-bold  tracking-widest transition-all text-gray-400`}
                                >
                                  {region.name}
                                </div>
                              )
                            ))}
                          </div>

                          {/* RIGHT CONTENT */}
                          <div className="flex-1 p-8 grid grid-cols-3 gap-8 overflow-y-auto max-h-[70vh] bg-white">
                            {ele.data.regions[desktopRegionIndex]?.sections?.map((section) => (
                              <div key={section.heading}>
                                {section.link ? (
                                  <Link href={section.link} className="text-[#028680] font-black border-b border-gray-50 pb-2 mb-3 text-[14px]  tracking-tighter block">
                                    {section.heading}
                                  </Link>
                                ) : (
                                  <h4 className="text-[#028680] font-black border-b border-gray-50 pb-2 mb-3 text-[14px]  tracking-tighter">
                                    {section.heading}
                                  </h4>
                                )}

                                <ul className="space-y-1.5">
                                  {section.links.map((link) => (
                                    <li key={link.name}>
                                      <Link href={link.link} className="text-gray-600 hover:text-[#028680] transition-colors block text-[13px] font-normal">
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
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:gap-4 lg:basis-1/4 justify-end">
            <div className="hidden lg:block w-full"><RecommendedSearch /></div>
            <button onClick={() => setSearchvisible(true)} className="lg:hidden p-2 text-2xl text-[#028680]"><IoSearch /></button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-3xl">{isOpen ? <IoMdClose /> : <RxHamburgerMenu />}</button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-300 lg:hidden overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col pb-24">
            {navdata.map((ele, index) => (
              <div key={uuidv4()} className="border-b border-gray-100">
                {!ele.type ? (
                  <Link href={ele.link} onClick={() => setIsOpen(false)}>
                    <div className="py-4 px-6 text-[15px] font-bold text-gray-800 flex items-center justify-between">
                      {ele.name}
                      <IoIosArrowForward className="text-gray-300 text-sm" />
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div onClick={() => setMobileMegaIndex(mobileMegaIndex === index ? null : index)}
                      className={`flex items-center justify-between py-4 px-6 transition-colors ${mobileMegaIndex === index ? "bg-[#028680] text-white" : "bg-white text-gray-800"}`}>
                      <span className="text-[15px] font-bold ">{ele.name}</span>
                      <IoIosArrowDown className={`transition-transform duration-300 ${mobileMegaIndex === index ? "rotate-180" : ""}`} />
                    </div>

                    {mobileMegaIndex === index && (
                      <div className="bg-gray-50">
                        {ele.data.regions.map((region) => (
                          region.link ? (
                            <Link key={region.name} href={region.link} onClick={() => setIsOpen(false)}>
                              <div className="border-b border-gray-200 last:border-0 px-6 py-4 flex justify-between items-center text-[13px] font-bold  text-gray-800">
                                {region.name}
                                <IoIosArrowForward className="text-[#028680] text-[10px]" />
                              </div>
                            </Link>
                          ) : (
                            <div key={region.name} className="border-b border-gray-200 last:border-0 px-6 py-4 text-gray-400 text-[13px] font-bold ">
                              {region.name}
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {searchvisible && (
          <div className="fixed inset-0 bg-white z-[70] lg:hidden p-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setSearchvisible(false)} className="text-2xl"><HiOutlineArrowSmLeft /></button>
              <div className="flex-1"><RecommendedSearch /></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;
