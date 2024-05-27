'use client';

import { Carousel } from '@material-tailwind/react';
import { productsData } from '../utils/productsData';
import ProductCard from './ProductCard';
import IconRoundedArrow from './IconRoundedArrow';
import { useState } from 'react';

export default function ProductCarousel() {
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  const handleMouseEnterPrev = () => setHoveredPrev(true);
  const handleMouseLeavePrev = () => setHoveredPrev(false);
  const handleMouseEnterNext = () => setHoveredNext(true);
  const handleMouseLeaveNext = () => setHoveredNext(false);

  return (
    <div className="w-full self-center max-w-[700px]">
      <div className="flex relative justify-between items-center mb-[-20px]">
        <p className="font-bold z-[2] absolute right-4 text-spwhite text-xs xs:text-base shadow-xl">
          Explora más productos
        </p>
      </div>
      <Carousel
        className="min-h-64 rounded-xl overflow-hidden"
        loop
        prevArrow={({ handlePrev }) => (
          <button onClick={handlePrev} onMouseEnter={handleMouseEnterPrev} onMouseLeave={handleMouseLeavePrev}>
            <IconRoundedArrow
              classNames="!absolute w-6 xs:w-8 top-[45px] xs:top-14 !right-32 xs:!right-[164px] -translate-y-2/4 z-[2] shadow-xl"
              fill={hoveredPrev ? '#BBB' : '#FFF'}
              direction="left"
            />
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button onClick={handleNext} onMouseEnter={handleMouseEnterNext} onMouseLeave={handleMouseLeaveNext}>
            <IconRoundedArrow
              classNames="!absolute w-6 xs:w-8 top-[45px] xs:top-14 !right-4 -translate-y-2/4 z-[2] shadow-xl"
              fill={hoveredNext ? '#BBB' : '#FFF'}
              direction="right"
            />
          </button>
        )}
      >
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            href={product.href}
            headline1={product.headline1}
            headline2={product.headline2}
            title={product.title}
            description={product.description}
            headlineImage={product.headlineImage}
            centerImage={product.centerImage}
          />
        ))}
      </Carousel>
    </div>
  );
}
