import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import SmoothScroll from './components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sumiplas | Bolsas a tu medida',
  description: 'Bolsas de polietileno para el sector automotriz, industrial y de alimentos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
