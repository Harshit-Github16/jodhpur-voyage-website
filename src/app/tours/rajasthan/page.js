'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TourRajasthanDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {/* Tour Detail Hero */}
      <section className="tour-detail-hero">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg"
          onError={(e) => { e.target.src = '/images/image-6.jpg'; }}
          alt="Rajasthan Detail"
          className="tour-detail-hero-bg"
        />
        <div className="container tour-detail-hero-content">
          <span className="hero-badge">
            <i className="fas fa-star"></i> Incontournable
          </span>
          <h1 className="tour-detail-title">
            Séjour au Rajasthan et Bénarès – Le Rajasthan et la rivière Gange
          </h1>
          <div className="tour-detail-meta">
            <span><i className="far fa-clock"></i> 14 Jours / 13 Nuits</span>
            <span><i className="fas fa-user-friends"></i> Privatif avec Chauffeur</span>
            <span><i className="fas fa-map-marker-alt"></i> Delhi - Jaïpur - Jodhpur - Udaipur - Agra - Varanasi</span>
          </div>
        </div>
      </section>

      {/* Itinerary Details */}
      <section className="section-padding bg-white">
        <div className="container tour-detail-grid">
          <div>
            <h2 className="tour-section-title">Programme au Jour le Jour</h2>
            <p className="tour-section-desc">
              Voici la trame de votre itinéraire. Tout peut être ajusté selon vos envies (rythme, catégories d'hôtels, visites).
            </p>

            <div className="itinerary-timeline">
              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 1 - 2 : Arrivée à Delhi & Visite du Vieux Delhi</strong>
                <p className="itinerary-day-desc">
                  Accueil à l'aéroport par notre équipe locale. Découverte de la Grande Mosquée Jama Masjid, bazar de Chandni Chowk en rickshaw et Qutub Minar.
                </p>
              </div>

              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 3 - 5 : La Cité Rose de Jaïpur & Le Fort d'Amber</strong>
                <p className="itinerary-day-desc">
                  Route vers Jaïpur. Visite du Fort d'Amber à dos d'éléphant ou en 4x4, le Palais des Vents (Hawa Mahal) et le City Palace.
                </p>
              </div>

              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 6 - 7 : Jodhpur – La Cité Bleue & Fort Mehrangarh</strong>
                <p className="itinerary-day-desc">
                  Exploration de la majestueuse forteresse de Mehrangarh surplombant la ville bleue. Rencontre avec la communauté rurale Bishnoï.
                </p>
              </div>

              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 8 - 9 : Agra & Le Taj Mahal</strong>
                <p className="itinerary-day-desc">
                  Route vers Agra avec halte à la cité fantôme de Fatehpur Sikri. Émerveillement devant le Taj Mahal au lever du soleil.
                </p>
              </div>

              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 10 - 12 : Varanasi (Bénarès) & Le Gange Sacré</strong>
                <p className="itinerary-day-desc">
                  Vol intérieur pour Varanasi. Promenade en barque sur le Gange à l'aube et cérémonies de l'Aarti du soir au bord du fleuve.
                </p>
              </div>

              <div className="itinerary-day-card">
                <strong className="itinerary-day-title">Jour 13 - 14 : Retour à Delhi & Vol International</strong>
                <p className="itinerary-day-desc">
                  Retour à Delhi pour vos achats de souvenirs et transfert à l'aéroport international pour votre vol retour.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Card Widget */}
          <div>
            <div className="booking-widget-card">
              <div className="widget-badge-pill">
                <i className="fas fa-crown"></i> Circuit Privatif
              </div>
              <h3 className="booking-widget-title" style={{ marginTop: '0.8rem' }}>Séjour sur Mesure</h3>
              <p className="booking-widget-desc">
                Obtenez votre itinéraire personnalisé avec chauffeur privé & guide francophone.
              </p>

              {/* Key Highlights Checklist */}
              <ul className="sidebar-highlights-list">
                <li><i className="fas fa-check-circle"></i> <span>Chauffeur privé dédié 24h/7j</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Hôtels de charme & Havelis du patrimoine</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Guide local francophone certifié</span></li>
                <li><i className="fas fa-check-circle"></i> <span>Devis 100% gratuit sous 24h sans engagement</span></li>
              </ul>

              <div className="sidebar-action-box" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary btn-full btn-lg"
                >
                  <i className="fas fa-paper-plane"></i> Demander un Devis Gratuit
                </button>
                <a
                  href="https://wa.me/919650698669"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-sidebar"
                >
                  <i className="fab fa-whatsapp"></i> Échanger sur WhatsApp
                </a>
              </div>

              {/* Trust Badges Inside Sidebar Card */}
              <div className="sidebar-trust-box">
                <div className="trust-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p><strong>Note 4.9 / 5</strong> basée sur 250+ avis Tripadvisor & Trustpilot</p>
              </div>
            </div>
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
                <i className="fas fa-paper-plane"></i> Demande de Devis - Circuit Rajasthan
              </h3>
            </div>
            <div className="booking-modal-body">
              <form onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre demande! Notre équipe vous contactera rapidement.'); setIsModalOpen(false); }}>
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
                  <label className="form-label">Commentaires & dates souhaitées *</label>
                  <textarea className="form-control" rows="3" required placeholder="Vos attentes..."></textarea>
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
