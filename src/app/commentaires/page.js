import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Avis & Témoignages de nos Voyageurs | Jodhpur Voyage',
  description: 'Consultez les avis vérifiés de nos clients sur TripAdvisor, Trustpilot et Google. Découvrez les témoignages de leurs voyages au Rajasthan.',
};

export default function CommentairesPage() {
  const reviews = [
    {
      name: 'Aurore & Marc L.',
      origin: 'Paris, France',
      trip: 'Grand Tour du Rajasthan (15 jours)',
      rating: 5,
      date: 'Août 2026',
      title: 'Voyage magique et organisation irréprochable !',
      comment: 'Un grand merci à Mr Singh et à notre chauffeur Ramesh ! Tout était parfait du début à la fin. Les havelis sélectionnées étaient magnifiques et l\'organisation sur place s\'est déroulée dans le plus grand sérénité.',
    },
    {
      name: 'Philippe & Marie-Claire',
      origin: 'Lyon, France',
      trip: 'Triangle d\'Or & Taj Mahal (7 jours)',
      rating: 5,
      date: 'Juillet 2026',
      title: 'Des guides francophones passionnants',
      comment: 'Découvrir le Taj Mahal avec un guide passionné par l\'histoire moghole a fait toute la différence. Agence très réactive sur WhatsApp pendant tout le séjour.',
    },
    {
      name: 'Famille Bertrand',
      origin: 'Bruxelles, Belgique',
      trip: 'Circuit Rajasthan & Désert d\'Osian',
      rating: 5,
      date: 'Juin 2026',
      title: 'Une immersion inoubliable pour nos enfants',
      comment: 'La nuit sous les étoiles dans le désert d\'Osian restera le moment fort de nos vacances. Les enfants ont adoré la méharée à dos de chameau.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-rajasthan.jpg"
          alt="Avis Voyageurs Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-star"></i> 4.9/5 sur TripAdvisor & Trustpilot
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Avis & Témoignages
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Découvrez ce que nos voyageurs disent de leur expérience sur le terrain avec Jodhpur Voyage.
          </p>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 space-y-12">
          {/* Trust Platform Badges */}
          <div className="bg-[#F8FBFB] p-8 rounded-3xl border border-gray-100 flex flex-wrap items-center justify-around gap-6 text-center">
            <div>
              <img src="/images/tripadvisor-badge.jpg" alt="TripAdvisor" className="h-10 mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1A2B2C]">Note 5.0 / 5 sur TripAdvisor</div>
            </div>
            <div>
              <img src="/images/trustpilot-badge.jpg" alt="Trustpilot" className="h-10 mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1A2B2C]">Note 4.9 / 5 sur Trustpilot</div>
            </div>
            <div>
              <img src="/images/google-review-badge.jpg" alt="Google Reviews" className="h-10 mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1A2B2C]">100% Avis Vérifiés</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#C58B39] text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1A2B2C]">{rev.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light italic">
                    « {rev.comment} »
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1A2B2C] block">{rev.name}</span>
                    <span className="text-[11px] text-gray-400 block">{rev.origin}</span>
                  </div>
                  <span className="text-[10px] bg-[#1D747A]/10 text-[#1D747A] font-bold px-2.5 py-1 rounded-full">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/voyage-sur-mesure" className="btn-primary text-xs font-bold uppercase px-8 py-3.5 rounded-xl shadow-lg">
              Rejoignez Nos Voyageurs Heureux
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
