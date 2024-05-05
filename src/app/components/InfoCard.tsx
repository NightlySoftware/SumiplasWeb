import Image from 'next/image';

interface InfoCardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image, children }) => {
  return (
    <div className="flex flex-col w-full p-[5px] bg-spgradient rounded-lg gap-2.5">
      {image && (
        <div className="relative aspect-[2/1]">
          <Image
            className="brightness-[80%] rounded-md"
            src={image}
            alt="info card"
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
      )}
      {children}
      {(title || description) && (
        <div className="flex flex-col p-5 gap-5 ">
          <div className="flex flex-col text-spwhite text-pretty leading-5 gap-5">
            {title && <p className="font-semibold">{title}</p>}
            {description && <p className="">{description}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
