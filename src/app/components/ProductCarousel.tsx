'use client';

import React, { useState, useEffect } from 'react';
import IconRoundedArrow from './IconRoundedArrow';
import ProductCard from './ProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const productCardsData = [
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

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(1); // Default to 1 product per page
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Update the number of products per page based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerPage(2); // Show 2 products per page on larger screens
      } else {
        setProductsPerPage(1); // Show 1 product per page on smaller screens
      }
    };

    window.addEventListener('resize', updateProductsPerPage);
    updateProductsPerPage(); // Initial check

    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  const nextPage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + productsPerPage) % productCardsData.length);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productCardsData.length - productsPerPage : prevIndex - productsPerPage
    );
  };

  const visibleProducts = productCardsData.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="flex flex-col gap-2 max-w-full xl:max-w-[1400px] self-center">
      <div className="flex justify-between items-center">
        <p className="font-bold">Explora más productos</p>
        <div className="flex gap-4">
          <button onClick={prevPage}>
            <IconRoundedArrow classNames="w-8" fill="#005482" direction="left" />
          </button>
          <button onClick={nextPage}>
            <IconRoundedArrow classNames="w-8" fill="#005482" direction="right" />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex">
          <AnimatePresence initial={false} custom={direction}>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.href} // Use unique key for each product
                custom={direction}
                initial={{ opacity: 0, x: direction === 1 ? -200 : 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -200 : 200 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <ProductCard
                  href={product.href}
                  headline1={product.headline1}
                  headline2={product.headline2}
                  title={product.title}
                  description={product.description}
                  headlineImage={product.headlineImage}
                  centerImage={product.centerImage}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
