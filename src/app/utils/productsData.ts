interface productsDataProps {
  href: string;
  headline1: string;
  headline2: string;
  title: string;
  description: string;
  headlineImage: string;
  centerImage: string;
}

interface subproductsDataProps {
  title: string;
  boldTitle: string;
  image: string;
  description: string;
}

export const productsData: productsDataProps[] = [
  {
    href: '/productos/bolsas-antiestaticas',
    headline1: 'Con protección ESD',
    headline2: 'para circuitos',
    title: 'Antiestáticas',
    description:
      'Ideal para uso en el sector automotriz, estas bolsas son Diseñadas para proteger componentes electrónicos y dispositivos sensibles de la descarga electroestática (ESD). Evitan la acumulación de cargas electroestáticas en el interior de la bolsa y protegen los componentes contra daños por descargas eléctricas.',
    headlineImage: '/images/product_card/antistatic.webp',
    centerImage: '/images/product_card/center/antistatic.webp',
  },
  {
    href: '/productos/bolsas-grado-alimenticio',
    headline1: 'Grado Alimenticio',
    headline2: 'de baja densidad',
    title: 'Para Alimentos',
    description:
      'Esta bolsa de polietileno de baja densidad es completamente transparente e ideal para el empaque adecuado de alimentos. Ofrece una excelente visualización del contenido y está aprobada para uso comercial según las regulaciones de la FDA, garantizando seguridad y calidad.',
    headlineImage: '/images/product_card/food.webp',
    centerImage: '/images/product_card/center/food.webp',
  },
  {
    href: '/productos/bolsas-industriales',
    headline1: 'Negra de Reciclaje',
    headline2: 'para material inorgánico',
    title: 'Uso Industrial',
    description:
      'Bolsa negra resistente para basura elaborada con material reciclado 100% propio, ideal para actividades que no tengan contacto con productos de consumo alimenticio, nuestra bolsa cuenta con alto grado de resistencia con un sello de fondo.',
    headlineImage: '/images/product_card/industrial.webp',
    centerImage: '/images/product_card/center/industrial.webp',
  },
  {
    href: '/productos/bolsas-anticorrosivas',
    headline1: 'Con protección VCI',
    headline2: 'ideal para embalajes',
    title: 'Anticorrosivas',
    description:
      'Las bolsas VCI son la mejor solución para el embalaje y la protección de la corrosión en un simple paso, son la forma más rápida para permitir que el compuesto inhibidor de la bolsa se evapore para dar a las piezas un alto nivel de protección contra la corrosión hasta por 12 meses.',
    headlineImage: '/images/product_card/anticorrosive.webp',
    centerImage: '/images/product_card/center/anticorrosive.webp',
  },
  {
    href: '/productos/bolsas-lisas-pigmentadas',
    headline1: 'Varios colores',
    headline2: 'ideal para empaque',
    title: 'Lisas Pigmentadas',
    description:
      'Utilizada comúnmente para clasificar productos, alimentos o para uso de color institucional, por lo cual la calidad del producto es elevado, con gran resistencia y durabilidad. El sello de fondo que manejamos evita la fuga de sólidos y líquidos.',
    headlineImage: '/images/product_card/pigmented.webp',
    centerImage: '/images/product_card/center/pigmented.webp',
  },
  {
    href: '/productos/bolsas-tipo-camiseta',
    headline1: 'De asa',
    headline2: 'ideal en comercios',
    title: 'Tipo Camiseta',
    description:
      'Bolsas tipo camiseta con asas, ideales para todo tipo de comercios. Disponibles en una variedad de colores, incluyendo transparente, y en medidas y calibres especiales para adaptarse a diversas necesidades.',
    headlineImage: '/images/product_card/handle_bag.webp',
    centerImage: '/images/product_card/center/handle_bag.webp',
  },
];

export const subproductsData: subproductsDataProps[] = [
  {
    title: 'Película Stretch',
    boldTitle: 'Para Emplayar',
    image: '/images/product_dropdown/stretch_roll.webp',
    description:
      'Maximiza la seguridad y estabilidad de tus cargas con nuestra Película Stretch de alta resistencia. Ideal para envolver palets y asegurar productos durante el transporte y almacenaje. Su flexibilidad y adherencia superior garantizan una protección eficaz contra polvo, humedad y daños.',
  },
  {
    title: 'Cinta',
    boldTitle: 'Transparente',
    image: '/images/product_dropdown/transparent_tape.webp',
    description:
      'Con un alto rendimiento, excelente adhesión y claridad, esta cinta transparente es perfecta para aplicaciones que requieren una presentación limpia y profesional. Ideal para oficinas, comercios y envíos, asegura tus cajas y paquetes con confianza.',
  },
  {
    title: 'Cinta',
    boldTitle: 'Canela',
    image: '/images/product_dropdown/brown_tape.webp',
    description:
      'Ofrece una solución robusta y fiable para el sellado de cajas de cartón pesadas. Esta cinta ayuda a que tus paquetes lleguen a su destino en buen estado. Es la elección preferida para envíos comerciales y movimientos de inventario.',
  },
  {
    title: 'Cinta PVC de Colores',
    boldTitle: 'Para Marcaje',
    image: '/images/product_dropdown/pvc_tape.webp',
    description:
      'Ideal para señalización de áreas, identificación de equipos o demarcación de zonas de seguridad. Su durabilidad y variedad de colores vivos (Amarillo, Verde, Azul, Rojo, etc.) facilitan una visualización clara y duradera.',
  },
  {
    title: 'Rollo de Plástico',
    boldTitle: 'Color Negro',
    image: '/images/product_dropdown/black_roll.webp',
    description:
      'Protege tus suelos y superficies durante la construcción o renovación con nuestro Rollo de Plástico Negro de alta calidad. Fácil de desplegar y recortar, ofrece una barrera impermeable y resistente contra pintura, manchas y otros daños.',
  },
  {
    title: 'Poli Burbuja',
    boldTitle: 'Natural',
    image: '/images/product_dropdown/bubble.webp',
    description:
      'Solución ideal para prevenir daños durante el transporte y almacenamiento. Disponible en rollos y láminas, proporciona una amortiguación superior para artículos frágiles, garantizando que lleguen en perfectas condiciones a sus destinatarios.',
  },
  {
    title: 'Poli Burbuja',
    boldTitle: 'Antiestático',
    image: '/images/product_dropdown/bubble_antistatic.webp',
    description:
      'Diseñado para evitar daños por electricidad estática, este material es esencial para el embalaje seguro de productos tecnológicos, componentes electrónicos y dispositivos sensibles. Disponible en rollos y láminas para una máxima versatilidad.',
  },
  {
    title: 'Fleje Negro',
    boldTitle: 'De 1/2 Pulgada',
    image: '/images/product_dropdown/strap.webp',
    description:
      'Asegura cargas pesadas con nuestro Fleje Negro de 1/2 Pulgada. Fabricado para resistir altas tensiones, este fleje es ideal para asegurar palets y bultos en el transporte. Su resistencia y durabilidad garantizan que tus productos permanezcan seguros y estables en cualquier situación.',
  },
  {
    title: 'Grapa Metálica',
    boldTitle: 'Para Fleje',
    image: '/images/product_dropdown/strap_clamp.webp',
    description:
      'Completa tu sistema de embalaje con nuestras Grapas Metálicas para Fleje. Diseñadas para unir de manera segura los extremos del fleje, estas grapas son esenciales para mantener la tensión y la integridad del embalaje durante el transporte.',
  },
];
