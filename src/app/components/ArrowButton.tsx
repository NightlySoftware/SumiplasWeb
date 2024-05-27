import Link from 'next/link';
import IconRoundedArrow from './IconRoundedArrow';
import cn from 'classnames';

interface ArrowButtonProps {
  type?: HTMLButtonElement['type'];
  href?: string;
  text: string;
  size?: 'small' | 'normal';
  color?: 'dark' | 'light';
  reverse?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  type,
  href,
  text,
  onClick,
  size = 'normal',
  color = 'dark',
  reverse = false,
  className,
  disabled = false,
}) => {
  const buttonClasses = cn(
    className,
    'flex w-fit self-center border-b justify-center p-2.5 gap-2.5 font-semibold transition-all duration-[200ms]',
    {
      'text-2xl': size === 'normal',
      [color === 'dark' ? 'text-spblack border-spblack' : 'text-spwhite border-spwhite']: true,
    }
  );

  const iconSize = cn({
    [size === 'normal' ? 'w-8' : 'w-6']: true,
  });

  const iconColor = color === 'light' ? '#F2F7FB' : '#005482';

  return href ? (
    <Link href={href} className={cn(reverse && 'flex-row-reverse', buttonClasses)}>
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} />
    </Link>
  ) : (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        reverse && 'flex-row-reverse',
        disabled ? 'cursor-not-allowed opacity-5' : 'cursor-pointer',
        buttonClasses
      )}
    >
      <div>{text}</div>
      <IconRoundedArrow classNames={iconSize} fill={iconColor} direction={reverse ? 'left' : 'right'} />
    </button>
  );
};

export default ArrowButton;
