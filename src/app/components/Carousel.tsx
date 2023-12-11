"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const imageFiles = ["/banner/1.jpg", "/banner/2.jpg", "/banner/4.jpg"];

  const handlePrevImage = () => {
    setTransitioning(true);
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imageFiles.length - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setTransitioning(true);
    setCurrentImage((prevImage) =>
      prevImage === imageFiles.length - 1 ? 0 : prevImage + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setCurrentImage((prevImage) =>
        prevImage === imageFiles.length - 1 ? 0 : prevImage + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, imageFiles.length]);

  const handleImageLoad = () => {
    setTransitioning(false);
  };

  return (
    <div className="relative w-5/6" data-carousel="slide">
      <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-lg">
        {imageFiles.map((_, index) => (
          <Image
            key={index}
            src={imageFiles[currentImage]}
            alt={`Carousel Image`}
            layout="fill"
            className={`absolute top-0 left-0 ${transitioning && currentImage !== index
                ? "opacity-0"
                : "opacity-100"
              } transition-opacity duration-1000`}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageFiles.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-gray-800" : "bg-white"
              }`}
            aria-current={index === currentImage}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevImage}
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>{" "}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextImage}
      >
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>{" "}
      </button>
    </div>
  );
};

export default Carousel;
