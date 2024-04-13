import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex w-96 justify-between items-center text-black bg-gradient-to-b from-spwhite/40 to-spwhite/10 backdrop-blur-2xl rounded-lg border border-spwhite/30 px-8 py-4 sticky bottom-5">
      <button className="flex items-center gap-2">
        <img src="/icons/menu.svg" alt="menu" className="aspect-square w-4"></img>Menu
      </button>
      <Link href="/">
        <img src="/logo.svg" alt="Logo" className="aspect-square w-5 invert" />
      </Link>
      <button>Cotizar</button>
    </div>
  );
};

export default Navbar;
