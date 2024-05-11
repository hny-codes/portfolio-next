import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hny-codes.com'),
  title: 'Hny-codes | Portfolio',
  description:
    'Front-end Developer | A portfolio built with Next.js and Tailwind',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://hny-codes.com',
    siteName: 'Hny-codes | Portfolio',
    title: 'Hny-codes',
    description:
      'Front-end Developer | A portfolio built with Next.js and Tailwind',
    images: '/images/profile.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${montserrat.className} scroll-smooth`}>
      <body
        className={`relative bg-[url('/images/bg.svg')] bg-no-repeat bg-cover h-screen bg-fixed`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
