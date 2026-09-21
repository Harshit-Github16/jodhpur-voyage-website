'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNum1] = useState(5);
  const [captchaNum2] = useState(3);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer, 10) !== captchaNum1 + captchaNum2) {
      alert(`Anti-Spam incorrect! ${captchaNum1} + ${captchaNum2} = ${captchaNum1 + captchaNum2}`);
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <main>
      {/* HERO BANNER */}
      <section className="contact-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
          alt="Contact Banner"
          className="contact-hero-bg"
        />
        <div className="container contact-hero-content">
          <span className="hero-badge">
            <i className="fas fa-envelope-open-text"></i> À Votre Écoute
          </span>
          <h1 className="contact-hero-title">Contactez Nous</h1>
          <p className="contact-hero-desc">
            Une question sur un itinéraire ? Notre équipe locale francophone basée à Jodhpur est à votre disposition.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Direct Coordonnees */}
            <div>
              <span className="section-subtitle">Agence Réceptive</span>
              <h2 className="section-title">Nos Coordonnées Directes</h2>
              <p className="contact-lead-desc">
                Basés au cœur du Rajasthan à Jodhpur, nous organisons votre séjour de A à Z avec la réactivité et la proximité d'une agence en direct.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <strong className="contact-info-title">Email Direct</strong>
                    <p>
                      <a href="mailto:Info@jodhpurvoyage.com" className="contact-info-link">
                        Info@jodhpurvoyage.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <strong className="contact-info-title">Téléphone & WhatsApp 24/7</strong>
                    <p>
                      <a href="tel:+919650698669" className="contact-info-link">
                        +91-96 50 69 86 69
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <strong className="contact-info-title">Siège Social & Agence</strong>
                    <p className="contact-lead-desc">Jodhpur, Rajasthan, Inde</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <strong className="contact-info-title">Horaires d'ouverture</strong>
                    <p className="contact-lead-desc">
                      Du Lundi au Samedi : 09h00 - 20h00 (Heure Indienne)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-cream border border-[#BDE0E0] p-5 rounded-2xl mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl flex-shrink-0">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A2B2C]">Besoin d'une réponse immédiate ?</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Écrivez-nous directement sur WhatsApp au{' '}
                    <a href="https://wa.me/919650698669" target="_blank" rel="noreferrer" className="text-[#1D747A] font-bold underline">
                      +91 96506 98669
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <div className="contact-form-card">
                <h3 className="contact-form-title">Envoyez-nous un Message</h3>

                {formSubmitted ? (
                  <div className="contact-success-alert" style={{ display: 'block', margin: '2rem 0', textAlign: 'center' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '2.5rem', color: '#1D747A', marginBottom: '0.8rem', display: 'block' }}></i>
                    <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem' }}>Message Envoyé avec Succès !</h4>
                    <p style={{ fontSize: '0.85rem' }}>
                      Merci <strong>{fullName}</strong>. Notre équipe de conseillers francophones basée au Rajasthan vous recontactera sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Nom complet *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>

                    <div className="contact-form-row">
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="exemple@domaine.fr"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Téléphone / WhatsApp *</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+33 6 12 34 56 78"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message ou Projet de voyage *</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Décrivez votre projet, vos dates souhaitées ou vos questions..."
                        required
                      ></textarea>
                    </div>

                    {/* Anti-Spam Captcha Field */}
                    <div className="form-group spam-verify-group">
                      <label className="form-label">
                        <i className="fas fa-shield-alt"></i> Protection Anti-Spam : Combien font {captchaNum1} + {captchaNum2} ? *
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder="Entrez le résultat"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-full">
                      Envoyer le message <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Prêt à créer votre voyage sur mesure ?</h2>
          <p className="cta-description">
            Élaborons ensemble un itinéraire personnalisé adapté à votre rythme et vos envies.
          </p>
          <div className="cta-buttons">
            <Link href="/voyage-sur-mesure" className="btn btn-primary btn-lg">
              Demander un devis sur mesure
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
