'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [filter, setFilter] = useState('all');

  const articles = [
    {
      id: 1,
      category: 'rajasthan',
      badge: 'Rajasthan',
      title: 'Jaisalmer, la ville dorée du désert du Thar',
      excerpt: 'On l\'appelle la cité dorée en raison de la couleur ocre de sa forteresse et de ses havelis.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg',
      fallbackImg: '/images/dest-jaisalmer.jpg',
    },
    {
      id: 2,
      category: 'spiritualite nord',
      badge: 'Spiritualité',
      title: 'Les ghats mystiques de Varanasi le long du Gange',
      excerpt: 'Découvrez la vie spirituelle et les cérémonies ancestrales sur les berges du fleuve sacré.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
    },
    {
      id: 3,
      category: 'nepal',
      badge: 'Népal',
      title: 'Guide complet pour réussir son trek dans l\'Himalaya',
      excerpt: 'De Pokhara à Katmandou, tout savoir sur la préparation et l\'encadrement des randonnées.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
    },
    {
      id: 4,
      category: 'rajasthan',
      badge: 'Rajasthan',
      title: 'Jaipur : Les secrets de la Cité Rose des Maharajas',
      excerpt: 'Visitez le Hawa Mahal, le Fort d\'Amber et les marchés colorés de la capitale du Rajasthan.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2024/07/jaipur-travel.jpg',
      fallbackImg: '/images/dest-jaipur.jpg',
    },
    {
      id: 5,
      category: 'nord',
      badge: 'Inde du Nord',
      title: 'Rishikesh : Capitale mondiale du yoga au pied de l\'Himalaya',
      excerpt: 'Immergez-vous dans la sérénité des ashrams et l\'énergie pure des cérémonies Aarti du soir.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2016/07/voyage-en-inde-Rishikesh.jpg.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
    },
    {
      id: 6,
      category: 'nord',
      badge: 'Ladakh',
      title: 'Ladakh : Traversée du Petit Tibet et des cols mythiques',
      excerpt: 'Découvrez les monastères bouddhistes perchés et les lacs d\'altitude aux eaux turquoise.',
      img: 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/08/voyage-au-ladakh-inde.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
    },
  ];

  const filteredArticles = articles.filter((art) => {
    if (filter === 'all') return true;
    return art.category.includes(filter);
  });

  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
          alt="Blog Banner"
          className="blog-hero-bg"
          onError={(e) => { e.target.src = '/images/dest-jaisalmer.jpg'; }}
        />
        <div className="container blog-hero-content">
          <span className="hero-badge"><i className="fas fa-pen-nib"></i> Carnets de Voyage</span>
          <h1 className="blog-hero-title">Notre Blog & Inédits</h1>
          <p className="blog-hero-desc">
            Conseils d'experts, guides culturels et secrets d'itinéraires pour votre voyage en Inde et au Népal.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CATEGORY FILTER TABS */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tous les articles
            </button>
            <button
              className={`filter-btn ${filter === 'rajasthan' ? 'active' : ''}`}
              onClick={() => setFilter('rajasthan')}
            >
              Rajasthan
            </button>
            <button
              className={`filter-btn ${filter === 'nord' ? 'active' : ''}`}
              onClick={() => setFilter('nord')}
            >
              Inde du Nord
            </button>
            <button
              className={`filter-btn ${filter === 'spiritualite' ? 'active' : ''}`}
              onClick={() => setFilter('spiritualite')}
            >
              Spiritualité
            </button>
            <button
              className={`filter-btn ${filter === 'nepal' ? 'active' : ''}`}
              onClick={() => setFilter('nepal')}
            >
              Népal
            </button>
          </div>

          <div className="tours-grid">
            {filteredArticles.map((art) => (
              <div key={art.id} className="tour-card">
                <div className="tour-card-image-wrap">
                  <img
                    src={art.img}
                    alt={art.title}
                    onError={(e) => { e.target.src = art.fallbackImg; }}
                  />
                  <span className="tour-card-badge">{art.badge}</span>
                </div>
                <div className="tour-card-body">
                  <div className="mega-blog-meta"><i className="far fa-calendar"></i> Publié récemment</div>
                  <h3 className="tour-card-title">{art.title}</h3>
                  <p className="tour-card-excerpt">{art.excerpt}</p>
                  <Link href="/blog/detail" className="btn btn-sm btn-primary mt-auto">
                    Lire l'article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

