'use client';

import Footer from '@/app/components/Footer';
import HeaderLogo from '@/app/components/HeaderLogo';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import ArrowButton from '@/app/components/ArrowButton';
import InfoCard from '@/app/components/InfoCard';
import FAQList from '@/app/components/FAQList';
import ScreenSection from '../components/ScreenSection';
import { AnimatePresence } from 'framer-motion';
import { useModalVisibility } from '../utils/modalVisibility';
import QuoteModal from '../components/QuoteModal';
import ProductCarousel from '../components/ProductCarousel';

interface ProductLayoutProps {
  name: string;
  bgPhoto: string;
  centerPhoto: string;
  description: string;
  properties: { icon: string; text: string }[];
  cards: { title: string; description: string; image: string }[];
  questionList: { question: string; answer: string }[];
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  name,
  description,
  properties,
  cards,
  questionList,
  bgPhoto,
  centerPhoto,
}) => {
  const { visibleModal, toggleModal } = useModalVisibility();
  return (
    <main className="flex flex-col items-center no-scrollbar">
      <HeaderLogo color="blue" />
      <div className="flex flex-col w-full bg-spwhite text-spblack p-5 m:p-10 m:pt-28 pt-28 pb-20 gap-12">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-center gap-12">
          {/* Cover photo */}
          <div className="flex relative lg:sticky lg:top-5 xl:top-10 3xl:top-16 w-full max-w-[600px] items-center justify-center self-center lg:self-start aspect-square rounded-lg overflow-hidden">
            <Image className="object-cover brightness-[60%]" src={bgPhoto} alt="Cover photo" fill />
            <div className="relative object-contain flex w-[65%] h-[65%] p-2.5 gap-2.5">
              <Image src={centerPhoto} alt="Center photo" fill />
            </div>
            <div className="hidden lg:flex flex-col absolute bottom-0 w-full p-5 gap-5">
              <div className="absolute max-h-fill inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <p className="text-2xl leading-8 text-spwhite z-[1]">
                Bolsas
                <br />
                <span className="font-bold">{name}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col self-center gap-12 lg:min-w-[50%] max-w-[700px] 3xl:min-w-[700px]">
            {/* Title */}
            <p className="text-3xl leading-10">
              Bolsas
              <br />
              <span className="font-bold">{name}</span>
            </p>

            <p className="leading-5">{description}</p>
            <ArrowButton className="lg:self-start" text="Cotiza Ahora" onClick={() => toggleModal('quote')} />

            {/* Property List */}
            <div className="flex flex-col gap-2 xl:gap-4">
              <p className="font-bold xl:text-xl">Características del producto</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 xl:gap-8 p-2">
                {properties.map((property) => (
                  <div key={property.text} className="flex lg:flex-col items-center lg:items-start gap-2">
                    <div className="relative aspect-square w-6 lg:w-8">
                      <Image className={`object-contain`} src={property.icon} alt="Logo" fill />
                    </div>
                    <p>{property.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards List */}
            <div className="flex flex-col gap-2 xl:gap-4">
              <p className="font-bold xl:text-center xl:text-xl">Aplicaciones comunes</p>
              {cards.map((card, index) => (
                <InfoCard key={index} title={card.title} description={card.description} image={card.image} />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <FAQList questionList={questionList} />

        {/* More products section */}
        <ProductCarousel />
      </div>

      <AnimatePresence>
        {visibleModal === 'quote' && <QuoteModal onClose={() => toggleModal('quote')} />}
      </AnimatePresence>

      <ScreenSection type="contact" />
      <Footer />
      <Navbar />
    </main>
  );
};

export default ProductLayout;
