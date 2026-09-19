import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Jodhpur Voyage - Tour Opérateur en Inde et Népal | Agence de Voyage Spécialisée',
  description: 'Découvrez l\'Inde et le Népal avec Jodhpur Voyage. Circuits sur mesure au Rajasthan, Inde du Nord et du Sud. Devis gratuit & agence locale francophone.',
  keywords: 'voyage inde, agence voyage rajasthan, jodhpur voyage, circuit inde sur mesure, tour operateur inde nepal',
  icons: {
    icon: '/images/logo-transprent.png',
  },
  openGraph: {
    title: 'Jodhpur Voyage - Tour Opérateur en Inde et Népal',
    description: 'Circuits authentiques et voyages sur mesure en Inde et Népal avec votre agence locale francophone.',
    url: 'https://jodhpurvoyage.com',
    siteName: 'Jodhpur Voyage',
    images: [
      {
        url: '/images/dest-rajasthan.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajasthan Jodhpur Voyage',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth overflow-x-hidden">
      <body className="antialiased bg-[#FAFCFC] text-[#2B3334] min-h-screen flex flex-col justify-between overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
