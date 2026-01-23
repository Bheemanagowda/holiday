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
                         "/images/guests/visionfly_guests_22.webp",
                         "/images/guests/visionfly_guests_25.webp",
                           "/images/guests/visionfly_guests_26.webp",
                              "/images/guests/visionfly_guests_27.webp",
                                  "/images/guests/visionfly_guests_28.webp",
                                    "/images/guests/visionfly_guests_29.webp",
                                       "/images/guests/visionfly_guests_30.webp",
                                         "/images/guests/visionfly_guests_1.webp",
                                             "/images/guests/visionfly_guests_2.webp",
                                               "/images/guests/visionfly_guests_3.webp",
                                               "/images/guests/visionfly_guests_4.webp",
                                                "/images/guests/visionfly_guests_5.webp",
                                                "/images/guests/visionfly_guests_6.webp",
                
                                                   "/images/guests/visionfly_guests_7.webp",
                                                      "/images/guests/visionfly_guests_8.webp",
                                                         "/images/guests/visionfly_guests_9.webp",
                                                            "/images/guests/visionfly_guests_10.webp",
                                                            
                                                                "/images/guests/visionfly_guests_12.webp",
                                                              
                                                                   "/images/guests/visionfly_guests_13.webp",
                                                                     "/images/guests/visionfly_guests_14.webp",
                                                                      
                                                                   "/images/guests/visionfly_guests_15.webp",
    // ... add all your images heren
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
    <div className="w-11/12 mx-auto mt-30 mb-30 ">
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
