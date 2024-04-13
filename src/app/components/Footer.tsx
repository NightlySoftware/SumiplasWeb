import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-spgradient text-spwhite p-5 pb-28 gap-10">
      <div className="flex flex-col w-full gap-4">
        <p className="font-medium">
          Encuéntranos
          <span className="font-serif italic"> también </span>
          en:
        </p>
        <div className="flex flex-col gap-2 text-xs">
          <Link href={'mailto:contacto@sumiplas.mx'} className="flex items-center gap-1.5">
            <div className="aspect-square w-5" />
            contacto@sumiplas.mx
          </Link>
          <Link href={'https://www.facebook.com/sumiplas.suministrosdeplasticos'} className="flex items-center gap-1.5">
            <div className="aspect-square w-5" />
            Facebook
          </Link>
          <Link href={'https://wa.me/+524621861193'} className="flex items-center gap-1.5">
            <div className="aspect-square w-5" />
            Whatsapp
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2 font-bold text-spwhite text-xl">
          <img src="/logo.svg" alt="Logo" className="aspect-square w-6" />
          SUMIPLAS
        </div>
        <p className="font-medium">
          Bolsas a tu
          <span className="font-serif italic"> medida</span>
        </p>
      </div>
      <p className="text-xs">Suministros de Plásticos S.A. de C.V. ©2024</p>
      <Link href={'https://nightly.software'} className="text-center text-xs">
        Website by Nightly Software
      </Link>
    </footer>
  );
};

export default Footer;
