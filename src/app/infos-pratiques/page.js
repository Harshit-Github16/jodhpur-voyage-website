'use client';

import React, { useState } from 'react';

export default function InfosPratiquesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Comment obtenir le e-Visa pour l\'Inde ?',
      a: 'Le e-Visa touristique pour l\'Inde s\'obtient en ligne sur le site officiel du gouvernement indien (indianvisaonline.gov.in) au moins 4 à 7 jours avant le départ. Notre équipe vous assiste gratuitement dans les démarches.',
    },
    {
      q: 'Quelle est la meilleure période pour visiter le Rajasthan ?',
      a: 'La meilleure saison s\'étend d\'octobre à mars, lorsque les journées sont ensoleillées et douces (20-28°C), idéales pour visiter les forts et faire du safari dans le désert.',
    },
    {
      q: 'Les chauffeurs parlent-ils français ?',
      a: 'Nos chauffeurs privés s\'expriment couramment en anglais et comprennent le français usuel. Sur demande, nous pouvons réserver un guide accompagnateur francophone diplômé pour tout votre séjour.',
    },
    {
      q: 'Comment régler les pourboires et le change ?',
      a: 'La monnaie officielle est la Roupie indienne (INR). Vous trouverez facilement des distributeurs (ATM) et bureaux de change à Delhi, Jaipur et Jodhpur. Les pourboires sont d\'usage en Inde.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Infos Pratiques Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-info-circle"></i> Tout Savoir Avant Partir
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Infos Pratiques & FAQ
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Visas, santé, climat, monnaie et conseils de nos experts locaux pour préparer sereinement votre voyage en Inde.
          </p>
        </div>
      </section>

      {/* PRACTICAL INFO CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FBFB] p-8 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-[#1D747A]/10 text-[#1D747A] rounded-xl flex items-center justify-center text-xl">
                <i className="fas fa-passport"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A2B2C]">Visa & Passeport</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Passeport valide 6 mois après la date de retour. e-Visa obligatoire pour les ressortissants français et belges.
              </p>
            </div>

            <div className="bg-[#F8FBFB] p-8 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-[#C58B39]/10 text-[#C58B39] rounded-xl flex items-center justify-center text-xl">
                <i className="fas fa-sun"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A2B2C]">Climat & Saisons</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Hiver doux d&apos;octobre à mars. Mousson d&apos;été de juillet à septembre propice aux paysages verdoyants du Kerala.
              </p>
            </div>

            <div className="bg-[#F8FBFB] p-8 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-[#1D747A]/10 text-[#1D747A] rounded-xl flex items-center justify-center text-xl">
                <i className="fas fa-[#1D747A] fa-first-aid"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A2B2C]">Santé & Vaccins</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Aucun vaccin obligatoire pour les voyageurs européens. Recommandé : traitements habituels et eau en bouteille uniquement.
              </p>
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="section-subtitle">Questions Fréquentes</span>
              <h2 className="font-heading text-3xl font-bold text-[#1A2B2C]">
                FAQ des Voyageurs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left font-heading font-bold text-base text-[#1A2B2C] flex items-center justify-between hover:bg-[#F8FBFB]"
                  >
                    <span>{faq.q}</span>
                    <i className={`fas fa-chevron-down text-xs text-[#1D747A] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                  </button>

                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs text-gray-600 leading-relaxed font-light border-t border-gray-100 bg-[#F8FBFB]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
