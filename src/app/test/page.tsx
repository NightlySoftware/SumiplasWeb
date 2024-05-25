'use client';

import { useState } from 'react';

export default function Test() {
  const [isCardVisible, setCardVisible] = useState(false);

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };

  const onClose = () => {
    setCardVisible(false);
  };

  return (
    <div>
      <button className="" onClick={toggleCard}>
        <p className="text-white bg-black p-2 rounded-lg">Cotizar</p>
      </button>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Test page</p>
      ))}
      {isCardVisible && (
        <div className="xdxdd z-[7]" onClick={onClose}>
          <div
            className="bg-white overflow-auto no-doc-scroll"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {Array.from({ length: 50 }, (_, i) => (
              <p key={i}>Hola xd</p>
            ))}
            <button className="w-full bg-spblue text-white py-2 rounded-lg" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
