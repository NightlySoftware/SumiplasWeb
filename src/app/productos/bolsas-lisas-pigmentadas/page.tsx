import ProductLayout from '../ProductLayout';

const product = {
  name: 'Lisas Pigmentadas',
  bgPhoto: '/images/product_card/pigmented.webp',
  centerPhoto: '/images/product_card/center/pigmented.webp',
  description:
    'Embalaje versátil y atractivo diseñado para una amplia variedad de usos. Estas bolsas lisas pigmentadas están fabricadas con materiales de alta calidad y teñidas con colores vibrantes y duraderos. Su superficie lisa ofrece una apariencia estética y profesional, haciéndolas ideales para tiendas, eventos, y promociones. Disponibles en una gama de colores, estas bolsas no solo proporcionan una solución práctica para el embalaje y transporte de productos, sino que también sirven como una herramienta efectiva para reforzar la imagen de marca y captar la atención de los clientes.',
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
      icon: '/icons/recycle.svg',
      text: 'Reciclable',
    },
    {
      icon: '/icons/multiuse.svg',
      text: 'Versatilidad',
    },
    {
      icon: '/icons/rainbow.svg',
      text: 'Variedad de colores',
    },
  ],
  cards: [
    {
      title: 'Clasificación de Productos en Almacenes',
      description:
        'Utilizar diferentes colores para organizar y diferenciar productos en almacenes, facilitando la identificación rápida y eficiente de los artículos almacenados.',
      image: '/images/info_card/lisas-pigmentadas/1.webp',
    },
    {
      title: 'Empaque de Productos de Higiene y Belleza',
      description:
        'Embalar productos de higiene personal y belleza, como champús, jabones y cremas. La variedad de colores puede ayudar a diferenciar las líneas de productos y mejorar la experiencia del cliente con una presentación atractiva y funcional.',
      image: '/images/info_card/lisas-pigmentadas/2.webp',
    },
    {
      title: 'Empaque de Productos Farmacéuticos',
      description:
        'Utilizar diferentes colores para organizar y clasificar medicamentos y productos farmacéuticos, facilitando la identificación y asegurando el almacenamiento seguro y eficiente en farmacias y hospitales.',
      image: '/images/info_card/lisas-pigmentadas/3.webp',
    },
    {
      title: 'Empaque de Ropa y Accesorios',
      description:
        'Utilizar las bolsas para embalar ropa, accesorios y artículos de moda en tiendas minoristas. Los colores vibrantes pueden mejorar la presentación de los productos y proporcionar una experiencia de compra más atractiva.',
      image: '/images/info_card/lisas-pigmentadas/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Qué ventajas ofrecen las bolsas lisas pigmentadas respecto a las bolsas transparentes?',
      answer:
        'Las bolsas lisas pigmentadas permiten una fácil clasificación y organización de productos gracias a su variedad de colores. Además, pueden utilizarse para reforzar la identidad de marca con colores institucionales, ofreciendo una presentación más atractiva y profesional.',
    },
    {
      question: '¿Son seguras las bolsas lisas pigmentadas para el contacto con alimentos?',
      answer:
        'Sí, las bolsas lisas pigmentadas que fabricamos son aptas para el contacto con alimentos, cumpliendo con todas las normativas de seguridad alimentaria. Ofrecen una solución segura y efectiva para el empaque y transporte de productos alimenticios.',
    },
    {
      question: '¿Qué tipo de resistencia y durabilidad tienen estas bolsas?',
      answer:
        'Nuestras bolsas lisas pigmentadas están diseñadas para ser altamente resistentes y duraderas, capaces de soportar el manejo y transporte de productos pesados sin romperse. El material de alta calidad y el sello de fondo robusto evitan la fuga de sólidos y líquidos, garantizando la integridad del contenido.',
    },
    {
      question: '¿Son las bolsas lisas pigmentadas adecuadas para el almacenamiento a largo plazo?',
      answer:
        'Sí, las bolsas lisas pigmentadas están diseñadas para ofrecer una excelente protección durante el almacenamiento a largo plazo. Su resistencia y durabilidad aseguran que los productos se mantengan seguros y en buen estado, mientras que el sello de fondo evita la fuga de sólidos y líquidos, protegiendo el contenido de factores externos.',
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
