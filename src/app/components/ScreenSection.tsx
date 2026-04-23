'use client';

import ArrowButton from './ArrowButton';
import QuoteModal from './QuoteModal';
import HeaderLogo from './HeaderLogo';
import Image from 'next/image';
import cn from 'classnames';
import { Dialog, DialogTrigger } from './Dialog';
import { useState } from 'react';

interface ScreenSectionProps {
  title?: string[];
  description?: string[];
  image?: string;
  type: 'hero' | 'contact';
  imageClassNames?: string;
}

const EMPTY_LINES: string[] = [];
const CONTACT_DESCRIPTION = [
  '¿Te interesaron nuestros productos',
  'y quieres tener más información sobre',
  'precios, medidas específicas o entregas?',
  '',
  'Envíanos tu información de contacto',
  'para responderte lo más pronto posible.',
];

function getDescriptionLines(lines: string[]) {
  const lineCounts = new Map<string, number>();

  return lines.map((line) => {
    const nextCount = (lineCounts.get(line) ?? 0) + 1;
    lineCounts.set(line, nextCount);

    return {
      key: `${line || 'blank'}-${nextCount}`,
      text: line,
    };
  });
}

export default function ScreenSection({
  title = EMPTY_LINES,
  description = EMPTY_LINES,
  type,
  image = 'hero',
  imageClassNames,
}: ScreenSectionProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const sectionDescription = type === 'contact' ? CONTACT_DESCRIPTION : description;
  const sectionDescriptionLines = getDescriptionLines(sectionDescription);
  const sectionImage = type === 'contact' ? '/images/hero_bg/contact.webp' : image;

  return (
    <>
      <div className={cn('flex flex-col w-full top-0', { 'sticky z-[-1]': type === 'hero' })}>
        {type === 'hero' && (
          <div className="flex g:hidden">
            <HeaderLogo />
          </div>
        )}
        <div
          className={cn(
            'relative h-safe-screen min-safe-h-screen pt-32 text-spwhite g:pt-64',
            { 'z-[2]': type === 'contact' }
          )}
        >
          <div className="flex flex-col h-full justify-end g:px-12 lg:px-[100px] pb-32">
            <div className="flex flex-col lg:items-end lg:flex-row lg:justify-between g:py-16 h-full gap-8 g:gap-12 lg:gap-16">
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
                {sectionDescriptionLines.map((paragraph, index) => (
                  <span key={paragraph.key}>
                    {paragraph.text}
                    {index !== sectionDescriptionLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            {type === 'hero' ? (
              <div className="hidden lg:flex justify-center border-t border-spwhite py-6 xl:py-8">
                Baja para explorar
              </div>
            ) : (
              <div className="flex justify-center lg:border-t lg:border-spwhite pt-16 -mb-32">
                <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
                  <DialogTrigger asChild>
                    <ArrowButton className="mb-40" text="Contáctanos" color="light" />
                  </DialogTrigger>
                  <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
                </Dialog>
              </div>
            )}
          </div>
          <Image
            className={cn('z-[-1] object-cover brightness-[70%]', imageClassNames)}
            src={sectionImage}
            alt="hero"
            quality={100}
            priority
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
}
