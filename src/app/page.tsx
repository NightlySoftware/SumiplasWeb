import Link from 'next/link';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import InfoCard from './components/InfoCard';
import IconRoundedArrow from './components/IconRoundedArrow';
import ArrowButton from './components/ArrowButton';
import ProductButton from './components/ProductButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      {/* Hero section */}
      <div className="flex flex-col text-spwhite min-h-screen gap-8 py-16">
        <p className="text-center text-[32px] font-semibold leading-10">
          Bolsas a tu <span className="font-serif italic font-normal">medida</span>
          <br />
          variedad de productos
          <br /> <span className="font-serif italic font-normal">calidad</span> garantizada
        </p>
        <p className="text-center text-[16px] leading-5">
          Bolsas hechas con polietileno fabricadas
          <br />
          por nosotros para usos en el sector
          <br />
          automotriz, industrial y de alimentos.
        </p>
      </div>
      {/* Main content card */}
      <MainSection
        title="Te contamos lo que hacemos"
        description="En Sumiplas nos dedicamos a la fabricación y distribución de bolsas de polietileno, así como brindamos soluciones de empaque y embalaje excepcionales para el sector agropecuario, automotriz, de alimentos e industrial."
        oneliner="Establecidos en Irapuato, Guanajuato, lideramos el sector."
      >
        <InfoCard
          title="Productos de Calidad"
          description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
          image="https://via.placeholder.com/343x170"
        />
        <InfoCard
          title="Tecnología de Vanguardia"
          description="Contamos con tecnología y maquinaria de vanguardia para de esta manera poder realizar un trabajo de calidad."
          image="https://via.placeholder.com/343x170"
        />
        <ArrowButton href="/nosotros" text="Conócenos más" />
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Productos</p>
          <p className="leading-5">
            Nos enorgullece ser líderes en la solución integral de empaque, ofreciendo una diversidad de productos
            plásticos de alta calidad. Desde bolsas especializadas hasta soluciones de embalaje innovadoras, nuestra
            gama está diseñada para satisfacer las exigencias de diferentes industrias.
          </p>
        </div>
        <ProductButton
          href="/antiestaticas"
          title="Antiestáticas"
          bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4bds1hp_R2NgoSqFql1FRAHaHa%26pid%3DApi&f=1&ipt=c70bf9fa9a859ee4be5f55fcf3855b6c2a823c82dd40d8e52e4e3be775bf6731&ipo=images"
        />
        <ProductButton
          href="/alimentos"
          title="Para Alimentos"
          bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4bds1hp_R2NgoSqFql1FRAHaHa%26pid%3DApi&f=1&ipt=c70bf9fa9a859ee4be5f55fcf3855b6c2a823c82dd40d8e52e4e3be775bf6731&ipo=images"
        />
        <ProductButton
          href="/impresion"
          title="Tratadas para Impresión"
          bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4bds1hp_R2NgoSqFql1FRAHaHa%26pid%3DApi&f=1&ipt=c70bf9fa9a859ee4be5f55fcf3855b6c2a823c82dd40d8e52e4e3be775bf6731&ipo=images"
        />
        <ArrowButton href="/productos" text="Ver más productos" />
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Nuestros clientes</p>
          <p className="leading-5">
            Estos son algunos de los clientes, distribuidores con los que hemos trabajado y avalan nuestra calidad como
            fabricantes
          </p>
        </div>
        <div>insertar logos aqui</div>
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Entregamos hasta tu negocio</p>
        </div>
        <InfoCard
          title="Envíos a domicilio"
          description="Somos fabricantes de bolsa situados en Irapuato Guanajuato. Contamos con transporte propio y entrega en la Zona del Bajío mexicano."
          image="https://via.placeholder.com/343x170"
        />
        <div>insertar mapa aqui</div>
        <div className="flex flex-col text-spblack text-center text-pretty gap-4">
          <p className="text-3xl font-medium py-8">Estamos a un click de distancia</p>
        </div>
        <InfoCard
          title=""
          description="¿Te interesaron nuestros productos y quieres saber más información sobre precios, medidas específicas o entregas? Envíanos tu información de contacto para responderte lo más pronto posible."
          image="https://via.placeholder.com/343x170"
        />
        <ArrowButton href="/contacto" text="Contáctanos" />
      </MainSection>
      <Footer />
      <Navbar />
    </main>
  );
}
