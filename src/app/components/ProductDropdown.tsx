import React from 'react';
import IconRoundedArrow from './IconRoundedArrow';
import Image from 'next/image';
import ArrowButton from './ArrowButton';

interface ProductDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  headline1: string;
  headline2: string;
  image: string;
  description: string;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({
  isOpen,
  onOpen,
  headline1,
  headline2,
  image,
  description,
}) => {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex flex-col w-full gap-5">
        <div className="flex gap-2" onClick={onOpen}>
          <p className="w-full border-t border-spblack text-spblack font-medium pt-2 leading-5">
            {headline1}
            <br />
            <span className="font-bold">{headline2}</span>
          </p>
          <div className="relative h-20 aspect-[140/80]">
            <Image
              className="rounded-md brightness-[80%]"
              src={image}
              alt="Product image"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col h-48 gap-2.5">
            <p className="text-spblack text-base font-normal leading-5">{description}</p>
            <ArrowButton
              text="Cotiza ahora"
              size="small"
              onClick={() => {
                /* TODO: add functionality (toggle cotizar menu)*/
              }}
            />
          </div>
        )}
      </div>
      <IconRoundedArrow onClick={onOpen} classNames="w-6" fill="#036" direction={isOpen ? 'up' : 'down'} />
    </div>
  );
};

export default ProductDropdown;
