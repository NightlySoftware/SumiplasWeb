import Image from 'next/image';
import cn from 'classnames';

interface TextItem {
  title: string;
  description: string;
}

interface ProcessCardProps {
  title: string;
  subtitle: string;
  number: string;
  imageSrc: string;
  textItems: TextItem[];
  reverse?: boolean;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, subtitle, number, imageSrc, textItems, reverse = false }) => {
  return (
    <div
      className={cn('flex flex-col m:items-center w-full text-spblack gap-3', {
        'm:flex-row-reverse': reverse,
        'm:flex-row': !reverse,
      })}
    >
      <div
        className={cn('flex flex-col w-full max-w-[700px]', {
          'm:ml-[-40px] g:ml-[-64px]': !reverse,
          'm:mr-[-40px] g:mr-[-64px]': reverse,
        })}
      >
        <div className="flex m:justify-center items-center gap-2.5">
          <p className="font-serif italic text-xl">{number}</p>
          <p className="flex flex-col leading-5">
            <span className="font-semibold">{title}:</span>
            {subtitle}
          </p>
        </div>
        <div className="relative flex aspect-video w-full">
          <Image className="brightness-[80%] rounded-lg object-cover" src={imageSrc} alt="Imagen de proceso" fill />
        </div>
      </div>
      <div className="flex flex-col m:max-w-[50%] pt-10 gap-4">
        {textItems.map((item, index) => (
          <p key={index} className="flex flex-col leading-5">
            <span className="font-semibold">{item.title}:</span>
            {item.description}
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProcessCard;
