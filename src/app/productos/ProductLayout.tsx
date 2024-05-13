import Footer from '@/app/components/Footer';
import HeaderLogo from '@/app/components/HeaderLogo';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import ArrowButton from '@/app/components/ArrowButton';
import InfoCard from '@/app/components/InfoCard';
import FAQList from '@/app/components/FAQList';
import ProductCard from '@/app/components/ProductCard';
import IconRoundedArrow from '@/app/components/IconRoundedArrow';

interface ProductLayoutProps {
  name: string;
  description: string;
  properties: { icon: string; text: string }[];
  cards: { title: string; description: string; image: string }[];
  questionList: { question: string; answer: string }[];
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ name, description, properties, cards, questionList }) => {
  return (
    <main className="flex flex-col items-center">
      <HeaderLogo color="blue" />
      <div className="flex flex-col w-full bg-spwhite p-5 pt-28 pb-20 gap-12">
        {/* Cover photo */}
        <div className="flex relative items-center justify-center aspect-square w-full rounded-lg overflow-hidden">
          <Image className="object-cover brightness-[60%]" src="/images/product_card/antistatic.webp" alt="Logo" fill />
          <div className="relative object-contain flex w-[65%] h-[65%] p-2.5 gap-2.5">
            <Image src="/images/product_card/center/antistatic.webp" alt="Center image" fill />
          </div>
        </div>

        {/* Title */}
        <p className="text-3xl leading-10">
          Bolsas de polietileno
          <br />
          <span className="font-bold">{name}</span>
        </p>

        <ArrowButton text="Cotiza Ahora" />
        <p className="leading-5">{description}</p>

        {/* Property List */}
        <div className="flex flex-col gap-2">
          <p className="font-bold">Características del producto</p>
          <div className="flex flex-col gap-2 p-2">
            {properties.map((property) => (
              <div key={property.text} className="flex items-center gap-2">
                <div className="relative aspect-square w-6">
                  <Image className={`object-contain`} src={property.icon} alt="Logo" fill />
                </div>
                <p>{property.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-2">
          <p className="font-bold">Aplicaciones</p>
          {cards.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>

        {/* FAQ List */}
        <FAQList questionList={questionList} />

        {/* More products section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-bold">Explora más productos</p>
            <div className="flex gap-4">
              <IconRoundedArrow classNames="w-8" fill="#036" direction="left" />
              <IconRoundedArrow classNames="w-8" fill="#036" direction="right" />
            </div>
          </div>
          <ProductCard
            href="/productos/antiestaticas"
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

export default ProductLayout;
