import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex w-[90%] max-w-96 justify-between items-center text-black bg-gradient-to-b from-spwhite/20 to-spwhite/10 backdrop-blur-2xl rounded-lg border border-spwhite/10 px-6 py-2 sticky bottom-5">
      <button className="flex items-center gap-2 px-2">
        <div className="relative aspect-square w-4">
          <Image className="object-contain" src="/icons/menu.svg" alt="Logo" fill />
        </div>
        Menu
      </button>
      <Link className="p-2" href="/">
        <div className="relative aspect-square w-5">
          <Image className="invert object-contain" src="/icons/logo.svg" alt="Logo" fill />
        </div>
      </Link>
      <button className="px-2">Cotizar</button>
    </div>
  );
};

export default Navbar;
