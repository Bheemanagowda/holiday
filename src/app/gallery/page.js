"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/guests/guest1.webp",
    "/images/guests/guest2.webp",
    "/images/guests/guest3.webp",
    "/images/guests/guest4.webp",
    "/images/guests/guest5.webp",
      "/images/guests/guest6.webp",
        "/images/guests/visionfly_guests_16.webp",
                "/images/guests/visionfly_guests_17.webp",
                 "/images/guests/visionfly_guests_18.webp",
                   "/images/guests/visionfly_guests_11.webp",
                     "/images/guests/visionfly_guests_19.webp",
                        "/images/guests/visionfly_guests_21.webp",
                
    // ... add all your images here
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 2,
    420: 2,
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="w-11/12 mx-auto mt-24">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item cursor-pointer"
            onClick={() => openLightbox(idx)}
          >
            <img src={img} alt={`Image ${idx}`} loading="lazy" />
          </div>
        ))}
      </Masonry>

      {isOpen && (
        <Lightbox
          open={isOpen}
          index={currentIndex}
          close={() => setIsOpen(false)}
          slides={images.map((i) => ({ src: i }))}
        />
      )}
    </div>
  );
}
