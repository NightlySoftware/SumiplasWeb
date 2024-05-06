import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  color?: 'white' | 'black';
}

const HeaderLogo: React.FC<HeaderProps> = ({ color = 'white' }) => {
  return (
    <Link
      href={'/'}
      className={`absolute flex w-full justify-center gap-2 font-bold ${
        color === 'white' ? 'text-spwhite' : 'text-spblack'
      } text-xl p-5`}
    >
      <div className="relative aspect-square w-6">
        <Image className={`object-contain ${color === 'black' && 'invert'}`} src="/icons/logo.svg" alt="Logo" fill />
      </div>
      <p>SUMIPLAS</p>
    </Link>
  );
};

export default HeaderLogo;
