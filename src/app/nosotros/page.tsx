import HeaderLogo from '../components/HeaderLogo';
import MainSection from '../components/MainSection';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProcessCard from '../components/ProcessCard';
import InfoCard from '../components/InfoCard';

const page = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero section */}
      <div className="flex flex-col w-full sticky -z-10 top-0">
        <HeaderLogo />
        <div className="flex flex-col relative w-full text-spwhite min-h-screen gap-8 py-16 pt-32">
          <p className="text-center text-[32px] font-semibold leading-10">
            Empresa <span className="font-serif italic font-normal">comprometida</span>
            <br />
            con sus trabajadores y
            <br /> <span className="font-serif italic font-normal">nuestros</span> clientes
          </p>
          <p className="text-center text-[16px] leading-5">
            Asi como la calidad de nuestros
            <br />
            productos es prioridad,
            <br />
            nuestro trato tambien lo es.
          </p>
          <Image
            className="-z-10 brightness-[60%]"
            style={{ objectFit: 'cover' }}
            src="/images/hero_bg/about_us.webp"
            alt="hero"
            quality={100}
            priority
            fill
          />
        </div>
      </div>

      {/* Main content card */}

      <MainSection
        title="Procesos e Infraestructura"
        description="Contamos con fábrica propia, donde realizamos todo el proceso de manufactura por nuestra cuenta, asegurando los más altos estándares de calidad y compromiso que nos distinguen y nos vuelven una empresa líder."
        oneliner="Nuestro proceso consta de Extrusion, Impresión y Bolseo."
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
                  'La extrusión comienza con la revisión del pedido. Se ajustan las máquinas extrusoras específicamente para fabricar el producto solicitado.',
              },
              {
                title: 'Preparación de materiales',
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
                  'Para mejorar la adherencia de las tintas, algunas bobinas son tratadas con descargas eléctricas. Esto prepara la superficie para un anclaje eficaz de la tinta en el proceso de impresión. Dependiendo de si el material requiere impresión, se dirige al área correspondiente. Los productos sin impresión avanzan directamente al corte o bolseo.',
              },
            ]}
          />
          <ProcessCard
            title="Impresión"
            subtitle="De la Bobina al Diseño"
            number="02"
            imageSrc="/images/info_card/printing.webp"
            textItems={[
              {
                title: 'Inicio del Proceso de Impresión: ',
                description:
                  'Las bobinas procedentes de extrusión se cargan en las máquinas rotativas de flexografía. A través de este proceso, la película de polietileno se desplaza entre rodillos y tinteros, aplicándose la tinta hasta su secado al final del recorrido.',
              },
              {
                title: 'Precisión en el Detalle',
                description:
                  'Mantenemos un control riguroso sobre la velocidad y el secado para asegurar la calidad. Los clichés, que portan el diseño a imprimir, deben estar perfectamente sincronizados. Esto garantiza que los motivos y textos se plasmen en las posiciones exactas.',
              },
              {
                title: 'Preparación para el Siguiente Paso',
                description:
                  'Una vez impresas, las bobinas se trasladan al área de bolseo. Aquí, se procede al corte y sellado, transformando el material en productos finales listos para su uso.',
              },
            ]}
          />
          <ProcessCard
            title="Bolseo"
            subtitle="El Último Paso hacia el Producto Final"
            number="03"
            imageSrc="/images/info_card/bagging.webp"
            textItems={[
              {
                title: 'Ajuste de las Máquinas',
                description:
                  'Al llegar las bobinas, ya sean impresas o no, lo primero es ajustar las máquinas de bolseo. Configuramos las dimensiones necesarias para dar forma al producto, ya sea bolsas tipo camiseta, rollos punteados y sellados, o con sello de fondo.',
              },
              {
                title: 'Empaque y Almacenamiento',
                description:
                  'Las bolsas se agrupan en paquetes, que posteriormente se colocan en bolsas o cajas sobre tarimas. Estas tarimas se catalogan y trasladan al almacén de productos terminados, donde quedan listas para su distribución.',
              },
              {
                title: 'Control de Calidad',
                description:
                  'Durante las fases de extrusión, impresión y bolseo, implementamos rigurosos controles de calidad. Estos aseguran que cada producto cumpla tanto con las especificaciones del cliente como con nuestros estándares de excelencia.',
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
            description="Garantizar nuestros productos con estrategias de acuerdo a la necesidades especificas de nuestros clientes, demostrando confiabilidad, tranquilidad y responsabilidad."
            image="/images/info_card/mission.webp"
          />
          <InfoCard
            title="Visión"
            description="Convertir a nuestra empresa en un valor agregado para la  productividad y éxito de nuestros clientes, proporcionando productos  de alta calidad."
            image="/images/info_card/vision.webp"
          />
          <InfoCard
            title="Valores"
            description="Compromiso con precisión, mejora continua, competitividad innovadora, integridad en acciones y fomento del respeto y trabajo en equipo."
            image="/images/info_card/values.webp"
          />
        </div>
      </MainSection>
      <Footer />
      <div className="flex justify-center fixed bottom-5 z-50 w-full">
        <Navbar />
      </div>
    </main>
  );
};

export default page;
