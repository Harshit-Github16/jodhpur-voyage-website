'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container top-bar-container">
            <div className="top-bar-contact">
              <div className="top-bar-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:Info@jodhpurvoyage.com">Info@jodhpurvoyage.com</a>
              </div>
              <div className="top-bar-item">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+919650698669">+91-96 50 69 86 69</a>
              </div>
            </div>
            <div className="top-bar-announcement">
              <span>Voyager en confiance :</span>{' '}
              <Link href="/voyage-sur-mesure">devis gratuit & conseils sur mesure</Link>
            </div>
            <div className="top-bar-social">
              <a
                href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html"
                target="_blank"
                rel="noreferrer"
                title="TripAdvisor"
                aria-label="TripAdvisor"
              >
                <img src="/images/tripad-icon.png" alt="TripAdvisor" className="top-bar-social-img" />
              </a>
              <a
                href="https://www.trustpilot.com/review/jodhpurvoyage.com"
                target="_blank"
                rel="noreferrer"
                title="Trustpilot"
                aria-label="Trustpilot"
              >
                <img src="/images/trustpilot-icon.png" alt="Trustpilot" className="top-bar-social-img" />
              </a>
              <a
                href="https://www.google.com/search?q=Jodhpur+Voyage"
                target="_blank"
                rel="noreferrer"
                title="Google Reviews"
                aria-label="Google Reviews"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://www.facebook.com/jodhpurvoyage/"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/jodhpur_voyage/"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" title="Twitter" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="main-nav-bar">
          <div className="container nav-container">
            {/* Logo */}
            <Link href="/" className="brand-logo">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/logo-transprent.png"
                onError={(e) => { e.target.src = '/images/logo-transprent.png'; }}
                alt="Jodhpur Voyage Logo"
                className="brand-logo-img"
              />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <div
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu Mobile"
            >
              <i className="fas fa-bars"></i>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <div
                className="mobile-nav-close"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </div>

              <div className="nav-item active">
                <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Accueil
                </Link>
              </div>

              {/* QUI SOMMES NOUS MEGA MENU */}
              <div className="nav-item has-mega">
                <Link href="/qui-nous-sommes" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Qui sommes nous <i className="fas fa-chevron-down"></i>
                </Link>
                <div className="mega-menu mega-menu-about">
                  <div className="mega-inspirations-header text-center">
                    CRÉATEUR DES PLUS BEAUX <span>VOYAGES DEPUIS 20+ ANS</span>
                  </div>
                  <div className="mega-inspirations-grid">
                    {/* Card 1 */}
                    <Link href="/qui-nous-sommes" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-10.jpg"
                          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                          alt="Qui sommes-nous"
                        />
                      </div>
                      <span className="inspiration-card-title">Qui sommes-nous</span>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/qui-nous-sommes#valeurs" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-7.jpg"
                          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                          alt="Notre valeur ajoutée"
                        />
                      </div>
                      <span className="inspiration-card-title">Notre valeur ajoutée</span>
                    </Link>

                    {/* Card 3 */}
                    <Link href="/qui-nous-sommes#engagement" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide7-300x176.jpg"
                          onError={(e) => { e.target.src = '/images/slide7-300x176.jpg'; }}
                          alt="Notre engagement responsable"
                        />
                      </div>
                      <span className="inspiration-card-title">Notre engagement responsable</span>
                    </Link>

                    {/* Card 4 */}
                    <Link href="/notre-equipe" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-11.jpg"
                          onError={(e) => { e.target.src = '/images/dest-tajmahal.jpg'; }}
                          alt="Notre Équipe"
                        />
                      </div>
                      <span className="inspiration-card-title">Notre Équipe</span>
                    </Link>

                    {/* Card 5 */}
                    <Link href="/commentaires" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                          onError={(e) => { e.target.src = '/images/Voyage-Jaisalmer.jpg'; }}
                          alt="Avis & Témoignages"
                        />
                      </div>
                      <span className="inspiration-card-title">Avis & Témoignages</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* DESTINATION MEGA MENU */}
              <div className="nav-item has-mega">
                <Link href="/destinations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Destination <i className="fas fa-chevron-down"></i>
                </Link>
                <div className="mega-menu mega-menu-destinations">
                  <div className="mega-grid-destinations">
                    {/* Column 1: Inde du Nord */}
                    <div>
                      <div className="mega-column-title"><i className="fas fa-gopuram"></i> Inde du Nord</div>
                      <ul className="mega-link-list">
                        <li><Link href="/destinations/rajasthan" className="mega-link-item"><i className="fas fa-chevron-right"></i> Rajasthan</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Delhi</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Agra</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Varanasi</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Amritsar</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Dharamsala</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Rishikesh</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Ladakh</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Inde du Sud */}
                    <div>
                      <div className="mega-column-title"><i className="fas fa-tree"></i> Inde du Sud</div>
                      <ul className="mega-link-list">
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Kerala</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Tamil Nadu</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Karnataka</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Gujarat</Link></li>
                        <li><Link href="/destinations" className="mega-link-item"><i className="fas fa-chevron-right"></i> Orissa</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Népal */}
                    <div>
                      <div className="mega-column-title"><i className="fas fa-mountain"></i> Népal</div>
                      <ul className="mega-link-list">
                        <li><Link href="/destinations#nepal" className="mega-link-item"><i className="fas fa-chevron-right"></i> Katmandou</Link></li>
                        <li><Link href="/destinations#nepal" className="mega-link-item"><i className="fas fa-chevron-right"></i> Chitwan</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: Bhoutan */}
                    <div>
                      <div className="mega-column-title"><i className="fas fa-place-of-worship"></i> Bhoutan</div>
                      <ul className="mega-link-list">
                        <li><Link href="/destinations#bhoutan" className="mega-link-item"><i className="fas fa-chevron-right"></i> Thimphu</Link></li>
                        <li><Link href="/destinations#bhoutan" className="mega-link-item"><i className="fas fa-chevron-right"></i> Paro</Link></li>
                        <li><Link href="/destinations#bhoutan" className="mega-link-item"><i className="fas fa-chevron-right"></i> Punakha</Link></li>
                      </ul>
                    </div>

                    {/* Column 5: Featured Card */}
                    <div className="mega-featured-card">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                        onError={(e) => { e.target.src = '/images/Voyage-Jaisalmer.jpg'; }}
                        alt="Rajasthan Jaisalmer"
                      />
                      <div className="mega-featured-content">
                        <span className="mega-featured-tag">Incontournable</span>
                        <h4 className="mega-featured-title">Le Rajasthan Doré</h4>
                        <Link href="/destinations/rajasthan" className="btn btn-sm btn-primary">Explorer</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VOYAGE SUR MESURE MEGA MENU */}
              <div className="nav-item has-mega">
                <Link href="/voyage-sur-mesure" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Voyage sur mesure <i className="fas fa-chevron-down"></i>
                </Link>
                <div className="mega-menu">
                  <div className="mega-grid-2col">
                    <div>
                      <div className="mega-column-title"><i className="fas fa-sliders-h"></i> Créez Votre Voyage Personnalisé</div>
                      <p className="mega-description">
                        Exprimez vos envies et nous concevrons un itinéraire unique, adapté à vos dates, votre rythme et votre budget.
                      </p>
                      <div className="mega-sublink-grid">
                        <Link href="/voyage-sur-mesure" className="mega-link-item"><i className="fas fa-magic"></i> Créer votre voyage</Link>
                        <Link href="/destinations/rajasthan" className="mega-link-item"><i className="fas fa-crown"></i> Rajasthan sur mesure</Link>
                        <Link href="/destinations" className="mega-link-item"><i className="fas fa-compass"></i> Inde du Nord</Link>
                        <Link href="/destinations" className="mega-link-item"><i className="fas fa-water"></i> Inde du Sud</Link>
                        <Link href="/destinations" className="mega-link-item"><i className="fas fa-hiking"></i> Népal</Link>
                        <Link href="/tours" className="mega-link-item"><i className="fas fa-route"></i> Voyage aventure</Link>
                        <Link href="/tours" className="mega-link-item"><i className="fas fa-landmark"></i> Voyage culturel</Link>
                      </div>
                    </div>

                    <div className="mega-featured-card">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/07/jaipur-travel.jpg"
                        onError={(e) => { e.target.src = '/images/jaipur-travel.jpg'; }}
                        alt="Sur Mesure Taj Mahal"
                      />
                      <div className="mega-featured-content">
                        <span className="mega-featured-tag">Service Exclusif</span>
                        <h4 className="mega-featured-title">Itinéraires 100% Personnalisés</h4>
                        <Link href="/voyage-sur-mesure" className="btn btn-sm btn-primary">Commencer</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFOS PRATIQUES MEGA MENU */}
              <div className="nav-item has-mega">
                <Link href="/infos-pratiques" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Infos pratiques <i className="fas fa-chevron-down"></i>
                </Link>
                <div className="mega-menu">
                  <div className="mega-grid-3col">
                    <div>
                      <div className="mega-column-title"><i className="fas fa-passport"></i> Formalités & Climat</div>
                      <ul className="mega-link-list">
                        <li><Link href="/infos-pratiques#visa" className="mega-link-item"><i className="fas fa-id-card"></i> Visa pour l'Inde & Népal</Link></li>
                        <li><Link href="/infos-pratiques#quand-partir" className="mega-link-item"><i className="fas fa-calendar-alt"></i> Quand partir</Link></li>
                        <li><Link href="/infos-pratiques#climat" className="mega-link-item"><i className="fas fa-sun"></i> Climat & Météo</Link></li>
                      </ul>
                    </div>

                    <div>
                      <div className="mega-column-title"><i className="fas fa-heartbeat"></i> Santé & Budget</div>
                      <ul className="mega-link-list">
                        <li><Link href="/infos-pratiques#sante" className="mega-link-item"><i className="fas fa-first-aid"></i> Santé & Vaccins</Link></li>
                        <li><Link href="/infos-pratiques#monnaie" className="mega-link-item"><i className="fas fa-coins"></i> Monnaie & Change (Rupee)</Link></li>
                        <li><Link href="/infos-pratiques#transport" className="mega-link-item"><i className="fas fa-car-side"></i> Transports & Chauffeur</Link></li>
                      </ul>
                    </div>

                    <div>
                      <div className="mega-column-title"><i className="fas fa-question-circle"></i> FAQ & Conseils</div>
                      <ul className="mega-link-list">
                        <li><Link href="/infos-pratiques#conseils" className="mega-link-item"><i className="fas fa-lightbulb"></i> Conseils pratiques</Link></li>
                        <li><Link href="/infos-pratiques#faq" className="mega-link-item"><i className="fas fa-comments"></i> Questions Fréquentes</Link></li>
                      </ul>
                    </div>

                    <div className="mega-help-card">
                      <h4 className="mega-help-title"><i className="fas fa-headset"></i> Des questions ?</h4>
                      <p className="mega-help-desc">Nos conseillers francophones répondent à toutes vos interrogations.</p>
                      <Link href="/contact" className="btn btn-sm btn-primary btn-full">Nous contacter</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* INSPIRATION MEGA MENU */}
              <div className="nav-item has-mega">
                <Link href="/destinations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Inspiration <i className="fas fa-chevron-down"></i>
                </Link>
                <div className="mega-menu mega-menu-inspirations">
                  <div className="mega-inspirations-header text-center">
                    LE VOYAGE SELON <span>VOS ENVIES</span>
                  </div>
                  <div className="mega-inspirations-grid">
                    <Link href="/voyage-sur-mesure" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
                          onError={(e) => { e.target.src = '/images/image-12.jpg'; }}
                          alt="Voyage sur mesure"
                        />
                      </div>
                      <span className="inspiration-card-title">Voyage sur mesure</span>
                    </Link>

                    <Link href="/tours/rajasthan" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
                          onError={(e) => { e.target.src = '/images/image-9.jpg'; }}
                          alt="Circuit accompagné"
                        />
                      </div>
                      <span className="inspiration-card-title">Circuit accompagné</span>
                    </Link>

                    <Link href="/destinations/rajasthan" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg"
                          onError={(e) => { e.target.src = '/images/image-6.jpg'; }}
                          alt="Culture & Safari"
                        />
                      </div>
                      <span className="inspiration-card-title">Culture & Safari</span>
                    </Link>

                    <Link href="/contact" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide3-300x176.jpg"
                          onError={(e) => { e.target.src = '/images/slide3-300x176.jpg'; }}
                          alt="+ de 10 personnes"
                        />
                      </div>
                      <span className="inspiration-card-title">+ de 10 personnes</span>
                    </Link>

                    <Link href="/destinations" className="mega-inspiration-card" onClick={() => setMobileMenuOpen(false)}>
                      <div className="inspiration-img-wrap">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg"
                          onError={(e) => { e.target.src = '/images/slide8-300x176.jpg'; }}
                          alt="Toutes les inspirations"
                        />
                      </div>
                      <span className="inspiration-card-title">Toutes les inspirations</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <Link href="/commentaires" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  commentaires
                </Link>
              </div>

              <div className="nav-item">
                <Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Contactez Nous
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  );
}
