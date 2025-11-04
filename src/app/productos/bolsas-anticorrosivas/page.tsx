import type { Metadata } from 'next';
import ProductLayout from '../ProductLayout';

const product = {
  name: 'Anticorrosivas',
  bgPhoto: '/images/product_card/anticorrosive.webp',
  centerPhoto: '/images/product_card/center/anticorrosive.webp',
  description:
    'Embalaje especializado diseñado para proteger componentes metálicos y piezas industriales contra la corrosión durante el almacenamiento y transporte. Las bolsas de polietileno con protección VCI anticorrosivas están tratadas con inhibidores de corrosión que evitan la oxidación y el deterioro de los metales, creando una barrera protectora que prolonga la vida útil de los productos. Ideales para herramientas, maquinaria, piezas automotrices y otros elementos metálicos, estas bolsas aseguran que los productos permanezcan en perfectas condiciones sin necesidad de aplicar recubrimientos adicionales. Su diseño eficiente y protección confiable hacen de estas bolsas una solución esencial en entornos industriales donde la preservación de los metales es crucial.',
  properties: [
    {
      icon: '/icons/ruler.svg',
      text: '10cm hasta 110cm de ancho',
    },
    {
      icon: '/icons/ruler.svg',
      text: '15cm hasta 180cm de largo',
    },
    {
      icon: '/icons/thickness.svg',
      text: 'Calibres de 100 a 500 micras',
    },
    {
      icon: '/icons/no-water-drop.svg',
      text: 'Protección anticorrosiva',
    },
    {
      icon: '/icons/diamond.svg',
      text: 'Material duradero',
    },
    {
      icon: '/icons/calendar.svg',
      text: 'Larga duración de proteccion',
    },
  ],
  cards: [
    {
      title: 'Almacenamiento de Herramientas',
      description:
        'Las bolsas de polietileno con protección VCI liberan lentamente moléculas inhibidoras de corrosión que se adhieren a la superficie de las herramientas, formando una barrera protectora que previene la oxidación y corrosión',
      image: '/images/info_card/anticorrosivas/1.webp',
    },
    {
      title: 'Transporte de Componentes Automotrices',
      description:
        'El compuesto VCI se evapora dentro de la bolsa y se adhiere a la superficie de los componentes, protegiéndolos contra la humedad y otros factores ambientales que podrían causar corrosión. Esto es crucial para garantizar la calidad y funcionalidad de piezas como engranajes, ejes y otros componentes metálicos durante su transporte y almacenamiento intermedio.',
      image: '/images/info_card/anticorrosivas/2.webp',
    },
    {
      title: 'Almacenamiento de Maquinaria',
      description:
        'Al encapsular la maquinaria en bolsas VCI, se evita la necesidad de aplicar recubrimientos adicionales y se garantiza que el equipo estará en perfectas condiciones operativas cuando se requiera.',
      image: '/images/info_card/anticorrosivas/3.webp',
    },
    {
      title: 'Embalaje de Productos Metálicos',
      description:
        'Las bolsas anticorrosivas con compuesto VCI son ideales para el embalaje de productos metálicos, como acero, aluminio y otros metales que son propensos a la oxidación. Estas bolsas ofrecen una protección duradera contra la corrosión, manteniendo los productos en buen estado durante el almacenamiento y transporte.',
      image: '/images/info_card/anticorrosivas/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Qué es la protección VCI y cómo funciona en las bolsas de polietileno?',
      answer:
        'La protección VCI (Inhibidor de Corrosión Volátil) es una tecnología que libera moléculas inhibidoras de corrosión dentro del embalaje, creando una barrera protectora en la superficie de los metales almacenados. Esto evita la oxidación y corrosión de los componentes metálicos durante el almacenamiento y transporte.',
    },
    {
      question: '¿Puedo reutilizar las bolsas de polietileno con protección VCI?',
      answer:
        'Dependiendo del tipo y las condiciones de uso, algunas bolsas de polietileno con protección VCI pueden ser reutilizadas. Sin embargo, es importante verificar que la capacidad inhibidora de corrosión siga siendo efectiva y que la bolsa no esté dañada antes de su reutilización.',
    },
    {
      question: '¿Son las bolsas de polietileno con protección VCI adecuadas para todo tipo de metales?',
      answer:
        'Sí, las bolsas con protección VCI son adecuadas para una amplia gama de metales, incluyendo acero, hierro, cobre, y aluminio, entre otros. Estas bolsas ofrecen una protección eficaz contra la corrosión para diversos componentes metálicos.',
    },
    {
      question:
        '¿Las bolsas de polietileno con protección VCI proporcionan protección contra otros factores ambientales además de la corrosión?',
      answer:
        'Sí, además de la protección contra la corrosión, las bolsas de polietileno con protección VCI también ofrecen una barrera contra la humedad, el polvo y otros contaminantes ambientales, asegurando que los componentes metálicos se mantengan en óptimas condiciones durante el almacenamiento y transporte.',
    },
  ],
};

const pageTitle = 'Bolsas Anticorrosivas | Sumiplas';
const pageDescription =
  'Protege piezas y componentes metálicos con bolsas VCI anticorrosivas de Sumiplas, fabricadas a medida para logística e industria.';
const ogImage = product.centerPhoto;
const ogImageAlt = 'Bolsas anticorrosivas Sumiplas';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

const page = () => {
  return (
    <ProductLayout
      name={product.name}
      bgPhoto={product.bgPhoto}
      centerPhoto={product.centerPhoto}
      description={product.description}
      properties={product.properties}
      cards={product.cards}
      questionList={product.questionList}
    />
  );
};

export default page;
