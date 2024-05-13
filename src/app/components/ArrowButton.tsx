import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';
import cn from 'classnames';

interface ArrowButtonProps {
  href?: string;
  text: string;
  size?: 'small' | 'normal';
  color?: 'dark' | 'light';
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ href, text, onClick, size = 'normal', color = 'dark' }) => {
  const buttonClasses = cn('flex w-full justify-center p-2.5 gap-2.5 font-semibold', {
    'text-2xl': size === 'normal',
    [color === 'dark' ? 'text-spblack' : 'text-spwhite']: true,
  });

  const iconSize = cn({
    [size === 'normal' ? 'w-8' : 'w-6']: true,
  });

  const iconColor = color === 'light' ? '#F2F7FB' : '#036';

  return href ? (
    <Link href={href} className={buttonClasses}>
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} />
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} />
    </button>
  );
};

export default ArrowButton;
