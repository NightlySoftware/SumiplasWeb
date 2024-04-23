import Image from 'next/image';

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
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, subtitle, number, imageSrc, textItems }) => {
  return (
    <div className="flex flex-col w-full text-spblack gap-3">
      <div className="flex items-center gap-2.5">
        <p className="font-serif italic text-xl">{number}</p>
        <p className="flex flex-col leading-5">
          <span className="font-semibold">{title}:</span>
          {subtitle}
        </p>
      </div>
      <div className="relative flex aspect-video w-full">
        <Image
          className="brightness-[80%] rounded-lg"
          src={imageSrc}
          alt="Imagen de proceso"
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
      {textItems.map((item, index) => (
        <p key={index} className="flex flex-col leading-5">
          <span className="font-semibold">{item.title}:</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default ProcessCard;
