'use client';
import { useState } from 'react';
import Dropdown from './Dropdown';

interface DropdownItem {
  key: number;
  title: string;
  boldTitle: string;
  image: string;
  description: string;
}

const dropdownData: DropdownItem[] = [
  {
    key: 1,
    title: 'Película Stretch',
    boldTitle: 'Para Emplayar',
    image: '/images/product_dropdown/stretch_roll.webp',
    description:
      'Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños.',
  },
  {
    key: 2,
    title: 'Cinta',
    boldTitle: 'Transparente',
    image: '/images/product_dropdown/transparent_tape.webp',
    description:
      'Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza.',
  },
  {
    key: 3,
    title: 'Cinta',
    boldTitle: 'Canela',
    image: '/images/product_dropdown/brown_tape.webp',
    description:
      'Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario.',
  },
  {
    key: 4,
    title: 'Cinta PVC de Colores',
    boldTitle: 'Para Marcaje',
    image: '/images/product_dropdown/pvc_tape.webp',
    description:
      'Ideal para señalización de áreas, identificación de equipos o demarcación de zonas de seguridad. Su durabilidad y variedad de colores vivos (Amarillo, Verde, Azul, Rojo, etc.) facilitan una visualización clara y duradera.',
  },
  {
    key: 5,
    title: 'Rollo de Plástico',
    boldTitle: 'Color Negro',
    image: '/images/product_dropdown/black_roll.webp',
    description:
      'Protege tus suelos y superficies durante la construcción o renovación con nuestro Rollo de Plástico Negro de alta calidad. Fácil de desplegar y recortar, ofrece una barrera impermeable y resistente contra pintura, manchas y otros daños.',
  },
  {
    key: 6,
    title: 'Poli Burbuja',
    boldTitle: 'Natural',
    image: '/images/product_dropdown/bubble.webp',
    description:
      'Solución ideal para prevenir daños durante el transporte y almacenamiento. Disponible en rollos y láminas, proporciona una amortiguación superior para artículos frágiles, garantizando que lleguen en perfectas condiciones a sus destinatarios.',
  },
  {
    key: 7,
    title: 'Poli Burbuja',
    boldTitle: 'Antiestático',
    image: '/images/product_dropdown/bubble_antistatic.webp',
    description:
      'Diseñado para evitar daños por electricidad estática, este material es esencial para el embalaje seguro de productos tecnológicos, componentes electrónicos y dispositivos sensibles. Disponible en rollos y láminas para una máxima versatilidad.',
  },
  {
    key: 8,
    title: 'Fleje Negro',
    boldTitle: 'De 1/2 Pulgada',
    image: '/images/product_dropdown/strap.webp',
    description:
      'Asegura cargas pesadas con nuestro Fleje Negro de 1/2 Pulgada. Fabricado para resistir altas tensiones, este fleje es ideal para asegurar palets y bultos en el transporte. Su resistencia y durabilidad garantizan que tus productos permanezcan seguros y estables en cualquier situación.',
  },
  {
    key: 9,
    title: 'Grapa Metálica',
    boldTitle: 'Para Fleje',
    image: '/images/product_dropdown/strap_clamp.webp',
    description:
      'Completa tu sistema de embalaje con nuestras Grapas Metálicas para Fleje. Diseñadas para unir de manera segura los extremos del fleje, estas grapas son esenciales para mantener la tensión y la integridad del embalaje durante el transporte.',
  },
];

const SubProductsList = () => {
  const [openDropdown, setOpenDropdown] = useState<number>();

  const handleOpen = (id: number) => {
    setOpenDropdown(openDropdown === id ? undefined : id);
  };

  return (
    <div className="flex max-w-[1600px] self-center gap-4">
      <div className="flex m:hidden flex-col gap-4">
        {dropdownData.map((item) => (
          <Dropdown
            key={item.key}
            isOpen={openDropdown === item.key}
            onOpen={() => handleOpen(item.key)}
            title={item.title}
            boldTitle={item.boldTitle}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <div className="hidden custom:flex xl:hidden gap-4">
        <div className="flex flex-col gap-4">
          {dropdownData.map((item) =>
            item.key % 2 === 1 ? (
              <Dropdown
                key={item.key}
                isOpen={openDropdown === item.key}
                onOpen={() => handleOpen(item.key)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-4">
          {dropdownData.map((item) =>
            item.key % 2 === 0 ? (
              <Dropdown
                key={item.key}
                isOpen={openDropdown === item.key}
                onOpen={() => handleOpen(item.key)}
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
          {dropdownData.map((item) =>
            item.key % 3 === 1 ? (
              <Dropdown
                key={item.key}
                isOpen={openDropdown === item.key}
                onOpen={() => handleOpen(item.key)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-6">
          {dropdownData.map((item) =>
            item.key % 3 === 2 ? (
              <Dropdown
                key={item.key}
                isOpen={openDropdown === item.key}
                onOpen={() => handleOpen(item.key)}
                title={item.title}
                boldTitle={item.boldTitle}
                image={item.image}
                description={item.description}
              />
            ) : null
          )}
        </div>
        <div className="flex flex-col gap-6">
          {dropdownData.map((item) =>
            item.key % 3 === 0 ? (
              <Dropdown
                key={item.key}
                isOpen={openDropdown === item.key}
                onOpen={() => handleOpen(item.key)}
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
