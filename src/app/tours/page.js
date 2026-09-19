import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Tours & Circuits en Inde | Jodhpur Voyage',
  description: 'Explorez nos circuits accompagnés et voyages privés en Inde et au Népal. Circuits Rajasthan, Triangle d\'Or, Kerala et treks au Népal.',
};

export default function ToursPage() {
  const toursList = [
    {
      title: 'Grand Tour du Rajasthan & Cités Royales',
      duration: '15 Jours / 14 Nuits',
      category: 'Circuit Classique',
      img: '/images/Voyage-Jaisalmer.jpg',
      desc: 'L\'expérience complète du Rajasthan : Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar & Jaipur.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Le Triangle d\'Or & Taj Mahal Express',
      duration: '7 Jours / 6 Nuits',
      category: 'Incontournable',
      img: '/images/dest-tajmahal.jpg',
      desc: 'Les joyaux de l\'Inde du Nord en une semaine : Delhi capitale, le Taj Mahal à Agra et les forts de Jaipur.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Safari Désert d\'Osian & Nuit sous les Étoiles',
      duration: '2 Jours / 1 Nuit',
      category: 'Safari Désert',
      img: '/images/dest-jodhpur.jpg',
      desc: 'Camel trekking au coucher du soleil, dîner traditionnel Kalbeliya autour du feu de camp et nuit en camp de luxe.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Merveilles du Kerala & Lagunes Backwaters',
      duration: '10 Jours / 9 Nuits',
      category: 'Nature & Détente',
      img: '/images/dest-kerala.jpg',
      desc: 'Munnar et ses plantations de thé, réserve de Periyar, croisière en houseboat à Alleppey et plages de Kovalam.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Népal Sacré : Katmandou & Annapurnas',
      duration: '12 Jours / 11 Nuits',
      category: 'Spiritualité & Trek',
      img: '/images/dest-nepal.jpg',
      desc: 'Cités royales de la vallée de Katmandou, safari dans la jungle de Chitwan et paysages de Pokhara.',
      link: '/tours/rajasthan',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-rajasthan.jpg"
          alt="Nos Tours Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-route"></i> Circuits Accompagnés & Privés
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Nos Tours & Circuits
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Découvrez nos propositions de circuits modifiables et adaptables selon vos préférences de voyage.
          </p>
        </div>
      </section>

      {/* TOURS LISTING */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursList.map((tour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1D747A] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#C58B39] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    {tour.category}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                      {tour.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-[#1D747A] font-semibold flex items-center gap-1">
                      <i className="fas fa-check-circle"></i> Chauffeur Privé
                    </span>
                    <Link
                      href={tour.link}
                      className="btn-primary text-xs font-bold px-4 py-2 rounded-lg"
                    >
                      Détails du Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
