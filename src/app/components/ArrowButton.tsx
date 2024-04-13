import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';

interface ArrowButtonProps {
  href: string;
  text: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ href, text }) => {
  return (
    <Link href={href} className="flex w-full justify-center p-2.5 gap-2.5">
      <div className="text-gray-900 text-2xl font-semibold">{text}</div>
      <IconRoundedArrow fill="#036" />
    </Link>
  );
};

export default ArrowButton;
