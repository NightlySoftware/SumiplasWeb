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
      icon: '/icons/no-shock.svg',
      text: 'Protección antiestática',
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
      icon: '/icons/stars.svg',
      text: 'Transparencia',
    },
  ],
  cards: [
    {
      title: 'Circuitos integrados',
      description:
        'Gracias a su composición especial, nuestras bolsas previenen la acumulación de cargas estáticas, asegurando la integridad de los dispositivos electrónicos durante su almacenamiento y transporte',
      image: '/images/info_card/antiestaticas/1.webp',
    },
    {
      title: 'Tarjetas de memoria',
      description:
        'El polietileno de alta resistencia proporciona una barrera efectiva contra la humedad, el polvo y otros contaminantes ambientales, prolongando la vida útil de los productos empacados.',
      image: '/images/info_card/antiestaticas/2.webp',
    },
    {
      title: 'Componentes de computadora',
      description:
        'Disponibles en una amplia gama de tamaños, se adaptan a una diversidad de aplicaciones, desde piezas pequeñas como microchips hasta dispositivos más grandes.',
      image: '/images/info_card/antiestaticas/3.webp',
    },
    {
      title: 'Dispositivos móviles y sus accesorios',
      description:
        'Algunas variantes ofrecen transparencia para una fácil identificación del contenido sin necesidad de abrir la bolsa, facilitando la gestión del inventario.',
      image: '/images/info_card/antiestaticas/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Cómo puedo saber si necesito bolsas antiestáticas para mi producto?',
      answer:
        'Si tu producto incluye componentes electrónicos sensibles a la electricidad estática, como circuitos integrados, tarjetas de memoria, o cualquier dispositivo electrónico susceptible, es recomendable utilizar bolsas antiestáticas para su almacenamiento y transporte.',
    },
    {
      question: '¿Son las bolsas antiestáticas reutilizables?',
      answer:
        'Dependiendo del tipo y la calidad de la bolsa, algunas pueden ser reutilizables. Sin embargo, es importante verificar la integridad de la bolsa y asegurarse de que sus propiedades antiestáticas sigan siendo efectivas antes de reutilizarla.',
    },
    {
      question: '¿Las bolsas antiestáticas protejen contra impactos y humedad?',
      answer:
        'Mientras que todas las bolsas antiestáticas proporcionan una cierta medida de protección contra la humedad y el polvo, no todas están diseñadas para absorber impactos. Para una protección completa, busca bolsas con burbujas o acolchado adicional y verifica si ofrecen barreras contra la humedad.',
    },
    {
      question: '¿Las bolsas antiestáticas tienen fecha de caducidad?',
      answer:
        'Las bolsas antiestáticas no tienen una fecha de caducidad per se, pero sus propiedades antiestáticas pueden disminuir con el tiempo, especialmente si se exponen a condiciones ambientales adversas. Es recomendable revisar y probar las bolsas regularmente para asegurarse de que sigan siendo efectivas.',
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
