'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CommentairesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const reviewsList = [
    {
      category: 'rajasthan',
      title: 'Voyage au Rajasthan 14 Jours',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      tag: 'Rajasthan • 14 Jours',
      tagIcon: 'fa-map-marker-alt',
      excerpt:
        '"Bonjour Monsieur Singh, Nous tenons à vous dire à quel point nous avons été ravis par votre organisation : chauffeur exceptionnel, véhicules très confortables, choix des hôtels patrimoniaux magiques et écoute permanente tout au long de notre parcours au Rajasthan."',
      author: 'Famille & Voyageurs Francophones',
      avatar: 'MS',
      date: 'Avis Vérifié • Organisé par Jodhpur Voyage',
      link: '/tours/rajasthan',
    },
    {
      category: 'ladakh',
      title: 'Séjour au Ladakh – Le petit Tibet de l\'Inde',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/08/voyage-au-ladakh-inde.jpg',
      fallbackImg: '/images/dest-ladakh.jpg',
      tag: 'Ladakh & Tibet • Circuit Montagne',
      tagIcon: 'fa-mountain',
      excerpt:
        '"Le séjour au Ladakh organisé par l\'agence Jodhpur Voyage s\'est déroulé dans les meilleures conditions possibles. Notre chauffeur dans l\'Himalaya était extrêmement fiable, prudent et compétent. Nous avons découvert des monastères bouddhistes uniques et des paysages à couper le souffle."',
      author: 'Voyageurs du Ladakh',
      avatar: 'LD',
      date: 'Avis Vérifié • Séjour sur mesure',
      link: '/tours',
    },
    {
      category: 'inde-du-nord',
      title: 'Circuit & Séjour Punjab & Himachal Pradesh',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/05/Voyage-au-Himachal-en-Inde.jpg',
      fallbackImg: '/images/dest-himachal.jpg',
      tag: 'Punjab & Himachal Pradesh',
      tagIcon: 'fa-place-of-worship',
      excerpt:
        '"Bonjour M. Singh, Comme convenu je reviens vers vous pour faire un petit point sur notre magnifique voyage au Punjab et dans l\'Himachal Pradesh. Du Temple d\'Or d\'Amritsar aux vallées de Dharamsala, la prise en charge, la sécurité et la flexibilité sur le terrain étaient irréprochables."',
      author: 'Groupe d\'Amis Francophones',
      avatar: 'PH',
      date: 'Avis Vérifié • Inde du Nord',
      link: '/tours',
    },
    {
      category: 'rajasthan',
      title: 'Séjour au Rajasthan avec Chauffeur Privé',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/05/Sejour-au-Rajasthan-avec-chauffeur.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
      tag: 'Chauffeur Privé • Rajasthan',
      tagIcon: 'fa-car-side',
      excerpt:
        '"Nous avons particulièrement apprécié l\'organisation impeccable, les voitures spacieuses et toujours climatisées, les chauffeurs d\'une gentillesse rare, le suivi quotidien de l\'agence et les attentions de chaque instant avec les bouteilles d\'eau fournies tous les jours dans le véhicule."',
      author: 'Chantal & Robert',
      avatar: 'CR',
      date: 'Avis Vérifié • Circuit Privé avec Chauffeur',
      link: '/tours/rajasthan',
    },
    {
      category: 'ladakh',
      title: 'Voyage au Ladakh (8 Jours)',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2022/03/voyage-ladakh.jpeg',
      fallbackImg: '/images/dest-ladakh.jpg',
      tag: 'Trek & Aventure • 8 Jours',
      tagIcon: 'fa-hiking',
      excerpt:
        '"Voici le résumé de notre voyage de 8 jours au Ladakh programmé de main de maître par l\'agence Jodhpur Voyage. Mr. Singh a su faire preuve d\'une grande réactivité avant et pendant le parcours. Chaque étape et chaque nuitée en altitude étaient parfaitement planifiées."',
      author: 'Voyageurs Aventuriers',
      avatar: 'VL',
      date: 'Avis Vérifié • Himalaya & Ladakh',
      link: '/tours',
    },
    {
      category: 'rajasthan',
      title: 'Rajasthan Hors Sentiers Battus & Taj Mahal',
      stars: 5,
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/05/Voyage-au-Rajasthan-Hors-des-sentiers-battus-avec-Taj-Mahal.jpg',
      fallbackImg: '/images/dest-tajmahal.jpg',
      tag: 'Hors des sentiers battus • Taj Mahal',
      tagIcon: 'fa-compass',
      excerpt:
        '"Voyage exceptionnel hors des circuits touristiques traditionnels. Nous avons découvert la vraie vie villageoise du Rajasthan, mangé dans des maisons locales accueillantes et terminé par le majestueux Taj Mahal au lever du soleil. Une mémoire impérissable."',
      author: 'Philippe & Marie L.',
      avatar: 'PM',
      date: 'Avis Vérifié • Rajasthan & Agra',
      link: '/tours/rajasthan',
    },
  ];

  const filteredReviews = reviewsList.filter((rev) => {
    const matchesCategory = activeCategory === 'all' || rev.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      rev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* HERO BANNER */}
      <section className="page-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
          alt="Avis Voyageurs Banner"
          className="page-banner-bg"
        />
        <div className="page-banner-overlay"></div>
        <div className="container page-banner-content">
          <span className="banner-badge">
            <i className="fas fa-star"></i> 4.9/5 sur TripAdvisor & Trustpilot
          </span>
          <h1 className="page-banner-title">Avis & Commentaires des Voyageurs</h1>
          <p className="page-banner-desc">
            Découvrez les retours d'expérience authentiques des voyageurs ayant exploré l'Inde et le Népal avec Jodhpur Voyage.
          </p>
        </div>
      </section>

      {/* REVIEWS OVERVIEW SECTION */}
      <section className="reviews-overview-section bg-cream">
        <div className="container">
          <div className="reviews-overview-grid">
            {/* Metrics */}
            <div className="metrics-col">
              <h2 className="overview-title">Confiance & Satisfaction Clients</h2>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-value">5.0 / 5</div>
                  <div className="metric-label">TripAdvisor (100% Excellence)</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">4.9 / 5</div>
                  <div className="metric-label">Trustpilot (Avis Vérifiés)</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">98%</div>
                  <div className="metric-label">Chauffeurs & Ponctualité</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">97%</div>
                  <div className="metric-label">Hôtels & Charme Haveli</div>
                </div>
              </div>
            </div>

            {/* Verification Badges */}
            <div className="badges-col">
              <span className="badge-verify-text">Avis vérifiés indépendants</span>
              <a
                href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html"
                target="_blank"
                rel="noreferrer"
                className="badge-img-link"
              >
                <img src="/images/tripad-icon.png" alt="TripAdvisor Jodhpur Voyage" className="badge-img-tripad" />
              </a>
              <a
                href="https://www.trustpilot.com/review/jodhpurvoyage.com"
                target="_blank"
                rel="noreferrer"
                className="badge-img-link"
              >
                <img src="/images/trustpilot-icon.png" alt="Trustpilot Jodhpur Voyage" className="badge-img-trust" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER BAR */}
      <section className="reviews-filter-section bg-white">
        <div className="container">
          <div className="reviews-filter-bar">
            {/* Category Filter Chips */}
            <div className="reviews-filter-chips">
              {[
                { id: 'all', label: 'Tous les avis (500+)' },
                { id: 'rajasthan', label: 'Rajasthan' },
                { id: 'inde-du-nord', label: 'Inde du Nord' },
                { id: 'ladakh', label: 'Ladakh & Himalaya' },
                { id: 'inde-du-sud', label: 'Inde du Sud & Kerala' },
                { id: 'gujarat', label: 'Gujarat & Népal' },
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setActiveCategory(chip.id)}
                  className={`review-filter-chip ${activeCategory === chip.id ? 'active' : ''}`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="reviews-search-box">
              <i className="fas fa-search reviews-search-icon"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un avis (ex: Chauffeur, Singh, Jaisalmer...)"
                className="reviews-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN REVIEWS LISTING SECTION */}
      <section className="section-padding bg-cream pt-0">
        <div className="container">
          <div className="tours-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredReviews.map((rev, idx) => (
              <div className="tour-card" key={idx} style={{ height: '100%' }}>
                <div className="tour-card-image-wrap">
                  <img
                    src={rev.image}
                    onError={(e) => { e.target.src = rev.fallbackImg; }}
                    alt={rev.title}
                    className="tour-card-img"
                  />
                  <span className="tour-card-badge">
                    <i className={`fas ${rev.tagIcon}`}></i> {rev.tag}
                  </span>
                </div>
                <div className="tour-card-body" style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', padding: '1.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                      <h3 className="tour-card-title" style={{ fontSize: '1.1rem', margin: 0 }}>
                        {rev.title}
                      </h3>
                      <div className="review-stars" style={{ color: '#C58B39', fontSize: '0.8rem' }}>
                        {[...Array(rev.stars)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <p className="tour-card-excerpt" style={{ fontSize: '0.85rem', fontStyle: 'italic', lineHeight: 1.6, color: '#5C6768' }}>
                      {rev.excerpt}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #EBF2F2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#1A2B2C', display: 'block' }}>{rev.author}</strong>
                      <span style={{ fontSize: '0.75rem', color: '#1D747A', fontWeight: 600 }}>
                        <i className="fas fa-check-circle"></i> {rev.date}
                      </span>
                    </div>
                    <Link href={rev.link} className="btn btn-sm btn-outline">
                      Voir le circuit <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Votre avis compte pour nous</h2>
          <p className="cta-description">
            Vous avez voyagé avec Jodhpur Voyage ? Partagez votre expérience avec la communauté.
          </p>
          <div className="cta-buttons">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg"
            >
              Écrire sur TripAdvisor
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contactez Nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
