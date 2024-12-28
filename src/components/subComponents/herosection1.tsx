"use client";

import { useState, useEffect } from 'react';


import Image from 'next/image';
interface CarouselProps {
  imagesArray: { src: string; caption: string }[];
  interval: number;
}

export default function Carousel({ imagesArray, interval }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [imagesArray, interval]);

  return (
    <div className="relative w-full h-[90vh] md:h-[700px]">
      <div className="overflow-hidden rounded-lg shadow-lg h-full">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        />
         <Image
    src={imagesArray[currentIndex].src}
    alt={`Slide ${currentIndex + 1}`}
    fill
    style={{ objectFit: 'cover' }}
    sizes="100vw"
  />
        
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-left p-4" style={{ zIndex: 1 }}>
          {/* Logo */}
          <Image
  src="/enigma.jpg"
  alt="Logo"
  className="mb-4 rounded-full" 
  width={80}
  height={80} 
  style={{ objectFit: 'cover' }} 
/>
          <h2 className="text-4xl md:text-5xl text-white font-poppins font-semibold py-2">
            ENIGMA
          </h2>
          {/* Caption Text */}
          <p className="font-poppins text-base md:text-lg mt-2 pl-1 mb-4 font-semibold text-[#BDBDBD]">
            ENIGMA Club, the official web and coding club of VSSUT, Burla, <br/>
            is a student-driven hub for web development and programming.<br />
            It organizes workshops, hackathons, and coding competitions,<br />
            fostering innovation and peer learning while preparing members<br />
            for real-world tech challenges and competitive programming.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Join Now
          </button>
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {imagesArray.map((_, index) => (
          <button
            key={index}
            className={`h-2 transition-all duration-300 ease-in-out ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              } rounded-full`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
