import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';
import Image from 'next/image';

interface ProductButtonProps {
  href: string;
  title: string;
  bgImage: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ href, title, bgImage }) => {
  return (
    <Link
      href={href}
      className="flex w-full g:min-w-[450px] self-center max-w-[600px] relative rounded-md justify-between items-center p-4 transition-all duration-300 group ring-2 ring-black"
    >
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <Image
          className="rounded-md brightness-[60%] object-cover transition-transform duration-300 group-hover:scale-105"
          src={bgImage}
          alt="Product card"
          fill
        />
      </div>
      <p className="flex flex-col z-[1] justify-start items-start text-spwhite font-medium leading-5 relative">
        Bolsas
        <span className="font-bold">{title}</span>
      </p>
      <IconRoundedArrow
        classNames="w-8 z-[1] transition-transform duration-300 transform -translate-x-6 group-hover:translate-x-0"
        fill="#fff"
      />
    </Link>
  );
};

export default ProductButton;
