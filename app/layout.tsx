import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Hny-codes',
  description: 'A portfolio made by hny-codes, built with Next',
  icons: {
    icon: '/images/favicon.ico',
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
