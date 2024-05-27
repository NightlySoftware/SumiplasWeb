import ProductLayout from '../ProductLayout';

const product = {
  name: 'Uso Industrial',
  bgPhoto: '/images/product_card/industrial.webp',
  centerPhoto: '/images/product_card/center/industrial.webp',
  description:
    'Embalaje robusto y resistente diseñado para el manejo y disposición de residuos industriales. Estas bolsas están fabricadas para soportar cargas pesadas y resistir rasgaduras y perforaciones, asegurando un manejo seguro y eficiente de desechos. Ideales para entornos industriales y comerciales, estas bolsas pueden contener una amplia variedad de materiales, incluyendo residuos voluminosos y de construcción, productos químicos no peligrosos y otros desechos. Su durabilidad y alta capacidad hacen que sean perfectas para aplicaciones exigentes, garantizando una solución confiable para la gestión de residuos en diversas industrias.',
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
      icon: '/icons/diamond.svg',
      text: 'Material duradero',
    },
    {
      icon: '/icons/multiuse.svg',
      text: 'Versatilidad',
    },
    {
      icon: '/icons/shield.svg',
      text: 'Hermeticidad',
    },
  ],
  cards: [
    {
      title: 'Residuos Domésticos',
      description:
        'Su alta resistencia y durabilidad aseguran que no se rasguen o perforen fácilmente, evitando derrames y facilitando el manejo seguro de la basura en el hogar. El color negro opaco ayuda a ocultar el contenido, ofreciendo una apariencia más limpia y ordenada.',
      image: '/images/info_card/industrial/1.webp',
    },
    {
      title: 'Deshechos de Construcción',
      description:
        'En la industria de la construcción, las bolsas negras de reciclaje son esenciales para el almacenamiento y transporte de escombros y otros materiales de construcción. Estas bolsas están diseñadas para soportar el peso y la abrasión de materiales pesados como ladrillos, cemento, y residuos de demolición.',
      image: '/images/info_card/industrial/2.webp',
    },
    {
      title: 'Residuos Industriales',
      description:
        'Son indispensables en fábricas y talleres para la disposición segura y eficiente de residuos industriales inorgánicos. Estas bolsas son adecuadas para manejar una amplia gama de desechos, incluyendo piezas metálicas, residuos de producción y otros materiales inorgánicos.',
      image: '/images/info_card/industrial/3.webp',
    },
    {
      title: 'Materiales Plásticos',
      description:
        'Su alta resistencia y capacidad de carga facilitan el manejo de grandes volúmenes de plásticos, papel y otros materiales inorgánicos, asegurando que no se derramen o dispersen durante el almacenamiento y transporte.',
      image: '/images/info_card/industrial/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Son las bolsas negras de polietileno adecuadas para residuos pesados?',
      answer:
        'Sí, las bolsas negras de polietileno están diseñadas para ser altamente resistentes y duraderas, capaces de manejar residuos pesados y voluminosos sin rasgarse ni romperse.',
    },
    {
      question: '¿Son las bolsas negras de polietileno reciclables?',
      answer:
        'Sí, las bolsas negras de polietileno están fabricadas con materiales reciclables. Después de su uso, pueden ser recicladas nuevamente para fabricar nuevos productos de polietileno, contribuyendo así a la sostenibilidad ambiental.',
    },
    {
      question: '¿Puedo usar las bolsas negras de polietileno para residuos orgánicos?',
      answer:
        'Aunque es posible usarlas para residuos orgánicos, las bolsas negras están específicamente diseñadas para manejar material inorgánico y residuos industriales. Para residuos orgánicos, se recomienda usar bolsas compostables o biodegradables.',
    },
    {
      question: '¿Las bolsas negras de polietileno son resistentes a perforaciones?',
      answer:
        'Sí, estas bolsas están fabricadas para ser altamente resistentes a perforaciones y rasgaduras, asegurando que los residuos inorgánicos y materiales afilados no las dañen durante el manejo y transporte.',
    },
  ],
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
