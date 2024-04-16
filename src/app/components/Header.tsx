import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Link href={'/'} className="absolute flex w-full justify-center gap-2 font-bold text-spwhite text-xl p-5">
      <div className="relative aspect-square w-6">
        <Image src="/icons/logo.svg" alt="Logo" style={{ objectFit: 'contain' }} fill />
      </div>
      <p>SUMIPLAS</p>
    </Link>
  );
};

export default Header;
