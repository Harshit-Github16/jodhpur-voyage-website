'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DestinationRajasthanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourTitle, setSelectedTourTitle] = useState('');
  const [selectedTourDuration, setSelectedTourDuration] = useState('');

  const rajasthanPackages = [
    {
      title: 'Séjour au Rajasthan et Bénarès – Le Rajasthan et la rivière Gange',
      badge: 'Populaire',
      duration: '14 Jours / 13 Nuits',
      location: 'Rajasthan & Rivière Gange',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg',
      fallbackImg: '/images/image-6.jpg',
      excerpt: 'Un voyage d\'exception alliant la féerie des palais des Maharajas (Delhi, Jaïpur, Jodhpur, Udaipur, Agra) et la spiritualité sacrée de Varanasi sur les bords du Gange.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Voyage au Rajasthan Hors des Sentiers Battus',
      badge: 'Authentique',
      duration: '15 Jours / 14 Nuits',
      location: 'Villages & Forts Ruraux',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2018/05/Voyage-Rajasthan-Inde.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      excerpt: 'Immergez-vous dans la vraie vie rurale indienne, dormez dans des havelis de charme et découvrez des palais secrets d\'anciens maharajas loin des sentiers battus.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Le Grand Tour des Cités Royales du Rajasthan',
      badge: 'Incontournable',
      duration: '12 Jours / 11 Nuits',
      location: 'Jaïpur, Jodhpur & Jaisalmer',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
      excerpt: 'Un itinéraire grandiose à travers la Ville Rose de Jaïpur, la Ville Bleue de Jodhpur et la Cité Dorée de Jaisalmer aux portes du grand désert du Thar.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Rajasthan Romantique & Lacs d\'Udaipur',
      badge: 'Charme & Romantisme',
      duration: '10 Jours / 9 Nuits',
      location: 'Udaipur, Ranakpur & Pushkar',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg',
      fallbackImg: '/images/image-12.jpg',
      excerpt: 'Une traversée poétique des palais sur le lac Pichola à Udaipur, des temples d\'Adinath sculptés à Ranakpur et des rives sacrées du lac de Pushkar.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Désert du Thar & Nuits en Bivouac à Jaisalmer',
      badge: 'Aventure Désert',
      duration: '8 Jours / 7 Nuits',
      location: 'Jaisalmer & Désert du Thar',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg',
      fallbackImg: '/images/image-9.jpg',
      excerpt: 'Une expérience féerique dans les sables d\'or du désert du Thar : promenade à dos de chameau, nuit sous le ciel étoilé et visite de la citadelle vivante.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Splendeurs des Palais & Havelis du Shekhawati',
      badge: 'Culture & Patrimoine',
      duration: '10 Jours / 9 Nuits',
      location: 'Mandawa, Nawalgarh & Shekhawati',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-7.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      excerpt: 'Découvrez la plus vaste galerie d\'art à ciel ouvert au monde, réputée pour ses demeures marchandes peintes à la main et ses villages authentiques.',
      link: '/tours/rajasthan',
    },
  ];

  const handleOpenModal = (title, duration) => {
    setSelectedTourTitle(title);
    setSelectedTourDuration(duration);
    setIsModalOpen(true);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="rajasthan-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="Rajasthan Header"
          className="rajasthan-hero-bg"
        />
        <div className="container rajasthan-hero-content">
          <span className="hero-badge">
            <i className="fas fa-crown"></i> La Terre des Maharajas
          </span>
          <h1 className="rajasthan-hero-title">Voyage au Rajasthan</h1>
          <p className="rajasthan-hero-desc">
            Palais d'opulence, forteresses imprenables, désert d'or et cités colorées. Découvrez la région phare de l'Inde avec nos guides et chauffeurs locaux.
          </p>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Circuits & Offres Spéciales</span>
            <h2 className="section-title">Nos Packages de Voyage au Rajasthan</h2>
            <p className="section-description">Sélectionnez un circuit privatif sur mesure et découvrez son itinéraire complet.</p>
          </div>

          <div className="tours-grid">
            {rajasthanPackages.map((pkg, idx) => (
              <div className="tour-card" key={idx}>
                <Link href={pkg.link} className="tour-card-image-wrap" title="Voir l'itinéraire du voyage">
                  <img
                    src={pkg.image}
                    onError={(e) => { e.target.src = pkg.fallbackImg; }}
                    alt={pkg.title}
                  />
                  <span className="tour-card-badge">{pkg.badge}</span>
                  <div className="tour-card-duration">
                    <i className="far fa-clock"></i> {pkg.duration}
                  </div>
                </Link>
                <div className="tour-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="tour-card-location">
                      <i className="fas fa-map-marker-alt"></i> {pkg.location}
                    </div>
                    <h3 className="tour-card-title">
                      <Link href={pkg.link}>{pkg.title}</Link>
                    </h3>
                    <p className="tour-card-excerpt">{pkg.excerpt}</p>
                  </div>
                  <div className="tour-card-footer mt-auto" style={{ paddingTop: '1rem', borderTop: '1px solid #EBF2F2', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link href={pkg.link} className="btn btn-sm btn-outline">
                      Voir l'itinéraire
                    </Link>
                    <button
                      onClick={() => handleOpenModal(pkg.title, pkg.duration)}
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fas fa-paper-plane"></i> Devis / Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Concevez votre voyage au Rajasthan sur mesure</h2>
          <Link href="/voyage-sur-mesure" className="btn btn-primary btn-lg">
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="booking-modal-overlay active">
          <div className="booking-modal">
            <div className="booking-modal-header">
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Fermer">
                <i className="fas fa-times"></i>
              </button>
              <h3 className="booking-modal-title">
                <i className="fas fa-paper-plane"></i> Votre Voyage – Demande de Devis
              </h3>
              <div className="selected-tour-badge">
                <i className="fas fa-map-marked-alt"></i> <span>{selectedTourTitle}</span>
              </div>
            </div>
            <div className="booking-modal-body">
              <p style={{ fontSize: '0.85rem', marginBottom: '1rem', color: '#5C6768' }}>
                Demande de devis gratuit pour : <strong>{selectedTourTitle}</strong> ({selectedTourDuration})
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre demande! Notre équipe vous recontactera très vite.'); setIsModalOpen(false); }}>
                <div className="form-group">
                  <label className="form-label">Nom complet *</label>
                  <input type="text" className="form-control" required placeholder="Votre nom" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" required placeholder="votre.email@domaine.fr" />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone / WhatsApp *</label>
                  <input type="tel" className="form-control" required placeholder="+33 6 12 34 56 78" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message ou précisions *</label>
                  <textarea className="form-control" rows="3" required placeholder="Vos dates, nombre de personnes..."></textarea>
                </div>
                <button type="submit" className="modal-submit-btn">
                  Envoyer ma demande <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
