'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const destinationsList = [
    {
      category: 'rajasthan',
      title: 'Rajasthan',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide3-300x176.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      excerpt: 'Cités royales, désert du Thar, forts majestueux et havelis sculptées du Shekhawati.',
      link: '/destinations/rajasthan',
      buttonText: 'Explorer le Rajasthan',
    },
    {
      category: 'nord',
      title: 'Inde du Nord & Gange',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg',
      fallbackImg: '/images/image-8.jpg',
      excerpt: 'De la mythique Delhi au Taj Mahal d\'Agra jusqu\'aux cérémonies sacrées de Varanasi.',
      link: '/destinations/rajasthan',
      buttonText: 'Découvrir l\'Inde du Nord',
    },
    {
      category: 'sud',
      title: 'Inde du Sud & Kerala',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2015/01/Kerala_Backwaters.jpg',
      fallbackImg: '/images/dest-kerala.jpg',
      excerpt: 'Naviguez sur les backwaters, parcourez les plantations de thé et visitez les gopurams sculptés.',
      link: '/destinations/rajasthan',
      buttonText: 'Découvrir l\'Inde du Sud',
    },
    {
      category: 'nepal',
      title: 'Népal',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg',
      fallbackImg: '/images/dest-nepal.jpg',
      excerpt: 'La vallée de Katmandou, la cité historique de Bhaktapur et les sommets de l\'Himalaya.',
      link: '/destinations/rajasthan',
      buttonText: 'Découvrir le Népal',
    },
    {
      category: 'nepal',
      title: 'Ladakh & Spiti',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/08/voyage-au-ladakh-inde.jpg',
      fallbackImg: '/images/dest-ladakh.jpg',
      excerpt: 'Paysages lunaires, monastères bouddhistes perchés et cols d\'altitude exceptionnels.',
      link: '/destinations/rajasthan',
      buttonText: 'Découvrir le Ladakh',
    },
    {
      category: 'nord',
      title: 'Gujarat & Orissa',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2024/11/gujarat-voyage.jpg',
      fallbackImg: '/images/dest-gujarat.jpg',
      excerpt: 'Patrimoine textile, désert de sel blanc de Kutch et faune sauvage préservée.',
      link: '/destinations/rajasthan',
      buttonText: 'Découvrir le Gujarat',
    },
  ];

  const [remoteDestinations, setRemoteDestinations] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchDest = async () => {
      try {
        const res = await fetch(`${API_BASE || ''}/api/v1/destination-categories`);
        const json = await res.json();
        const payload = json?.data || json;
        const list = Array.isArray(payload.data) ? payload.data : (Array.isArray(payload) ? payload : []);
        if (mounted && list.length) {
          setRemoteDestinations(list.map((c) => ({
            category: c.slug || c.key || c.name || 'region',
            title: c.name || c.title || '',
            image: c.image || c.cover || '/images/dest-rajasthan.jpg',
            fallbackImg: '/images/dest-rajasthan.jpg',
            excerpt: c.description || c.summary || '',
            link: `/destinations/${c.slug || c._id || ''}`,
            buttonText: `Découvrir ${c.name || ''}`,
          })));
        }
      } catch (err) {
        console.warn('Failed to fetch destination categories', err.message || err);
      }
    };
    fetchDest();
    return () => { mounted = false; };
  }, []);

  const sourceDestinations = remoteDestinations && remoteDestinations.length ? remoteDestinations : destinationsList;

  const filteredDestinations =
    activeFilter === 'all'
      ? sourceDestinations
      : sourceDestinations.filter((d) => d.category === activeFilter);

  return (
    <main>
      {/* Banner */}
      <section className="destinations-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
          onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
          alt="Destinations Banner"
          className="destinations-hero-bg"
        />
        <div className="container destinations-hero-content">
          <span className="hero-badge">Nos Régions</span>
          <h1 className="destinations-hero-title">Nos Destinations d'Exception</h1>
        </div>
      </section>

      {/* Main Directory */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Explorer</span>
            <h2 className="section-title">Où souhaitez-vous voyager ?</h2>
            <p className="section-description">
              Sélectionnez la région de vos rêves pour découvrir nos circuits et programmes sur mesure.
            </p>
          </div>

          {/* INTERACTIVE FILTER TABS */}
          <div className="filter-tabs">
            {[
              { id: 'all', label: 'Toutes Les Régions' },
              { id: 'rajasthan', label: 'Rajasthan' },
              { id: 'nord', label: 'Inde du Nord' },
              { id: 'sud', label: 'Inde du Sud' },
              { id: 'nepal', label: 'Népal & Himalaya' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tours-grid">
            {filteredDestinations.map((dest, idx) => (
              <div className="tour-card" key={idx}>
                <Link href={dest.link} className="tour-card-image-wrap" title={dest.buttonText}>
                  <img
                    src={dest.image}
                    onError={(e) => { e.target.src = dest.fallbackImg; }}
                    alt={dest.title}
                  />
                </Link>
                <div className="tour-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="tour-card-title">
                      <Link href={dest.link}>{dest.title}</Link>
                    </h3>
                    <p className="tour-card-excerpt">{dest.excerpt}</p>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href={dest.link} className="btn btn-primary btn-sm btn-full">
                      {dest.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Votre voyage sur mesure en Inde & Népal</h2>
          <Link href="/voyage-sur-mesure" className="btn btn-primary btn-lg">
            Créer mon voyage
          </Link>
        </div>
      </section>
    </main>
  );
}
