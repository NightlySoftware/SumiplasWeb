import Image from 'next/image';

interface InfoCardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  imgClassNames?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image, children, imgClassNames }) => {
  //TODO: make this responsive
  return (
    <>
      <div className="hidden sm:flex flex-col self-center w-full min-w-[500px] max-w-[600px] p-[5px] bg-spgradient rounded-lg gap-2.5 relative overflow-clip">
        {image && (
          <div className="relative aspect-[5/3]">
            <Image
              className={`brightness-[60%] rounded-md object-cover ${imgClassNames}`}
              src={image}
              alt="info card"
              fill
            />
            {(title || description) && (
              <div className="flex flex-col p-5 gap-5 absolute bottom-0">
                <div className="absolute max-h-fill inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="flex flex-col text-spwhite text-pretty leading-5 gap-5 z-10">
                  {title && <p className="font-semibold">{title}</p>}
                  {description && <p className="">{description}</p>}
                </div>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
      <div className="flex sm:hidden flex-col w-full p-[5px] bg-spgradient rounded-lg gap-2.5">
        {image && (
          <div className="relative aspect-[2/1]">
            <Image
              className={`brightness-[80%] rounded-md object-cover ${imgClassNames}`}
              src={image}
              alt="info card"
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
    </>
  );
};

export default InfoCard;
