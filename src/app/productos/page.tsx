import React from 'react';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SubProductsList from '../components/SubProductsList';
import ScreenSection from '../components/ScreenSection';

const page = () => {
  return (
    <main className="flex flex-col items-center">
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
        <div className="grid grid-cols-1 g:grid-cols-2 gap-4">
          <ProductCard
            href="/productos/bolsas-antiestaticas"
            headline1="Con protección ESD"
            headline2="para circuitos"
            title="Antiestáticas"
            description="Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electrostáticas en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas."
            headlineImage="/images/product_card/antistatic.webp"
            centerImage="/images/product_card/center/antistatic.webp"
          />
          <ProductCard
            href="/productos/bolsas-grado-alimenticio"
            headline1="Grado Alimenticio"
            headline2="de baja densidad"
            title="Para Alimentos"
            description="Esta bolsa de polietileno de baja densidad es completamente transparente e ideal para el empaque adecuado de alimentos. Ofrece una excelente visualización del contenido y está aprobada para uso comercial según las regulaciones de la FDA, garantizando seguridad y calidad."
            headlineImage="/images/product_card/food.webp"
            centerImage="/images/product_card/center/food.webp"
          />
          <ProductCard
            href="/productos/bolsas-industriales"
            headline1="Negra de Reciclaje"
            headline2="para material inorgánico"
            title="Uso Industrial"
            description="Bolsa negra resistente para basura elaborada con material reciclado 100% propio, ideal para actividades que no tengan contacto con productos de consumo alimenticio, nuestra bolsa cuenta con alto grado de resistencia con un sello de fondo."
            headlineImage="/images/product_card/industrial.webp"
            centerImage="/images/product_card/center/industrial.webp"
          />
          <ProductCard
            href="/productos/bolsas-anticorrosivas"
            headline1="Con protección VCI"
            headline2="ideal para embalajes"
            title="Anticorrosivas"
            description="Las bolsas VCI son la mejor solución para el embalaje y la protección de la corrosión en un simple paso, son la forma más rápida para permitir que el compuesto inhibidor de la bolsa se evapore para dar a las piezas un alto nivel de protección contra la corrosión hasta por 12 meses."
            headlineImage="/images/product_card/anticorrosive.webp"
            centerImage="/images/product_card/center/anticorrosive.webp"
          />
          <ProductCard
            href="/productos/bolsas-lisas-pigmentadas"
            headline1="Varios colores"
            headline2="ideal para empaque"
            title="Lisas Pigmentadas"
            description="Utilizada comúnmente para clasificar productos, alimentos o para uso de color institucional, por lo cual la calidad del producto es elevado, con gran resistencia y durabilidad. El sello de fondo que manejamos evita la fuga de sólidos y líquidos."
            headlineImage="/images/product_card/pigmented.webp"
            centerImage="/images/product_card/center/pigmented.webp"
          />
          <ProductCard
            href="/productos/bolsas-tipo-camiseta"
            headline1="De asa"
            headline2="ideal en comercios"
            title="Tipo Camiseta"
            description="Bolsas tipo camiseta con asas, ideales para todo tipo de comercios. Disponibles en una variedad de colores, incluyendo transparente, y en medidas y calibres especiales para adaptarse a diversas necesidades."
            headlineImage="/images/product_card/handle_bag.webp"
            centerImage="/images/product_card/center/handle_bag.webp"
          />
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
