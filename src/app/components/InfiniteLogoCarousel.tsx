'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const logos = [
  { src: '/images/logos/zkw.webp', alt: 'ZKW logo', className: 'saturate-0 brightness-0' },
  { src: '/images/logos/campo_fresco.webp', alt: 'Campo Fresco logo', className: 'saturate-0 brightness-0' },
  { src: '/images/logos/trimex.webp', alt: 'Trimex logo', className: 'saturate-0 brightness-0' },
  { src: '/images/logos/sanoh.webp', alt: 'Sanoh logo', className: 'saturate-0 brightness-0' },
  { src: '/images/logos/nifco.webp', alt: 'Nifco logo', className: 'saturate-0' },
  { src: '/images/logos/almacenes_vaca.webp', alt: 'Almacenes Vaca logo', className: 'saturate-0 brightness-0' },
  { src: '/images/logos/vallen.webp', alt: 'Vallen logo', className: 'saturate-0 brightness-0' },
];

interface InfiniteLogoCarouselProps {
  direction?: 'left' | 'right';
  offset?: number;
}

const InfiniteLogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({ direction = 'left', offset = 0 }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const logoContent = (
    <>
      {logos.map((logo, index) => (
        <div key={index} className="relative h-10 w-32 mx-4">
          <Image src={logo.src} alt={logo.alt} className={`object-contain ${logo.className}`} fill />
        </div>
      ))}
    </>
  );

  const animationDuration = width / (50 + offset);

  return (
    <div className="w-full overflow-hidden bg-light">
      <div
        ref={carouselRef}
        className="carousel-content flex items-center"
        style={{
          width: `${width * 2}px`,
        }}
      >
        <div
          className={`flex`}
          style={{
            animation: `scroll-${direction} ${animationDuration}s linear infinite`,
            animationDelay: `${-offset}s`,
          }}
        >
          {logoContent}
          {logoContent}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteLogoCarousel;
