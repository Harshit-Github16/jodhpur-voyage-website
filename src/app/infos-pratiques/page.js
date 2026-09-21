'use client';

import React from 'react';
import Link from 'next/link';

export default function InfosPratiquesPage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <section className="infos-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg"
          alt="Infos Pratiques Banner"
          className="infos-hero-bg"
          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
        />
        <div className="container infos-hero-content">
          <span className="hero-badge">Infos Pratiques</span>
          <h1 className="infos-hero-title">Infos Pratiques & Conseils de Voyage</h1>
        </div>
      </section>

      {/* QUICK SUMMARY KPI CARDS */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="kpi-grid">
            {/* KPI 1 */}
            <div className="kpi-card">
              <div className="kpi-icon-circle">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <div className="kpi-label">Décalage Horaire</div>
                <div className="kpi-value">+4h30 (Hiver) / +3h30 (Été)</div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="kpi-card">
              <div className="kpi-icon-circle">
                <i className="fas fa-coins"></i>
              </div>
              <div>
                <div className="kpi-label">Monnaie Officielle</div>
                <div className="kpi-value">Roupie Indienne (INR)</div>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="kpi-card">
              <div className="kpi-icon-circle">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div>
                <div className="kpi-label">Meilleure Période</div>
                <div className="kpi-value">Mi-Novembre à Fin Mars</div>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="kpi-card">
              <div className="kpi-icon-circle">
                <i className="fas fa-passport"></i>
              </div>
              <div>
                <div className="kpi-label">Visa Obligatoire</div>
                <div className="kpi-value">e-Tourist Visa (eTV)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: VISAS & FORMALITES D'ENTREE */}
      <section id="visas-formalites" className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Passeport & Démarches</span>
            <h2 className="section-title">Visas & Formalités d'Entrée en Inde & Népal</h2>
            <p className="section-description">
              Tout le processus d'obtention de votre visa touristique étape par étape et les adresses utiles.
            </p>
          </div>

          <div className="visas-grid">
            {/* Left Column: Detailed Visa Content */}
            <div>
              {/* e-Tourist Visa (eTV) box */}
              <div className="visas-main-card">
                <h3 className="visas-card-title">
                  <i className="fas fa-laptop"></i> Procédure pour l'obtention d’un visa électronique (e-Tourist Visa)
                </h3>
                <p className="contact-lead-desc">
                  Le site officiel du gouvernement indien pour effectuer votre demande en ligne est :{' '}
                  <a href="https://indianvisaonline.gov.in/visa/tvoa.html" target="_blank" rel="noopener noreferrer" className="footer-contact-link">https://indianvisaonline.gov.in/visa/tvoa.html</a>.
                </p>

                <h4 className="visas-sub-title">Nouveau ! Les 3 choix pour le E-Visa :</h4>
                <ul className="visas-list">
                  <li className="visas-list-item">
                    <i className="fas fa-check-circle"></i>
                    <span><strong>E-Visa 1 an (Multiples entrées) :</strong> Valide 1 an à compter de la délivrance, entrées multiples de 90 jours maximum par séjour. Frais consulaires de 39 € (recommandé pour éviter tout problème).</span>
                  </li>
                  <li className="visas-list-item">
                    <i className="fas fa-check-circle"></i>
                    <span><strong>E-Visa 30 jours (Haute saison Juil-Mars) :</strong> Valide 30 jours pour 2 entrées. Frais consulaires de 25 €.</span>
                  </li>
                  <li className="visas-list-item">
                    <i className="fas fa-check-circle"></i>
                    <span><strong>E-Visa 30 jours (Basse saison Avril-Juin) :</strong> Valide 30 jours pour 2 entrées. Frais consulaires de 11 €.</span>
                  </li>
                </ul>

                <h4 className="visas-sub-title">Documents requis lors de l'inscription en ligne :</h4>
                <ul className="visas-list">
                  <li>• Copie lisible de la page d'identité du passeport au format PDF (taille entre 10 KB et 300 KB).</li>
                  <li>• Photo d’identité récente au format JPEG fond blanc (taille entre 10 KB et 1 MB).</li>
                  <li>• Tous les noms complets figurant sur le passeport doivent impérativement correspondre à la saisie.</li>
                </ul>

                <div className="visas-alert-box">
                  <strong><i className="fas fa-exclamation-triangle"></i> Important :</strong> Pensez à imprimer une copie de votre eTV (e-Tourist Visa) et à l’emporter avec vous le jour du départ. Vos données biométriques (empreintes digitales et reconnaissance faciale) seront relevées à l’arrivée dans l'un des 26 aéroports éligibles (Delhi, Mumbai, Jaipur, Varanasi, Chennai, Bengalore, Goa, etc.).
                </div>
              </div>

              {/* Processus classique VFS France */}
              <div className="visas-steps-card">
                <h3 className="visas-card-title">
                  <i className="fas fa-tasks"></i> Étapes d'une demande de Visa classique
                </h3>
                <div className="visas-list">
                  <div><strong>Étape 1 :</strong> Choisir la catégorie de visa et remplir le formulaire annexe sur le site VFS.</div>
                  <div><strong>Étape 2 :</strong> Déposer le dossier complet au centre VFS (Paris, Lyon ou Marseille) ou par correspondance.</div>
                  <div><strong>Étape 3 :</strong> Suivi du dossier en ligne et retrait du passeport visé (délai moyen de 3 à 5 jours à Paris).</div>
                </div>
              </div>
            </div>

            {/* Right Column: Adresses Utiles en France */}
            <div>
              {/* Inde Consulat & Ambassade */}
              <div className="visas-sidebar-card">
                <h3 className="visas-sidebar-title">
                  <i className="fas fa-building"></i> Adresses Utiles pour l'Inde
                </h3>

                <div className="visas-list">
                  <div>
                    <strong>Consulat d’Inde à Paris :</strong>
                    20-22, rue Albéric-Magnard, 75016 Paris (M° La Muette). Tél. : 01-40-50-71-71. Email : <a href="mailto:cons.paris@gmail.com" className="footer-contact-link">cons.paris@gmail.com</a>
                  </div>
                  <div>
                    <strong>Ambassade de l’Inde :</strong>
                    15, rue Alfred-Dehodencq, 75016 Paris. Tél. : 01-40-50-70-70. (Sur RDV).
                  </div>
                  <div>
                    <strong>VFS France (Traitement Visas) :</strong>
                    42-44, rue de Paradis, 75010 Paris. Tél. : 0892-230-358. Dépôt de 8h à 13h, retrait de 14h à 18h. (Aussi à Lyon et Marseille).
                  </div>
                  <div>
                    <strong>Office National Indien de Tourisme :</strong>
                    13, bd Haussmann (5e ét.), 75009 Paris. Tél. : 01-45-23-30-45.
                  </div>
                </div>
              </div>

              {/* Népal Ambassade & Consulat */}
              <div className="visas-sidebar-card-alt">
                <h3 className="visas-sidebar-title">
                  <i className="fas fa-mountain"></i> Visa & Adresses pour le Népal
                </h3>

                <p className="contact-lead-desc">
                  Le visa pour le Népal peut s'obtenir <strong>directement à l'arrivée</strong> à l'aéroport de Katmandou ou aux postes frontières terrestres, ainsi qu'au consulat à Paris.
                </p>

                <div className="visas-list">
                  <strong>Ambassade du Népal à Paris :</strong>
                  45 bis, rue des Acacias, 75017 Paris (M° Étoile / Argentine). Tél. : 01-46-22-48-67.<br />
                  • Tarifs : 15 jours (25 €), 30 jours (40 €), 90 jours (100 €). Passeport valide au moins 6 mois + 1 photo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLIMAT & GEOGRAPHIE */}
      <section id="climat-geographie" className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Saisons & Géographie</span>
            <h2 className="section-title">Le Climat & La Géographie Indienne</h2>
            <p className="section-description">
              Une superficie de 3,28 millions de km² offrant une incroyable diversité de paysages et de micro-climats.
            </p>
          </div>

          <div className="climat-grid">
            <div className="climat-card">
              <h3 className="climat-card-title">
                <i className="fas fa-users"></i> Population & Littoral
              </h3>
              <p className="contact-lead-desc">
                Avec 1,24 milliard d'habitants, l'Inde est un pays dynamique et jeune : les moins de 20 ans représentent <strong>45,3% de la population</strong>.
              </p>
              <p className="contact-lead-desc">
                Son littoral s’étend sur plus de <strong>7 000 kilomètres</strong>. Le pays partage ses frontières avec le Pakistan à l'ouest, la Chine, le Népal et le Bhoutan au nord, et le Bangladesh et la Birmanie à l'est, face au Sri Lanka et aux Maldives au sud.
              </p>
            </div>

            <div className="climat-card">
              <h3 className="climat-card-title">
                <i className="fas fa-cloud-sun"></i> Les 4 Saisons & Températures
              </h3>
              <ul className="visas-list">
                <li><strong>• Hiver (Janvier à Février) :</strong> Températures idéales (18°C à 28°C). C'est la haute saison touristique dans le Nord et au Rajasthan.</li>
                <li><strong>• Été (Mars à Mai) :</strong> Climat sec et chaud (26°C à 34°C et plus). Idéal pour les safaris photos et la montagne.</li>
                <li><strong>• Mousson (Juin à Septembre) :</strong> Saison des pluies tropicales. Idéal pour le Ladakh & l'Himalaya.</li>
                <li><strong>• Post-mousson (Octobre à Décembre) :</strong> Le pays reverdit, les températures s'adoucissent, parfait pour visiter tout le pays.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VOCABULAIRE DE SURVIE (HINDI & ANGLAIS) */}
      <section id="vocabulaire-hindi" className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Guide de Communication</span>
            <h2 className="section-title">Vocabulaire de Survie en Hindi & Anglais</h2>
            <p className="section-description">
              L'Inde compte 234 langues maternelles et 22 langues officielles. L'anglais est largement pratiqué et un petit lexique en Hindi ravira vos interlocuteurs !
            </p>
          </div>

          {/* Vocab Category 1: Présentation & Politesse */}
          <div className="contact-lead-desc">
            <h3 className="vocab-section-title">
              <i className="fas fa-handshake"></i> Salutations & Politesse
            </h3>
            <div className="vocab-grid">
              <div className="vocab-card"><div className="vocab-fr">Bonjour / Salut</div><div className="vocab-hi">Namasté / Hello</div></div>
              <div className="vocab-card"><div className="vocab-fr">Merci</div><div className="vocab-hi">Dhaniawad / Thank you</div></div>
              <div className="vocab-card"><div className="vocab-fr">Au revoir</div><div className="vocab-hi">Fir milènge / Bye</div></div>
              <div className="vocab-card"><div className="vocab-fr">S'il vous plaît</div><div className="vocab-hi">Kripaya / Please</div></div>
              <div className="vocab-card"><div className="vocab-fr">Oui / Non</div><div className="vocab-hi">Ha (Oui) / Nahi (Non)</div></div>
              <div className="vocab-card"><div className="vocab-fr">D'accord / Très bien</div><div className="vocab-hi">Achha / Theek</div></div>
              <div className="vocab-card"><div className="vocab-fr">Je m'appelle...</div><div className="vocab-hi">Mera naam ... hé</div></div>
              <div className="vocab-card"><div className="vocab-fr">Comment allez-vous ?</div><div className="vocab-hi">Aap kaise hé ?</div></div>
              <div className="vocab-card"><div className="vocab-fr">Allons-y !</div><div className="vocab-hi">Tchalo !</div></div>
            </div>
          </div>

          {/* Vocab Category 2: Restauration & Boissons */}
          <div className="contact-lead-desc">
            <h3 className="vocab-section-title">
              <i className="fas fa-utensils"></i> Restauration & Boissons
            </h3>
            <div className="vocab-grid">
              <div className="vocab-card"><div className="vocab-fr">J'ai faim / J'ai soif</div><div className="vocab-hi">Mujhé bhouk / pyaass lagi hé</div></div>
              <div className="vocab-card"><div className="vocab-fr">Eau potable</div><div className="vocab-hi">Pani (Mineral water)</div></div>
              <div className="vocab-card"><div className="vocab-fr">Sans piment</div><div className="vocab-hi">Mirtchi nahi / No spicy</div></div>
              <div className="vocab-card"><div className="vocab-fr">C'est délicieux !</div><div className="vocab-hi">Swaadishta hé !</div></div>
              <div className="vocab-card"><div className="vocab-fr">Thé indien aux épices</div><div className="vocab-hi">Masala Tchaï</div></div>
              <div className="vocab-card"><div className="vocab-fr">Plat végétarien</div><div className="vocab-hi">Shakahaari (Veg)</div></div>
            </div>
          </div>

          {/* Vocab Category 3: Urgences & Transports */}
          <div>
            <h3 className="vocab-section-title">
              <i className="fas fa-first-aid"></i> Urgences, Transports & Commerce
            </h3>
            <div className="vocab-grid">
              <div className="vocab-card"><div className="vocab-fr">Médecin / Hôpital</div><div className="vocab-hi">Doktar / Aspatal</div></div>
              <div className="vocab-card"><div className="vocab-fr">Arrêtez-vous ici</div><div className="vocab-hi">Ruko / Stop here</div></div>
              <div className="vocab-card"><div className="vocab-fr">Combien ça coûte ?</div><div className="vocab-hi">Kitné ka hé ?</div></div>
              <div className="vocab-card"><div className="vocab-fr">C'est trop cher !</div><div className="vocab-hi">Yé bahut méhénga hé</div></div>
              <div className="vocab-card"><div className="vocab-fr">Où est... ?</div><div className="vocab-hi">... Kaha hé ?</div></div>
              <div className="vocab-card"><div className="vocab-fr">À l'aide !</div><div className="vocab-hi">Madad / Help (ou Aag!)</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RELIGIONS & SYSTEME DE CASTES */}
      <section id="religions-castes" className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Spiritualité & Société</span>
            <h2 className="section-title">Religions & Système de Castes en Inde</h2>
            <p className="section-description">
              Comprendre la mosaïque spirituelle et la structure traditionnelle de la société indienne.
            </p>
          </div>

          <div className="religions-grid">
            {/* Hindouisme */}
            <div className="climat-card">
              <div className="score-stars"><i className="fas fa-om"></i></div>
              <h3 className="climat-card-title">L'Hindouisme (~80%)</h3>
              <p className="contact-lead-desc">
                L'une des plus anciennes sagesses du monde fondée sur les Védas. Le principe fondamental est que le divin (Brahman) réside en chaque être vivant.
              </p>
            </div>

            {/* Islam */}
            <div className="climat-card">
              <div className="top-bar-item"><i class="fas fa-mosque"></i></div>
              <h3 className="climat-card-title">L'Islam (~14-16%)</h3>
              <p className="contact-lead-desc">
                L'Inde abrite la 2ème plus grande population musulmane au monde, ayant façonné la culture moghole, l'architecture (Taj Mahal) et la musique soufie.
              </p>
            </div>

            {/* Sikhisme */}
            <div className="climat-card">
              <div className="score-stars"><i className="fas fa-khanda"></i></div>
              <h3 className="climat-card-title">Le Sikhisme (~2%)</h3>
              <p className="contact-lead-desc">
                Reconnaissables à leurs turbans colorés et leurs barbes entretenues. Une communauté solidaire prônant l'égalité et le service de la société (Temple d'Or d'Amritsar).
              </p>
            </div>
          </div>

          {/* Les 4 Varnas (Castes) Box */}
          <div className="castes-box">
            <h3 className="climat-card-title">
              <i className="fas fa-sitemap"></i> Le Système des 4 Varnas (Classes Sociales)
            </h3>
            <p className="contact-lead-desc">
              Historiquement, la société indienne s'articulait autour de 4 grandes catégories (Varnas), complétées par les Dalits :
            </p>

            <div className="castes-grid">
              <div className="caste-card">
                <strong className="contact-info-title">1. Brâhmanes</strong>
                <span className="badge-verify-text">Prêtres, enseignants, savants et professeurs.</span>
              </div>

              <div className="caste-card">
                <strong className="contact-info-title">2. Kshatriyas</strong>
                <span className="badge-verify-text">Rois, princes, guerriers et administrateurs.</span>
              </div>

              <div className="caste-card">
                <strong className="contact-info-title">3. Vaishyas</strong>
                <span className="badge-verify-text">Commerçants, artisans, agriculteurs et banquiers.</span>
              </div>

              <div className="caste-card">
                <strong className="contact-info-title">4. Sudras & Dalits</strong>
                <span className="badge-verify-text">Serviteurs, travailleurs manuels et Dalits (Harijans).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALENDRIER DES FESTIVALS & FETES */}
      <section id="festivals-fetes" className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Événements Traditionnels</span>
            <h2 className="section-title">Calendrier des Grands Festivals en Inde</h2>
            <p className="section-description">
              Découvrez les moments magiques où l'Inde s'illumine de mille couleurs, danses et célébrations.
            </p>
          </div>

          <div className="festival-grid">
            {/* Festival 1: Holi */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2012/07/Colors-731x650-300x266.jpg"
                  alt="Holi Fête des Couleurs"
                  onError={(e) => { e.target.src = '/images/dest-jaipur.jpg'; }}
                />
                <div className="festival-date-badge">Mars (04-05 Mars 2026)</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Dans toute l'Inde & Rajasthan</div>
                <h3 className="festival-title">Holi – Fête des Couleurs</h3>
                <p className="festival-desc">
                  Célèbre l'arrivée du printemps et le triomphe du bien sur le mal. Tout le monde s'éclabousse d'eau et de poudres de couleurs joyeuses (rose, rouge, jaune, violet).
                </p>
              </div>
            </div>

            {/* Festival 2: Pushkar */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2016/06/b58f8c4210f7f449a64d6276e55085ba.jpg"
                  alt="Foire de Pushkar"
                  onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                />
                <div className="festival-date-badge">Octobre / Novembre</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Pushkar, Rajasthan</div>
                <h3 className="festival-title">Grand Rassemblement de Pushkar</h3>
                <p className="festival-desc">
                  L'un des plus grands marchés aux chameaux et bétail au monde combiné à un pèlerinage hindou sacré sur les eaux sacrées du lac créé par Brahma.
                </p>
              </div>
            </div>

            {/* Festival 3: Jaisalmer Desert Festival */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2016/06/b898bd1598f20e0fbd72cc6dc807b295.jpg"
                  alt="Festival du Désert de Jaisalmer"
                  onError={(e) => { e.target.src = '/images/dest-jaisalmer.jpg'; }}
                />
                <div className="festival-date-badge">Janvier / Février</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Jaisalmer, Désert du Thar</div>
                <h3 className="festival-title">Festival du Désert de Jaisalmer</h3>
                <p className="festival-desc">
                  3 jours de festivités dans les dunes : polo à dos de chameau, concours des plus belles moustaches, nouage de turbans et danses du feu folkloriques.
                </p>
              </div>
            </div>

            {/* Festival 4: Soufi Spirit Jodhpur */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2012/07/429050_408313475851932_213490427_n-300x240.jpg"
                  alt="Festival Soufi Jodhpur"
                  onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                />
                <div className="festival-date-badge">Février</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Fort Mehrangarh, Jodhpur</div>
                <h3 className="festival-title">World Sacred Spirit Festival</h3>
                <p className="festival-desc">
                  Les remparts du Fort Mehrangarh de Jodhpur s'illuminent de mille bougies pour accueillir les plus grands musiciens sacrés et poètes soufis de la Route de la Soie.
                </p>
              </div>
            </div>

            {/* Festival 5: Diwali */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2012/07/Diwali_Diya-300x225.jpg"
                  alt="Diwali Fête des Lumières"
                  onError={(e) => { e.target.src = '/images/dest-[#1D747A].jpg'; }}
                />
                <div className="festival-date-badge">Octobre / Novembre</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Toute l'Inde</div>
                <h3 className="festival-title">Diwali – Fête des Lumières</h3>
                <p className="festival-desc">
                  Célébration du retour du Seigneur Rama. Des millions de petites lampes en terre cuite (Diyas) et de feux d'artifice illuminent les maisons et les temples.
                </p>
              </div>
            </div>

            {/* Festival 6: Éléphants de Jaipur */}
            <div className="festival-card">
              <div className="festival-img-wrap">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2012/07/elephant-festival-1-300x199.jpg"
                  alt="Festival de l'Éléphant Jaipur"
                  onError={(e) => { e.target.src = '/images/dest-jaipur.jpg'; }}
                />
                <div className="festival-date-badge">Mars</div>
              </div>
              <div className="festival-body">
                <div className="festival-location"><i className="fas fa-map-marker-alt"></i> Jaipur, Rajasthan</div>
                <h3 className="festival-title">Festival de l’Éléphant de Jaipur</h3>
                <p className="festival-desc">
                  Défilé royal d'éléphants femelles parées de tapis de selle brodés d'or, de bijoux et de motifs peints à la main au son des tambours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PATRIMOINE UNESCO & CONSEILS PRATIQUES */}
      <section id="patrimoine-unesco" className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Monuments & Savoir-Vivre</span>
            <h2 className="section-title">Patrimoine UNESCO, Santé & Usages</h2>
            <p className="section-description">
              Les incontournables culturels et les règles de politesse pour voyager en toute sérénité.
            </p>
          </div>

          <div className="unesco-grid" id="sante-cuisine">
            {/* Left: UNESCO Sites */}
            <div className="climat-card">
              <h3 className="climat-card-title">
                <i className="fas fa-landmark"></i> Monuments Classés UNESCO
              </h3>
              <p className="contact-lead-desc">
                L'Inde abrite certains des plus beaux trésors de l'Humanité :
              </p>

              <ul className="visas-list">
                <li><strong>• Agra :</strong> Le Taj Mahal et le Fort Rouge d'Agra.</li>
                <li><strong>• Rajasthan :</strong> Le Jantar Mantar de Jaipur et les 6 Forts du Rajasthan.</li>
                <li><strong>• Delhi :</strong> Tombe de Humayun, complexe du Qutb Minar et le Fort Rouge.</li>
                <li><strong>• Madhya Pradesh :</strong> Les temples érotiques de Khajuraho et Sanchi.</li>
                <li><strong>• Inde du Sud :</strong> Les ruines de Hampi, grottes d'Ajanta/Ellora et Mahabalipuram.</li>
              </ul>
            </div>

            {/* Right: Santé, Cuisine & Usages */}
            <div className="climat-card">
              <h3 className="climat-card-title">
                <i className="fas fa-user-check"></i> Usages & Règles de Savoir-Vivre
              </h3>

              <ul className="visas-list">
                <li><strong>• Tenue dans les temples :</strong> Déchaussez-vous à l'entrée. Évitez les shorts et épaules dénudées. Couvrez votre tête dans les temples Sikhs et retirez les objets en cuir dans les temples Jaïns.</li>
                <li><strong>• Eau & Boissons :</strong> Consommez uniquement de l'eau en bouteille capsulée. Évitez les glaçons. Dégustez le Masala Chai ou un Lassi au yaourt.</li>
                <li><strong>• Pourboires (Baksheesh) :</strong> Prévoyez 5 à 10% au restaurant, environ 400-500 Rps/jour pour votre chauffeur privé et 500 Rps/jour pour un guide francophone.</li>
                <li><strong>• Courant électrique :</strong> 230-240V / 50Hz (prévoir un adaptateur universel).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

