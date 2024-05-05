import { SVGProps } from 'react';

interface IconRoundedArrowProps extends SVGProps<SVGSVGElement> {
  classNames: string;
  direction?: 'down' | 'up' | 'left' | 'right';
}

const IconRoundedArrow: React.FC<IconRoundedArrowProps> = ({ classNames = 'w-8', direction = 'right', ...props }) => {
  let rotationClass = '';
  switch (direction) {
    case 'down':
      rotationClass = 'rotate-90';
      break;
    case 'up':
      rotationClass = '-rotate-90';
      break;
    case 'left':
      rotationClass = 'rotate-180';
      break;
    case 'right':
    default:
      rotationClass = '';
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`flex aspect-square ${classNames} ${rotationClass} min-h-auto items-center justify-center transition-transform duration-300 ease-in-out`}
      fill="none"
      viewBox="0 0 33 33"
      {...props}
    >
      <path d="M16 0C7.179 0 0 7.177 0 16c0 8.821 7.179 16 16 16 8.823 0 16-7.179 16-16 0-8.823-7.177-16-16-16Zm9.23 16.51c-.067.162-.165.31-.287.433l-5.334 5.333a1.33 1.33 0 0 1-1.885 0 1.334 1.334 0 0 1 0-1.885l3.057-3.058H8a1.334 1.334 0 0 1 0-2.666h12.781l-3.057-3.058a1.334 1.334 0 0 1 1.885-1.885l5.334 5.332a1.338 1.338 0 0 1 .288 1.453Z" />
    </svg>
  );
};

export default IconRoundedArrow;
