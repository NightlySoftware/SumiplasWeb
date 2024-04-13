import Link from 'next/link';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      {/* Hero section */}
      <div className="flex flex-col min-h-screen gap-8 py-16">
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
      <div className="flex flex-col w-full bg-spwhite rounded-t-2xl">
        {/* Main content card */}
        <div className="flex flex-col h-96 p-5 justify-center items-center gap-8">
          <div className="flex flex-col self-stretch h-80 justify-center gap-4">
            <div className="flex flex-col self-stretch h-36 py-8 justify-center items-center">
              <p className="self-stretch text-center text-black text-3xl font-medium">Te contamos lo que hacemos</p>
            </div>
            <div className="flex flex-col self-stretch h-36 justify-center items-center gap-5">
              <p className="self-stretch text-center text-gray-900 leading-5 text-pretty">
                En Sumiplas nos dedicamos a la fabricación y distribución de bolsas de polietileno, así como brindamos
                soluciones de empaque y embalaje excepcionales para el sector agropecuario, automotriz, de alimentos e
                industrial. <br /> <br />
                Establecidos en Irapuato, Guanajuato, lideramos el sector.
              </p>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
      <Navbar />
    </main>
  );
}
