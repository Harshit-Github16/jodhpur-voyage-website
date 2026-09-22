'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourTitle, setSelectedTourTitle] = useState('');
  const [selectedTourDuration, setSelectedTourDuration] = useState('');

  const [toursList, setToursList] = useState([
    {
      title: 'Séjour au Rajasthan et Bénarès – Le Rajasthan et la rivière Gange',
      badge: 'Populaire',
      duration: '14 Jours / 13 Nuits',
      location: 'Rajasthan & Bénarès',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg',
      fallbackImg: '/images/image-6.jpg',
      excerpt: 'Delhi, Jaïpur, Jodhpur, Udaipur, Agra (Taj Mahal) et les ghats mystiques de Varanasi.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Voyage spirituel en Inde : Delhi, Amritsar, Dharamsala et Rishikesh',
      badge: 'Spirituel',
      duration: '12 Jours / 11 Nuits',
      location: 'Inde du Nord & Himalaya',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2016/07/voyage-en-inde-Rishikesh.jpg.jpg',
      fallbackImg: '/images/dest-himachal.jpg',
      excerpt: 'Temple d\'Or sikh, résidence tibétaine du Dalai Lama et ashrams sacrés du Gange.',
      link: '/tours/rajasthan',
    },
    {
      title: 'Voyage au Rajasthan Hors des sentiers battus',
      badge: 'Authentique',
      duration: '15 Jours / 14 Nuits',
      location: 'Villages & Forts Ruraux',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2018/05/Voyage-Rajasthan-Inde.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      excerpt: 'Immergez-vous dans la vraie vie rurale indienne, avec nuit chez l\'habitant et palais secrets.',
      link: '/tours/rajasthan',
    },
  ]);

  useEffect(() => {
    let mounted = true;
    const fetchTours = async () => {
      try {
        const res = await fetch(`${API_BASE || ''}/api/v1/tours`);
        const json = await res.json();
        const payload = json?.data || json;
        if (!mounted) return;
        if (payload && Array.isArray(payload.data)) {
          // API follows pagination: { data: [items], count, total }
          const list = payload.data.map((t) => ({
            title: t.title || t.name || '',
            badge: t.badge || '',
            duration: t.duration || '',
            location: t.cityName || t.location || '',
            image: t.image || '',
            fallbackImg: '/images/image-6.jpg',
            excerpt: t.overview || '',
            link: `/tours/${t.slug || t.id || ''}`,
          }));
          if (list.length) setToursList(list);
        } else if (payload && Array.isArray(payload)) {
          const list = payload.map((t) => ({
            title: t.title || t.name || '',
            badge: t.badge || '',
            duration: t.duration || '',
            location: t.cityName || t.location || '',
            image: t.image || '',
            fallbackImg: '/images/image-6.jpg',
            excerpt: t.overview || '',
            link: `/tours/${t.slug || t.id || ''}`,
          }));
          if (list.length) setToursList(list);
        }
      } catch (err) {
        console.warn('Fetch tours failed', err.message || err);
      }
    };
    fetchTours();
    return () => { mounted = false; };
  }, []);

  const handleOpenModal = (title, duration) => {
    setSelectedTourTitle(title);
    setSelectedTourDuration(duration);
    setIsModalOpen(true);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="tours-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="Tours Banner"
          className="tours-hero-bg"
        />
        <div className="container tours-hero-content">
          <span className="hero-badge">
            <i className="fas fa-route"></i> Circuits Thématiques
          </span>
          <h1 className="tours-hero-title">Nos Offres de Voyage</h1>
          <p className="tours-hero-desc">
            Consultez nos itinéraires recommandés ou demandez-nous une personnalisation totale.
          </p>
        </div>
      </section>

      {/* Tours Listing */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="tours-grid">
            {toursList.map((tour, idx) => (
              <div className="tour-card" key={idx}>
                <Link href={tour.link} className="tour-card-image-wrap" title="Voir l'itinéraire">
                  <img
                    src={tour.image}
                    onError={(e) => { e.target.src = tour.fallbackImg; }}
                    alt={tour.title}
                  />
                  {tour.badge && <span className="tour-card-badge">{tour.badge}</span>}
                  <div className="tour-card-duration">
                    <i className="far fa-clock"></i> {tour.duration}
                  </div>
                </Link>
                <div className="tour-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="tour-card-location">
                      <i className="fas fa-map-marker-alt"></i> {tour.location}
                    </div>
                    <h3 className="tour-card-title">
                      <Link href={tour.link}>{tour.title}</Link>
                    </h3>
                    <p className="tour-card-excerpt">{tour.excerpt}</p>
                  </div>
                  <div className="tour-card-footer mt-auto" style={{ paddingTop: '1rem', borderTop: '1px solid #EBF2F2', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link href={tour.link} className="btn btn-sm btn-outline">
                      Voir détail
                    </Link>
                    <button
                      onClick={() => handleOpenModal(tour.title, tour.duration)}
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
