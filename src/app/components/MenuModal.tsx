import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuModalProps {
  onClose: () => void;
  onCancel: () => void;
}

export default function MenuModal({ onClose, onCancel }: MenuModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { y: '200%' },
    visible: { y: '0%' },
    exit: { y: '200%' },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="menu-modal z-[7]" onClick={onCancel}>
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={'visible'}
        exit="exit"
        variants={variants}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        className="flex flex-col self-center w-full max-w-[calc(450px+1.25rem)] bg-spwhite text-spblack rounded-t-2xl g:rounded-2xl p-8 pb-20 gap-4 no-doc-scroll overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center w-full gap-2 font-bold text-2xl">
          <div className="relative aspect-square w-8">
            <Image className="object-contain invert" src="/icons/logo.svg" alt="Logo" fill />
          </div>
          SUMIPLAS
        </div>
        <p>Menu</p>
        <div className="flex flex-col w-fit gap-3 text-2xl font-medium">
          <Link onClick={onClose} className="w-full" href={'/'}>
            Inicio
          </Link>
          <Link onClick={onClose} className="w-full" href={'/productos'}>
            Productos
          </Link>
          <Link onClick={onClose} className="w-full" href={'/nosotros'}>
            Nosotros
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
