import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';
import ArrowButton from './components/ArrowButton';
import ProductButton from './components/ProductButton';
import Image from 'next/image';
import MapComponent from './components/MapComponent';
import ScreenSection from './components/ScreenSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center no-scrollbar">
      <ScreenSection
        title={['Bolsas a tu', 'medida', 'variedad de productos', 'calidad', 'garantizada']}
        description={[
          'Bolsas hechas con polietileno fabricadas',
          'por nosotros para usos en el sector',
          'automotriz, industrial y de alimentos.',
        ]}
        image="/images/hero_bg/extrusora.webp"
        imageClassNames="object-left"
        type="hero"
      />
      <div className="flex flex-col w-full bg-spwhite rounded-t-2xl g:rounded-t-[32px] xl:rounded-t-[80px] p-5 m:p-10 g:p-16 pb-20 gap-16 z-[2]">
        <div className="flex flex-col w-full g:min-h-[564px] 2xl:min-h-[624px] max-w-[1400px] g:flex-row g:self-center gap-16 g:gap-8">
          <div className="flex flex-col self-center text-spblack text-center g:text-start text-pretty gap-4">
            <p className="text-3xl font-medium py-8">Te contamos lo que hacemos</p>
            <p className="leading-5">
              En Sumiplas nos dedicamos a la fabricación y distribución de bolsas de polietileno, así como brindamos
              soluciones de empaque y embalaje excepcionales para el sector alimenticio, automotriz, e industrial.
              <br /> <br />
              Establecidos en Irapuato, Guanajuato, lideramos el sector.
            </p>
            <ArrowButton className="hidden g:flex g:self-start g:pt-8" href="/nosotros" text="Conócenos más" />
          </div>
          <div className="flex flex-col self-center w-full g:w-[450px] xl:min-w-[500px] 2xl:min-w-[600px] xl:max-w-[600px] gap-4">
            <InfoCard
              title="Productos de Calidad"
              description="Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes."
              image="/images/info_card/quality.webp"
            />
            <InfoCard
              title="Tecnología de Vanguardia"
              description="Contamos con la tecnología y maquinaria para poder realizar un trabajo de calidad."
              image="/images/info_card/maquina.webp"
              imgClassNames="object-[50%,55%]"
            />
            <ArrowButton className="g:hidden" href="/nosotros" text="Conócenos más" />
          </div>
        </div>
        <div className="flex flex-col w-full g:min-h-[564px] 2xl:min-h-[624px] max-w-[1400px] g:flex-row g:self-center gap-16 g:gap-8">
          <div className="flex flex-col self-center text-spblack text-center g:text-start text-pretty gap-4">
            <p className="text-3xl font-medium py-8">Productos</p>
            <p className="leading-5">
              Nos enorgullece ser líderes en la solución integral de empaque, ofreciendo una diversidad de productos
              plásticos de alta calidad. Desde bolsas especializadas hasta soluciones de embalaje innovadoras, nuestra
              gama está diseñada para satisfacer las exigencias de diferentes industrias.
            </p>
            <ArrowButton className="hidden g:flex g:self-start g:pt-8" href="/nosotros" text="Conócenos más" />
          </div>
          <div className="flex flex-col self-center w-full g:w-[450px] xl:min-w-[500px] 2xl:min-w-[600px] xl:max-w-[600px] gap-4">
            <ProductButton
              href="/productos/bolsas-antiestaticas"
              title="Antiestáticas"
              bgImage="/images/product_card/antistatic.webp"
            />
            <ProductButton
              href="/productos/bolsas-grado-alimenticio"
              title="Para Alimentos"
              bgImage="/images/product_card/food.webp"
            />
            <ProductButton
              href="/productos/bolsas-anticorrosivas"
              title="Con protección VCI"
              bgImage="/images/product_card/anticorrosive.webp"
            />
            <ProductButton
              href="/productos/bolsas-industriales"
              title="Uso industrial"
              bgImage="/images/product_card/industrial.webp"
            />
          </div>
          <ArrowButton className="g:hidden" href="/productos" text="Ver más productos" />
        </div>
        <div className="flex flex-col w-full g:min-h-[564px] 2xl:min-h-[624px] max-w-[1400px] g:flex-row g:self-center gap-16 g:gap-8">
          <div className="flex flex-col self-center text-spblack text-center g:text-start text-pretty gap-4">
            <p className="text-3xl font-medium py-8">Nuestros clientes</p>
            <p className="leading-5">
              Estos son algunos de nuestros clientes, con los que hemos trabajado y avalan nuestra calidad, compromiso y
              responsabilidad como fabricantes.
            </p>
          </div>
          <div className="flex flex-col self-center w-full g:w-[450px] xl:min-w-[500px] 2xl:min-w-[600px] xl:max-w-[600px] gap-4">
            <div className="flex w-full px-8 gap-4">
              <div className="relative h-10 w-full">
                <Image
                  src="/images/logos/zkw.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 h-10 w-auto object-contain"
                  fill
                />
              </div>
              <div className="relative h-10 w-full">
                <Image
                  src="/images/logos/campo_fresco.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 object-contain"
                  fill
                />
              </div>
              <div className="relative h-10 w-full">
                <Image
                  src="/images/logos/trimex.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 object-contain"
                  fill
                />
              </div>
            </div>
            <div className="flex w-full px-8 gap-4">
              <div className="relative h-10 w-full">
                <Image
                  src="/images/logos/sanoh.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 object-contain"
                  fill
                />
              </div>
              <div className="relative h-10 w-full">
                <Image src="/images/logos/nifco.webp" alt="logo" className="saturate-0 object-contain" fill />
              </div>
              <div className="relative h-10 w-[50%]">
                <Image
                  src="/images/logos/almacenes_vaca.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 object-contain"
                  fill
                />
              </div>
            </div>
            <div className="flex w-full px-8 gap-4">
              <div className="relative h-10 w-full">
                <Image
                  src="/images/logos/vallen.webp"
                  alt="logo"
                  className="saturate-0 brightness-0 object-contain"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full g:min-h-[564px] 2xl:min-h-[624px] max-w-[1400px] g:flex-row g:self-center gap-16 g:gap-8">
          <div className="flex flex-col self-center text-spblack text-center g:text-start text-pretty gap-4">
            <p className="text-3xl font-medium py-8">Entregamos hasta tu negocio</p>
            <p className="leading-5">
              Somos fabricantes de bolsa situados en Irapuato Guanajuato. Contamos con transporte propio y entrega en la
              Zona del Bajío mexicano.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 leading-5 px-2.5">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5528 14.106C14.7718 13.9964 15.0234 13.9711 15.2599 14.0346C15.4964 14.0982 15.7013 14.2464 15.8358 14.451L15.8938 14.553L17.8938 18.553C17.9652 18.6956 18.0014 18.8533 17.9994 19.0128C17.9974 19.1723 17.9574 19.329 17.8825 19.4698C17.8076 19.6106 17.7001 19.7315 17.569 19.8224C17.4379 19.9132 17.287 19.9714 17.1288 19.992L16.9998 20H0.999834C0.840304 20.0001 0.683077 19.9619 0.541281 19.8888C0.399485 19.8157 0.277237 19.7098 0.184743 19.5798C0.0922498 19.4498 0.0321962 19.2996 0.00959684 19.1417C-0.0130026 18.9837 0.00250824 18.8227 0.0548341 18.672L0.104834 18.552L2.10483 14.552C2.21693 14.3203 2.41406 14.1407 2.65519 14.0507C2.89632 13.9606 3.16289 13.967 3.39942 14.0686C3.63595 14.1701 3.82423 14.3589 3.92508 14.5957C4.02592 14.8325 4.03157 15.0991 3.94083 15.34L3.89383 15.447L2.61783 18H15.3818L14.1058 15.447C13.9874 15.2099 13.968 14.9354 14.0518 14.684C14.1356 14.4325 14.3158 14.2246 14.5528 14.106ZM8.99983 0C10.8563 0 12.6368 0.737498 13.9496 2.05025C15.2623 3.36301 15.9998 5.14348 15.9998 7C15.9998 9.382 14.7108 11.317 13.3768 12.69C12.6399 13.4384 11.8299 14.1111 10.9588 14.698L10.5858 14.944L10.2538 15.153C10.2018 15.184 10.1518 15.213 10.1048 15.243L9.84783 15.391C9.31983 15.691 8.67983 15.691 8.15183 15.391L7.89483 15.242L7.58483 15.053C7.52762 15.017 7.47062 14.9807 7.41383 14.944L7.04083 14.698C6.16978 14.1111 5.35973 13.4384 4.62283 12.69C3.28883 11.317 1.99983 9.382 1.99983 7C1.99983 5.14348 2.73733 3.36301 4.05009 2.05025C5.36284 0.737498 7.14332 0 8.99983 0ZM8.99983 5C8.4694 5 7.96069 5.21071 7.58562 5.58579C7.21055 5.96086 6.99983 6.46957 6.99983 7C6.99983 7.53043 7.21055 8.03914 7.58562 8.41421C7.96069 8.78929 8.4694 9 8.99983 9C9.53027 9 10.039 8.78929 10.414 8.41421C10.7891 8.03914 10.9998 7.53043 10.9998 7C10.9998 6.46957 10.7891 5.96086 10.414 5.58579C10.039 5.21071 9.53027 5 8.99983 5Z"
                  fill="#0B151C"
                />
              </svg>
              <div className="text-spblack">
                <p className="font-bold">Mapa:</p>
                <p>Zona aproximada de envíos</p>
              </div>
            </div>
            <div className="flex flex-col self-center w-full g:w-[450px] xl:min-w-[500px] 2xl:min-w-[600px] xl:max-w-[600px] gap-4">
              <InfoCard>
                <MapComponent />
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
      <ScreenSection type="contact" />
      <Footer />
      <Navbar />
    </main>
  );
}
