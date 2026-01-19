"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ImageSlider({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);



  // Handle keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);
  
  console.log(current);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed select-none inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose} // close on backdrop click
    >
      <div
        className="relative flex items-center justify-center w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 "
        >
          <AiOutlineClose className="text-white text-2xl" />
        </button>


         <button
          onClick={onClose}
          className="absolute top-4 text-white left-4 p-2 text-lg "
        >
        {current + 1} / {images.length}
        </button>

        {/* Left arrow */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80"
          >
            <AiOutlineLeft className="text-white text-3xl" />
          </button>
        )}

        {/* Image */}
        <div className="  ">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            loading="lazy"
            className="w-full bg-gray-300 lg:w-full lg:h-auto h-[500px] object-cover "
          />
        </div>

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80"
          >
            <AiOutlineRight className="text-white text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
}
