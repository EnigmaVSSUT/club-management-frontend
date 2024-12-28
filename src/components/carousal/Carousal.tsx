"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  // sizes="100vw"
/>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{
            zIndex: 1,
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)',
            color: 'white',
            fontWeight: 600,
          }}
        >
          <p>Explore all the clubs</p>
          <p>of your college</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagesArray.map((_, index) => (
          <button
            key={index}
            className={`h-2 transition-all duration-300 ease-in-out ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              } rounded-full`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
