// Menu.tsx

import React from 'react';

// Aquí iría el logo de SUMIPLAS que tienes en tu imagen, reemplaza 'Logo' por tu componente de imagen o la etiqueta img correspondiente.
const Logo = () => <div>Tu Logo Aquí</div>;

const MenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <a
      href="/#"
      className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </a>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-xl rounded-lg py-5">
      <div className="flex justify-center">
        <Logo />
      </div>
      <hr className="my-2" />
      <nav className="flex flex-col items-center">
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Productos</MenuItem>
        <MenuItem>Nosotros</MenuItem>
        <MenuItem>Cotizar</MenuItem>
      </nav>
    </div>
  );
};

export default Menu;