import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogClose, DialogContent } from './Dialog';

interface MenuModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MenuModal({ open, onOpenChange }: MenuModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-spwhite text-spblack rounded-t-2xl sm:rounded-2xl p-8 pb-20">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="flex justify-center w-full gap-2 font-bold text-2xl mb-4">
          <div className="relative aspect-square w-8">
            <Image className="object-contain invert" src="/icons/logo.svg" alt="Logo" fill />
          </div>
          SUMIPLAS
        </div>
        <p className="mb-4">Menu</p>
        <div className="flex flex-col w-fit gap-3 text-2xl font-medium">
          <Link onClick={() => onOpenChange(false)} className="w-full" href={'/'}>
            Inicio
          </Link>
          <Link onClick={() => onOpenChange(false)} className="w-full" href={'/productos'}>
            Productos
          </Link>
          <Link onClick={() => onOpenChange(false)} className="w-full" href={'/nosotros'}>
            Nosotros
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
