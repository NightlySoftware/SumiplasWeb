import ProductLayout from '../ProductLayout';

const product = {
  name: 'Tipo camiseta',
  bgPhoto: '/images/product_card/handle_bag.webp',
  centerPhoto: '/images/product_card/center/handle_bag.webp',
  description:
    'Embalaje práctico y resistente, perfecto para el comercio minorista y el uso diario. Las bolsas de asa tipo camiseta están diseñadas para ofrecer una gran capacidad de carga y facilidad de transporte gracias a sus asas reforzadas y su diseño expandible. Fabricadas con materiales duraderos, estas bolsas son ideales para supermercados, tiendas de conveniencia y otros establecimientos comerciales que necesitan una solución de embalaje confiable y económica. Su forma ergonómica y su resistencia aseguran que los productos sean transportados de manera segura y cómoda, haciendo de estas bolsas una elección popular entre consumidores y comerciantes.',
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
      icon: '/icons/multiuse.svg',
      text: 'Versatilidad',
    },
    {
      icon: '/icons/stars.svg',
      text: 'Transparencia',
    },
    {
      icon: '/icons/rainbow.svg',
      text: 'Variedad de colores',
    },
  ],
  cards: [
    {
      title: 'Transporte de Compras Diarias',
      description:
        'Las bolsas de asa tipo camiseta son perfectas para supermercados y tiendas de comestibles. Su diseño resistente y práctico permite a los clientes transportar sus compras de manera segura y cómoda.',
      image: '/images/info_card/tipo-camiseta/1.webp',
    },
    {
      title: 'Empaque de Prendas y Accesorios',
      description:
        'En tiendas de ropa y boutiques, las bolsas de asa tipo camiseta son una opción popular para empaquetar prendas y accesorios. Estas bolsas pueden ser personalizadas con el logo de la tienda y están disponibles en colores atractivos que refuerzan la identidad de la marca.',
      image: '/images/info_card/tipo-camiseta/2.webp',
    },
    {
      title: 'Entrega de Pedidos y Comida para Llevar',
      description:
        'En el sector de la restauración, las bolsas de asa tipo camiseta son una excelente opción para la entrega de pedidos y la comida para llevar. Estas bolsas son lo suficientemente resistentes para transportar múltiples contenedores de alimentos sin romperse.',
      image: '/images/info_card/tipo-camiseta/3.webp',
    },
    {
      title: 'Tiendas de Regalos y Papelerías',
      description:
        'Las bolsas de asa tipo camiseta son ideales para tiendas de regalos y papelerías. Su resistencia y versatilidad permiten empaquetar una amplia gama de productos, desde artículos de papelería como cuadernos y lápices hasta regalos como juguetes y decoraciones.',
      image: '/images/info_card/tipo-camiseta/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Qué ventajas ofrecen las bolsas de asa tipo camiseta para los comercios?',
      answer:
        'Las bolsas de asa tipo camiseta son muy prácticas y resistentes, ideales para cualquier tipo de comercio. Su diseño con asas permite un fácil transporte, mientras que su capacidad de carga las hace adecuadas para una amplia variedad de productos. Además, están disponibles en varios colores y tamaños, lo que facilita la personalización según las necesidades del comercio.',
    },
    {
      question: '¿En qué colores y tamaños están disponibles las bolsas de asa tipo camiseta?',
      answer:
        'Ofrecemos bolsas de asa tipo camiseta en una amplia variedad de colores y tamaños para satisfacer las necesidades específicas de nuestros clientes. Desde bolsas pequeñas y medianas hasta tamaños grandes, así como opciones transparentes, puede elegir la combinación que mejor se adapte a su negocio y productos.',
    },
    {
      question: '¿Las bolsas de asa tipo camiseta son reciclables?',
      answer:
        'Sí, nuestras bolsas de asa tipo camiseta están fabricadas con materiales reciclables. Una vez que ya no sean útiles, pueden ser recicladas adecuadamente, contribuyendo a la sostenibilidad y reducción de residuos plásticos.',
    },
    {
      question: '¿Son las bolsas de asa tipo camiseta adecuadas para almacenar alimentos?',
      answer:
        'Sí, las bolsas de asa tipo camiseta pueden ser utilizadas para almacenar alimentos. Son prácticas para llevar compras de supermercados, incluyendo productos frescos y empaquetados, y están disponibles en versiones transparentes para una mejor visibilidad del contenido.',
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
