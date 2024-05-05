import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import React from 'react';
import Image from 'next/image';
import ArrowButton from '@/app/components/ArrowButton';
import InfoCard from '@/app/components/InfoCard';
import FAQList from '@/app/components/FAQList';
import ProductCard from '@/app/components/ProductCard';
import IconRoundedArrow from '@/app/components/IconRoundedArrow';

const page = () => {
  return (
    <main className="flex flex-col items-center">
      <Header color="black" />
      <div className="flex flex-col w-full bg-spwhite p-5 pt-28 pb-20 gap-16">
        <div className="flex relative items-center justify-center aspect-square w-full rounded-lg overflow-hidden">
          <Image className="object-cover brightness-[60%]" src="/images/product_card/antistatic.webp" alt="Logo" fill />
          <div className="relative object-contain flex w-[65%] h-[65%] p-2.5 gap-2.5">
            <Image src="/images/product_card/center/antistatic.webp" alt="Center image" fill />
          </div>
        </div>
        <p className="text-3xl">
          Bolsas de polietileno
          <br />
          <span className="font-bold">Antiestáticas</span>
        </p>
        <ArrowButton text="Cotiza Ahora" />
        <p className="leading-5">
          Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y
          dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electrostáticas
          en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas.
        </p>
        <p className="font-bold">Características del producto</p>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>10cm ancho hasta 170cm de ancho</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>Calibres de 60 a 800</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>Protección antiestática</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>Material duradero</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>Versatilidad</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-6">
              <Image className={`object-contain invert`} src="/icons/logo.svg" alt="Logo" fill />
            </div>
            <p>Transparencia</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Aplicaciones</p>
          <InfoCard
            title="Circuitos integrados"
            description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
            image="/images/info_card/quality.webp"
          />
          <InfoCard
            title="Tarjetas de memoria"
            description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
            image="/images/info_card/quality.webp"
          />
          <InfoCard
            title="Componentes de computadora"
            description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
            image="/images/info_card/quality.webp"
          />
          <InfoCard
            title="Dispositivos móviles y sus accesorios"
            description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
            image="/images/info_card/quality.webp"
          />
        </div>
        <FAQList />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-bold">Explora más productos</p>
            <div className="flex gap-4">
              <IconRoundedArrow classNames="w-8" fill="#036" direction="left" />
              <IconRoundedArrow classNames="w-8" fill="#036" direction="right" />
            </div>
          </div>
          <ProductCard
            href="/productos/anti-estaticas"
            headline1="Con protección ESD"
            headline2="para circuitos"
            headlineImage="/images/product_card/antistatic.webp"
            title="Antiestáticas"
            description="Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electrostáticas en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas."
            centerImage="/images/product_card/center/antistatic.webp"
          />
        </div>
      </div>
      <Footer />
      <div className="flex justify-center fixed bottom-5 z-50 w-full">
        <Navbar />
      </div>
    </main>
  );
};

export default page;
