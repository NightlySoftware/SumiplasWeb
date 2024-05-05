import IconRoundedArrow from './IconRoundedArrow';
import Image from 'next/image';
import ArrowButton from './ArrowButton';

interface DropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  title?: string;
  boldTitle?: string;
  image?: string;
  description: string;
  textOnly?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onOpen,
  title,
  boldTitle,
  image,
  description,
  textOnly = false,
}) => {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex flex-col w-full gap-5">
        <div className="flex gap-2" onClick={onOpen}>
          <p className="w-full border-t border-spblack text-spblack font-medium pt-2 leading-5">
            {title}
            {title && boldTitle && <br />}
            <span className="font-bold">{boldTitle}</span>
          </p>
          {image && (
            <div className="relative h-20 aspect-[140/80]">
              <Image
                className="rounded-md brightness-[80%]"
                src={image}
                alt="Product image"
                style={{ objectFit: 'cover' }}
                fill
              />
            </div>
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col h-fit gap-2.5">
            <p className="text-spblack text-base font-normal leading-5">{description}</p>
            {!textOnly && (
              <ArrowButton
                text="Cotiza ahora"
                size="small"
                onClick={() => {
                  /* TODO: add functionality (toggle cotizar menu)*/
                }}
              />
            )}
          </div>
        )}
      </div>
      <IconRoundedArrow onClick={onOpen} classNames="w-6" fill="#036" direction={isOpen ? 'up' : 'down'} />
    </div>
  );
};

export default Dropdown;
