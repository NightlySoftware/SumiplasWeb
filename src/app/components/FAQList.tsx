'use client';
import { useState } from 'react';
import Dropdown from './Dropdown';

const FAQList = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="font-bold">Preguntas frecuentes (FAQ)</p>
      <div className="flex flex-col gap-8 p-4">
        <Dropdown
          isOpen={openDropdown === '1'}
          onOpen={() => handleOpen('1')}
          boldTitle="¿Cómo puedo saber si necesito bolsas antiestáticas para mi producto?"
          description="Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños."
          textOnly
        />
        <Dropdown
          isOpen={openDropdown === '2'}
          onOpen={() => handleOpen('2')}
          boldTitle="¿Son las bolsas antiestáticas reutilizables?"
          description="Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza."
          textOnly
        />
        <Dropdown
          isOpen={openDropdown === '3'}
          onOpen={() => handleOpen('3')}
          boldTitle="¿Las bolsas antiestáticas protejen contra impactos y humedad?"
          description="Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario."
          textOnly
        />
        <Dropdown
          isOpen={openDropdown === '4'}
          onOpen={() => handleOpen('4')}
          boldTitle="¿Las bolsas antiestáticas tienen fecha de caducidad?"
          description="Ideal para señalización de áreas, identificación de equipos o demarcación de zonas de seguridad. Su durabilidad y variedad de colores vivos (Amarillo, Verde, Azul, Rojo, etc.) facilitan una visualización clara y duradera."
          textOnly
        />
      </div>
    </div>
  );
};

export default FAQList;
