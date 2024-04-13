import Link from 'next/link';

const Header = () => {
  return (
    <Link href={'/'} className="flex w-full justify-center gap-2 font-bold text-spwhite text-xl p-5">
      <img src="/logo.svg" alt="Logo" className="aspect-square w-6" />
      <p>SUMIPLAS</p>
    </Link>
  );
};

export default Header;
