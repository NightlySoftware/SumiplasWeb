'use client';

import { AnimatePresence } from 'framer-motion';
import ArrowButton from './ArrowButton';
import HalfScreenCard from './HalfScreenCard';
import HeaderLogo from './HeaderLogo';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';

interface HeroSectionProps {
  title?: string[];
  description?: string[];
  image?: string;
  type: 'hero' | 'contact';
  imageClassNames?: string;
}

export default function HeroSection({
  title = [],
  description = [],
  type,
  image = '',
  imageClassNames,
}: HeroSectionProps) {
  const [isCardVisible, setCardVisible] = useState(false);

  if (type === 'contact') {
    description = [
      '¿Te interesaron nuestros productos',
      'y quieres tener más información sobre',
      'precios, medidas específicas o entregas?',
      '',
      'Envíanos tu información de contacto',
      'para responderte lo más pronto posible.',
    ];
    image = '/images/hero_bg/contact.webp';
  }

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };

  return (
    <>
      <div className={cn('flex flex-col w-full top-0 z-10', { sticky: type === 'hero' })}>
        {type === 'hero' && <HeaderLogo />}
        <div className="relative text-spwhite supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] pt-32 g:pt-64">
          <div className="flex flex-col h-full justify-end g:px-12 lg:px-[100px]">
            <div className="flex flex-col lg:items-end lg:flex-row lg:justify-between py-16 h-full gap-8 g:gap-12 lg:gap-16">
              {type === 'hero' ? (
                <p className="text-center text-nowrap lg:text-start text-[32px] xl:text-[40px] font-semibold leading-10 xl:leading-[48px]">
                  {title[0]} <span className="font-serif italic font-normal">{title[1]}</span>
                  <br />
                  {title[2]}
                  <br /> <span className="font-serif italic font-normal">{title[3]}</span> {title[4]}
                </p>
              ) : (
                <p className="text-center text-nowrap lg:text-start text-[32px] xl:text-[40px] font-semibold leading-10 xl:leading-[48px]">
                  Estamos
                  <br />a un <span className="font-serif italic font-normal">click</span>
                  <br /> de distancia
                </p>
              )}
              <p className="text-center text-nowrap text-[16px] xl:text-xl leading-5">
                {description.map((paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    {index !== description.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            {type === 'hero' ? (
              <div className="hidden lg:flex justify-center border-t border-spwhite py-6 xl:py-8">
                Baja para explorar
              </div>
            ) : (
              <ArrowButton className="mb-40" text="Contáctanos" onClick={toggleCard} color="light" />
            )}
          </div>
          <Image
            className={cn('-z-10 object-cover brightness-[70%]', imageClassNames)}
            src={image}
            alt="hero"
            quality={100}
            priority
            fill
          />
        </div>
      </div>
      <AnimatePresence>
        {isCardVisible && <HalfScreenCard isVisible={isCardVisible} onClose={toggleCard} />}
      </AnimatePresence>
    </>
  );
}
