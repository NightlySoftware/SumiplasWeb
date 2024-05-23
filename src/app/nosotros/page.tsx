import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProcessCard from '../components/ProcessCard';
import InfoCard from '../components/InfoCard';
import ScreenSection from '../components/ScreenSection';

const page = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section */}
      <ScreenSection
        title={['Empresa', 'comprometida', 'con sus trabajadores y', 'nuestros', 'clientes']}
        description={['Así como la calidad de nuestros', 'productos es prioridad,', 'nuestro trato también lo es.']}
        image="/images/hero_bg/about_us.webp"
        type="hero"
      />

      {/* Main content card */}
      <MainSection
        title="Procesos e Infraestructura"
        description="Contamos con fábrica propia, donde realizamos todo el proceso de manufactura por nuestra cuenta, asegurando los más altos estándares de calidad y compromiso que nos distinguen, lo cual nos vuelve una empresa líder."
        oneliner="Nuestro proceso consta de Extrusion y Bolseo."
      >
        <div className="flex flex-col w-full gap-16">
          <ProcessCard
            title="Extrusión"
            subtitle="Transformación del Pellet al Plástico"
            number="01"
            imageSrc="/images/info_card/extrusion.webp"
            textItems={[
              {
                title: 'Inicio de Proceso',
                description:
                  'La extrusión comienza con el ajuste y calibración de las máquinas, específicamente para fabricar el producto solicitado.',
              },
              {
                title: 'Preparación de Materiales',
                description:
                  'Seleccionamos y mezclamos cuidadosamente el material y los aditivos necesarios, ajustando la densidad y el color según las especificaciones del pedido.',
              },
              {
                title: 'Coloración',
                description:
                  'Dado que el polietileno es naturalmente transparente, incorporamos pigmentos para lograr el tono deseado. Esta mezcla se realiza antes de entrar en la extrusora.',
              },
              {
                title: 'Proceso de Extrusión',
                description:
                  'Calentamos el polietileno y el pigmento hasta su punto de fusión, lo que permite moldearlo con facilidad. El material se transforma en un globo de plástico, que se enfría gradualmente y se recoge en forma de bobina tubular.',
              },
              {
                title: 'Tratamiento Posterior',
                description:
                  'Para mejorar la adherencia de las tintas, algunas bobinas son tratadas con descargas eléctricas. Esto prepara la superficie para un anclaje eficaz de la tinta en el proceso de impresión. De aquí se envían directamente al corte y bolseo.',
              },
            ]}
          />
          <ProcessCard
            title="Bolseo"
            subtitle="El Paso hacia el Producto Final"
            number="03"
            imageSrc="/images/info_card/bagging.webp"
            textItems={[
              {
                title: 'Ajuste de las Máquinas',
                description:
                  'Al llegar las bobinas, ya sean impresas o no, lo primero es ajustar las máquinas de bolseo. Configuramos las dimensiones necesarias para dar forma al producto, ya sea bolsas tipo camiseta o con sello de fondo.',
              },
              {
                title: 'Empaque y Almacenamiento',
                description:
                  'Las bolsas se agrupan en paquetes, que posteriormente se colocan en bolsas y sobre tarimas. Estas tarimas se catalogan y trasladan al almacén de productos terminados, donde quedan listas para su distribución.',
              },
              {
                title: 'Control de Calidad Integral',
                description:
                  'Durante las fases de extrusión y bolseo, implementamos rigurosos controles de calidad. Estos aseguran que cada producto cumpla tanto con las especificaciones del cliente como con nuestros estándares de excelencia.',
              },
              {
                title: 'Reciclaje y Reutilización',
                description:
                  'Si algún producto no cumple con los criterios de calidad, se retira y envía al área de reciclaje o peletizado. Este material reciclado puede reintegrarse al ciclo productivo, en línea con los requerimientos de clientes que optan por soluciones sostenibles.',
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col text-spblack text-center text-pretty gap-4">
            <p className="text-3xl font-medium py-8">Nuestro compromiso como empresa</p>
          </div>
          <InfoCard
            title="Misión"
            description="Garantizar nuestros productos con estrategias de acuerdo a la necesidades especificas de nuestros clientes, demostrando calidad, confiabilidad, tranquilidad y responsabilidad."
            image="/images/info_card/mission.webp"
          />
          <InfoCard
            title="Visión"
            description="Convertir a nuestra empresa en un valor agregado para la productividad y éxito de nuestros clientes, proporcionando productos de alta calidad."
            image="/images/info_card/vision.webp"
          />
          <InfoCard
            title="Valores"
            description="Compromiso con precisión, mejora continua, competitividad innovadora, integridad en acciones y fomento del respeto y trabajo en equipo."
            image="/images/info_card/values.webp"
          />
        </div>
      </MainSection>

      <ScreenSection type="contact" />
      <Footer />
      <Navbar />
    </main>
  );
};

export default page;
