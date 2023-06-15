import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



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
    <html lang='en' className={`${montserrat.className}`}>
      <body className={`relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
