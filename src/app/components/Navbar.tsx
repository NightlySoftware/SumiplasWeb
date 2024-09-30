'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuModal from './MenuModal';
import QuoteModal from './QuoteModal';
import { Dialog, DialogTrigger } from './Dialog';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="flex w-full justify-center -mt-20 sticky bottom-5 g:top-5 z-[6]">
      <nav className="flex w-[90%] max-w-[500px] g:w-full g:max-w-[calc(100%-2.5rem)] justify-between items-center text-black bg-gradient-to-b from-spwhite/20 to-spwhite/10 backdrop-blur-2xl rounded-lg border border-spwhite/10 px-6 m:px-8 py-2 m:py-3 2xl:py-4">
        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 xl:gap-3 px-2">
              <div className="g:rounded-full g:p-3 g:border g:border-black">
                <div className="relative aspect-square w-4 xl:w-5">
                  <Image className="object-contain" src="/icons/menu.svg" alt="Menu" fill />
                </div>
              </div>
              <p>Menu</p>
            </button>
          </DialogTrigger>
          <MenuModal open={menuOpen} onOpenChange={setMenuOpen} />
        </Dialog>

        <Link className="flex p-2 gap-2" href="/">
          <div className="relative aspect-square w-5 g:w-6">
            <Image className="invert object-contain" src="/icons/logo.svg" alt="Logo" fill />
          </div>
          <p className="hidden g:inline text-xl xl:text-2xl font-semibold">SUMIPLAS</p>
        </Link>

        <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
          <DialogTrigger asChild>
            <button className="g:border g:border-black g:py-2.5 px-2 g:px-6 g:rounded-lg">
              <p>Cotizar</p>
            </button>
          </DialogTrigger>
          <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
        </Dialog>
      </nav>
    </div>
  );
}
