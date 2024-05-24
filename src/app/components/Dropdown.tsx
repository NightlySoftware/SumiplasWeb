'use client';

import IconRoundedArrow from './IconRoundedArrow';
import Image from 'next/image';
import ArrowButton from './ArrowButton';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HalfScreenCard from './HalfScreenCard';

interface DropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  title?: string;
  boldTitle?: string;
  image?: string;
  description: string;
  textOnly?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onOpen,
  title,
  boldTitle,
  image,
  description,
  textOnly = false,
}) => {
  const [isCardVisible, setCardVisible] = useState(false);

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };
  return (
    <>
      <div className="flex flex-col w-full items-start gap-5">
        <div className="flex w-full gap-2 cursor-pointer" onClick={onOpen}>
          <p className="w-full border-t border-spblack text-spblack font-medium pt-2 leading-5">
            {title}
            {title && boldTitle && <br />}
            <span className="font-bold">{boldTitle}</span>
          </p>
          {image && (
            <div className="relative h-20 aspect-[140/80]">
              <Image className="rounded-md brightness-[80%] object-cover" src={image} alt="Product image" fill />
            </div>
          )}
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
          transition={{ duration: 0.2 }}
          className="flex flex-col h-fit gap-2.5"
        >
          <p className="text-spblack text-base font-normal leading-5">{description}</p>
          {!textOnly && <ArrowButton text="Cotiza ahora" size="small" onClick={toggleCard} />}
        </motion.div>
      </div>
      <AnimatePresence>
        {isCardVisible && <HalfScreenCard isVisible={isCardVisible} onClose={toggleCard} />}{' '}
      </AnimatePresence>
    </>
  );
};

export default Dropdown;
