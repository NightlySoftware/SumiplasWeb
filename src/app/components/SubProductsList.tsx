'use client';

import { useState } from 'react';
import Dropdown from './Dropdown';
import { subproductsData } from '../utils/productsData';

const SubProductsList = () => {
  const [openDropdown, setOpenDropdown] = useState<number>();

  const handleOpen = (id: number) => {
    setOpenDropdown(openDropdown === id ? undefined : id);
  };

  return (
    <div className="flex max-w-[1600px] self-center gap-4">
      <div className="flex m:hidden flex-col gap-4">
        {subproductsData.map((item, index) => (
          <Dropdown
            key={index}
            isOpen={openDropdown === index}
            onOpen={() => handleOpen(index)}
            title={item.title}
            boldTitle={item.boldTitle}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <div className="hidden custom:flex xl:hidden gap-4">
        <div className="flex flex-col gap-4">
          {subproductsData.map((item, index) =>
            index % 2 === 1 ? (
              <Dropdown
                key={index}
                isOpen={openDropdown === index}
                onOpen={() => handleOpen(index)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-4">
          {subproductsData.map((item, index) =>
            index % 2 === 0 ? (
              <Dropdown
                key={index}
                isOpen={openDropdown === index}
                onOpen={() => handleOpen(index)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
      </div>
      {/* now the same but with three */}
      <div className="hidden xl:flex gap-8 2xl:gap-12 3xl:gap-20">
        <div className="flex flex-col gap-6">
          {subproductsData.map((item, index) =>
            index % 3 === 1 ? (
              <Dropdown
                key={index}
                isOpen={openDropdown === index}
                onOpen={() => handleOpen(index)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-6">
          {subproductsData.map((item, index) =>
            index % 3 === 2 ? (
              <Dropdown
                key={index}
                isOpen={openDropdown === index}
                onOpen={() => handleOpen(index)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-6">
          {subproductsData.map((item, index) =>
            index % 3 === 0 ? (
              <Dropdown
                key={index}
                isOpen={openDropdown === index}
                onOpen={() => handleOpen(index)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default SubProductsList;
