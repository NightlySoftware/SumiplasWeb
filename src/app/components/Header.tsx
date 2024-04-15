import Link from 'next/link';

const Header = () => {
  return (
    <Link href={'/'} className="absolute flex w-full justify-center gap-2 font-bold text-spwhite text-xl p-5">
      <img src="/icons/logo.svg" alt="Logo" className="aspect-square w-6" />
      <p>SUMIPLAS</p>
    </Link>
  );
};

export default Header;
