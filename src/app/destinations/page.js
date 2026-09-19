import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Destinations en Inde & Népal | Jodhpur Voyage',
  description: 'Découvrez nos destinations phares : Rajasthan, Inde du Nord, Kerala & Inde du Sud, Népal et Bhoutan avec votre agence locale francophone.',
};

export default function DestinationsPage() {
  const destinations = [
    {
      title: 'Le Rajasthan',
      tag: 'Incontournable',
      img: '/images/dest-rajasthan.jpg',
      link: '/destinations/rajasthan',
      desc: 'Palais de Maharajas, citadelles fortifiées, cité bleue de Jodhpur et désert du Thar à Jaisalmer.',
    },
    {
      title: 'Inde du Nord & Taj Mahal',
      tag: 'Culture & Histoire',
      img: '/images/dest-tajmahal.jpg',
      link: '/destinations',
      desc: 'Le mythique Taj Mahal à Agra, les gats sacrés de Varanasi et l\'animation de Delhi.',
    },
    {
      title: 'Kerala & Inde du Sud',
      tag: 'Nature & Backwaters',
      img: '/images/dest-kerala.jpg',
      link: '/destinations',
      desc: 'Havelis de Chettinad, plantations de thé de Munnar et nuits en houseboat sur les lagunes.',
    },
    {
      title: 'Népal & Katmandou',
      tag: 'Spiritualité & Trek',
      img: '/images/dest-nepal.jpg',
      link: '/destinations',
      desc: 'Vallée de Katmandou, stupas sacrés de Bodnath, parc national de Chitwan et sommet des Annapurnas.',
    },
    {
      title: 'Ladakh & Himalaya',
      tag: 'Haute Altitude',
      img: '/images/dest-ladakh.jpg',
      link: '/destinations',
      desc: 'Le Petit Tibet aux monastères perchés, cols de légende et lacs de haute altitude.',
    },
    {
      title: 'Varanasi & Le Gange',
      tag: 'Sacré & Mystique',
      img: '/images/dest-varanasi.jpg',
      link: '/destinations',
      desc: 'La capitale spirituelle de l\'Inde, cérémonies Aarti au coucher du soleil et promenade en barque.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Destinations Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-map-marked-alt"></i> Inspirations de Voyage
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Nos Destinations
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Explorez les merveilles architecturales, naturelles et culturelles de l&apos;Inde, du Népal et du Bhoutan.
          </p>
        </div>
      </section>

      {/* DESTINATIONS LIST */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <Link
                key={idx}
                href={dest.link}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1D747A] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {dest.tag}
                  </span>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                      {dest.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1D747A]">
                    <span>Découvrir la Destination</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
