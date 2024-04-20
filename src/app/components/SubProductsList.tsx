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
        isOpen={openDropdown === '1'}
        onOpen={() => handleOpen('1')}
        headline1="Película Stretch"
        headline2="Para Emplayar"
        image="/images/product_dropdown/stretch_roll.jpeg"
        description="Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños."
      />
      <ProductDropdown
        isOpen={openDropdown === '2'}
        onOpen={() => handleOpen('2')}
        headline1="Cinta"
        headline2="Transparente"
        image="/images/product_dropdown/transparent_tape.webp"
        description="Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza."
      />
      <ProductDropdown
        isOpen={openDropdown === '3'}
        onOpen={() => handleOpen('3')}
        headline1="Cinta"
        headline2="Canela"
        image="/images/product_dropdown/brown_tape.webp"
        description="Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario."
      />
      <ProductDropdown
        isOpen={openDropdown === '4'}
        onOpen={() => handleOpen('4')}
        headline1="Cinta PVC de Colores"
        headline2="Para Marcaje"
        image="/images/product_dropdown/pvc_tape.png"
        description="Ideal para señalización de áreas, identificación de equipos o demarcación de zonas de seguridad. Su durabilidad y variedad de colores vivos (Amarillo, Verde, Azul, Rojo, etc.) facilitan una visualización clara y duradera."
      />
      <ProductDropdown
        isOpen={openDropdown === '5'}
        onOpen={() => handleOpen('5')}
        headline1="Rollo de Plástico"
        headline2="Color Negro"
        image="/images/product_dropdown/black_roll.webp"
        description="Protege tus suelos y superficies durante la construcción o renovación con nuestro Rollo de Plástico Negro de alta calidad. Fácil de desplegar y recortar, ofrece una barrera impermeable y resistente contra pintura, manchas y otros daños."
      />
      <ProductDropdown
        isOpen={openDropdown === '6'}
        onOpen={() => handleOpen('6')}
        headline1="Poli Burbuja"
        headline2="Natural"
        image="/images/product_dropdown/bubble.jpeg"
        description="Solución ideal para prevenir daños durante el transporte y almacenamiento. Disponible en rollos y láminas, proporciona una amortiguación superior para artículos frágiles, garantizando que lleguen en perfectas condiciones a sus destinatarios."
      />
      <ProductDropdown
        isOpen={openDropdown === '7'}
        onOpen={() => handleOpen('7')}
        headline1="Poli Burbuja"
        headline2="Antiestático"
        image="/images/product_dropdown/bubble_antistatic.jpg"
        description="Diseñado para evitar daños por electricidad estática, este material es esencial para el embalaje seguro de productos tecnológicos, componentes electrónicos y dispositivos sensibles. Disponible en rollos y láminas para una máxima versatilidad."
      />
      <ProductDropdown
        isOpen={openDropdown === '8'}
        onOpen={() => handleOpen('8')}
        headline1="Fleje Negro"
        headline2="De 1/2 Pulgada"
        image="/images/product_dropdown/strap.webp"
        description="Asegura cargas pesadas con nuestro Fleje Negro de 1/2 Pulgada. Fabricado para resistir altas tensiones, este fleje es ideal para asegurar palets y bultos en el transporte. Su resistencia y durabilidad garantizan que tus productos permanezcan seguros y estables en cualquier situación."
      />
      <ProductDropdown
        isOpen={openDropdown === '9'}
        onOpen={() => handleOpen('9')}
        headline1="Grapa Metálica"
        headline2="Para Fleje"
        image="/images/product_dropdown/strap_clamp.jpeg"
        description="Completa tu sistema de embalaje con nuestras Grapas Metálicas para Fleje. Diseñadas para unir de manera segura los extremos del fleje, estas grapas son esenciales para mantener la tensión y la integridad del embalaje durante el transporte."
      />
    </div>
  );
};

export default SubProductsList;
