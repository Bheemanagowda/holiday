"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import BharatDekhoIntro from "../data/BharatDekhoIntro.json";
import DuniyaDekhoIntro from "../data/DuniyaDekhoIntro.json";
import { v4 as uuidv4 } from "uuid";

export default function RecommendedSearch({
  placeholder = "Search Your Destinations...",
  setIsOpen,
  setSearchvisible,
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  // Filtering from both JSONs
  const filterData = (value) => {
    if (!value.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filteredBharat = BharatDekhoIntro.filter((ele) =>
      ele.name.toLowerCase().includes(value.toLowerCase())
    );

    const filteredDuniya = DuniyaDekhoIntro.filter((ele) =>
      ele.name.toLowerCase().includes(value.toLowerCase())
    );

    const filtered = [...filteredBharat, ...filteredDuniya];

    setResults(filtered);
    setShowDropdown(true);
  };

  const debouncedFilter = debounce(filterData, 400);

  const handleChange = (value) => {
    setQuery(value);
    debouncedFilter(value);
  };

  const handleSelect = (item) => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
    setIsOpen(false);
    setSearchvisible(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Input */}
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <CiLocationOn className="text-lg text-[#545455]" />
      </span>

      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="block px-2.5 py-2 pl-8 pr-10 w-full text-base font-normal text-[#555555]
        bg-transparent rounded-full border border-[#028680] appearance-none
        focus:outline-none focus:border-[#FECF00] focus:border-2 peer"
      />

      <span
        className="absolute inset-y-0 right-0 px-3 flex items-center m-[1px] hover:bg-[#FECF00]
        transition-colors duration-500 rounded-r-full cursor-pointer"
      >
        <IoSearch className="text-[#028680] text-2xl" />
      </span>

      {/* Dropdown */}
      {showDropdown && results.length > 0 && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg max-h-80 overflow-y-auto z-50">
          {results.map((item) => (
            <Link href={item.slug} key={uuidv4()}>
              <li
                onClick={() => handleSelect(item)}
                className="px-4 py-2 flex items-center gap-5 cursor-pointer hover:bg-gray-100"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover w-[80px] h-[50px]"
                />
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
