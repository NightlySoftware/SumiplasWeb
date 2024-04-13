import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-full p-1 bg-spgradient rounded-lg gap-2.5">
      <img className="rounded-md aspect-[343/170]" src={image} />
      <div className="flex flex-col p-5 gap-5 ">
        <div className="flex flex-col text-spwhite text-pretty leading-5 gap-5">
          <p className="font-semibold">{title}</p>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
