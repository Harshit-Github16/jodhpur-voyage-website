'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VoyageSurMesurePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Form selections
  const [destinations, setDestinations] = useState(['Rajasthan']);
  const [budget, setBudget] = useState('500€ à 1000€ / pers.');

  const toggleDestination = (val) => {
    if (destinations.includes(val)) {
      setDestinations(destinations.filter((d) => d !== val));
    } else {
      setDestinations([...destinations, val]);
    }
  };

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {/* HERO BANNER SECTION */}
      <section className="mesure-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
          alt="Voyage Sur Mesure Banner"
          className="mesure-hero-bg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
        />
        <div className="container mesure-hero-content">
          <span className="hero-badge">Sur Mesure</span>
          <h1 className="mesure-hero-title">Voyage Sur Mesure en Inde & Népal</h1>
        </div>
      </section>

      {/* SECTION 1: PRESENTATION DU VOYAGE SUR MESURE */}
      <section id="decouvrir-philosophie" className="section-padding bg-white">
        <div className="container">
          <div className="welcome-grid">
            {/* Left: Written Content */}
            <div className="welcome-content">
              <span className="section-subtitle"><i className="fas fa-compass"></i> Agence de Voyage Locale Francophone en Inde</span>
              <h2 className="welcome-title about-title">
                Voyage sur mesure en Inde & Népal
              </h2>

              <p className="welcome-lead">
                <em>Jodhpur Voyage</em> vous propose un voyage sur mesure en Inde, adapté à votre rythme, à votre budget, à vos goûts et à vos envies, et organisé par une agence de voyage locale francophone.
              </p>

              <p className="contact-lead-desc">
                En Inde et au Népal, Jodhpur Voyage s’efforce de vous offrir un voyage personnalisé qui reflète vos envies. Que vous souhaitiez un itinéraire classique ou un voyage hors des sentiers battus, nous sommes à l’écoute. Nous tissons <span className="highlight-pill-gold"><i className="fas fa-check"></i> des séjours personnalisés</span> qui correspondent aux attentes de chacun. Ils s’adaptent aux gros et aux petits budgets, aux familles, aux aventuriers, aux artistes, aux aventuriers-artistes et à tous ceux qui veulent se lancer ou se relancer dans la découverte de notre pays.
              </p>

              <div className="content-feature-quote">
                <i className="fas fa-quote-right quote-bg-icon"></i>
                <p>
                  "Nous intervenons dans l’organisation selon votre demande. Nous l’organisons de <strong>A à Z</strong> s’il le faut. Ou, pour ceux qui savent déjà ce qu’ils veulent, nous mettons notre expérience et notre réseau en œuvre afin de vous offrir l’expérience que vous recherchez."
                </p>
              </div>

              <p className="contact-lead-desc">
                Pour créer votre voyage personnalisé, rien de plus simple, <span className="highlight-pill-teal"><i className="fas fa-paper-plane"></i> parlez nous de votre voyage idéal !</span> Dites-nous si vous préférez axer votre voyage sur les grands espaces verts, la musique, la danse, la cuisine locale, l’Histoire, l’architecture, les maharajas, les grands mammifères du sous-continent indien, le yoga… ou concocter un mélange à l’image de la diversité de l’Inde et du Népal. N’hésitez pas à vous inspirer de nos circuits tout faits (A consulter dans ‘destinations’ dans notre menu principal) créés après <strong>20+ ans d’expérience</strong> dans le domaine. Dites-nous si vous voulez des hôtels de luxe, des cabanes en terre, séjourner chez l’habitant, un véhicule, un chauffeur, un guide… personnalisez vos itinéraires au détail près.
              </p>

              <div className="mesure-cta-callout">
                <i className="fas fa-paper-plane score-stars"></i>
                <div>
                  <strong className="contact-info-title">Écrivez-nous à travers le formulaire ci-dessous.</strong>
                  <span className="badge-verify-text">Tout un monde vous attend. À bientôt ! 🙂</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Collage Showcase */}
            <div className="welcome-collage-wrap">
              <div className="welcome-collage">
                <div className="collage-main-frame">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                    alt="Château & Désert du Rajasthan"
                    className="collage-img-main"
                    onError={(e) => { e.target.src = '/images/dest-jaisalmer.jpg'; }}
                  />
                  <div className="collage-img-overlay"></div>
                </div>

                <div className="collage-secondary-frame">
                  <img
                    src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg"
                    alt="Taj Mahal et spiritualité"
                    className="collage-img-secondary"
                    onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                  />
                </div>

                <div className="collage-badge-experience">
                  <div className="badge-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="collage-badge-number">20+</div>
                  <div className="collage-badge-text">Ans d'Expérience</div>
                  <div className="badge-subtext">en Inde & Népal</div>
                </div>

                <div className="collage-badge-floating-tag">
                  <i className="fas fa-award"></i>
                  <span>Sur Mesure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THEMATIC EXPERIENCES GRID */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Personnalisez selon vos Passions</span>
            <h2 className="section-title">Parlez-nous de Votre Voyage Idéal</h2>
            <p className="section-description">
              Du séjour de luxe en palais de maharajas aux cabanes en terre chez l'habitant, composez le mélange parfait à l'image de la diversité de l'Inde et du Népal.
            </p>
          </div>

          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-landmark"></i></div>
              <h3 className="theme-card-title">Histoire & Architecture</h3>
              <p className="theme-card-desc">Forteresses majestueuses, palais rajput, temples sacrés et monuments classés au patrimoine UNESCO.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-crown"></i></div>
              <h3 className="theme-card-title">Maharajas & Luxe</h3>
              <p className="theme-card-desc">Hôtels de patrimoine, havelis historiques et palais princiers pour une immersion royale.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-tree"></i></div>
              <h3 className="theme-card-title">Grands Espaces Verts</h3>
              <p className="theme-card-desc">Plantations de thé verdoyantes, vallées de l'Himalaya, backwaters d'émeraude et désert du Thar.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-om"></i></div>
              <h3 className="theme-card-title">Yoga & Spiritualité</h3>
              <p className="theme-card-desc">Retraites bien-être à Rishikesh, cérémonies Ganga Aarti et méditation au bord des fleuves sacrés.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-music"></i></div>
              <h3 className="theme-card-title">Musique & Danse</h3>
              <p className="theme-card-desc">Festivals folkloriques rajasthanis, spectacles de Kathakali et rythmes traditionnels envoûtants.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-utensils"></i></div>
              <h3 className="theme-card-title">Cuisine & Gastronomie</h3>
              <p className="theme-card-desc">Ateliers de cuisine chez l'habitant, marchés aux épices colorés et spécialités régionales raffinées.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-hippo"></i></div>
              <h3 className="theme-card-title">Safaris & Faune Sauvage</h3>
              <p className="theme-card-desc">Observation du tigre du Bengale, éléphants sauvages et biodiversité exceptionnelle dans les parcs nationaux.</p>
            </div>

            <div className="theme-card">
              <div className="theme-card-icon"><i class="fas fa-home"></i></div>
              <h3 className="theme-card-title">Chez l'Habitant & Cabanes</h3>
              <p className="theme-card-desc">Immersion authentique, cabanes traditionnelles en terre et nuits magiques sous les étoiles du désert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE MULTI-STEP FORM */}
      <section id="formulaire-sur-mesure" className="section-padding bg-white">
        <div className="container form-container-sm">
          <div className="section-header">
            <span className="section-subtitle">Devis Gratuit & Sans Engagement</span>
            <h2 className="section-title">Concevez Votre Voyage sur Mesure</h2>
            <p className="section-description">
              Remplissez ce formulaire et notre équipe d'experts francophones à Jodhpur dessinera votre itinéraire idéal sous 24h.
            </p>
          </div>

          <div className="form-card-container">
            {/* Step Indicators */}
            <div className="form-step-progress">
              <div
                className={`step-indicator ${currentStep === 0 ? 'active' : ''}`}
                onClick={() => setCurrentStep(0)}
                style={{ cursor: 'pointer' }}
              >
                <div className="step-number">1</div>
                <div className="step-label">Destinations</div>
              </div>
              <div
                className={`step-indicator ${currentStep === 1 ? 'active' : ''}`}
                onClick={() => setCurrentStep(1)}
                style={{ cursor: 'pointer' }}
              >
                <div className="step-number">2</div>
                <div className="step-label">Dates & Budget</div>
              </div>
              <div
                className={`step-indicator ${currentStep === 2 ? 'active' : ''}`}
                onClick={() => setCurrentStep(2)}
                style={{ cursor: 'pointer' }}
              >
                <div className="step-number">3</div>
                <div className="step-label">Vos Souhaits & Contact</div>
              </div>
            </div>

            {/* Multi-Step Form */}
            <form id="custom-trip-form" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Votre demande sur mesure a bien été envoyée.'); }}>
              {/* STEP 1: DESTINATIONS */}
              <div className={`form-step ${currentStep === 0 ? 'active' : ''}`}>
                <h3 className="form-step-title">
                  1. Quelle(s) destination(s) souhaitez-vous visiter ? *
                </h3>
                <p className="badge-verify-text">
                  Sélectionnez une ou plusieurs régions parmi nos destinations phares en Inde et au Népal.
                </p>

                <div className="choice-card-grid">
                  {[
                    { val: 'Rajasthan', icon: 'fa-crown' },
                    { val: 'Inde du Nord', icon: 'fa-gopuram' },
                    { val: 'Inde du Sud', icon: 'fa-water' },
                    { val: 'Gujarat', icon: 'fa-campground' },
                    { val: 'Karnataka', icon: 'fa-monument' },
                    { val: 'Ladakh', icon: 'fa-mountain' },
                    { val: 'Népal', icon: 'fa-hiking' },
                    { val: 'Orissa', icon: 'fa-place-of-worship' },
                    { val: 'Promo d’été', icon: 'fa-sun' },
                  ].map((item) => (
                    <label
                      key={item.val}
                      className={`choice-card ${destinations.includes(item.val) ? 'selected' : ''}`}
                      onClick={() => toggleDestination(item.val)}
                    >
                      <input
                        type="checkbox"
                        name="destination"
                        value={item.val}
                        checked={destinations.includes(item.val)}
                        onChange={() => { }}
                      />
                      <span><i className={`fas ${item.icon}`}></i> {item.val}</span>
                    </label>
                  ))}
                </div>

                <div className="reviews-cta-card">
                  <button type="button" className="btn btn-primary btn-next-step" onClick={handleNext}>
                    Étape suivante <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* STEP 2: DATES, DURATION & BUDGET */}
              <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
                <h3 className="form-step-title">
                  2. Vos dates, durée & budget estimé
                </h3>
                <p className="badge-verify-text">
                  Nos circuits s'adaptent aussi bien aux petits qu'aux gros budgets.
                </p>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label"><i className="fas fa-calendar-alt"></i> Date de départ estimée *</label>
                    <input type="date" className="form-control" name="departure_date" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label"><i className="fas fa-clock"></i> Nombre de jours *</label>
                    <input type="text" className="form-control" name="duration" placeholder="Ex: 12 jours, 2 semaines..." required />
                  </div>
                </div>

                <div className="form-group-mb">
                  <label className="form-label"><i className="fas fa-wallet"></i> Budget par personne *</label>
                  <div className="choice-card-grid">
                    {[
                      'Moins de 500€ / pers.',
                      '500€ à 1000€ / pers.',
                      '1000€ à 1500€ / pers.',
                      'Plus de 1500€ / pers.',
                    ].map((b) => (
                      <label
                        key={b}
                        className={`choice-card ${budget === b ? 'selected' : ''}`}
                        onClick={() => setBudget(b)}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          checked={budget === b}
                          onChange={() => { }}
                        />
                        <span>{b}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group-mb">
                  <label className="form-label"><i className="fas fa-bed"></i> Style d'hébergement & transport préféré</label>
                  <select className="form-control" name="accommodation_style">
                    <option value="Hôtels de charme & Haveli 3-4 étoiles">Hôtels de charme & Haveli du patrimoine (3-4 étoiles)</option>
                    <option value="Palais des Maharajas de Luxe 5 étoiles">Palais des Maharajas de Luxe (5 étoiles)</option>
                    <option value="Séjour chez l'habitant & Cabanes en terre">Séjour chez l'habitant & Cabanes en terre</option>
                    <option value="Mélange sur mesure">Mélange personnalisé selon les étapes</option>
                  </select>
                </div>

                <div className="reviews-cta-card">
                  <button type="button" className="btn btn-outline btn-prev-step" onClick={handlePrev}>
                    <i className="fas fa-arrow-left"></i> Précédent
                  </button>
                  <button type="button" className="btn btn-primary btn-next-step" onClick={handleNext}>
                    Étape suivante <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* STEP 3: SPECIFIC DESIRES & CONTACT */}
              <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
                <h3 className="form-step-title">
                  3. Vos étapes, ce que vous aimez & vos coordonnées
                </h3>
                <p className="badge-verify-text">
                  Dites-nous tout sur votre projet : grands espaces, musique, danse, cuisine, Histoire, maharajas, faune, yoga, véhicule avec chauffeur, guide francophone...
                </p>

                <div className="form-group-mb">
                  <label className="form-label"><i className="fas fa-heart"></i> Vos étapes & ce que vous aimez *</label>
                  <textarea className="form-control" name="your_message" rows={5} placeholder="Parlez-nous de votre voyage idéal : étapes souhaitées, rythme de voyage, activités (safari, cours de cuisine, yoga), chauffeur privé, guide francophone..." required></textarea>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label"><i className="fas fa-user"></i> Nom complet *</label>
                    <input type="text" className="form-control" name="full_name" placeholder="Votre prénom et nom" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label"><i className="fas fa-envelope"></i> Email *</label>
                    <input type="email" className="form-control" name="your_email" placeholder="votre.email@domaine.fr" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label"><i className="fas fa-phone-alt"></i> Téléphone / WhatsApp *</label>
                    <input type="tel" className="form-control" name="your_phone" placeholder="+33 6 12 34 56 78" required />
                  </div>
                </div>

                <div className="reviews-cta-card">
                  <button type="button" className="btn btn-outline btn-prev-step" onClick={handlePrev}>
                    <i className="fas fa-arrow-left"></i> Précédent
                  </button>
                  <button type="submit" className="btn btn-secondary btn-lg btn-submit-step">
                    Envoyer ma demande sur mesure <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Simplicité & Transparence</span>
            <h2 className="section-title">Comment Nous Créons Votre Voyage sur Mesure</h2>
            <p className="section-description">
              De votre première idée à votre retour chez vous, bénéficiez de l'accompagnement personnalisé de notre agence locale francophone.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-step-num">1</div>
              <div className="process-icon"><i className="fas fa-edit"></i></div>
              <h3 className="process-title">Exprimez Vos Envies</h3>
              <p className="process-desc">
                Remplissez notre formulaire en indiquant vos dates, votre budget et les thèmes qui vous passionnent.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">2</div>
              <div className="process-icon"><i className="fas fa-comments"></i></div>
              <h3 className="process-title">Échange Francophone</h3>
              <p className="process-desc">
                Un expert voyage basé à Jodhpur étudie votre projet et affine l'itinéraire avec vous sous 24h.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">3</div>
              <div className="process-icon"><i className="fas fa-sliders-h"></i></div>
              <h3 className="process-title">Devis Personnalisé</h3>
              <p className="process-desc">
                Recevez un programme détaillé jour par jour, révisable au détail près selon vos préférences.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">4</div>
              <div className="process-icon"><i className="fas fa-car-side"></i></div>
              <h3 className="process-title">Voyagez en Sérénité</h3>
              <p className="process-desc">
                Accueil VIP, véhicule privé avec chauffeur attentionné et assistance francophone 24h/7j sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REGIONAL DESTINATIONS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Inspirations de Circuits</span>
            <h2 className="section-title">Explorez Nos Régions Phares</h2>
            <p className="section-description">
              Inspirez-vous de nos circuits tout faits créés après 20 ans d'expérience sur le terrain.
            </p>
          </div>

          <div className="region-cards-grid">
            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-crown"></i></div>
                <h3 className="region-card-title">Rajasthan</h3>
              </div>
              <p className="region-card-text">
                Le Rajasthan est le second État le plus touristique de l'Inde. Découvrez les splendeurs du Rajasthan, ses puissantes forteresses et ses palais de maharajas.
              </p>
              <Link href="/destinations/rajasthan" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-gopuram"></i></div>
                <h3 className="region-card-title">Inde du Nord</h3>
              </div>
              <p className="region-card-text">
                Le côtoiement des cultures par ses temples et ses mosquées. Les différents paysages, les provinces de l'Himalaya avec ses glaciers scintillants, ses plaines et les dunes sablonneuses du désert.
              </p>
              <Link href="/destinations" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-water"></i></div>
                <h3 className="region-card-title">Inde du Sud</h3>
              </div>
              <p className="region-card-text">
                Traversée du Sud de l’Inde de Chennai à la côte est à Cochin à la côte ouest. Au programme : les temples pyramidaux et colorés du Sud, l’ancien comptoir français de Pondichéry, l’ashram Aurobindo...
              </p>
              <Link href="/destinations" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-campground"></i></div>
                <h3 className="region-card-title">Gujarat</h3>
              </div>
              <p className="region-card-text">
                Séjour au Rajasthan et Gujarat, Voyage au Gujarat, Circuit au Gujarat, Vacance Gujarat, Circuit des villages Gujarat et artisanat ancestral.
              </p>
              <Link href="/destinations" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-monument"></i></div>
                <h3 className="region-card-title">Karnataka</h3>
              </div>
              <p className="region-card-text">
                Sa côte de sable blanc étincelant, les ruines saisissantes d'Hampi et l'opulence du palais de Mysore comptent parmi les nombreux atouts de cet État du sud-ouest de l'Inde.
              </p>
              <Link href="/destinations" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="region-card">
              <div className="region-card-header">
                <div className="region-card-icon"><i className="fas fa-mountain"></i></div>
                <h3 className="region-card-title">Ladakh</h3>
              </div>
              <p className="region-card-text">
                Ancien royaume bouddhiste situé sur les hauteurs de l'Himalaya offrant quelques uns des paysages les plus impressionnants de l'Inde et abritant de magnifiques monastères.
              </p>
              <Link href="/destinations" className="region-card-link">
                Découvrir les circuits <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE JODHPUR VOYAGE */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle score-stars">Nos Engagements Qualité</span>
            <h2 className="section-title text-white">Pourquoi Voyager Avec Jodhpur Voyage ?</h2>
            <p className="section-description badge-verify-text">
              Des garanties solides pour un séjour personnalisé d'exception en Inde & Népal.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-us-card">
              <i className="fas fa-user-shield why-us-icon"></i>
              <h4 className="why-us-card-title">Agence Locale Directe</h4>
              <p className="why-us-card-desc">Basée à Jodhpur, sans intermédiaire, pour le meilleur rapport qualité/prix.</p>
            </div>

            <div className="why-us-card">
              <i className="fas fa-hand-holding-usd why-us-icon"></i>
              <h4 className="why-us-card-title">Tous Budgets</h4>
              <p className="why-us-card-desc">Du séjour économique chez l'habitant aux palais de maharajas les plus exclusifs.</p>
            </div>

            <div className="why-us-card">
              <i className="fas fa-car why-us-icon"></i>
              <h4 className="why-us-card-title">Chauffeur Privé</h4>
              <p className="why-us-card-desc">Véhicule climatisé récent et chauffeur francophone ou anglophone expérimenté.</p>
            </div>

            <div className="why-us-card">
              <i className="fas fa-headset why-us-icon"></i>
              <h4 className="why-us-card-title">Assistance 24/7</h4>
              <p className="why-us-card-desc">Un contact francophone réactif à votre disposition tout au long de votre parcours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ SUR MESURE */}
      <section className="section-padding bg-cream">
        <div className="container form-container-sm">
          <div className="section-header">
            <span className="section-subtitle">Vos Questions</span>
            <h2 className="section-title">Questions Fréquentes sur le Sur Mesure</h2>
          </div>

          <div className="accordion-container">
            {[
              {
                q: 'Comment se déroule la création de mon voyage sur mesure ?',
                a: 'Après avoir soumis votre formulaire, un conseiller francophone de notre équipe à Jodhpur étudie vos demandes et crée une proposition d\'itinéraire détaillée sous 24 heures. Nous ajustons ensuite les étapes, hôtels et activités autant de fois que nécessaire.',
              },
              {
                q: 'Le devis sur mesure est-il payant ou contraignant ?',
                a: 'Absolument pas ! Tous nos devis et conseils de voyage personnalisés sont 100% gratuits et sans aucun engagement de votre part.',
              },
              {
                q: 'Peut-on combiner plusieurs régions comme le Rajasthan et le Népal ?',
                a: 'Oui, tout à fait. Nos 20 ans d\'expérience sur l\'Inde et le Népal nous permettent de créer des combinés harmonieux (ex: Rajasthan + Varanasi + Népal ou Inde du Nord + Kerala).',
              },
              {
                q: 'Aurons-nous un chauffeur privé dédié ?',
                a: 'Oui. Pour votre confort et votre sécurité, tous nos voyages sur mesure incluent un véhicule privé confortable avec chauffeur professionnel dédié pour l\'intégralité de vos trajets terrestres.',
              },
            ].map((item, idx) => (
              <div key={idx} className={`accordion-item ${activeAccordion === idx ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                  <span className="accordion-title"><i className="fas fa-question-circle"></i> {item.q}</span>
                  <i className="fas fa-chevron-down accordion-icon"></i>
                </div>
                {activeAccordion === idx && (
                  <div className="accordion-body">
                    <p className="contact-lead-desc">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

