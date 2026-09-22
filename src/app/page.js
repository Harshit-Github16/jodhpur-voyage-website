'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Destinations Carousel Ref
  const destScrollRef = useRef(null);

  // Testimonial & Filter states
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState({ title: 'Circuit sur Mesure', duration: '' });
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [babiesCount, setBabiesCount] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNum1] = useState(5);
  const [captchaNum2] = useState(4);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [heroSlides, setHeroSlides] = useState([
    {
      bg: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg',
      fallbackBg: '/images/hero-tiger.jpg',
      badgeIcon: 'fa-crown',
      badge: 'Tour Opérateur Spécialisé',
      title: 'Jodhpur Voyage',
      subtitle: 'Inde & Népal',
      desc: 'Spécialiste des voyages authentiques et sur mesure au Rajasthan, en Inde du Nord, Inde du Sud et au Népal. Découvrez la beauté séculaire de la cité dorée.',
    },
    {
      bg: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg',
      fallbackBg: '/images/dest-jodhpur.jpg',
      badgeIcon: 'fa-heart',
      badge: "Merveilles d'Inde",
      title: 'Voyages Émotion &',
      subtitle: 'Patrimoine',
      desc: "Explorez les palais des Maharajas, le mythique Taj Mahal et les lieux d'exception avec un chauffeur privé et des guides francophones passionnés.",
    },
    {
      bg: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg',
      fallbackBg: '/images/dest-tajmahal.jpg',
      badgeIcon: 'fa-mountain',
      badge: 'Aventure & Spiritualité',
      title: 'Des Sommets',
      subtitle: 'du Népal',
      desc: "Des vallées sacrées de Katmandou aux sommets mythiques de l'Himalaya, vivez une immersion culturelle et humaine inoubliable.",
    },
  ]);

  // Load hero slider from backend (admin-managed) and merge with defaults
  useEffect(() => {
    let mounted = true;
    const fetchSlider = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/content/hero-slider');
        if (!mounted) return;
        const json = await res.json();
        const payload = json?.data || json?.data?.data || json;
        const slider = payload || null;
        if (slider && slider.slides && Array.isArray(slider.slides) && slider.slides.length > 0) {
          const mapped = slider.slides.map((s) => ({
            bg: s.image || s.bg || '',
            fallbackBg: '/images/hero-tiger.jpg',
            badgeIcon: 'fa-crown',
            badge: s.eyebrow || '',
            title: s.title || '',
            subtitle: s.titleHighlight || '',
            desc: slider.sharedMode ? (slider.shared?.description || '') : (s.description || ''),
          }));
          setHeroSlides(mapped);
        }
      } catch (err) {
        // keep defaults on error
        console.warn('Hero slider fetch failed:', err.message || err);
      }
    };
    fetchSlider();
    return () => {
      mounted = false;
    };
  }, []);

  const popularDestinations = [
    { title: 'Rajasthan', image: '/images/dest-rajasthan.jpg', link: '/destinations/rajasthan' },
    { title: 'Gujarat', image: '/images/dest-gujarat.jpg', link: '/destinations' },
    { title: 'Karnataka', image: '/images/dest-karnataka.jpg', link: '/destinations' },
    { title: 'Népal', image: '/images/dest-nepal.jpg', link: '/destinations' },
    { title: 'Orissa', image: '/images/dest-orissa.jpg', link: '/destinations' },
    { title: 'Ladakh', image: '/images/dest-ladakh.jpg', link: '/destinations' },
    { title: 'Varanasi', image: '/images/dest-varanasi.jpg', link: '/destinations' },
    { title: 'Kerala', image: '/images/dest-kerala.jpg', link: '/destinations' },
    { title: 'Taj Mahal', image: '/images/dest-tajmahal.jpg', link: '/destinations' },
    { title: 'Himachal', image: '/images/dest-himachal.jpg', link: '/destinations' },
    { title: 'Goa', image: '/images/dest-goa.jpg', link: '/destinations' },
    { title: 'Jodhpur', image: '/images/dest-jodhpur.jpg', link: '/destinations/rajasthan' },
  ];

  const [remotePopularDestinations, setRemotePopularDestinations] = useState([]);
  const [remotePopularTours, setRemotePopularTours] = useState([]);
  const [remoteTestimonials, setRemoteTestimonials] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        // Popular destinations
        const respDest = await fetch('http://localhost:5000/api/v1/destination-categories');
        const jsonDest = await respDest.json();
        const payloadDest = jsonDest?.data || jsonDest;
        const listDest = Array.isArray(payloadDest.data) ? payloadDest.data : (Array.isArray(payloadDest) ? payloadDest : []);
        if (mounted && listDest.length) {
          setRemotePopularDestinations(listDest.slice(0, 12).map((c) => ({ title: c.name || c.title, image: c.image || '/images/dest-rajasthan.jpg', link: `/destinations/${c.slug || c._id}` })));
        }

        // Popular tours
        const respTours = await fetch('http://localhost:5000/api/v1/tours');
        const jsonTours = await respTours.json();
        const payloadTours = jsonTours?.data || jsonTours;
        const listTours = Array.isArray(payloadTours.data) ? payloadTours.data : (Array.isArray(payloadTours) ? payloadTours : []);
        if (mounted && listTours.length) {
          setRemotePopularTours(listTours.slice(0, 6).map((t) => ({
            image: t.image || '/images/image-6.jpg',
            fallbackImg: '/images/image-6.jpg',
            badge: t.tag || 'Populaire',
            duration: t.duration || '',
            location: t.cityName || t.location || '',
            title: t.title || t.name || '',
            excerpt: t.overview || t.summary || '',
            price: t.price || 'Sur Demande',
            link: `/tours/${t.slug || t._id}`,
          })));
        }

        // Testimonials / commentaires
        const respRev = await fetch('http://localhost:5000/api/v1/commentaires');
        const jsonRev = await respRev.json();
        const payloadRev = jsonRev?.data || jsonRev;
        const listRev = Array.isArray(payloadRev.data) ? payloadRev.data : (Array.isArray(payloadRev) ? payloadRev : []);
        if (mounted && listRev.length) {
          setRemoteTestimonials(listRev.slice(0, 6).map((r) => ({ quote: r.comment || r.excerpt || '', author: r.author || r.name || 'Voyageur', trip: r.trip || r.tour || '', stars: r.stars || r.rating || 5 })));
        }
      } catch (err) {
        console.warn('Home fetches failed', err.message || err);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, []);

  const popularTours = [
    {
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-6.jpg',
      fallbackImg: '/images/image-6.jpg',
      badge: 'Populaire',
      duration: '14 Jours / 13 Nuits',
      location: 'Rajasthan & Rivière Gange',
      title: 'Séjour au Rajasthan et Bénarès – Le Rajasthan et la rivière Gange',
      excerpt: 'Un voyage magique alliant la féerie des palais des Maharajas et la spiritualité profonde des cérémonies du Gange à Varanasi.',
      price: 'Sur Demande',
      link: '/tours/rajasthan',
    },
    {
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2016/07/voyage-en-inde-Rishikesh.jpg.jpg',
      fallbackImg: '/images/dest-himachal.jpg',
      badge: 'Spirituel',
      duration: '12 Jours / 11 Nuits',
      location: 'Delhi, Amritsar, Dharamsala, Rishikesh',
      title: 'Voyage spirituel en Inde : Delhi, Amritsar, Dharamsala et Rishikesh',
      excerpt: "Une immersion spirituelle unique au Temple d'Or d'Amritsar, dans la résidence du Dalaï-Lama et la capitale mondiale du yoga.",
      price: 'Sur Demande',
      link: '/tours',
    },
    {
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2018/05/Voyage-Rajasthan-Inde.jpg',
      fallbackImg: '/images/dest-rajasthan.jpg',
      badge: 'Authentique',
      duration: '15 Jours / 14 Nuits',
      location: 'Rajasthan Secretaire',
      title: 'Voyage au Rajasthan Hors des sentiers battus',
      excerpt: 'Découvrez la vie rurale, les petits villages princiers préservés du Shekhawati, et les forts secrets hors des foules touristiques.',
      price: 'Sur Demande',
      link: '/tours/rajasthan',
    },
  ];

  const testimonials = [
    {
      quote:
        '« Notre voyage de 15 jours au Rajasthan avec Jodhpur Voyage a été tout simplement magique. Chauffeur ponctuel, voiture très confortable et des conseils d\'une valeur inestimable ! »',
      author: 'Jean-Marc & Sophie D.',
      trip: 'Circuit Rajasthan & Varanasi (Octobre)',
      stars: 5,
    },
    {
      quote:
        '« Une organisation parfaite de A à Z. L\'équipe a su s\'adapter à toutes nos demandes de dernière minute. Nous repasserons par Jodhpur Voyage sans hésitation ! »',
      author: 'Claire & Antoine P.',
      trip: 'Voyage sur mesure au Népal',
      stars: 5,
    },
  ];

  const regionCards = [
    {
      category: 'nord',
      title: 'Inde du Nord',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg',
      fallbackImg: '/images/dest-jodhpur.jpg',
      desc: "Le côtoiement des cultures par ses temples et ses mosquées. Les différents paysages, les provinces de l'Himalaya avec ses glaciers scintillants...",
      link: '/destinations',
    },
    {
      category: 'sud',
      title: 'Inde du Sud',
      image: 'https://www.jodhpurvoyage.com/wp-content/uploads/2015/01/Kerala_Backwaters.jpg',
      fallbackImg: '/images/dest-kerala.jpg',
      desc: "Traversée du Sud de l'Inde de Chennai à Cochin. Au programme : les temples pyramidaux et colorés, l'ancien comptoir français de Pondichéry...",
      link: '/destinations',
    },
    {
      category: 'rajasthan',
      title: 'Rajasthan',
      image: '/images/dest-rajasthan.jpg',
      desc: "Le Rajasthan est le second État le plus touristique de l'Inde. Découvrez les splendeurs du Rajasthan, ses puissantes forteresses et ses palais.",
      link: '/destinations/rajasthan',
    },
    {
      category: 'nord',
      title: 'Gujarat',
      image: '/images/dest-gujarat.jpg',
      desc: 'Séjour au Rajasthan et Gujarat, Voyage au Gujarat, Circuit au Gujarat, Vacances Gujarat, Circuit des villages Gujarat.',
      link: '/destinations',
    },
    {
      category: 'sud',
      title: 'Karnataka',
      image: '/images/dest-karnataka.jpg',
      desc: "Sa côte de sable blanc étincelant, les ruines saisissantes d'Hampi et l'opulence du palais de Mysore comptent parmi ses atouts.",
      link: '/destinations',
    },
    {
      category: 'ladakh',
      title: 'Ladakh',
      image: '/images/dest-ladakh.jpg',
      desc: "Ancien royaume bouddhiste situé sur les hauteurs de l'Himalaya offrant quelques-uns des paysages les plus impressionnants de l'Inde.",
      link: '/destinations',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const scrollDestPrev = () => {
    if (destScrollRef.current) {
      const firstCard = destScrollRef.current.children[0];
      const cardWidth = firstCard ? firstCard.offsetWidth : 240;
      destScrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    }
  };

  const scrollDestNext = () => {
    if (destScrollRef.current) {
      const firstCard = destScrollRef.current.children[0];
      const cardWidth = firstCard ? firstCard.offsetWidth : 240;
      destScrollRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };

  const openBookingModal = (tourTitle = 'Circuit sur Mesure', duration = '') => {
    setSelectedTour({ title: tourTitle, duration });
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/tours?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const filteredRegions =
    activeFilter === 'all'
      ? regionCards
      : regionCards.filter((card) => card.category === activeFilter);

  const sourcePopularDestinations = remotePopularDestinations && remotePopularDestinations.length ? remotePopularDestinations : popularDestinations;
  const sourcePopularTours = remotePopularTours && remotePopularTours.length ? remotePopularTours : popularTours;
  const sourceTestimonials = remoteTestimonials && remoteTestimonials.length ? remoteTestimonials : testimonials;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer, 10) !== captchaNum1 + captchaNum2) {
      alert(`Anti-Spam incorrect! ${captchaNum1} + ${captchaNum2} = ${captchaNum1 + captchaNum2}`);
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <main>
      {/* 1. HERO SLIDER SECTION */}
      <section className="hero-slider-section">
        <div className="hero-slider-wrapper">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.bg}
                onError={(e) => {
                  e.target.src = slide.fallbackBg;
                }}
                alt={slide.title}
                className="hero-slide-bg"
              />
              <div className="hero-slide-overlay"></div>
              <div className="container hero-slide-content">
                <span className="hero-badge">
                  <i className={`fas ${slide.badgeIcon}`}></i> {slide.badge}
                </span>
                <h1 className="hero-title">
                  {slide.title} <span>{slide.subtitle}</span>
                </h1>
                <p className="hero-description">{slide.desc}</p>

                <div className="hero-search-box-container hero-inspired-search">
                  <form onSubmit={handleSearchSubmit} className="inspired-search-bar">
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="text"
                      className="hero-search-input"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Laissez-vous inspirer (ex: Rajasthan, Taj Mahal, Népal...)"
                      autoComplete="off"
                    />
                    <button type="submit" className="inspired-search-btn">
                      <span>Rechercher</span> <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                  <div className="inspired-search-tags">
                    <span className="tags-label">Populaire:</span>
                    {['Rajasthan', 'Taj Mahal', 'Népal', 'Sur Mesure'].map((tag, tIdx) => (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="search-tag"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="hero-controls">
          <button className="hero-arrow hero-prev" onClick={prevSlide} aria-label="Slide précédent">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="hero-dots">
            {heroSlides.map((_, i) => (
              <span
                key={i}
                className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              ></span>
            ))}
          </div>
          <button className="hero-arrow hero-next" onClick={nextSlide} aria-label="Slide suivant">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* 2. DESTINATION CAROUSEL */}
      <section className="destinations-section">
        <div className="container">
          <div className="carousel-header-controls">
            <div>
              <span className="section-subtitle">Explorer</span>
              <h2 className="section-title">Destinations Populaires</h2>
            </div>
            <div className="carousel-arrows">
              <button className="carousel-btn carousel-prev" onClick={scrollDestPrev} aria-label="Précédent">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="carousel-btn carousel-next" onClick={scrollDestNext} aria-label="Suivant">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="destinations-carousel-container">
            <div className="destinations-track" ref={destScrollRef}>
              {sourcePopularDestinations.map((dest, idx) => (
                <div className="destination-card" key={idx}>
                  <img src={dest.image} alt={dest.title} />
                  <div className="destination-card-overlay">
                    <h3 className="destination-card-title">{dest.title}</h3>
                    <Link href={dest.link} className="destination-card-link">
                      Découvrir <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WELCOME SECTION (JODHPUR VOYAGE INTRO - NAMASTÉ & COLLAGE) */}
      <section className="welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-content">
            <div className="welcome-content-tag">
              <span className="tag-icon">🙏</span>
              <span className="tag-text">Namasté !!!</span>
            </div>

            <h2 className="welcome-title">
              Bonjour dans le langage Hindi.<br />
              <span className="title-highlight">Bienvenus sur notre site.</span>
            </h2>

            <div className="welcome-lead-banner">
              <i className="fas fa-gem"></i>
              <span>Agence locale franco-indienne basée au Rajasthan – INDE</span>
            </div>

            <div className="welcome-text">
              <p className="lead-p">
                Experts dans le tourisme avec une parfaite connaissance du pays, nous souhaitons vous faire découvrir l'Inde : un pays mystérieux et paradoxal par sa culture, sa diversité, la coexistence entre ses multiples religions avec ses 330 millions de dieux et de déesses et sa philosophie. Un système de castes, classement dans la société, ainsi que les différentes langues et dialectes. Et bien sûr ses paysages très variés : plaines, déserts, montagnes et mers.
              </p>
              <p>
                <strong>Jodhpur Voyage</strong> est une agence spécialisée vers l'Inde et le Népal, enregistrée au ministère du tourisme du Rajasthan. Disponible, réactive et à l'écoute de toutes les demandes des voyageurs, notre équipe vous proposera des forfaits de voyages sur-mesure et élaborera les meilleurs circuits, y compris hors des sentiers battus, pour réaliser vos plus beaux rêves.
              </p>
            </div>

            <div className="welcome-highlights">
              <div className="welcome-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-car-side"></i>
                </div>
                <div className="feature-info">
                  <h4>Chauffeurs Privés</h4>
                  <p>Expérimentés & Attentionnés</p>
                </div>
              </div>

              <div className="welcome-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="feature-info">
                  <h4>Guides Francophones</h4>
                  <p>Locaux & Passionnés</p>
                </div>
              </div>

              <div className="welcome-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="feature-info">
                  <h4>Assistance 24/7</h4>
                  <p>Disponibilité constante en Inde</p>
                </div>
              </div>

              <div className="welcome-feature-card">
                <div className="feature-icon-wrapper">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <div className="feature-info">
                  <h4>100% Sur Mesure</h4>
                  <p>Circuits adaptés à vos envies</p>
                </div>
              </div>
            </div>

            <div className="welcome-actions">
              <Link href="/qui-nous-sommes" className="btn btn-primary btn-lg">
                En savoir plus sur nous <i className="fas fa-arrow-right"></i>
              </Link>
              <button
                onClick={() => openBookingModal('Voyage sur Mesure - Consultation', '')}
                className="btn btn-outline-dark btn-lg"
              >
                <i className="far fa-paper-plane"></i> Planifier mon voyage
              </button>
            </div>
          </div>

          <div className="welcome-collage-wrap">
            <div className="welcome-collage">
              <div className="collage-main-frame">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-12.jpg"
                  onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                  alt="Rajasthan Architecture"
                  className="collage-img-main"
                />
                <div className="collage-img-overlay"></div>
              </div>

              <div className="collage-secondary-frame">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg"
                  onError={(e) => { e.target.src = '/images/image-8.jpg'; }}
                  alt="Ganges Culture"
                  className="collage-img-secondary"
                />
              </div>

              <div className="collage-badge-experience">
                <div className="collage-badge-number">20+</div>
                <div className="badge-info-wrap">
                  <div className="collage-badge-text">Ans d'Expérience</div>
                  <div className="badge-subtext">en Inde & Népal</div>
                </div>
              </div>

              <div className="collage-badge-floating-tag">
                <i className="fas fa-award"></i>
                <span>Créateur d'Expériences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR TOURS */}
      <section className="tours-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Circuits Incontournables</span>
            <h2 className="section-title">Nos vacances les plus populaires</h2>
            <p className="section-description">Des itinéraires soigneusement conçus pour vivre le meilleur de l'Inde et du Népal.</p>
          </div>

          <div className="tours-grid">
            {sourcePopularTours.map((tour, idx) => (
              <div className="tour-card" key={idx}>
                <Link href={tour.link} className="tour-card-image-wrap" title="Voir l'itinéraire">
                  <img
                    src={tour.image}
                    onError={(e) => { e.target.src = tour.fallbackImg; }}
                    alt={tour.title}
                  />
                  <span className="tour-card-badge">{tour.badge}</span>
                  <div className="tour-card-duration">
                    <i className="far fa-clock"></i> {tour.duration}
                  </div>
                </Link>
                <div className="tour-card-body">
                  <div className="tour-card-location">
                    <i className="fas fa-map-marker-alt"></i> {tour.location}
                  </div>
                  <h3 className="tour-card-title">
                    <Link href={tour.link}>{tour.title}</Link>
                  </h3>
                  <p className="tour-card-excerpt">{tour.excerpt}</p>
                  <div className="tour-card-footer">
                    <div className="tour-card-price">
                      <span className="price-label">À partir de</span>
                      <span className="price-value">{tour.price}</span>
                    </div>
                    <button
                      onClick={() => openBookingModal(tour.title, tour.duration)}
                      className="btn btn-sm btn-outline"
                    >
                      En savoir +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL GRID (DESTINATIONS EN INDE) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Variété de paysages</span>
            <h2 className="section-title">Destinations en Inde</h2>
            <p className="section-description">Du désert majestueux aux montagnes sacrées de l'Himalaya.</p>
          </div>

          <div className="editorial-grid">
            <div className="editorial-card grid-col-8">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
                onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                alt="Rajasthan Grid"
              />
              <div className="editorial-card-overlay">
                <h3 className="editorial-card-title">Rajasthan</h3>
                <p className="editorial-card-text">Terre des forts et des Maharajas</p>
              </div>
            </div>

            <div className="editorial-card grid-col-4">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/11/gujarat-voyage.jpg"
                onError={(e) => { e.target.src = '/images/dest-gujarat.jpg'; }}
                alt="Gujarat Grid"
              />
              <div className="editorial-card-overlay">
                <h3 className="editorial-card-title">Gujarat</h3>
                <p className="editorial-card-text">Architecture & Faune sauvage</p>
              </div>
            </div>

            <div className="editorial-card grid-col-4">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide5-300x176.jpg"
                onError={(e) => { e.target.src = '/images/dest-karnataka.jpg'; }}
                alt="Karnataka Grid"
              />
              <div className="editorial-card-overlay">
                <h3 className="editorial-card-title">Karnataka</h3>
                <p className="editorial-card-text">Temples royaux de Hampi</p>
              </div>
            </div>

            <div className="editorial-card grid-col-4">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/08/voyage-au-ladakh-inde.jpg"
                onError={(e) => { e.target.src = '/images/dest-ladakh.jpg'; }}
                alt="Ladakh Grid"
              />
              <div className="editorial-card-overlay">
                <h3 className="editorial-card-title">Ladakh</h3>
                <p className="editorial-card-text">Le Petit Tibet indien</p>
              </div>
            </div>

            <div className="editorial-card grid-col-4">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2015/01/Kerala_Backwaters.jpg"
                onError={(e) => { e.target.src = '/images/dest-kerala.jpg'; }}
                alt="Inde du Sud Grid"
              />
              <div className="editorial-card-overlay">
                <h3 className="editorial-card-title">Inde du Sud</h3>
                <p className="editorial-card-text">Kerala, Backwaters & Épices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECENT UPDATES */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nouveautés</span>
            <h2 className="section-title">Mises à jour récentes</h2>
            <p className="section-description">Découvrez nos derniers programmes de voyage et circuits thématiques.</p>
          </div>

          <div className="tours-grid">
            <div className="tour-card">
              <Link href="/tours" className="tour-card-image-wrap" title="Voir l'itinéraire">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/11/gujarat-voyage.jpg"
                  onError={(e) => { e.target.src = '/images/dest-gujarat.jpg'; }}
                  alt="Grand Tour du Gujarat"
                />
              </Link>
              <div className="tour-card-body">
                <div className="tour-card-location"><i className="fas fa-star"></i> Circuit Vedette</div>
                <h3 className="tour-card-title"><Link href="/tours">Grand Tour du Gujarat</Link></h3>
                <p className="tour-card-excerpt">
                  De l'immensité blanche du Rann de Kutch aux temples sculptés d'Adalaj et Modhera.
                </p>
                <button
                  onClick={() => openBookingModal('Grand Tour du Gujarat', '')}
                  className="btn btn-sm btn-outline tour-card-btn"
                >
                  En savoir +
                </button>
              </div>
            </div>

            <div className="tour-card">
              <Link href="/tours" className="tour-card-image-wrap" title="Voir l'itinéraire">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2023/06/Le-Monastere-de-Key-en-Inde.jpg"
                  onError={(e) => { e.target.src = '/images/dest-himachal.jpg'; }}
                  alt="Spiti Kinnaur Valley"
                />
              </Link>
              <div className="tour-card-body">
                <div className="tour-card-location"><i className="fas fa-mountain"></i> Himalaya Trans-himalayen</div>
                <h3 className="tour-card-title"><Link href="/tours">Spiti / Kinnaur Valley Circuit</Link></h3>
                <p className="tour-card-excerpt">
                  Traversée spectaculaire des vallées reculées aux monastères bouddhistes millénaires.
                </p>
                <button
                  onClick={() => openBookingModal('Spiti / Kinnaur Valley Circuit', '')}
                  className="btn btn-sm btn-outline tour-card-btn"
                >
                  En savoir +
                </button>
              </div>
            </div>

            <div className="tour-card">
              <Link href="/tours" className="tour-card-image-wrap" title="Voir l'itinéraire">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2022/04/21.jpg"
                  onError={(e) => { e.target.src = '/images/dest-ladakh.jpg'; }}
                  alt="Motorbike Himalayan Tour"
                />
              </Link>
              <div className="tour-card-body">
                <div className="tour-card-location"><i className="fas fa-motorcycle"></i> Moto & Liberté</div>
                <h3 className="tour-card-title"><Link href="/tours">Motorcycle tour in the Himalayas</Link></h3>
                <p className="tour-card-excerpt">
                  Une aventure à moto légendaire Royal Enfield sur les plus hautes routes du monde.
                </p>
                <button
                  onClick={() => openBookingModal('Motorcycle tour in the Himalayas', '')}
                  className="btn btn-sm btn-outline tour-card-btn"
                >
                  En savoir +
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BLOG FEATURE SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Récits & Conseils</span>
            <h2 className="section-title">Notre Blog de Voyage</h2>
          </div>

          <div className="home-blog-grid">
            <div className="editorial-card blog-featured-card">
              <img
                src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                alt="Jaisalmer ville doree"
              />
              <div className="editorial-card-overlay">
                <span className="badge badge-primary blog-featured-badge">Article Vedette</span>
                <h3 className="editorial-card-title">Jaisalmer, la ville dorée</h3>
                <p className="blog-featured-text">Plongez dans la magie des ruelles en grès jaune et de la citadelle vivante du désert.</p>
                <Link href="/blog" className="btn btn-sm btn-primary blog-featured-btn">Lire l'article</Link>
              </div>
            </div>

            <div className="tour-card">
              <div className="tour-card-image-wrap tour-card-image-sm">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg"
                  onError={(e) => { e.target.src = '/images/image-8.jpg'; }}
                  alt="Varanasi Blog"
                />
              </div>
              <div className="tour-card-body">
                <div className="mega-blog-meta">Spiritualité</div>
                <h3 className="tour-card-title tour-card-title-sm">Comprendre la cérémonie de l'Aarti à Varanasi</h3>
                <Link href="/blog" className="btn btn-sm btn-outline mt-auto">En savoir +</Link>
              </div>
            </div>

            <div className="tour-card">
              <div className="tour-card-image-wrap tour-card-image-sm">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg"
                  onError={(e) => { e.target.src = '/images/dest-nepal.jpg'; }}
                  alt="Nepal Blog"
                />
              </div>
              <div className="tour-card-body">
                <div className="mega-blog-meta">Conseils Pratiques</div>
                <h3 className="tour-card-title tour-card-title-sm">Comment préparer son premier voyage en Inde</h3>
                <Link href="/blog" className="btn btn-sm btn-outline mt-auto">En savoir +</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container testimonial-container">
          <div className="quote-icon"><i className="fas fa-quote-left"></i></div>

          <div className="testimonial-slider">
            {sourceTestimonials.map((item, idx) => (
              <div className={`testimonial-item ${idx === activeTestimonial ? 'active' : ''}`} key={idx}>
                <p className="testimonial-text">{item.quote}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{item.author}</div>
                    <div className="author-trip">{item.trip}</div>
                    <div className="rating-stars">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button
              className="carousel-btn testimonial-prev"
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              aria-label="Précédent"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="carousel-btn testimonial-next"
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              aria-label="Suivant"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 9. REGIONS DIRECTORY */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Guide des Régions</span>
            <h2 className="section-title">Découvrez l'Inde & Népal</h2>
          </div>

          <div className="filter-tabs">
            {[
              { id: 'all', label: 'Tous Les Circuits' },
              { id: 'rajasthan', label: 'Rajasthan' },
              { id: 'nord', label: 'Inde du Nord' },
              { id: 'sud', label: 'Inde du Sud' },
              { id: 'ladakh', label: 'Ladakh & Himalaya' },
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

          <div className="editorial-grid">
            {filteredRegions.map((region, idx) => (
              <div className="editorial-card grid-col-4 region-card" key={idx}>
                <img
                  src={region.image}
                  onError={(e) => { e.target.src = region.fallbackImg; }}
                  alt={region.title}
                />
                <div className="editorial-card-overlay">
                  <h3 className="editorial-card-title region-card-title">{region.title}</h3>
                  <p className="region-card-desc">{region.desc}</p>
                  <Link href={region.link} className="destination-card-link">
                    Découvrir <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION BANNER */}
      <section className="cta-banner-section">
        <img
          src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-9.jpg"
          onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
          alt="CTA Background"
          className="cta-bg-image"
        />
        <div className="container cta-content">
          <h2 className="cta-title">Votre voyage en Inde commence ici</h2>
          <p className="cta-description">
            Contactez nos experts locaux dès aujourd'hui pour concevoir le voyage sur mesure de vos rêves.
          </p>
          <div className="cta-buttons">
            <Link href="/voyage-sur-mesure" className="btn btn-primary btn-lg">Voyage sur mesure</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Contactez Nous</Link>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919650698669"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Contactez-nous sur WhatsApp</span>
      </a>

      {/* 11. PACKAGE BOOKING MODAL POPUP */}
      {isModalOpen && (
        <div className="booking-modal-overlay active" id="packageBookingModal">
          <div className="booking-modal">
            <div className="booking-modal-header">
              <button className="modal-close-btn" onClick={closeBookingModal} aria-label="Fermer">
                <i className="fas fa-times"></i>
              </button>
              <h3 className="booking-modal-title">
                <i className="fas fa-paper-plane"></i> Votre Voyage – Demande de Devis
              </h3>
              <div className="selected-tour-badge">
                <i className="fas fa-map-marked-alt"></i> <span>{selectedTour.title}</span>
              </div>
            </div>
            <div className="booking-modal-body">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#1D747A', marginBottom: '1rem' }}></i>
                  <h4>Merci pour votre demande !</h4>
                  <p>Notre équipe de conseillers francophones vous recontactera très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-row-compact">
                    <div className="form-group">
                      <label className="form-label">Civilité / Title *</label>
                      <select className="form-control" defaultValue="" required>
                        <option value="" disabled>-- select --</option>
                        <option value="M.">M. / Mr</option>
                        <option value="Mme">Mme / Mrs</option>
                        <option value="Mlle">Mlle / Ms</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Prénom / First name *</label>
                      <input type="text" className="form-control" placeholder="Votre prénom" required />
                    </div>
                  </div>

                  <div className="form-row-compact">
                    <div className="form-group">
                      <label className="form-label">Nom / Name *</label>
                      <input type="text" className="form-control" placeholder="Votre nom" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Adresse / Address *</label>
                      <input type="text" className="form-control" placeholder="Votre adresse postale" required />
                    </div>
                  </div>

                  <div className="form-row-compact">
                    <div className="form-group">
                      <label className="form-label">E-mail *</label>
                      <input type="email" className="form-control" placeholder="votre.email@domaine.fr" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date de départ / Departure date *</label>
                      <input type="date" className="form-control" required />
                    </div>
                  </div>

                  <div className="form-row-compact">
                    <div className="form-group">
                      <label className="form-label">Pays / Country</label>
                      <select className="form-control" defaultValue="FRANCE">
                        <option value="FRANCE">FRANCE</option>
                        <option value="BELGIQUE">BELGIQUE</option>
                        <option value="SUISSE">SUISSE</option>
                        <option value="CANADA">CANADA</option>
                        <option value="LUXEMBOURG">LUXEMBOURG</option>
                        <option value="AUTRE">AUTRE</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Téléphone / Phone *</label>
                      <input type="tel" className="form-control" placeholder="+33 6 12 34 56 78" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="travelers-grid-4col">
                      <div>
                        <label className="form-label">Adultes</label>
                        <select className="form-control" value={adultsCount} onChange={(e) => setAdultsCount(parseInt(e.target.value, 10))}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Enfants (2-11)</label>
                        <select className="form-control" value={childrenCount} onChange={(e) => setChildrenCount(parseInt(e.target.value, 10))}>
                          {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Bébés (&lt;2)</label>
                        <select className="form-control" value={babiesCount} onChange={(e) => setBabiesCount(parseInt(e.target.value, 10))}>
                          {[0, 1, 2, 3].map(num => <option key={num} value={num}>{num}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Total</label>
                        <input
                          type="text"
                          className="form-control"
                          value={adultsCount + childrenCount + babiesCount}
                          readOnly
                          style={{ backgroundColor: 'var(--color-cream)', fontWeight: 700, textAlign: 'center' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row-compact">
                    <div className="form-group">
                      <label className="form-label">Flexibilité</label>
                      <select className="form-control" defaultValue="Dates exactes">
                        <option value="Dates exactes">Dates exactes</option>
                        <option value="± 3 jours">± 3 jours</option>
                        <option value="± 7 jours">± 7 jours</option>
                        <option value="± 15 jours">± 15 jours</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Ville de départ *</label>
                      <select className="form-control" defaultValue="Paris" required>
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Nice">Nice</option>
                        <option value="Toulouse">Toulouse</option>
                        <option value="Bordeaux">Bordeaux</option>
                        <option value="Nantes">Nantes</option>
                        <option value="Bruxelles">Bruxelles</option>
                        <option value="Genève">Genève</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Commentaires *</label>
                    <textarea className="form-control" rows="3" placeholder="Décrivez votre projet, vos attentes, souhaits d'hôtels..." required></textarea>
                  </div>

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

                  <button type="submit" className="modal-submit-btn">
                    Envoyer ma demande de réservation <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
