'use client';

import React from 'react';
import Link from 'next/link';

export default function NotreEquipePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="team-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
          alt="Notre Équipe Jodhpur Voyage"
          className="team-hero-bg"
          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
        />
        <div className="container team-hero-content">
          <div className="team-hero-badge">
            <i className="fas fa-users"></i> Experts Locaux Francophones
          </div>
          <h1 className="team-hero-title">
            La Team Jodhpur Voyage<br />
            <span>Notre équipe locale au service de votre voyage</span>
          </h1>
          <p className="team-hero-desc">
            Une équipe passionnée vivant et travaillant en Inde pour vous offrir des conseils personnalisés, un accompagnement francophone et des circuits sur-mesure d'exception.
          </p>
        </div>
      </section>

      {/* INTRO CARD SECTION */}
      <section className="section-padding bg-light pb-0">
        <div className="container">
          <div className="team-intro-card">
            <div className="team-intro-tag">
              <i className="fas fa-gem"></i> JODHPUR VOYAGE PVT LTD
            </div>
            <h2 className="team-intro-title">
              La Team Jodhpur Voyage <span className="text-teal-italic">– Notre équipe locale</span>
            </h2>

            <div className="team-intro-quote-box">
              <i className="fas fa-quote-left quote-icon"></i>
              <p>
                Nous sommes fiers de compter plus de 6 experts voyages vivant et travaillant directement en Inde, au plus près des destinations que nous proposons. Nos experts font partie intégrante de nos équipes sur place : ils explorent sans cesse leur pays, découvrent des hébergements de charme uniques et tissent des liens solides avec nos partenaires locaux.
              </p>
            </div>

            <div className="team-intro-body">
              <p>
                Cette proximité unique vous offre des conseils ultra-personnalisés, basés sur une connaissance approfondie et actualisée de chaque région. Avec <strong>Jodhpur Voyage</strong>, partez l’esprit serein, accompagnés par des guides francophones diplômés et autorisés par le ministère du Tourisme de l'Inde, portés par une chaleureuse <em>"personal touch"</em>.
              </p>
            </div>

            <div className="team-highlights-grid">
              <div className="team-highlight-pill">
                <i className="fas fa-user-check"></i>
                <div>
                  <strong>+6 Experts sur place</strong>
                  <span>Vivant & travaillant en Inde</span>
                </div>
              </div>
              <div className="team-highlight-pill">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <strong>Guides Diplômés</strong>
                  <span>Agréés Ministère du Tourisme</span>
                </div>
              </div>
              <div className="team-highlight-pill">
                <i className="fas fa-heart"></i>
                <div>
                  <strong>Service Sur Mesure</strong>
                  <span>Conseils & "Personal Touch"</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEAM MEMBERS GRID */}
          <div className="team-grid">
            {/* MEMBER 1: VIKEY */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/3f297bb8-b810-4825-8074-d197af7e3542-250x250.jpg"
                    alt="Vikey Guide Francophone Jodhpur Voyage"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-12.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Vikey</h3>
                  <div className="member-role">Experte Voyage Inde du Nord & Himalayenne</div>
                  <span className="member-specialty"><i className="fas fa-map-marker-alt"></i> Rajasthan, Bénares, Ladakh, Spiti</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Namasté, je suis Vikey, guide francophone certifiée et originaire du Rajasthan. J'ai effectué mes études d'histoire à Delhi et j'ai obtenu mon diplôme de langue française à l'Alliance Française de Pondichéry en 2007.
                </p>
                <div className="member-quote">
                  "J'adore la ville d'Udaipur (la Venise de l'Inde) pour son atmosphère romantique, ses lacs majestueux et sa culture fascinante qui m'apporte une paix profonde."
                </div>
              </div>
            </div>

            {/* MEMBER 2: PRAVEEN */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/a07bc3a2-3ec0-4c82-a583-ba5e61f3a911-250x250.jpg"
                    alt="Praveen Guide Francophone"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-8.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Praveen</h3>
                  <div className="member-role">Experte Voyage Inde du Nord & Sud</div>
                  <span className="member-specialty"><i className="fas fa-map-marker-alt"></i> Rajasthan, Inde du Nord & Sud</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Je m'appelle Praveen, guide francophone diplômé et passionné par mon métier depuis 2014. J'ai été formé à l'Alliance Française de Pondichéry. Mon objectif est de vous faire découvrir ma terre natale à travers mes yeux.
                </p>
                <div className="member-quote">
                  "En vous laissant surprendre par les couleurs, les rites et la gastronomie, vous découvrirez une population indienne d'une bienveillance inouïe."
                </div>
              </div>
            </div>

            {/* MEMBER 3: RAJ */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/Raj-Guide-francophone-en-Inde-250x250.jpg"
                    alt="Raj Guide Francophone"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-6.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Raj</h3>
                  <div className="member-role">Expert Voyage & Guide Francophone</div>
                  <span className="member-specialty"><i className="fas fa-map-marker-alt"></i> Rajasthan, Amritsar, Bénares, Sud</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Je suis Raj, guide francophone depuis 2015. Mon leitmotiv au quotidien est de tout mettre en œuvre pour vous faire rêver et vivre des expériences inoubliables lors de votre séjour en Inde.
                </p>
                <div className="member-quote">
                  "Partager la magie culturelle, les temples séculaires et les traditions locales en français est la plus belle récompense de mon métier."
                </div>
              </div>
            </div>

            {/* MEMBER 4: KAPIL */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/Kapil-guide-francophone-en-Inde-250x250.jpg"
                    alt="Kapil Guide Touristique Francophone"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-9.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Kapil</h3>
                  <div className="member-role">Expert Patrimoine & Culture</div>
                  <span className="member-specialty"><i className="fas fa-map-marker-alt"></i> Rajasthan, Gujarat, Varanasi, Kerala</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Bonjour les amis ! Je suis un guide touristique francophone dynamique originaire du Rajasthan avec plus de 10 ans d'expérience. Spécialiste des visites historiques, de Varanasi au Kerala.
                </p>
                <div className="member-quote">
                  "J'aime transmettre mes connaissances historiques et vous faire découvrir l'Inde authentique à travers le regard chaleureux des locaux."
                </div>
              </div>
            </div>

            {/* MEMBER 5: VIKRAM */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/09/Vikram-Agence-de-voyage-en-Inde-250x250.jpg"
                    alt="Vikram Manager Transferts"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-12.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Vikram</h3>
                  <div className="member-role">Manager Back-Office & Logistique</div>
                  <span className="member-specialty"><i className="fas fa-headset"></i> Transferts Aéroport & Réservations 24/7</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Originaire de Jodhpur, j'ai étudié les arts puis passé deux ans à l'Alliance Française de Delhi. Je gère le suivi logistique, les chauffeurs, les hôtels et l'accueil personnalisé des voyageurs.
                </p>
                <div className="member-quote">
                  "« Il est temps de vivre la vie que tu t'es imaginée » – Henry James. Nous faisons en sorte que chaque détail de votre logistique soit irréprochable."
                </div>
              </div>
            </div>

            {/* MEMBER 6: MOHIT */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <div className="d-flex align-items-center justify-content-center w-100 h-100 bg-primary text-white font-heading fw-bold fs-3" style={{ borderRadius: '50%' }}>M</div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">Mohit</h3>
                  <div className="member-role">Comptable & Responsable Financier</div>
                  <span className="member-specialty"><i className="fas fa-calculator"></i> Gestion Financière & Transparence</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Responsable de la comptabilité d'entreprise et du suivi de la facturation chez Jodhpur Voyage. Passionné de voyages en montagne, particulièrement dans l'Himachal Pradesh et à Rishikesh.
                </p>
                <div className="member-quote">
                  "Garantir une gestion rigoureuse et transparente permet à toute l'équipe de se concentrer sur l'excellence de votre voyage."
                </div>
              </div>
            </div>

            {/* MEMBER 7: OM */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/09/Om-Chauffeur-en-Inde-250x250.jpg"
                    alt="Om Chauffeur Privé Jodhpur Voyage"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-8.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Om</h3>
                  <div className="member-role">Chauffeur Privé d'Expérience</div>
                  <span className="member-specialty"><i className="fas fa-car"></i> Rajasthan, Gujarat, Agra, Bénares</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Je suis OM, chauffeur privé pour l'agence Jodhpur Voyage depuis 8 ans. J'ai parcouru le Rajasthan, le Gujarat, le Madhya Pradesh et Bénares avec de très nombreuses familles francophones.
                </p>
                <div className="member-quote">
                  "Votre sécurité et votre confort de route sont ma priorité absolue tout au long de votre périple en Inde."
                </div>
              </div>
            </div>

            {/* MEMBER 8: MONU */}
            <div className="team-member-card">
              <div className="member-header">
                <div className="member-avatar-wrap">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/09/Monu-voyage-avec-chauffeur-en-Inde-250x250.jpg"
                    alt="Monu Chauffeur Privé"
                    className="member-avatar-img"
                    onError={(e) => { e.target.src = '/images/image-9.jpg'; }}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Monu</h3>
                  <div className="member-role">Chauffeur Privé Spécialiste Himalaya</div>
                  <span className="member-specialty"><i className="fas fa-car-side"></i> Punjab, Himachal, Spiti, Uttarakhand</span>
                </div>
              </div>
              <div className="member-bio">
                <p>
                  Chauffeur expérimenté depuis 10 ans chez Jodhpur Voyage, spécialiste des routes de montagne du Punjab, de l'Himachal Pradesh, de la vallée de Spiti et du Kinnaur avec les voyageurs francophones.
                </p>
                <div className="member-quote">
                  "Découvrir les cols de l'Himalaya et les temples secrets en voiture privée avec un service attentionné est une expérience inoubliable."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

