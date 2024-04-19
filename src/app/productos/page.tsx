import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductDropdown from '../components/ProductDropdown';

const page = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section */}
      <div className="flex flex-col w-full sticky -z-10 top-0">
        <Header />
        <div className="flex flex-col relative w-full text-spwhite min-h-screen gap-8 py-16 pt-32">
          <p className="text-center text-[32px] font-semibold leading-10">
            Somos <span className="font-serif italic font-normal">fabricantes</span>
            <br />
            de bolsas plásticas
            <br /> <span className="font-serif italic font-normal">líderes</span> en variedad
          </p>
          <p className="text-center text-[16px] leading-5">
            Contamos con bolsas de todo tipo
            <br />
            fabricadas por nosotros en calibres y
            <br />
            medidas comerciales y especiales
          </p>
          <Image
            className="-z-10 brightness-[60%]"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
            src="/images/hero_bg/products.webp"
            alt="hero"
            quality={100}
            priority
            fill
          />
        </div>
      </div>

      {/* Main content card */}

      <MainSection
        title="Bolsas que se adaptan a tus necesidades"
        description="Entendemos que cada cliente es único, por eso nos adaptamos a tus medidas,tus requerimientos y a tu negocio. Ofrecemos un amplio catálogo de tipos de bolsas de polietileno, así como agregados."
        oneliner="Revisa nuestro catálogo completo de productos a continuación"
      >
        <div className="flex flex-col w-full gap-16">
          <ProductCard
            href="/productos/anti-estaticas"
            headline1="Con protección ESD"
            headline2="para circuitos"
            headlineImage="/images/product_card/antistatic.webp"
            title="Antiestáticas"
            description="Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electrostáticas en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas."
            centerImage="/images/product_card/center/antistatic.png"
          />
          <ProductCard
            href="/productos/grado-alimenticio"
            headline1="Grado Alimenticio"
            headline2="para productos orgánicos"
            headlineImage="/images/product_card/food.webp"
            title="Para Alimentos "
            description="Este tipo de bolsa permite hacer un empaque adecuado de alimentos que se venden a granel en las áreas de panadería, salchichería, carnes y fruta. Nuestros productos están aprobado para uso comercial por las regulaciones de la FDA."
            centerImage="/images/product_card/center/food.png"
          />
          <ProductCard
            href="/productos/industriales"
            headline1="Negra de Reciclaje"
            headline2="para material inorgánico"
            headlineImage="/images/product_card/industrial.webp"
            title="Uso Industrial"
            description="Bolsas de polietileno de alta densidad, resistentes y duraderas, ideales para uso en la industria. Disponibles en diferentes calibres y medidas, estas bolsas son perfectas para el manejo de residuos sólidos y líquidos, así como para el empaque de productos pesados."
            centerImage="/images/product_card/center/industrial.png"
          />
          <ProductCard
            href="/productos/anticorrosivas"
            headline1="Con protección VCI"
            headline2="para metales"
            headlineImage="/images/product_card/anticorrosive.webp"
            title="Anticorrosivas"
            description="Bolsas de polietileno con aditivo VCI (Volatile Corrosion Inhibitor) que protege de la corrosión a metales ferrosos y no ferrosos. Ideal para proteger piezas metálicas en tránsito o almacenamiento hasta por 12 meses."
            centerImage="/images/product_card/center/anticorrosive.png"
          />
          <ProductCard
            href="/productos/termoencogibles"
            headline1="Grado alimenticio"
            headline2="ideal en carnes y quesos"
            headlineImage="/images/product_card/shrinkable.webp"
            title="Termoencogibles"
            description="Cuenta con tecnología multicapa que protege el alimento y lo preserva con mayor vida de anaquel. La bolsa se adhiere como si fuera una segunda piel, adoptando la forma del producto para brindar una mejor presentación con brillo y claridad."
            centerImage="/images/product_card/center/shrinkable.png"
          />
          <ProductCard
            href="/productos/lisas-pigmentadas"
            headline1="Ideal en clasificación"
            headline2="para uso industrial"
            headlineImage="/images/product_card/pigmented.webp"
            title="Lisas Pigmentadas"
            description="Utilizada comúnmente para clasificar la basura o para uso de color institucional, nuestro producto es elaborado a partir del reutilizamiento del Stretch compactado, por lo cual la calidad del producto es elevado, con gran resistencia y durabilidad. El sello de fondos que manejamos evita la fuga de sólidos y líquidos."
            centerImage="/images/product_card/center/pigmented.png"
          />
          <ProductCard
            href="/productos/comerciales"
            headline1="Tratadas para impresión"
            headline2="ideal en comercios"
            headlineImage="/images/product_card/printable.webp"
            title="Comerciales"
            description="Bolsa de compras (Shopping bags) ideal para boutiques, zapaterias, tiendas de ropa, tiendas departamentales y exposiciones. La bolsa cuenta con tratamiento para poder ser serigrafiada de manera adecuada."
            centerImage="/images/product_card/center/printable.png"
          />
        </div>
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Productos que comercializamos</p>
          <p className="leading-5">
            Además de nuestros productos manufacturados, ofrecemos una gama de aditivos para una experiencia completa de
            compra en un solo lugar.
          </p>
        </div>
        <div className="flex flex-col w-full gap-8">
          <ProductDropdown
            headline1="Película Stretch"
            headline2="Para Emplayar"
            image="/images/product_card/antistatic.webp"
            description="Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños."
            href="/productos/aditivos"
          />
        </div>
      </MainSection>
      <Footer />
      <div className="flex justify-center fixed bottom-5 z-50 w-full">
        <Navbar />
      </div>
    </main>
  );
};

export default page;
