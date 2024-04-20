import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';

interface ArrowButtonProps {
  href?: string;
  text: string;
  size?: string;
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ href, text, size = 'normal', onClick }) => {
  let fontSize,
    iconSize = '';
  switch (size) {
    case 'small':
      fontSize = '';
      iconSize = 'w-6';
      break;
    case 'normal':
    default:
      fontSize = 'text-2xl';
      iconSize = 'w-8';
      break;
  }
  return href ? (
    <Link href={href} className="flex w-full justify-center p-2.5 gap-2.5">
      <div className={`text-spblack ${fontSize} font-semibold`}>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill="#036" />
    </Link>
  ) : (
    <button onClick={onClick} className="flex w-full justify-center p-2.5 gap-2.5">
      <div className={`text-spblack ${fontSize} font-semibold`}>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill="#036" />
    </button>
  );
};

export default ArrowButton;
