import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';

interface ArrowButtonProps {
  href: string;
  text: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ href, text }) => {
  return (
    <Link href={href} className="flex w-full justify-center p-2.5 gap-2.5">
      <div className="text-spblack font-semibold">{text}</div>
      <IconRoundedArrow classNames="w-6" fill="#036" />
    </Link>
  );
};

export default ArrowButton;
