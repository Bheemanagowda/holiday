"use client";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

function PackagesBanner({ images,bannerLgImages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div>
      <div className="lg:flex gap-2 w-11/12 mx-auto mt-24 lg:mt-32 select-none">
        <img
          src={images[0]}
          onClick={() => {
            setStartIndex(0);
            setIsOpen(true);
          }}
          fetchPriority="high"
          alt="Package Banner"
          className="w-full lg:w-8/12 cursor-pointer h-[250px] lg:h-[506px] object-cover rounded-lg"
        />
        <div className="w-full lg:w-4/12 mt-2 lg:mt-0">
          {" "}
          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-2">
              {images.slice(1, 5).map((img, index) => (
                <img
                  onClick={() => {
                    setStartIndex(index + 1);
                    setIsOpen(true);
                  }}
                  key={index}
                  fetchPriority="high"
                  src={img}
                  // loading="lazy"
                  alt={`Package Banner ${index + 1}`}
                  className="w-full bg-gray-300 cursor-pointer h-[200px] lg:h-[250px] rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <ImageSlider
          images={bannerLgImages}
          startIndex={startIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default PackagesBanner;
