import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Destination Rajasthan | Circuit Palais & Désert du Thar | Jodhpur Voyage',
  description: 'Découvrez le Rajasthan avec Jodhpur Voyage : Jaïpur la ville rose, Jodhpur la cité bleue, Jaisalmer la ville dorée et Udaipur la romantique.',
};

export default function DestinationRajasthanPage() {
  const cities = [
    {
      name: 'Jodhpur',
      subtitle: 'La Cité Bleue & Fort Mehrangarh',
      img: '/images/dest-jodhpur.jpg',
      desc: 'Maisons indigo au pied de la citadelle de Mehrangarh, ruelles médiévales et marchés d\'épices animés.',
    },
    {
      name: 'Jaisalmer',
      subtitle: 'La Cité Dorée & Safari Désert',
      img: '/images/Voyage-Jaisalmer.jpg',
      desc: 'Fort habité en grès jaune, havelis sculptées et nuit sous les étoiles dans les dunes d\'Osian & Sam.',
    },
    {
      name: 'Jaipur',
      subtitle: 'La Ville Rose du Rajasthan',
      img: '/images/jaipur-travel.jpg',
      desc: 'Le Palais des Vents (Hawa Mahal), la majestueuse forteresse d\'Amber et l\'observatoire Jantar Mantar.',
    },
    {
      name: 'Udaipur',
      subtitle: 'La Venise de l\'Orient',
      img: '/images/dest-rajasthan.jpg',
      desc: 'Croisières romantiques sur le lac Pichola, palais flottants et demeures princières.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[48vh] min-h-[400px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-rajasthan.jpg"
          alt="Destination Rajasthan"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-crown"></i> Terre des Maharajas
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white">
            Le Rajasthan
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Plongez au cœur des palais princiers, des citadelles légendaires et des déserts envoûtants du Rajasthan avec notre agence locale.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="section-subtitle">L&apos;Émotion Rajputana</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A2B2C]">
              Voyager au Rajasthan Sur Mesure
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Le Rajasthan est sans doute l&apos;État le plus mythique d&apos;Inde. De la cité rose de Jaipur aux dunes du désert du Thar à Jaisalmer, en passant par les ruelles bleu indigo de Jodhpur et les lacs d&apos;Udaipur, vivez une immersion féerique façonnée selon vos envies.
            </p>
          </div>

          {/* CITIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cities.map((city, idx) => (
              <div key={idx} className="bg-[#F8FBFB] rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center">
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full sm:w-1/2 h-56 object-cover"
                />
                <div className="p-6 space-y-2 sm:w-1/2">
                  <span className="text-[10px] font-bold uppercase text-[#C58B39] tracking-wider block">
                    {city.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1A2B2C]">
                    {city.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-light">
                    {city.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BOARD */}
          <div className="bg-[#1D747A] text-white p-8 sm:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">Envie de Créer Votre Circuit au Rajasthan ?</h3>
              <p className="text-xs sm:text-sm text-gray-100 font-light">
                Nos conseillers locaux à Jodhpur composent votre itinéraire gratuit en 24h.
              </p>
            </div>
            <Link href="/voyage-sur-mesure" className="btn-secondary text-xs font-bold uppercase px-6 py-3.5 rounded-xl shadow-lg flex-shrink-0">
              Obtenir Mon Devis Gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
