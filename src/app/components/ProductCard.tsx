import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import IconRoundedArrow from './IconRoundedArrow';

interface ProductCardProps {
  href: string;
  headline1: string;
  headline2: string;
  headlineImage: string;
  title: string;
  description: string;
  centerImage: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  href = '',
  headline1,
  headline2,
  title,
  description,
  headlineImage,
  centerImage,
}) => {
  return (
    <Link href={href} className="flex flex-col w-full gap-10">
      <div className="flex flex-col relative aspect-[2/1] rounded-t-lg p-4 gap-2.5">
        <p className="text-slate-100 text-base font-normal leading-5 z-10">
          Bolsas de polietileno <br />
          <span className="font-bold">{headline1}</span>
          <br />
          {headline2}
        </p>
        <Image
          src={headlineImage}
          alt="Product Background"
          className="rounded-md brightness-[60%]"
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className="relative flex w-auto -mb-32 h-32 p-2.5 gap-2.5 items-center">
          <Image src={centerImage} alt="Center image" style={{ objectFit: 'contain' }} fill />
        </div>
      </div>
      <div className="flex w-full p-2.5 gap-2.5 items-center">
        <div className="flex flex-col w-full gap-2.5">
          <p className="text-spblack text-xl font-normal leading-5">
            Bolsas
            <br />
            <span className="font-bold">{title}</span>
          </p>
          <p className="text-spblack leading-5">{description}</p>
        </div>
        <IconRoundedArrow classNames="w-[37.3px]" /* set to arbitrary value because svgs work weird */ fill="#000" />
      </div>
    </Link>
  );
};

export default ProductCard;
