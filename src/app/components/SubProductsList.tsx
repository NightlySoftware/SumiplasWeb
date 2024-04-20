'use client';
import React, { useState } from 'react';
import ProductDropdown from './ProductDropdown';

const SubProductsList = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <ProductDropdown
        id="1"
        isOpen={openDropdown === '1'}
        onOpen={() => handleOpen('1')}
        headline1="Película Stretch"
        headline2="Para Emplayar"
        image="/images/product_card/antistatic.webp"
        description="Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños."
        href="/productos/aditivos"
      />
      <ProductDropdown
        id="2"
        isOpen={openDropdown === '2'}
        onOpen={() => handleOpen('2')}
        headline1="Cinta"
        headline2="Transparente"
        image="/images/product_card/food.webp"
        description="Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza."
        href="/productos/aditivos"
      />
      <ProductDropdown
        id="3"
        isOpen={openDropdown === '3'}
        onOpen={() => handleOpen('3')}
        headline1="Cinta"
        headline2="Canela"
        image="/images/product_card/industrial.webp"
        description="Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario."
        href="/productos/aditivos"
      />
    </div>
  );
};

export default SubProductsList;
