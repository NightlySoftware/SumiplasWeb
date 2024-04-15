import Image from 'next/image';
import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col w-full p-[5px] bg-spgradient rounded-lg gap-2.5">
      <div className="relative aspect-[340/170]">
        <Image className="rounded-md" src={image} alt="info card" objectFit="cover" fill />
      </div>
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
