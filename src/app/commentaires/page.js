'use client';

import React, { useState, useEffect } from 'react';
import API_BASE from '@/lib/apiBase';
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

  const [remoteReviews, setRemoteReviews] = useState([]);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_BASE || ''}/api/v1/commentaires`).catch(() => null);
        if (!res || !res.ok) return;
        const json = await res.json();
        const payload = json?.data || json;
        const list = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
        if (mounted && list.length > 0) {
          setRemoteReviews(list.map((r) => {
            const authorName = typeof r.author === 'string' ? r.author : (r.author && r.author.name) || r.name || 'Voyageur';
            const avatarVal = (r.author && typeof r.author === 'object' && r.author.avatar) || r.avatar || (authorName ? authorName[0] : 'V');
            const categoryVal = typeof r.category === 'string' ? r.category : (Array.isArray(r.tags) ? r.tags[0] : (r.category && r.category.name) || 'general');
            const tagVal = r.tag || (typeof r.category === 'string' ? r.category : (r.category && r.category.name)) || (Array.isArray(r.tags) ? r.tags[0] : '');
            return {
              category: categoryVal,
              title: r.title || r.subject || 'Séjour en Inde',
              stars: Number(r.stars || r.rating) || 5,
              image: r.image || r.photo || '/images/dest-jodhpur.jpg',
              fallbackImg: '/images/dest-jodhpur.jpg',
              tag: tagVal || 'Circuit Découverte',
              tagIcon: 'fa-star',
              excerpt: r.comment || r.excerpt || '',
              author: authorName,
              avatar: avatarVal,
              date: r.date || 'Avis Vérifié',
              link: r.link || '/tours',
            };
          }));
        }
      } catch (err) {
        // Fallback gracefully to default reviews
      }
    };
    fetchReviews();
    // fetch hero slider content for the commentaires page
    const fetchHero = async () => {
      try {
        const res = await fetch(`${API_BASE || ''}/api/v1/content/hero-slider`).catch(() => null);
        if (!res || !res.ok) return;
        const json = await res.json();
        const payload = json?.data || json;
        let slide = null;
        if (Array.isArray(payload)) {
          slide = payload[0] || null;
        } else if (payload && typeof payload === 'object') {
          // Some APIs wrap content in data.data or data.item
          slide = payload.data || payload.item || payload || null;
          if (Array.isArray(slide)) slide = slide[0] || null;
        }

        if (mounted && slide) {
          const image = slide.image || slide.photo || slide.background || slide.imageUrl || slide.src || '';
          const title = slide.title || slide.heading || slide.name || 'Vos Avis & Commentaires';
          const badge = slide.badge || slide.tag || 'RETOURS D\'EXPÉRIENCE';
          const desc = slide.excerpt || slide.description || slide.subtitle || 'La confiance et la satisfaction de nos voyageurs francophones sont notre plus grande fierté.';
          setHeroData({ image, title, badge, desc });
        }
      } catch (err) {
        // ignore
      }
    };
    fetchHero();
    return () => { mounted = false; };
  }, []);

  const sourceReviews = remoteReviews && remoteReviews.length > 0 ? remoteReviews : reviewsList;

  const filteredReviews = sourceReviews.filter((rev) => {
    if (!rev) return false;
    const revCat = (rev.category || '').toLowerCase();
    const activeCat = (activeCategory || 'all').toLowerCase();
    const matchesCategory = activeCat === 'all' || revCat === activeCat;

    const q = (searchQuery || '').trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      (rev.title && rev.title.toLowerCase().includes(q)) ||
      (rev.excerpt && rev.excerpt.toLowerCase().includes(q)) ||
      (rev.author && rev.author.toLowerCase().includes(q)) ||
      (rev.tag && rev.tag.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* HERO BANNER */}
      <section className="page-banner-section commentaires">
        <div
          className="page-banner-bg"
          style={{
            backgroundImage: `url(${(heroData && heroData.image) || 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg'})`,
          }}
        />
        <div className="page-banner-overlay"></div>
        <div className="container page-banner-content">
          <span className="banner-badge">
            <i className="fas fa-star"></i>
            {(heroData && heroData.badge) || "RETOURS D'EXPÉRIENCE"}
          </span>
          <h1 className="page-banner-title">{(heroData && heroData.title) || 'Vos Avis & Commentaires'}</h1>
          <p className="page-banner-desc">{(heroData && heroData.desc) || 'La confiance et la satisfaction de nos voyageurs francophones sont notre plus grande fierté.'}</p>
        </div>
      </section>

      {/* REVIEWS OVERVIEW & SCORECARD SECTION */}
      <section className="reviews-overview-section">
        <div className="container">
          <div className="scorecard-wrapper">
            {/* 1. Global Score Column */}
            <div className="score-col">
              <span className="score-badge-label">
                <i className="fas fa-award"></i> Score Global
              </span>
              <div className="score-number-wrap">
                <span className="score-number">4.9</span>
                <span className="score-max">/5</span>
              </div>
              <div className="score-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="score-count-badge">
                <i className="fas fa-shield-check"></i> +500 Avis Clients Vérifiés
              </div>
              <p className="score-subtext">
                Note moyenne basée sur les retours certifiés de nos voyageurs en Inde & Népal.
              </p>
            </div>

            {/* 2. Satisfaction Metrics (2x2 Balanced Grid) */}
            <div className="metrics-col">
              <div className="metric-card">
                <div className="metric-top">
                  <span className="metric-icon-wrap metric-tripadvisor">
                    <i className="fab fa-tripadvisor"></i>
                  </span>
                  <div className="metric-value">5.0 / 5</div>
                </div>
                <div className="metric-label">TripAdvisor Excellence</div>
                <div className="metric-sublabel">100% Avis positifs</div>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <span className="metric-icon-wrap metric-trustpilot">
                    <i className="fas fa-star"></i>
                  </span>
                  <div className="metric-value">4.9 / 5</div>
                </div>
                <div className="metric-label">Trustpilot Vérifié</div>
                <div className="metric-sublabel">Note d'excellence</div>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <span className="metric-icon-wrap metric-driver">
                    <i className="fas fa-car-side"></i>
                  </span>
                  <div className="metric-value">98%</div>
                </div>
                <div className="metric-label">Chauffeurs & Ponctualité</div>
                <div className="metric-sublabel">Service attentionné</div>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <span className="metric-icon-wrap metric-hotel">
                    <i className="fas fa-hotel"></i>
                  </span>
                  <div className="metric-value">97%</div>
                </div>
                <div className="metric-label">Hôtels & Charme Haveli</div>
                <div className="metric-sublabel">Hébergements de charme</div>
              </div>
            </div>

            {/* 3. Official Verified Platforms */}
            <div className="badges-col">
              <span className="badge-verify-text">
                <i className="fas fa-certificate text-teal"></i> Avis Vérifiés Indépendants
              </span>
              <p className="badges-desc">Consultez nos profils officiels et avis certifiés :</p>

              <div className="badges-list">
                <a
                  href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html"
                  target="_blank"
                  rel="noreferrer"
                  className="badge-platform-card"
                  title="Voir nos avis sur TripAdvisor"
                >
                  <img src="/images/tripadvisor-badge.jpg" alt="TripAdvisor Jodhpur Voyage" className="badge-platform-img" />
                  <div className="badge-platform-info">
                    <span className="badge-platform-name">TripAdvisor</span>
                    <span className="badge-platform-link">Lire les avis <i className="fas fa-external-link-alt"></i></span>
                  </div>
                </a>

                <a
                  href="https://www.trustpilot.com/review/jodhpurvoyage.com"
                  target="_blank"
                  rel="noreferrer"
                  className="badge-platform-card"
                  title="Voir nos avis sur Trustpilot"
                >
                  <img src="/images/trustpilot-badge.jpg" alt="Trustpilot Jodhpur Voyage" className="badge-platform-img" />
                  <div className="badge-platform-info">
                    <span className="badge-platform-name">Trustpilot</span>
                    <span className="badge-platform-link">Lire les avis <i className="fas fa-external-link-alt"></i></span>
                  </div>
                </a>

                <a
                  href="https://www.google.com/search?q=Jodhpur+Voyage"
                  target="_blank"
                  rel="noreferrer"
                  className="badge-platform-card"
                  title="Voir nos avis sur Google"
                >
                  <img src="/images/google-review-badge.jpg" alt="Google Reviews Jodhpur Voyage" className="badge-platform-img" />
                  <div className="badge-platform-info">
                    <span className="badge-platform-name">Google Reviews</span>
                    <span className="badge-platform-link">Note 4.9 ★ <i className="fas fa-external-link-alt"></i></span>
                  </div>
                </a>
              </div>
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
            {filteredReviews.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem', width: '100%', gridColumn: '1 / -1', background: '#fff', borderRadius: '16px', border: '1px solid #EBF2F2' }}>
                <i className="fas fa-search" style={{ fontSize: '2.5rem', color: '#B5C4C4', marginBottom: '1rem', display: 'block' }}></i>
                <h3 style={{ fontSize: '1.3rem', color: '#1A2B2C', marginBottom: '0.5rem' }}>Aucun avis trouvé</h3>
                <p style={{ color: '#6B7D7E', fontSize: '0.95rem' }}>Essayez d'autres mots-clés ou sélectionnez une autre catégorie.</p>
                <button
                  type="button"
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="btn btn-sm btn-primary"
                  style={{ marginTop: '1.2rem' }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              filteredReviews.map((rev, idx) => {
                const starCount = Math.min(5, Math.max(1, parseInt(rev.stars, 10) || 5));
                return (
                  <div className="tour-card" key={idx} style={{ height: '100%' }}>
                    <div className="tour-card-image-wrap">
                      <img
                        src={rev.image || '/images/dest-jodhpur.jpg'}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = rev.fallbackImg || '/images/dest-jodhpur.jpg';
                        }}
                        alt={rev.title || 'Avis voyageur'}
                        className="tour-card-img"
                      />
                      <span className="tour-card-badge">
                        <i className={`fas ${rev.tagIcon || 'fa-map-marker-alt'}`}></i> {rev.tag || 'Circuit sur mesure'}
                      </span>
                    </div>
                    <div className="tour-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                          <h3 className="tour-card-title" style={{ fontSize: '1.1rem', margin: 0 }}>
                            {rev.title}
                          </h3>
                          <div className="review-stars" style={{ color: '#C58B39', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                            {[...Array(starCount)].map((_, i) => (
                              <i key={i} className="fas fa-star" style={{ marginRight: '2px' }}></i>
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
                        <Link href={rev.link || '/tours'} className="btn btn-sm btn-outline">
                          Voir le circuit <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
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
