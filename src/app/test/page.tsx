'use client';

import React, { useState } from 'react';
import EmailTemplate from '../components/EmailTemplate';

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
      <EmailTemplate
        nombre="Apocalix De Luque"
        correo="lololertrololer@gmail.com"
        telefono="462 197 9707"
        negocio="Nightly Software"
        interes="Bolsa negra"
        ciudad="Irapuato"
        comentarios="Hola, me gustaría saber si tienen bolsas negras de 50x50cm"
        fecha="26/06/2024"
        hora="3:45 PM"
      />

      {/* <button className="" onClick={toggleCard}>
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
      )} */}
    </div>
  );
}
