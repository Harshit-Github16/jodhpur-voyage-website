'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121F20] text-gray-300 font-body text-xs pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Brand Info & Badges */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo-transprent.png"
                alt="Jodhpur Voyage"
                className="h-14 w-auto brightness-200 object-contain mb-2"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed">
              Jodhpur Voyage - Tour Opérateur francophone expert de l&apos;Inde et du Népal. Créateur de voyages authentiques et sur mesure au Rajasthan, Inde du Nord et Inde du Sud.
            </p>

            {/* Badges Grid */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <img src="/images/tripadvisor-badge.jpg" alt="TripAdvisor" className="h-8 rounded bg-white p-0.5" />
              <img src="/images/trustpilot-badge.jpg" alt="Trustpilot" className="h-8 rounded bg-white p-0.5" />
              <img src="/images/google-review-badge.jpg" alt="Google Reviews" className="h-8 rounded bg-white p-0.5" />
              <img src="/images/routard-badge.jpg" alt="Le Routard" className="h-8 rounded bg-white p-0.5" />
              <img src="/images/petit-fute-badge.jpg" alt="Petit Futé" className="h-8 rounded bg-white p-0.5" />
            </div>
          </div>

          {/* Column 2: Destinations Populaires */}
          <div>
            <h4 className="font-heading text-white text-base font-bold mb-4 tracking-wide pb-2 border-b border-[#1D747A]/40 inline-block">
              Destinations Phares
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-nav">
              <li>
                <Link href="/destinations/rajasthan" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Circuit Rajasthan Impérial</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Triangle d&apos;Or : Delhi, Agra, Jaipur</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Kerala & Inde du Sud</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Ladakh & Vallée de l&apos;Himalaya</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Katmandou & Népal Nature</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Quick Links */}
          <div>
            <h4 className="font-heading text-white text-base font-bold mb-4 tracking-wide pb-2 border-b border-[#1D747A]/40 inline-block">
              Liens Utiles
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-nav">
              <li>
                <Link href="/qui-nous-sommes" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Qui sommes-nous</span>
                </Link>
              </li>
              <li>
                <Link href="/notre-equipe" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Notre Équipe Locale</span>
                </Link>
              </li>
              <li>
                <Link href="/voyage-sur-mesure" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Demander un Devis Gratuit</span>
                </Link>
              </li>
              <li>
                <Link href="/infos-pratiques" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Guide Pratique & Visas</span>
                </Link>
              </li>
              <li>
                <Link href="/commentaires" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Avis des Voyageurs</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C58B39] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-[9px] text-[#1D747A]"></i>
                  <span>Blog & Conseils de Voyage</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Direct & HQ */}
          <div>
            <h4 className="font-heading text-white text-base font-bold mb-4 tracking-wide pb-2 border-b border-[#1D747A]/40 inline-block">
              Contact & Siège
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#C58B39] mt-1 text-sm"></i>
                <span>Jodhpur, Rajasthan - 342001, Inde</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-[#1D747A] text-sm"></i>
                <a href="mailto:Info@jodhpurvoyage.com" className="hover:text-[#C58B39]">Info@jodhpurvoyage.com</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#1D747A] text-sm"></i>
                <a href="tel:+919650698669" className="hover:text-[#C58B39]">+91-96 50 69 86 69</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-emerald-500 text-base"></i>
                <a href="https://wa.me/919650698669" target="_blank" rel="noreferrer" className="hover:text-[#C58B39] font-bold">
                  Assistance WhatsApp 24/7
                </a>
              </div>
            </div>

            {/* Accreditations */}
            <div className="pt-4 flex items-center gap-3">
              <img src="/images/iato-badge.jpg" alt="IATO Approved" className="h-9 rounded bg-white p-0.5" />
              <img src="/images/msme-badge.jpg" alt="Government MSME" className="h-9 rounded bg-white p-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} Jodhpur Voyage Pvt. Ltd. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/infos-pratiques" className="hover:text-gray-300">Mentions Légales</Link>
            <Link href="/infos-pratiques" className="hover:text-gray-300">Politique de Confidentialité</Link>
            <Link href="/contact" className="hover:text-gray-300">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
