'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TourRajasthanDetailPage() {
  const [activeDay, setActiveDay] = useState(1);

  const itineraryDays = [
    {
      day: 1,
      title: 'Arrivée à Delhi - Accueil & Transfert Hôtel',
      desc: 'Accueil chaleureux à l\'aéroport par votre chauffeur privé. Transfert à votre hôtel de charme et briefing avec votre assistant francophone.',
    },
    {
      day: 2,
      title: 'Visite de Delhi & Route vers Mandawa (Shekhawati)',
      desc: 'Découverte du Jama Masjid et de la vieille ville de Delhi. Départ en véhicule privé vers le pays du Shekhawati et ses havelis peintes à ciel ouvert.',
    },
    {
      day: 3,
      title: 'Mandawa vers Bikaner - Fort Junagarh & Désert',
      desc: 'Visite des fresques de Mandawa puis route vers Bikaner. Découverte du fort inexpugnable de Junagarh et du temple insolite de Karni Mata.',
    },
    {
      day: 4,
      title: 'Bikaner vers Jaisalmer - Cité Dorée du Désert',
      desc: 'Traversée des paysages désertiques vers Jaisalmer. Découverte des premiers remparts dorés s\'élevant du désert du Thar.',
    },
    {
      day: 5,
      title: 'Jaisalmer Fort & Safari Méharée à Osian',
      desc: 'Exploration du fort vivant de Jaisalmer et des havelis Patwon. En fin d\'après-midi, safari à dos de chameau au coucher du soleil.',
    },
    {
      day: 6,
      title: 'Jaisalmer vers Jodhpur - La Cité Bleue',
      desc: 'Route vers Jodhpur. Visite du majestueux fort de Mehrangarh surplombant les maisons bleu indigo et du cénotaphe de Jaswant Thada.',
    },
    {
      day: 7,
      title: 'Jodhpur vers Udaipur via Temples de Ranakpur',
      desc: 'Départ pour Udaipur à travers la chaîne des Aravalli. Halte au sublime temple jaïn en marbre blanc de Ranakpur aux 1444 colonnes sculptées.',
    },
    {
      day: 8,
      title: 'Udaipur - Palais de la Cité & Croisière Lac Pichola',
      desc: 'Visite du City Palace, promenade dans les jardins des demoiselles et croisière au soleil couchant sur le lac Pichola.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[420px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/Voyage-Jaisalmer.jpg"
          alt="Grand Tour du Rajasthan"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-crown"></i> Circuit Mythique 15 Jours
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Grand Tour du Rajasthan & Cités Royales
          </h1>
          <p className="text-gray-200 text-xs sm:text-sm max-w-2xl mx-auto font-light">
            Delhi • Mandawa • Bikaner • Jaisalmer • Jodhpur • Ranakpur • Udaipur • Pushkar • Jaipur • Agra (Taj Mahal)
          </p>
        </div>
      </section>

      {/* ITINERARY CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Itinerary Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <span className="section-subtitle">Programme Jour par Jour</span>
              <h2 className="font-heading text-3xl font-bold text-[#1A2B2C]">
                Déroulé de Votre Voyage
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Cet itinéraire est entièrement personnalisable selon votre rythme, vos dates de vol et vos catégories d&apos;hôtels souhaitées.
              </p>
            </div>

            {/* Accordion / Days List */}
            <div className="space-y-4">
              {itineraryDays.map((item) => (
                <div
                  key={item.day}
                  className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-[#F8FBFB]"
                >
                  <button
                    onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                    className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-base text-[#1A2B2C] hover:bg-[#F0F7F7] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1D747A] text-white flex items-center justify-center text-xs font-sans font-bold flex-shrink-0">
                        {item.day}
                      </span>
                      <span>Jour {item.day} : {item.title}</span>
                    </div>
                    <i className={`fas fa-chevron-down text-xs text-[#1D747A] transition-transform ${activeDay === item.day ? 'rotate-180' : ''}`}></i>
                  </button>

                  {activeDay === item.day && (
                    <div className="p-5 pt-0 text-xs text-gray-600 leading-relaxed font-light border-t border-gray-100 bg-white">
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="space-y-6">
            <div className="bg-[#1A2B2C] text-white p-8 rounded-3xl space-y-6 sticky top-24 shadow-xl">
              <h3 className="font-heading text-xl font-bold border-b border-gray-700 pb-3">
                Réserver ou Personnaliser Ce Tour
              </h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-[#C58B39]"></i>
                  <span>Véhicule privé climatisé & Chauffeur</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-[#C58B39]"></i>
                  <span>Hébergement en Havelis de charme</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-[#C58B39]"></i>
                  <span>Guides francophones certifiés</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-[#C58B39]"></i>
                  <span>Assistance francophone 24h/7j</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/voyage-sur-mesure"
                  className="btn-secondary w-full text-center block text-xs font-bold uppercase py-3.5 rounded-xl shadow-lg"
                >
                  Demander Un Devis Sur Mesure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
