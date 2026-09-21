'use client';

import React from 'react';
import Link from 'next/link';

export default function QuiNousSommesPage() {
  return (
    <main>
      {/* HERO BANNER */}
      <section className="about-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
          onError={(e) => { e.target.src = '/images/image-12.jpg'; }}
          alt="Qui Sommes Nous Banner"
          className="about-hero-bg"
        />
        <div className="container about-hero-content">
          <span className="hero-badge">
            <i className="fas fa-compass"></i> Notre Histoire & Nos Engagements
          </span>
          <h1 className="about-hero-title">Qui Sommes Nous ?</h1>
          <p className="about-hero-desc">
            Agence de voyage locale francophone en Inde et au Népal. Découvrez l'équipe passionnée et l'histoire qui anime Jodhpur Voyage depuis plus de 20 ans.
          </p>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-subtitle">Notre Identité</span>
              <h2 className="section-title about-title">Une Agence Locale Francophone et Passionnée</h2>
              <div className="about-text">
                <p className="contact-lead-desc">
                  <strong>Jodhpur Voyage</strong> est une agence de voyage locale basée au Rajasthan en Inde. Experte dans le tourisme avec une parfaite connaissance du pays, nous souhaitons vous faire découvrir l'Inde et le Népal. Enregistrée au ministère du tourisme du Rajasthan, nous sommes en mesure de vous assurer toutes les prestations nécessaires dont vous aurez besoin durant votre séjour.
                </p>
                <p className="contact-lead-desc">
                  Nous vous proposons des forfaits de voyages, mais nous sommes aussi à votre disposition pour élaborer des circuits personnalisés. Notre agence est spécialisée dans le <strong><Link href="/voyage-sur-mesure" className="footer-contact-link">voyage sur mesure</Link></strong> et organise des voyages depuis plus de 20 ans. Nous sommes une agence locale donc disponible, réactive et à l'écoute de toutes les demandes des voyageurs.
                </p>
                <p>
                  Une fois sur place, nous restons à votre disposition et nous nous assurons du bon déroulement de votre voyage. Nous avons à cœur de vous transmettre notre passion et de vous faire découvrir notre pays autrement.
                </p>
              </div>
            </div>

            <div className="about-image-wrapper">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
                onError={(e) => { e.target.src = '/images/image-9.jpg'; }}
                alt="Jodhpur Voyage Architecture"
                className="about-image"
              />
            </div>
          </div>

          {/* FOUNDER'S NOTE SECTION (MR SINGH) */}
          <div className="founder-card" id="valeurs">
            <div className="founder-grid">
              <div className="founder-img-col">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2016/06/Jodhpur_Voyage_Inde-276x300.jpg"
                  onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                  alt="Mr Singh - Fondateur Jodhpur Voyage"
                  className="founder-img"
                />
                <h3 className="founder-name">Mr Singh</h3>
                <span className="founder-role">Fondateur & Interlocuteur Principal</span>
              </div>

              <div>
                <span className="section-subtitle"><i className="fas fa-quote-left"></i> Le Mot du Fondateur</span>
                <h2 className="section-title about-title">Notre Philosophie</h2>

                <blockquote className="founder-quote">
                  « Passionné par mon pays et sa culture, j'ai obtenu mon master de tourisme à l'université de Jodhpur et j'ai débuté en tant que guide francophone pour les agences de voyages de Delhi. À la suite d'une rencontre avec une française et les liens d'amitié aidant, j'ai pu réaliser mon rêve et créer ma propre agence de voyage. Aujourd'hui, j'ai le plaisir de partager ce rêve avec mon équipe et mes clients. »
                </blockquote>

                <p className="founder-desc">
                  Le projet naît d'un désir de s'ouvrir au monde et de partager la culture et les paysages de l'Inde. Notre pays, mystérieux et paradoxal, fascine par sa culture, sa diversité, la coexistence entre ses multiples religions, ses centaines de langues et dialectes. Ses paysages très variés entre plaines, déserts, montagnes et océans continuent de nous fasciner tout autant que vous.
                </p>

                <p className="founder-desc">
                  Nous savons que vous pourrez parfois être surpris, mais nous sommes persuadés que vous ne resterez pas indifférent. C'est avec une grande passion, un professionnalisme et un amour profond pour l'Inde que notre équipe vous fait découvrir ce pays.
                </p>
              </div>
            </div>
          </div>

          {/* PILLARS OF COMMITMENT GRID */}
          <div id="engagement">
            <div className="section-header">
              <span className="section-subtitle">Pourquoi Nous Choisir</span>
              <h2 className="section-title">Les Piliers de Notre Engagement</h2>
              <p className="section-description">Un service d'exception pour un voyage en toute sérénité.</p>
            </div>

            <div className="pillars-grid">
              {/* Pillar 1 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-tag"></i>
                </div>
                <h3 className="pillar-title">En Direct & Sans Intermédiaire</h3>
                <p className="pillar-desc">
                  Nous vous proposons des prix en direct, négociés et sans intermédiaires, vous garantissant le meilleur rapport qualité-prix.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-hotel"></i>
                </div>
                <h3 className="pillar-title">Hébergements de Charme & Havelis</h3>
                <p className="pillar-desc">
                  Nous vous conseillons les Havelis, traditionnelles maisons de maître restaurées en hôtels de charme pour préserver l'âme authentique d'antan.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-car-side"></i>
                </div>
                <h3 className="pillar-title">Transport & Chauffeurs Privés</h3>
                <p className="pillar-desc">
                  Véhicules récents et chauffeurs expérimentés pour vous permettre de garder toute votre quiétude et sécurité durant les trajets.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="pillar-title">Guides Francophones Certifiés</h3>
                <p className="pillar-desc">
                  Guides francophones officiels qui assurent l'explication culturelle et vous protègent des abus commerciaux sur les sites.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <h3 className="pillar-title">Circuits 100% Personnalisables</h3>
                <p className="pillar-desc">
                  Chaque voyageur est unique : nous ajustons le rythme, la durée et les étapes selon vos envies spécifiques.
                </p>
              </div>

              {/* Pillar 6 */}
              <div className="pillar-card">
                <div className="pillar-icon-circle">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="pillar-title">Assistance & Suivi 24h/7j</h3>
                <p className="pillar-desc">
                  Une équipe locale réceptive disponible à tout moment sur place en Inde pour répondre à la moindre demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg"
          onError={(e) => { e.target.src = '/images/image-8.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Envie de réaliser le voyage de vos rêves en Inde ?</h2>
          <Link href="/voyage-sur-mesure" className="btn btn-primary btn-lg">
            Demander un Devis Sur Mesure
          </Link>
        </div>
      </section>
    </main>
  );
}
