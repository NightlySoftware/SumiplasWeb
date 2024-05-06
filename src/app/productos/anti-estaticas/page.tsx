import ProductLayout from '../ProductLayout';

const product = {
  name: 'Antiestáticas',
  description:
    'Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electrostáticas en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas.',
  properties: [
    {
      icon: '/icons/logo.svg',
      text: '10cm ancho hasta 170cm de ancho',
    },
    {
      icon: '/icons/logo.svg',
      text: 'Calibres de 60 a 800',
    },
    {
      icon: '/icons/logo.svg',
      text: 'Protección antiestática',
    },
    {
      icon: '/icons/logo.svg',
      text: 'Material duradero',
    },
    {
      icon: '/icons/logo.svg',
      text: 'Versatilidad',
    },
    {
      icon: '/icons/logo.svg',
      text: 'Transparencia',
    },
  ],
  cards: [
    {
      title: 'Circuitos integrados',
      description:
        'Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes.',
      image: '/images/info_card/quality.webp',
    },
    {
      title: 'Tarjetas de memoria',
      description:
        'Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes.',
      image: '/images/info_card/quality.webp',
    },
    {
      title: 'Componentes de computadora',
      description:
        'Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes.',
      image: '/images/info_card/quality.webp',
    },
    {
      title: 'Dispositivos móviles y sus accesorios',
      description:
        'Contamos con una amplia gama de productos para cubrir las necesidades de cada uno de nuestros clientes.',
      image: '/images/info_card/quality.webp',
    },
  ],
  questionList: [
    {
      question: '¿Cómo puedo saber si necesito bolsas antiestáticas para mi producto?',
      answer:
        'Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños.',
    },
    {
      question: '¿Son las bolsas antiestáticas reutilizables?',
      answer:
        'Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza.',
    },
    {
      question: '¿Las bolsas antiestáticas protejen contra impactos y humedad?',
      answer:
        'Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario.',
    },
    {
      question: '¿Las bolsas antiestáticas tienen fecha de caducidad?',
      answer:
        'Ideal para señalización de áreas, identificación de equipos o demarcación de zonas de seguridad. Su durabilidad y variedad de colores vivos (Amarillo, Verde, Azul, Rojo, etc.) facilitan una visualización clara y duradera.',
    },
  ],
};

const page = () => {
  return (
    <ProductLayout
      name={product.name}
      description={product.description}
      properties={product.properties}
      cards={product.cards}
      questionList={product.questionList}
    />
  );
};

export default page;
