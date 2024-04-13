import Link from 'next/link';
import React from 'react';
import IconRoundedArrow from './IconRoundedArrow';

interface ProductButtonProps {
  href: string;
  title: string;
  bgImage: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ href, title, bgImage }) => {
  return (
    <Link
      href={href}
      className={`flex w-full bg-black bg-opacity-40 rounded justify-between items-center p-4 bg-cover`}
      /* we use linear-gradient because filter:brightness darkens the text as well */
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})` }}
    >
      <p className="flex flex-col justify-start items-start text-spwhite font-medium leading-5">
        Bolsas
        <span className="font-bold">{title}</span>
      </p>
      <IconRoundedArrow fill="#fff" />
    </Link>
  );
};

export default ProductButton;
