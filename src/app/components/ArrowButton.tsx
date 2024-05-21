import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';
import cn from 'classnames';

interface ArrowButtonProps {
  type?: HTMLButtonElement['type'];
  href?: string;
  text: string;
  size?: 'small' | 'normal';
  color?: 'dark' | 'light';
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ type, href, text, onClick, size = 'normal', color = 'dark' }) => {
  const buttonClasses = cn('flex w-fit self-center border-b justify-center p-2.5 gap-2.5 font-semibold', {
    'text-2xl': size === 'normal',
    [color === 'dark' ? 'text-spblack border-spblack' : 'text-spwhite border-spwhite']: true,
  });

  const iconSize = cn({
    [size === 'normal' ? 'w-8' : 'w-6']: true,
  });

  const iconColor = color === 'light' ? '#F2F7FB' : '#005482';

  return href ? (
    <Link href={href} className={buttonClasses}>
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} />
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={buttonClasses}>
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} />
    </button>
  );
};

export default ArrowButton;
