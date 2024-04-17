import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex w-[90%] max-w-96 justify-between items-center text-black bg-gradient-to-b from-spwhite/20 to-spwhite/10 backdrop-blur-2xl rounded-lg border border-spwhite/10 px-8 py-4 sticky bottom-5">
      <button className="flex items-center gap-2">
        <div className="relative aspect-square w-4">
          <Image src="/icons/menu.svg" alt="Logo" style={{ objectFit: 'contain' }} fill />
        </div>
        Menu
      </button>
      <Link href="/">
        <div className="relative aspect-square w-5">
          <Image className="invert" src="/icons/logo.svg" alt="Logo" style={{ objectFit: 'contain' }} fill />
        </div>
      </Link>
      <button>Cotizar</button>
    </div>
  );
};

export default Navbar;
