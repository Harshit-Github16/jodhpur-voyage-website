import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Qui Sommes Nous | Jodhpur Voyage - Agence Locale Francophone en Inde',
  description: 'Découvrez l\'histoire et l\'équipe de Jodhpur Voyage, agence de voyage locale francophone spécialisée dans les circuits sur mesure au Rajasthan, Inde et Népal depuis plus de 20 ans.',
};

export default function QuiNousSommesPage() {
  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[45vh] min-h-[380px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-rajasthan.jpg"
          alt="Qui Sommes Nous Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-compass"></i> Notre Histoire & Nos Engagements
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Qui Sommes Nous ?
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Agence de voyage locale francophone en Inde et au Népal. Découvrez l&apos;équipe passionnée et l&apos;histoire qui anime Jodhpur Voyage.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="section-subtitle">Notre Identité</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A2B2C]">
                Une Agence Locale Francophone et Passionnée
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Jodhpur Voyage</strong> est une agence de voyage locale basée au Rajasthan en Inde. Experte dans le tourisme avec une parfaite connaissance du pays, nous souhaitons vous faire découvrir l’Inde et le Népal. Enregistrée au ministère du tourisme du Rajasthan, nous sommes en mesure de vous assurer toutes les prestations nécessaires dont vous aurez besoin durant votre séjour.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nous vous proposons des forfaits de voyages, mais nous sommes aussi à votre disposition pour élaborer des circuits personnalisés. Notre agence est spécialisée dans le{' '}
                <Link href="/voyage-sur-mesure" className="text-[#1D747A] font-bold underline">
                  voyage sur mesure
                </Link>{' '}
                et organise des voyages depuis plus de 20 ans. Nous sommes une agence locale disponible, réactive et à l’écoute de toutes les demandes des voyageurs.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Une fois sur place, nous restons à votre disposition et nous nous assurons du bon déroulement de votre voyage. Nous avons à cœur de vous transmettre notre passion et de vous faire découvrir notre pays autrement.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
              <img
                src="/images/dest-jodhpur.jpg"
                alt="Jodhpur Voyage Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FOUNDER'S NOTE SECTION (MR SINGH) */}
          <div className="bg-[#F8FBFB] p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:border-r border-gray-200 lg:pr-8">
                <img
                  src="/images/image-12.jpg"
                  alt="Mr Singh - Fondateur Jodhpur Voyage"
                  className="w-40 h-40 rounded-full object-cover mx-auto shadow-xl border-4 border-white mb-4"
                />
                <h3 className="font-heading font-bold text-xl text-[#1A2B2C]">Mr Singh</h3>
                <span className="text-xs text-[#C58B39] font-bold uppercase tracking-wider">
                  Fondateur & Interlocuteur Principal
                </span>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <span className="section-subtitle">
                  <i className="fas fa-quote-left mr-2"></i> Le Mot du Fondateur
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A2B2C]">
                  Notre Philosophie du Voyage
                </h2>

                <blockquote className="italic text-gray-700 border-l-4 border-[#1D747A] pl-4 text-sm leading-relaxed">
                  « Passionné par mon pays et sa culture, j&apos;ai obtenu mon master de tourisme à l’université de Jodhpur et j&apos;ai débuté en tant que guide francophone pour les agences de voyages de Delhi. À la suite d’une rencontre avec une française et les liens d’amitié aidant, j&apos;ai pu réaliser mon rêve et créer ma propre agence de voyage. Aujourd&apos;hui, j&apos;ai le plaisir de partager ce rêve avec mon équipe et mes clients. »
                </blockquote>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Le projet naît d&apos;un désir de s&apos;ouvrir au monde et de partager la culture et les paysages de l&apos;Inde. Notre pays, mystérieux et paradoxal, fascine par sa culture, sa diversité, la coexistence entre ses multiples religions, ses centaines de langues et dialectes.
                </p>
              </div>
            </div>
          </div>

          {/* PILLARS OF COMMITMENT */}
          <div className="pt-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-subtitle">Pourquoi Nous Choisir</span>
              <h2 className="font-heading text-3xl font-bold text-[#1A2B2C] mt-2">
                Les Piliers de Notre Engagement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1D747A]/10 text-[#1D747A] flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-tag"></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">Direct Producteur</h3>
                <p className="text-xs text-gray-500">
                  Prix directs négociés et sans intermédiaire pour un rapport qualité/prix garanti.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#C58B39]/10 text-[#C58B39] flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-hotel"></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">Havelis & Charme</h3>
                <p className="text-xs text-gray-500">
                  Maisons de maître traditionnelles restaurées en demeure de charme authentique.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1D747A]/10 text-[#1D747A] flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">Guides Certifiés</h3>
                <p className="text-xs text-gray-500">
                  Guides francophones certifiés par le ministère pour des visites culturelles d&apos;exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
