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
    <Link href={href} className={`flex w-full relative rounded justify-between items-center p-4`}>
      <Image className="rounded-md brightness-[60%] object-cover" src={bgImage} alt="Product card" fill />
      <p className="flex flex-col z-[1] justify-start items-start text-spwhite font-medium leading-5">
        Bolsas
        <span className="font-bold">{title}</span>
      </p>
      <IconRoundedArrow classNames="w-8 z-[1]" fill="#fff" />
    </Link>
  );
};

export default ProductButton;
