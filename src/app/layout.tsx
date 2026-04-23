import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import SmoothScroll from './components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sumiplas.mx';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sumiplas | Bolsas a tu medida',
  description: 'Bolsas de polietileno para el sector automotriz, industrial y de alimentos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
