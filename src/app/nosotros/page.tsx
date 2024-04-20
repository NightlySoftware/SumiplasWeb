import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section */}
      <div className="flex flex-col w-full sticky -z-10 top-0">
        <Header />
        <div className="flex flex-col relative w-full text-spwhite min-h-screen gap-8 py-16 pt-32">
          <p className="text-center text-[32px] font-semibold leading-10">
            Empresa <span className="font-serif italic font-normal">comprometida</span>
            <br />
            con sus trabajadores y
            <br /> <span className="font-serif italic font-normal">nuestros</span> clientes
          </p>
          <p className="text-center text-[16px] leading-5">
            Asi como la calidad de nuestros
            <br />
            productos es prioridad,
            <br />
            nuestro trato tambien lo es.
          </p>
          <Image
            className="-z-10 brightness-[60%]"
            style={{ objectFit: 'cover' }}
            src="/images/hero_bg/about_us.webp"
            alt="hero"
            quality={100}
            priority
            fill
          />
        </div>
      </div>

      {/* Main content card */}

      <MainSection
        title="Procesos e Infraestructura"
        description="Contamos con fábrica propia, donde realizamos todo el proceso de manufactura por nuestra cuenta, asegurando los más altos estándares de calidad y compromiso que nos distinguen y nos vuelven una empresa líder."
        oneliner="Nuestro proceso consta de Extrusion, Impresión y Bolseo."
      >
        <div></div>
      </MainSection>
      <Footer />
      <div className="flex justify-center fixed bottom-5 z-50 w-full">
        <Navbar />
      </div>
    </main>
  );
};

export default page;
