import ProductLayout from '../ProductLayout';

const product = {
  name: 'Grado Alimenticio',
  bgPhoto: '/images/product_card/food.webp',
  centerPhoto: '/images/product_card/center/food.webp',
  description:
    'Las bolsas de grado alimenticio son una solución segura y confiable para el envasado de alimentos y productos sensibles a la contaminación. Fabricadas con polietileno de baja densidad (LDPE) y altos estándares de calidad, estas bolsas cumplen con los estándares de seguridad e higiene aprobados por la FDA para el contacto directo con alimentos, garantizando la frescura y calidad de los productos envasados.',
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
      icon: '/icons/leaf.svg',
      text: 'No tóxico',
    },
    {
      icon: '/icons/recycle.svg',
      text: 'Reciclable',
    },
    {
      icon: '/icons/stars.svg',
      text: 'Transparencia',
    },
  ],
  cards: [
    {
      title: 'Frutas y verduras',
      description:
        'Las bolsas de polietileno grado alimenticio son ideales para el almacenamiento y transporte de frutas y verduras. Estas bolsas proporcionan una barrera eficaz contra la humedad y el oxígeno, lo que ayuda a prolongar la vida útil de los productos frescos.',
      image: '/images/info_card/grado-alimenticio/1.webp',
    },
    {
      title: 'Productos Lácteos',
      description:
        'Nuestras bolsas aseguran que los productos lácteos estén protegidos de contaminantes externos y de la deshidratación. Gracias a su capacidad de sellado hermético, las bolsas previenen la entrada de aire y humedad, lo que es crucial para mantener la frescura y calidad de los productos lácteos.',
      image: '/images/info_card/grado-alimenticio/2.webp',
    },
    {
      title: 'Pan y Productos de Panadería',
      description:
        'Las bolsas de polietileno grado alimenticio son perfectas para conservar la frescura y la textura de productos de panadería, como panes, bollos, y pasteles. Estas bolsas evitan que los productos se sequen y se pongan duros.',
      image: '/images/info_card/grado-alimenticio/3.webp',
    },
    {
      title: 'Carnes y Pescados',
      description:
        'Las bolsas de polietileno grado alimenticio son fundamentales para el empaque de carnes y pescados, proporcionando una barrera segura contra contaminantes y manteniendo la frescura de estos productos perecederos.',
      image: '/images/info_card/grado-alimenticio/4.webp',
    },
  ],
  questionList: [
    {
      question: '¿Son seguras las bolsas para el contacto con alimentos?',
      answer:
        'Sí, las bolsas de polietileno grado alimenticio están fabricadas con materiales que cumplen con las normativas de seguridad alimentaria, garantizando que no liberan sustancias tóxicas que puedan contaminar los alimentos.',
    },
    {
      question: '¿Puedo usar bolsas de polietileno grado alimenticio para congelar alimentos?',
      answer:
        'Sí, las bolsas de polietileno de baja densidad son adecuadas para congelar alimentos, ya que ofrecen una barrera efectiva contra la humedad y el aire, ayudando a mantener la frescura y calidad de los productos durante el almacenamiento en el congelador.',
    },
    {
      question: '¿Las bolsas de polietileno grado alimenticio son reutilizables?',
      answer:
        'Dependiendo del grosor que se elija, algunas pueden ser reutilizables. Es importante asegurarse de que la bolsa no presente daños o contaminaciones antes de su reutilización, para mantener la seguridad alimentaria.',
    },
    {
      question: '¿Estas bolsas pueden mantener la frescura de productos orgánicos?',
      answer:
        'Sí, las bolsas de polietileno grado alimenticio están diseñadas para mantener la frescura y calidad de productos orgánicos, protegiéndolos de la humedad, el aire y otros contaminantes externos que puedan acelerar su deterioro.',
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
