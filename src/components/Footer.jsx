'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: About */}
        <div className="footer-about">
          <Link href="/" className="brand-logo footer-logo">
            <img
              src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/logo-transprent.png"
              onError={(e) => { e.target.src = '/images/logo-transprent.png'; }}
              alt="Jodhpur Voyage Logo"
              className="brand-logo-img footer-logo-img"
            />
          </Link>
          <div className="footer-trust-badge">
            <i className="fas fa-shield-alt"></i>
            <span>
              Agence Locale Francophone Agréée<br />
              <strong>20+ Ans d'Expérience en Inde et Népal</strong>
            </span>
          </div>
          <p className="footer-recognition-title">Avis Clients et Guides de Voyage</p>
          <div className="footer-recognition-badges">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html"
              target="_blank"
              rel="noreferrer"
              title="TripAdvisor"
            >
              <img src="/images/tripadvisor-badge.jpg" alt="TripAdvisor" className="footer-badge-img" />
            </a>
            <a
              href="https://www.google.com/search?q=Jodhpur+Voyage"
              target="_blank"
              rel="noreferrer"
              title="Google Reviews"
            >
              <img src="/images/google-review-badge.jpg" alt="Google Reviews" className="footer-badge-img" />
            </a>
            <a
              href="https://www.trustpilot.com/review/jodhpurvoyage.com"
              target="_blank"
              rel="noreferrer"
              title="Trustpilot"
            >
              <img src="/images/trustpilot-badge.jpg" alt="Trustpilot" className="footer-badge-img" />
            </a>
            <a
              href="https://www.petitfute.com/"
              target="_blank"
              rel="noreferrer"
              title="Petit Futé"
            >
              <img src="/images/petit-fute-badge.jpg" alt="Petit Futé" className="footer-badge-img" />
            </a>
            <a
              href="https://www.routard.com/"
              target="_blank"
              rel="noreferrer"
              title="Le Guide du Routard"
            >
              <img src="/images/routard-badge.jpg" alt="Le Guide du Routard" className="footer-badge-img" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link href="/"><i className="fas fa-chevron-right"></i> Accueil</Link></li>
            <li><Link href="/qui-nous-sommes"><i className="fas fa-chevron-right"></i> Qui Sommes Nous</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Destination</Link></li>
            <li><Link href="/voyage-sur-mesure"><i className="fas fa-chevron-right"></i> Voyage sur mesure</Link></li>
            <li><Link href="/infos-pratiques"><i className="fas fa-chevron-right"></i> Infos pratiques</Link></li>
            <li><Link href="/blog"><i className="fas fa-chevron-right"></i> Blog</Link></li>
            <li><Link href="/commentaires"><i className="fas fa-chevron-right"></i> commentaires</Link></li>
            <li><Link href="/contact"><i className="fas fa-chevron-right"></i> Contactez Nous</Link></li>
          </ul>
        </div>

        {/* Col 3: Destinations */}
        <div>
          <h4 className="footer-col-title">Destinations</h4>
          <ul className="footer-links">
            <li><Link href="/destinations/rajasthan"><i className="fas fa-chevron-right"></i> Rajasthan</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Gujarat</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Karnataka</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Ladakh</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Inde du Nord</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Inde du Sud</Link></li>
            <li><Link href="/destinations"><i className="fas fa-chevron-right"></i> Népal</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-item">
            <i className="fas fa-envelope"></i>
            <div><a href="mailto:Info@jodhpurvoyage.com" className="footer-contact-link">Info@jodhpurvoyage.com</a></div>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-phone-alt"></i>
            <div><a href="tel:+919650698669" className="footer-contact-link">+91-96 50 69 86 69</a></div>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>Jodhpur, Rajasthan, Inde</div>
          </div>
          <div className="top-bar-social footer-social">
            <a href="https://www.facebook.com/jodhpurvoyage/" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/jodhpur_voyage/" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" title="Twitter" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© 2026 Jodhpur Voyage - Tous droits réservés. Tour Opérateur en Inde et Népal.</div>
        <div>Designed with elegance for Jodhpur Voyage</div>
      </div>
    </footer>
  );
}
