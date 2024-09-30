'use client';

import IconRoundedArrow from './IconRoundedArrow';
import Image from 'next/image';
import ArrowButton from './ArrowButton';
import { motion } from 'framer-motion';
import QuoteModal from './QuoteModal';
import { DialogTrigger } from './Dialog';
import { Dialog } from './Dialog';
import { useState } from 'react';

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
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="flex flex-col w-full items-start gap-5 group">
      <div className="flex w-full gap-2 items-start cursor-pointer" onClick={onOpen}>
        <p className="w-[calc(100%-200px)] border-t border-spblack text-spblack font-medium pt-2 leading-5">
          {title}
          {title && boldTitle && <br />}
          <span className="font-bold max-w-[350px]">{boldTitle}</span>
        </p>
        {image && (
          <div className="relative h-20 aspect-[140/80] overflow-hidden rounded-md">
            <Image
              className="rounded-md brightness-[80%] group-hover:brightness-100 object-cover transition-all duration-300 group-hover:scale-105"
              src={image}
              alt="Product image"
              fill
            />
          </div>
        )}
        <IconRoundedArrow
          onClick={onOpen}
          classNames="min-w-6 w-6 max-w-6"
          fill="#000"
          direction={isOpen ? 'up' : 'down'}
        />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.2 }}
        className="flex flex-col h-fit gap-2.5"
      >
        <p className="text-spblack text-base font-normal leading-5">{description}</p>
        {!textOnly && (
          <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
            <DialogTrigger asChild>
              <ArrowButton text="Cotiza ahora" size="small" />
            </DialogTrigger>
            <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
          </Dialog>
        )}
      </motion.div>
    </div>
  );
};

export default Dropdown;
