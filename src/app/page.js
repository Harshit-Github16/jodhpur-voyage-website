'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      bg: '/images/dest-rajasthan.jpg',
      badge: 'Tour Opérateur Spécialisé',
      title: 'Jodhpur Voyage',
      subtitle: 'Inde & Népal',
      desc: 'Spécialiste des voyages authentiques et sur mesure au Rajasthan, en Inde du Nord, Inde du Sud et au Népal. Découvrez la beauté séculaire de la cité dorée.',
    },
    {
      bg: '/images/dest-jodhpur.jpg',
      badge: "Merveilles d'Inde",
      title: 'Voyages Émotion &',
      subtitle: 'Patrimoine',
      desc: 'Explorez les palais des Maharajas, le mythique Taj Mahal et les lieux d\'exception avec un chauffeur privé et des guides francophones passionnés.',
    },
    {
      bg: '/images/dest-nepal.jpg',
      badge: 'Aventure & Spiritualité',
      title: 'Des Sommets',
      subtitle: 'du Népal',
      desc: 'Des vallées sacrées de Katmandou aux sommets mythiques de l\'Himalaya, vivez une immersion culturelle et humaine inoubliable.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO CAROUSEL */}
      <section className="relative h-[82vh] min-h-[580px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.bg}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/65 to-transparent"></div>

            <div className="max-w-[1340px] mx-auto h-full px-6 flex flex-col justify-center relative z-10">
              <div className="max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-lg">
                  <i className="fas fa-crown text-[10px]"></i>
                  {slide.badge}
                </span>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {slide.title} <span className="text-[#C58B39]">{slide.subtitle}</span>
                </h1>

                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                  {slide.desc}
                </p>

                {/* Hero Search Box */}
                <div className="pt-4">
                  <div className="bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-2xl flex items-center gap-2 max-w-xl border border-white/20">
                    <i className="fas fa-search text-[#1D747A] pl-3 text-sm"></i>
                    <input
                      type="text"
                      placeholder="Laissez-vous inspirer (ex: Rajasthan, Taj Mahal, Népal...)"
                      className="w-full text-xs sm:text-sm text-[#1A2B2C] placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                    <Link
                      href="/tours"
                      className="btn-primary text-xs font-bold uppercase px-5 py-3 rounded-lg flex items-center gap-2 flex-shrink-0"
                    >
                      <span>Rechercher</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-gray-300">
                    <span className="font-semibold text-white">Populaire :</span>
                    <Link href="/destinations/rajasthan" className="bg-white/10 hover:bg-[#C58B39] px-2.5 py-0.5 rounded-full transition-colors text-[11px]">
                      Rajasthan
                    </Link>
                    <Link href="/tours" className="bg-white/10 hover:bg-[#C58B39] px-2.5 py-0.5 rounded-full transition-colors text-[11px]">
                      Taj Mahal
                    </Link>
                    <Link href="/destinations" className="bg-white/10 hover:bg-[#C58B39] px-2.5 py-0.5 rounded-full transition-colors text-[11px]">
                      Népal
                    </Link>
                    <Link href="/voyage-sur-mesure" className="bg-white/10 hover:bg-[#C58B39] px-2.5 py-0.5 rounded-full transition-colors text-[11px]">
                      Sur Mesure
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <div className="flex gap-1.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? 'bg-[#C58B39] w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / ENGAGEMENTS */}
      <section className="py-16 bg-[#F8FBFB]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-subtitle">Pourquoi Voyager Avec Nous</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A2B2C] mt-2">
              L&apos;Excellence du Voyage Sur Mesure
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Créateur de souvenirs inoubliables depuis plus de 20 ans. Découvrez les garanties d&apos;un expert local francophone passionné.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-[#1D747A]/10 text-[#1D747A] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fas fa-crown"></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">20+ Ans d&apos;Expertise</h3>
              <p className="text-xs text-gray-500">
                Pionnier des circuits sur mesure au Rajasthan et en Inde. Connaissance parfaite du terrain.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-[#C58B39]/10 text-[#C58B39] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fas fa-car-side"></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">Chauffeurs Privés Expert</h3>
              <p className="text-xs text-gray-500">
                Véhicules climatisés récents, chauffeurs ponctuels, prudents et francophones attentionnés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-[#1D747A]/10 text-[#1D747A] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">Assistance 24/7 en Français</h3>
              <p className="text-xs text-gray-500">
                Une équipe francophone dédiée sur place à Jodhpur à votre écoute à chaque étape de votre séjour.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-[#C58B39]/10 text-[#C58B39] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A2B2C] mb-2">100% Direct Producteur</h3>
              <p className="text-xs text-gray-500">
                Aucun intermédiaire. Tarifs direct agence locale au meilleur rapport qualité / prix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP DESTINATIONS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-subtitle">Inspirations</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A2B2C] mt-2">
                Nos Destinations Phares
              </h2>
            </div>
            <Link href="/destinations" className="btn-outline text-xs font-bold uppercase px-5 py-2.5 rounded-lg self-start md:self-auto">
              Toutes les Destinations <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Rajasthan */}
            <Link href="/destinations/rajasthan" className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] block">
              <img
                src="/images/dest-rajasthan.jpg"
                alt="Rajasthan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121F20]/90 via-[#1A2B2C]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C58B39] text-white px-2.5 py-0.5 rounded-full inline-block">
                  Incontournable
                </span>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#C58B39] transition-colors">
                  Le Rajasthan Doré
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  Palais de maharajas, cité bleue de Jodhpur, dunes de Jaisalmer et lacs romantiques d&apos;Udaipur.
                </p>
              </div>
            </Link>

            {/* Card 2: Taj Mahal & Inde du Nord */}
            <Link href="/destinations" className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] block">
              <img
                src="/images/dest-tajmahal.jpg"
                alt="Taj Mahal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121F20]/90 via-[#1A2B2C]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1D747A] text-white px-2.5 py-0.5 rounded-full inline-block">
                  Triangle d&apos;Or
                </span>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#C58B39] transition-colors">
                  Delhi, Agra & Varanasi
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  Le Taj Mahal au lever du soleil, les rituels sacrés du Gange et la grandeur des monuments moghols.
                </p>
              </div>
            </Link>

            {/* Card 3: Kerala */}
            <Link href="/destinations" className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] block">
              <img
                src="/images/dest-kerala.jpg"
                alt="Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121F20]/90 via-[#1A2B2C]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full inline-block">
                  Nature & Sérénité
                </span>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#C58B39] transition-colors">
                  Kerala & Inde du Sud
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  Croisières en kettuvalam sur les Backwaters, collines de thé de Munnar et massages ayurvédiques.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="py-16 bg-[#F8FBFB]">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-subtitle">Sélection Spéciale</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A2B2C] mt-2">
              Nos Circuits d&apos;Exception
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Itinéraires soigneusement conçus par nos experts francophones pour vous offrir la plus belle expérience d&apos;Inde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/Voyage-Jaisalmer.jpg"
                  alt="Circuit Rajasthan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1D747A] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  15 Jours / 14 Nuits
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-[#C58B39] font-bold mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="text-gray-500 text-[11px] font-normal ml-1">(4.9/5)</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors">
                    Grand Tour du Rajasthan & Cités Royales
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                    Delhi, Jaipur, Jodhpur, safari désert d&apos;Osian, Jaisalmer et les romantiques palais d&apos;Udaipur.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#1D747A] font-semibold flex items-center gap-1">
                    <i className="fas fa-check-circle"></i> Chauffeur & Guide
                  </span>
                  <Link
                    href="/tours/rajasthan"
                    className="btn-primary text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    Voir l&apos;Itinéraire
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/dest-tajmahal.jpg"
                  alt="Triangle d'Or"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#C58B39] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  7 Jours / 6 Nuits
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-[#C58B39] font-bold mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="text-gray-500 text-[11px] font-normal ml-1">(5.0/5)</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors">
                    Le Triangle d&apos;Or & Merveilles Moghols
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                    L&apos;essentiel de l&apos;Inde en une semaine : Delhi capitale, la magie d&apos;Agra & Taj Mahal, et Jaipur la cité rose.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#1D747A] font-semibold flex items-center gap-1">
                    <i className="fas fa-check-circle"></i> Circuit Express
                  </span>
                  <Link
                    href="/tours"
                    className="btn-primary text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    Voir l&apos;Itinéraire
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/dest-nepal.jpg"
                  alt="Népal Trek"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  12 Jours / 11 Nuits
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-[#C58B39] font-bold mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="text-gray-500 text-[11px] font-normal ml-1">(4.95/5)</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors">
                    Népal Sacré : Katmandou & Annapurnas
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3">
                    Stupas d&apos;or de Bhaktapur, safari au parc de Chitwan et panoramas d&apos;exception sur l&apos;Himalaya à Pokhara.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#1D747A] font-semibold flex items-center gap-1">
                    <i className="fas fa-check-circle"></i> Nature & Culture
                  </span>
                  <Link
                    href="/tours"
                    className="btn-primary text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    Voir l&apos;Itinéraire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAILOR MADE BANNER */}
      <section className="py-20 bg-[#1A2B2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/dest-jodhpur.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="inline-block font-nav text-xs font-bold uppercase tracking-widest text-[#C58B39]">
            Créateur De Voyages Sur Mesure
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Vous Avez un Projet de Voyage Unique en Inde ?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Transmettez-nous vos envies, votre durée de séjour et vos dates. Notre équipe locale concevra gratuitement votre itinéraire sur mesure sous 24h.
          </p>
          <div className="pt-4">
            <Link
              href="/voyage-sur-mesure"
              className="btn-secondary text-xs sm:text-sm font-bold uppercase px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              <i className="fas fa-magic"></i>
              <span>Créer Mon Voyage Sur Mesure</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
