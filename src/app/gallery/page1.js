"use client"


import React, { useCallback, useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import Masonry from "react-masonry-css";
import "react-image-lightbox/style.css";

function GalleryPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 2,
    420: 2,
  };
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

   // "/images/guests/visionfly_guests_20.webp",
    "/images/guests/visionfly_guests_21.webp",
    "/images/guests/visionfly_guests_22.webp",
    //"/images/guests/visionfly_guests_23.webp",
   
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
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const previousIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousIndex);
  };
  const getImageUrl = useCallback(() => {
    if (currentImageIndex !== null) {
      return images[currentImageIndex];
    }
    return "";
  }, [currentImageIndex]);
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-24">
    
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              loading="lazy"
              className="bg-gray-300"
            />
          </div>
        ))}
      </Masonry>

      {isModalOpen && (
        <Lightbox
          mainSrc={getImageUrl()}
          nextSrc={getImageUrl()}
          prevSrc={getImageUrl()}
          onCloseRequest={handleClose}
          onMovePrevRequest={handlePrev}
          onMoveNextRequest={handleNext}
          imageTitle="VisionFly Holidays"
        />
      )}
    </div>
  );
}

export default GalleryPage;
