import React from 'react';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SubProductsList from '../components/SubProductsList';
import ScreenSection from '../components/ScreenSection';
import { productCardsData } from '../utils/productCardsData';

const page = () => {
  return (
    <main className="flex flex-col items-center no-scrollbar">
      {/* Hero section */}
      <ScreenSection
        title={['Somos', 'fabricantes', 'de bolsas plásticas', 'líderes', 'en variedad']}
        description={[
          'Contamos con bolsas de todo tipo',
          'fabricadas por nosotros en calibres y',
          'medidas comerciales y especiales',
        ]}
        image="/images/hero_bg/products.webp"
        imageClassNames="object-left"
        type="hero"
      />

      {/* Main content card */}
      <MainSection
        title="Bolsas que se adaptan a tus necesidades"
        description="Entendemos que cada cliente es único,por eso nos adaptamos a tus requerimientos, medidas y a tus procesos.
        Ofrecemos un amplio catálogo de bolsas de polietileno, además de otros agregados."
        oneliner="Revisa nuestro catálogo completo de productos a continuación"
      >
        <div className="grid grid-cols-1 g:grid-cols-2 max-w-[1600px] self-center gap-4 m:gap-16 g:gap-6 2xl:gap-16">
          {productCardsData.map((product, index) => (
            <ProductCard
              key={index}
              href={product.href}
              headline1={product.headline1}
              headline2={product.headline2}
              title={product.title}
              description={product.description}
              headlineImage={product.headlineImage}
              centerImage={product.centerImage}
            />
          ))}
        </div>
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Productos que comercializamos</p>
          <p className="leading-5">
            Además de nuestros productos manufacturados, también ofrecemos una variedad de materiales para empaque y
            embalaje. Así, puedes disfrutar de una experiencia completa de compra en un solo lugar.
          </p>
        </div>
        <SubProductsList />
      </MainSection>

      <ScreenSection type="contact" />
      <Footer />
      <Navbar />
    </main>
  );
};

export default page;
