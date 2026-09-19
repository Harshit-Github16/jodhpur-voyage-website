'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-nav w-full">
      {/* Top Bar - Deep Teal */}
      <div className="bg-[#1D747A] text-white text-xs py-2 hidden lg:block border-b border-white/10 w-full overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-6 flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="mailto:Info@jodhpurvoyage.com" className="flex items-center gap-2 hover:text-[#C58B39] transition-colors">
              <i className="fas fa-envelope text-white/80"></i>
              <span>Info@jodhpurvoyage.com</span>
            </a>
            <a href="tel:+919650698669" className="flex items-center gap-2 hover:text-[#C58B39] transition-colors">
              <i className="fas fa-phone-alt text-white/80"></i>
              <span>+91-96 50 69 86 69</span>
            </a>
          </div>

          {/* Announcement */}
          <div className="text-white/90 text-center">
            <span className="font-semibold text-white">Voyager en confiance :</span>{' '}
            <Link href="/voyage-sur-mesure" className="underline hover:text-[#C58B39]">
              devis gratuit & conseils sur mesure
            </Link>
          </div>

          {/* Trust Badges & Social Icons */}
          <div className="flex items-center gap-3.5 text-white/90 text-sm">
            <a href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html" target="_blank" rel="noreferrer" title="TripAdvisor" className="hover:text-[#C58B39] transition-colors">
              <i className="fab fa-tripadvisor text-xs"></i>
            </a>
            <a href="https://www.trustpilot.com/review/jodhpurvoyage.com" target="_blank" rel="noreferrer" title="Trustpilot / Reviews" className="hover:text-[#C58B39] transition-colors">
              <i className="fas fa-star text-xs"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" title="Google" className="hover:text-[#C58B39] transition-colors">
              <i className="fab fa-google text-xs"></i>
            </a>
            <a href="https://www.facebook.com/jodhpurvoyage/" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-[#C58B39] transition-colors">
              <i className="fab fa-facebook-f text-xs"></i>
            </a>
            <a href="https://www.instagram.com/jodhpur_voyage/" target="_blank" rel="noreferrer" title="Instagram" className="hover:text-[#C58B39] transition-colors">
              <i className="fab fa-instagram text-xs"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" title="X" className="hover:text-[#C58B39] transition-colors">
              <i className="fab fa-x-twitter text-xs"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Relative Reference Container for All Centered Dropdowns */}
      <div className="relative max-w-[1340px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo-transprent.png"
            alt="Jodhpur Voyage Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold tracking-wide text-[#1A2B2C]">
          {/* Accueil */}
          <Link
            href="/"
            className="relative py-2 text-[#1D747A] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#1D747A] transition-colors"
          >
            Accueil
          </Link>

          {/* 1. QUI SOMMES NOUS MEGA MENU */}
          <div className="group py-2">
            <Link href="/qui-nous-sommes" className="flex items-center gap-1 hover:text-[#1D747A] transition-colors">
              <span>Qui sommes nous</span>
              <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:rotate-180 transition-transform"></i>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[920px] max-w-[90vw]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7">
                <div className="text-center font-bold text-xs sm:text-[13px] tracking-wider uppercase text-gray-700 mb-6 font-nav">
                  CRÉATEUR DES PLUS BEAUX <span className="text-[#1D747A] font-extrabold">VOYAGES DEPUIS 20+ ANS</span>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {/* Card 1 */}
                  <Link href="/qui-nous-sommes" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-10.jpg"
                        onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                        alt="Qui sommes-nous"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Qui sommes-nous
                    </span>
                  </Link>

                  {/* Card 2 */}
                  <Link href="/qui-nous-sommes#valeurs" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-7.jpg"
                        onError={(e) => { e.target.src = '/images/dest-nepal.jpg'; }}
                        alt="Notre valeur ajoutée"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Notre valeur ajoutée
                    </span>
                  </Link>

                  {/* Card 3 */}
                  <Link href="/qui-nous-sommes#engagement" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide7-300x176.jpg"
                        onError={(e) => { e.target.src = '/images/slide7-300x176.jpg'; }}
                        alt="Notre engagement responsable"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Notre engagement responsable
                    </span>
                  </Link>

                  {/* Card 4 */}
                  <Link href="/notre-equipe" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-11.jpg"
                        onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                        alt="Notre Équipe"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Notre Équipe
                    </span>
                  </Link>

                  {/* Card 5 */}
                  <Link href="/commentaires" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                        onError={(e) => { e.target.src = '/images/Voyage-Jaisalmer.jpg'; }}
                        alt="Avis & Témoignages"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Avis & Témoignages
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. DESTINATION MEGA MENU */}
          <div className="group py-2">
            <Link href="/destinations" className="flex items-center gap-1 hover:text-[#1D747A] transition-colors">
              <span>Destination</span>
              <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:rotate-180 transition-transform"></i>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[940px] max-w-[90vw]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7">
                <div className="grid grid-cols-5 gap-5">
                  {/* Col 1: Inde du Nord */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-gopuram text-[#C58B39]"></i> Inde du Nord
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                      <li><Link href="/destinations/rajasthan" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Rajasthan</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Delhi</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Agra</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Varanasi</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Amritsar</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Dharamsala</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Rishikesh</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Ladakh</Link></li>
                    </ul>
                  </div>

                  {/* Col 2: Inde du Sud */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-tree text-[#C58B39]"></i> Inde du Sud
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Kerala</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Tamil Nadu</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Karnataka</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Gujarat</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Orissa</Link></li>
                    </ul>
                  </div>

                  {/* Col 3: Népal */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-mountain text-[#C58B39]"></i> Népal
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Katmandou</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Chitwan</Link></li>
                    </ul>
                  </div>

                  {/* Col 4: Bhoutan */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-place-of-worship text-[#C58B39]"></i> Bhoutan
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Thimphu</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Paro</Link></li>
                      <li><Link href="/destinations" className="hover:text-[#1D747A] flex items-center gap-1.5 transition-colors"><i className="fas fa-chevron-right text-[8px] text-[#C58B39]"></i> Punakha</Link></li>
                    </ul>
                  </div>

                  {/* Col 5: Featured Card */}
                  <div className="rounded-2xl overflow-hidden relative group/card shadow-md border border-gray-100 flex flex-col justify-end p-4 text-white min-h-[220px]">
                    <img
                      src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                      onError={(e) => { e.target.src = '/images/Voyage-Jaisalmer.jpg'; }}
                      alt="Rajasthan Jaisalmer"
                      className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase bg-[#C58B39] text-white px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-sm">
                        Incontournable
                      </span>
                      <h4 className="font-bold text-sm text-white drop-shadow-md mb-2 leading-tight">Le Rajasthan Doré</h4>
                      <Link
                        href="/destinations/rajasthan"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#1D747A] hover:bg-[#155A5F] px-3 py-1.5 rounded-lg transition-colors shadow-md"
                      >
                        <span>Explorer</span>
                        <i className="fas fa-arrow-right text-[9px]"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. VOYAGE SUR MESURE MEGA MENU */}
          <div className="group py-2">
            <Link href="/voyage-sur-mesure" className="flex items-center gap-1 hover:text-[#1D747A] transition-colors">
              <span>Voyage sur mesure</span>
              <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:rotate-180 transition-transform"></i>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[780px] max-w-[90vw]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7">
                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-7">
                    <div className="text-sm font-bold text-[#1A2B2C] mb-2 flex items-center gap-2">
                      <i className="fas fa-sliders-h text-[#1D747A]"></i> Créez Votre Voyage Personnalisé
                    </div>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Exprimez vos envies et nous concevrons un itinéraire unique, adapté à vos dates, votre rythme et votre budget.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                      <Link href="/voyage-sur-mesure" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-magic text-[#C58B39]"></i> Créer votre voyage
                      </Link>
                      <Link href="/destinations/rajasthan" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-crown text-[#C58B39]"></i> Rajasthan sur mesure
                      </Link>
                      <Link href="/destinations" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-compass text-[#C58B39]"></i> Inde du Nord
                      </Link>
                      <Link href="/destinations" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-water text-[#C58B39]"></i> Inde du Sud
                      </Link>
                      <Link href="/destinations" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-hiking text-[#C58B39]"></i> Népal
                      </Link>
                      <Link href="/tours" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F0F7F7] hover:text-[#1D747A] transition-colors">
                        <i className="fas fa-route text-[#C58B39]"></i> Voyage aventure
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-5 rounded-2xl overflow-hidden relative group/card shadow-md border border-gray-100 flex flex-col justify-end p-5 text-white min-h-[220px]">
                    <img
                      src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/07/jaipur-travel.jpg"
                      onError={(e) => { e.target.src = '/images/jaipur-travel.jpg'; }}
                      alt="Sur Mesure"
                      className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase bg-[#C58B39] text-white px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-sm">
                        Service Exclusif
                      </span>
                      <h4 className="font-bold text-sm text-white drop-shadow-md mb-3 leading-tight">Itinéraires 100% Personnalisés</h4>
                      <Link
                        href="/voyage-sur-mesure"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1D747A] hover:bg-[#155A5F] px-4 py-2 rounded-lg transition-colors shadow-md"
                      >
                        <span>Commencer</span>
                        <i className="fas fa-arrow-right text-[10px]"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. INFOS PRATIQUES MEGA MENU */}
          <div className="group py-2">
            <Link href="/infos-pratiques" className="flex items-center gap-1 hover:text-[#1D747A] transition-colors">
              <span>Infos pratiques</span>
              <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:rotate-180 transition-transform"></i>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[880px] max-w-[90vw]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7">
                <div className="grid grid-cols-4 gap-5">
                  {/* Col 1 */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-passport text-[#C58B39]"></i> Formalités & Climat
                    </div>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li><Link href="/infos-pratiques#visa" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-id-card text-[#C58B39]"></i> Visa Inde & Népal</Link></li>
                      <li><Link href="/infos-pratiques#quand-partir" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-calendar-alt text-[#C58B39]"></i> Quand partir</Link></li>
                      <li><Link href="/infos-pratiques#climat" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-sun text-[#C58B39]"></i> Climat & Météo</Link></li>
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-heartbeat text-[#C58B39]"></i> Santé & Budget
                    </div>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li><Link href="/infos-pratiques#sante" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-first-aid text-[#C58B39]"></i> Santé & Vaccins</Link></li>
                      <li><Link href="/infos-pratiques#monnaie" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-coins text-[#C58B39]"></i> Monnaie & Change</Link></li>
                      <li><Link href="/infos-pratiques#transport" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-car-side text-[#C58B39]"></i> Transports Privés</Link></li>
                    </ul>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1D747A] pb-2 border-b border-gray-100 mb-3 flex items-center gap-1.5">
                      <i className="fas fa-question-circle text-[#C58B39]"></i> FAQ & Conseils
                    </div>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li><Link href="/infos-pratiques#conseils" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-lightbulb text-[#C58B39]"></i> Conseils pratiques</Link></li>
                      <li><Link href="/infos-pratiques#faq" className="hover:text-[#1D747A] flex items-center gap-2 transition-colors"><i className="fas fa-comments text-[#C58B39]"></i> Questions Fréquentes</Link></li>
                    </ul>
                  </div>

                  {/* Col 4: Help Card */}
                  <div className="bg-[#F0F7F7] rounded-2xl p-5 border border-[#1D747A]/15 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-[#1A2B2C] mb-1.5 flex items-center gap-1.5">
                        <i className="fas fa-headset text-[#1D747A]"></i> Des questions ?
                      </h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                        Nos conseillers francophones répondent à toutes vos interrogations.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center block text-xs font-bold py-2.5 rounded-xl shadow-sm hover:bg-[#155A5F] transition-colors"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. INSPIRATION MEGA MENU */}
          <div className="group py-2">
            <Link href="/tours" className="flex items-center gap-1 hover:text-[#1D747A] transition-colors">
              <span>Inspiration</span>
              <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:rotate-180 transition-transform"></i>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[920px] max-w-[90vw]">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/90 p-7">
                <div className="text-center font-bold text-xs sm:text-[13px] tracking-wider uppercase text-gray-700 mb-6 font-nav">
                  LE VOYAGE SELON <span className="text-[#1D747A] font-extrabold">VOS ENVIES</span>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {/* Card 1 */}
                  <Link href="/voyage-sur-mesure" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
                        onError={(e) => { e.target.src = '/images/image-12.jpg'; }}
                        alt="Voyage sur mesure"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Voyage sur mesure
                    </span>
                  </Link>

                  {/* Card 2 */}
                  <Link href="/tours/rajasthan" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
                        onError={(e) => { e.target.src = '/images/image-9.jpg'; }}
                        alt="Circuit accompagné"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Circuit accompagné
                    </span>
                  </Link>

                  {/* Card 3 */}
                  <Link href="/destinations/rajasthan" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg"
                        onError={(e) => { e.target.src = '/images/image-6.jpg'; }}
                        alt="Culture & Safari"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Culture & Safari
                    </span>
                  </Link>

                  {/* Card 4 */}
                  <Link href="/contact" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide3-300x176.jpg"
                        onError={(e) => { e.target.src = '/images/slide4-300x176.jpg'; }}
                        alt="+ de 10 personnes"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      + de 10 personnes
                    </span>
                  </Link>

                  {/* Card 5 */}
                  <Link href="/destinations" className="group/item text-center block">
                    <div className="overflow-hidden rounded-2xl shadow-sm aspect-[4/3] w-full mb-3 border border-gray-100 group-hover/item:shadow-md transition-all">
                      <img
                        src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg"
                        onError={(e) => { e.target.src = '/images/slide8-300x176.jpg'; }}
                        alt="Toutes les inspirations"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="font-bold text-xs text-[#1A2B2C] group-hover/item:text-[#1D747A] transition-colors block">
                      Toutes les inspirations
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* commentaires */}
          <Link href="/commentaires" className="hover:text-[#1D747A] transition-colors py-2">
            commentaires
          </Link>

          {/* Contactez Nous */}
          <Link href="/contact" className="hover:text-[#1D747A] transition-colors py-2">
            Contactez Nous
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-2xl text-[#1A2B2C] focus:outline-none"
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl font-nav space-y-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1D747A]"
          >
            Accueil
          </Link>
          <Link
            href="/qui-nous-sommes"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Qui sommes nous
          </Link>
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Destination
          </Link>
          <Link
            href="/voyage-sur-mesure"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Voyage sur mesure
          </Link>
          <Link
            href="/infos-pratiques"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Infos pratiques
          </Link>
          <Link
            href="/tours"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Inspiration
          </Link>
          <Link
            href="/commentaires"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            commentaires
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-sm text-[#1A2B2C] hover:text-[#1D747A]"
          >
            Contactez Nous
          </Link>

          <div className="pt-2">
            <Link
              href="/voyage-sur-mesure"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center block text-xs font-bold uppercase py-3 rounded-lg shadow-md"
            >
              Devis Sur Mesure
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
