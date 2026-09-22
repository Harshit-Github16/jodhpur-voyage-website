'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const slugParam = searchParams?.get('slug') || searchParams?.get('id') || pathname?.split?.('/').pop();
  const [post, setPost] = useState(null);
  const [remotePopular, setRemotePopular] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchPost = async () => {
      try {
        if (!slugParam) return;
        // Try by id first, then by slug
        const tryId = await fetch(`${API_BASE || ''}/api/v1/blogs/${slugParam}`);
        if (tryId.ok) {
          const json = await tryId.json();
          if (mounted) setPost(json?.data || json);
          return;
        }
        const bySlug = await fetch(`${API_BASE || ''}/api/v1/blogs?slug=${encodeURIComponent(slugParam)}`);
        if (bySlug.ok) {
          const json = await bySlug.json();
          const item = json?.data?.data?.[0] || json?.data?.[0] || (Array.isArray(json) ? json[0] : null);
          if (mounted && item) setPost(item);
        }
      } catch (err) {
        console.warn('Failed to load blog post', err.message || err);
      }
    };

    const fetchPopular = async () => {
      try {
        const res = await fetch(`${API_BASE || ''}/api/v1/blogs`);
        const json = await res.json();
        const list = json?.data?.data || json?.data || json;
        if (mounted && Array.isArray(list)) setRemotePopular(list.slice(0, 6));
      } catch (err) {
        console.warn('Failed to fetch popular posts', err.message || err);
      }
    };

    fetchPost();
    fetchPopular();
    return () => { mounted = false; };
  }, [slugParam]);
  return (
    <>
      {/* MAIN BLOG DETAIL SECTION */}
      <section className="section-padding bg-white blog-detail-wrapper">
        <div className="container blog-detail-container">
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Accueil</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/blog">Blog de Voyage</Link>
            {post?.category && (
              <>
                <i className="fas fa-chevron-right"></i>
                <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link>
              </>
            )}
            <i className="fas fa-chevron-right"></i>
            <span className="current">{post?.title || 'Article'}</span>
          </nav>

          {/* Header Section */}
          <header className="blog-hero-header">
            <span className="blog-cat-badge">
              <i className="fas fa-compass"></i> {post?.category || 'Article'}
            </span>

            <h1 className="blog-detail-title">{post?.title || 'Article'}</h1>

            <div className="blog-meta-wrapper">
              <div className="blog-meta-author-group">
                <img
                  src={post?.author?.avatar || 'https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/logo-transprent.png'}
                  alt={post?.author?.name || 'Équipe Jodhpur Voyage'}
                  className="blog-meta-avatar"
                />
                <div className="blog-author-info">
                  <span className="blog-author-name">{post?.author?.name || 'Équipe Jodhpur Voyage'}</span>
                  <span className="blog-author-role">{post?.author?.role || 'Experts Francophones'}</span>
                </div>
              </div>

              <div className="blog-meta-pills">
                <span className="blog-meta-pill"><i className="far fa-calendar-alt"></i> {post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '—'}</span>
                <span className="blog-meta-pill"><i className="far fa-clock"></i> {post?.readTime || '6 min de lecture'}</span>
                <span className="blog-meta-pill"><i className="far fa-eye"></i> {post?.views || '—'} Vues</span>
              </div>
            </div>

            {/* Featured Hero Image Showcase */}
            <div className="blog-detail-hero-img">
              <img
                src={post?.image || 'https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg'}
                alt={post?.title || 'Hero image'}
                onError={(e) => { e.target.src = '/images/dest-jaisalmer.jpg'; }}
              />
              {post?.heroCaption && (
                <div className="blog-hero-caption">
                  <i className="fas fa-camera"></i> {post.heroCaption}
                </div>
              )}
            </div>
          </header>

          {/* Main 2-Column Layout */}
          <div className="blog-layout-grid">
            {/* Left: Main Article Body */}
            <article className="blog-main-content">
              {/* Key Summary Box */}
              <div className="blog-summary-box">
                <div className="blog-summary-title">
                  <i className="fas fa-lightbulb"></i> Ce que vous allez découvrir dans cet article :
                </div>
                <ul className="blog-summary-list">
                  <li><i className="fas fa-check-circle"></i> L'histoire fascinante de la cité fortifiée sur l'ancienne Route de la Soie.</li>
                  <li><i className="fas fa-check-circle"></i> Les secrets du Fort de Jaisalmer, l'un des rares forts encore habités au monde.</li>
                  <li><i className="fas fa-check-circle"></i> La beauté architecturale des denses Havelis scupltées dans le grès jaune.</li>
                  <li><i className="fas fa-check-circle"></i> Conseils pratiques pour organiser votre safari dromadaire & nuit dans le désert du Thar.</li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="blog-article-content">
                {post?.contentHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                ) : post?.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <>
                    <p className="blog-lead-paragraph">
                      À l'extrême ouest de l'Inde, aux portes du grand désert du Thar, émerge une citadelle magique de grès jaune ocre qui semble tout droit sortie d'un conte des Mille et Une Nuits : <strong>Jaisalmer</strong>.
                    </p>

                    <p>
                      Fondée en 1156 par le Maharawal Jaisal, la ville fut pendant des siècles une étape stratégique sur la route de la Soie et des épices reliant l'Inde à la Perse et au Moyen-Orient. Les riches marchands jains et rajputs y construisirent des havelis monumentales sculptées avec une finesse inégalée dans la pierre du désert.
                    </p>

                    <blockquote className="blog-blockquote">
                      "Jaisalmer n'est pas simplement une cité du désert, c'est un mirage impérial sculpté dans l'or liquide du grès rajput."
                    </blockquote>

                    <h2 className="blog-heading-2">Le Fort de Jaisalmer (Sonar Qila)</h2>
                    <p>
                      À la différence de la plupart des forteresses indiennes qui ne servent plus aujourd'hui que de musées, le <strong>Fort de Jaisalmer</strong> (Sonar Qila ou le Fort Doré) est l'un des rares forts vivants au monde. Près d'un quart de la population de la vieille ville réside encore à l'intérieur de ses 99 bastions et remparts imposants.
                    </p>
                    <p>
                      En vous promenant dans ses ruelles labyrinthiques et ombragées, vous découvrirez des palais royaux, sept temples jaïns reliés entre eux aux sculptures d'une délicatesse inouïe, ainsi que de petits ateliers d'artisans sculpteurs et tisseurs.
                    </p>

                    {/* Embedded Gallery Grid */}
                    <div className="blog-gallery-grid">
                      <div className="blog-gallery-item">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2026/07/Voyage-Jaisalmer.jpg"
                          alt="Détails architecturaux de Jaisalmer"
                          onError={(e) => { e.target.src = '/images/dest-jaisalmer.jpg'; }}
                        />
                        <span>Architecture Rajput & Grès Jaune</span>
                      </div>
                      <div className="blog-gallery-item">
                        <img
                          src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/07/jaipur-travel.jpg"
                          alt="Patwon Ki Haveli Jaisalmer"
                          onError={(e) => { e.target.src = '/images/dest-jaipur.jpg'; }}
                        />
                        <span>Dentelle de pierre des Havelis</span>
                      </div>
                    </div>

                    <h2 className="blog-heading-2">Les Havelis Scintillantes du Désert</h2>
                    <p>
                      Parmi les trésors d'architecture civile de Jaisalmer, les havelis (demeures de riches négociants) occupent une place d'honneur. La célèbre <em>Patwon Ki Haveli</em> se distingue par son enfilade de 5 palais interconnectés dotés de balcons finely ajourés (jharokhas).
                    </p>
                    <p>
                      La <em>Nathmal Ki Haveli</em> et la <em>Salim Singh Ki Haveli</em> surprennent quant à elles par leurs motifs sculptés imitant la dentelle et la finesse de leurs façades qui captent la lumière dorée du soleil couchant.
                    </p>

                    {/* Practical Tip Box */}
                    <div className="blog-tip-box">
                      <div className="blog-tip-icon"><i className="fas fa-star"></i></div>
                      <div className="blog-tip-content">
                        <strong>Conseil de l'expert Jodhpur Voyage :</strong>
                        La meilleure période pour visiter Jaisalmer s'étend d'octobre à mars, lorsque le climat du désert est agréable. Ne manquez pas le coucher du soleil depuis le point de vue de <em>Sunset Point (Vyas Chhatri)</em> pour voir la ville entière s'illuminer d'une teinte ambrée.
                      </div>
                    </div>

                    <h2 className="blog-heading-2">Nuit sous les Étoiles dans le Désert de Thar</h2>
                    <p>
                      Un séjour à Jaisalmer ne serait pas complet sans une escapade dans les dunes dorées du désert du Thar (Sam ou Khuri). À dos de dromadaire au soleil couchant, puis autour d'un feu de camp animé par les danses et musiques traditionnelles langas et manganiars, vous vivrez une nuit magique sous un ciel étoilé d'une clarté spectaculaire.
                    </p>
                  </>
                )}
              </div>

              {/* Social Share Bar */}
              <div className="blog-share-bar">
                <span className="blog-share-title">
                  <i className="fas fa-share-alt"></i> Partager cet article
                </span>
                <div className="blog-share-links">
                  <a href="https://www.tripadvisor.in/Attraction_Review-g297668-d26864310-Reviews-Jodhpur_Voyage_Pvt_Ltd-Jodhpur_Jodhpur_District_Rajasthan.html" target="_blank" rel="noopener noreferrer" className="blog-share-btn trip" title="TripAdvisor"><img src="/images/tripad-icon.png" alt="TripAdvisor" className="top-bar-social-img" /></a>
                  <a href="https://www.trustpilot.com/review/jodhpurvoyage.com" target="_blank" rel="noopener noreferrer" className="blog-share-btn trust" title="Trustpilot"><img src="/images/trustpilot-icon.png" alt="Trustpilot" className="top-bar-social-img" /></a>
                  <a href="https://www.facebook.com/jodhpurvoyage/" target="_blank" rel="noopener noreferrer" className="blog-share-btn fb" title="Partager sur Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/jodhpur_voyage/" target="_blank" rel="noopener noreferrer" className="blog-share-btn ig" title="Suivez-nous sur Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="blog-share-btn tw" title="Partager sur X / Twitter"><i className="fab fa-x-twitter"></i></a>
                  <a href="https://wa.me/919650698669" target="_blank" rel="noopener noreferrer" className="blog-share-btn wa" title="Partager sur WhatsApp"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="author-box">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/logo-transprent.png"
                  alt="Équipe Jodhpur Voyage"
                  className="author-avatar-img"
                />
                <div>
                  <span className="author-details-badge"><i className="fas fa-certificate"></i> Agence Réceptive Francophone</span>
                  <div className="author-details-name">Équipe Rédactionnelle Jodhpur Voyage</div>
                  <div className="author-details-bio">
                    Experts francophones passionnés par le patrimoine, l'histoire et les séjours authentiques au Rajasthan et à travers toute l'Inde & Népal. Forts de 20 ans d'expérience sur le terrain.
                  </div>
                </div>
              </div>

              {/* Post Navigation Cards */}
              <div className="blog-post-nav">
                <Link href="/blog/detail" className="blog-post-nav-card">
                  <span className="blog-post-nav-dir"><i className="fas fa-arrow-left"></i> Article Précédent</span>
                  <span className="blog-post-nav-title">Les ghats mystiques de Varanasi le long du Gange</span>
                </Link>
                <Link href="/blog/detail" className="blog-post-nav-card" style={{ textAlign: 'right' }}>
                  <span className="blog-post-nav-dir" style={{ justifyContent: 'flex-end' }}>Article Suivant <i className="fas fa-arrow-right"></i></span>
                  <span className="blog-post-nav-title">Guide complet pour un trek réussi dans l'Himalaya au Népal</span>
                </Link>
              </div>
            </article>

            {/* Right: Sticky Sidebar */}
            <aside className="blog-sidebar">
              {/* Widget 1: Search */}
              <div className="sidebar-widget">
                <h4 className="widget-title"><i className="fas fa-search"></i> Rechercher</h4>
                <form className="sidebar-search-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Rechercher un article, lieu..." className="sidebar-search-input" />
                  <button type="submit" className="sidebar-search-btn" aria-label="Rechercher"><i className="fas fa-search"></i></button>
                </form>
              </div>

              {/* Widget 2: Sticky Trip Callout Card */}
              <div className="sidebar-trip-card">
                <span className="sidebar-trip-badge"><i className="fas fa-map-marked-alt"></i> Circuit Sur Mesure</span>
                <h3 className="sidebar-trip-title">Envie de Visiter Jaisalmer ?</h3>
                <p className="sidebar-trip-desc">
                  Concoctez un itinéraire privé au Rajasthan avec votre chauffeur francophone dédié et nuits de charme.
                </p>
                <ul className="sidebar-trip-features">
                  <li><i className="fas fa-check"></i> Chauffeur privé & véhicule climatisé</li>
                  <li><i className="fas fa-check"></i> Hôtels de patrimoine & camp désert</li>
                  <li><i className="fas fa-check"></i> Agence locale 100% francophone</li>
                </ul>
                <Link href="/voyage-sur-mesure" className="btn btn-primary btn-full">
                  <i className="far fa-paper-plane"></i> Demander mon devis gratuit
                </Link>
              </div>

              {/* Widget 3: Trending / Popular Posts */}
              <div className="sidebar-widget">
                <h4 className="widget-title"><i className="fas fa-fire"></i> Articles Populaires</h4>
                <div className="sidebar-posts-list">
                  {(remotePopular && remotePopular.length ? remotePopular : []).map((p) => (
                    <Link
                      key={p._id || p.id || p.slug}
                      href={`/blog/detail?slug=${encodeURIComponent(p.slug || p._id || p.id || '')}`}
                      className="sidebar-post-item"
                    >
                      <img
                        src={p.image || p.cover || '/images/dest-rajasthan.jpg'}
                        alt={p.title || p.name}
                        className="sidebar-post-img"
                        onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                      />
                      <div className="sidebar-post-content">
                        <h5 className="sidebar-post-title">{p.title || p.name}</h5>
                        <span className="sidebar-post-meta"><i className="far fa-clock"></i> {p.readTime || '5 min'}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 4: Tags Cloud */}
              <div className="sidebar-widget">
                <h4 className="widget-title"><i className="fas fa-tags"></i> Mots-Clés</h4>
                <div className="sidebar-tags-cloud">
                  <Link href="/blog" className="sidebar-tag-pill">#Rajasthan</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#Jaisalmer</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#DésertThar</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#Havelis</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#SafariDromadaire</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#UNESCO</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#Varanasi</Link>
                  <Link href="/blog" className="sidebar-tag-pill">#Népal</Link>
                </div>
              </div>
            </aside>
          </div>
        </div >
      </section >

      {/* RELATED BLOG POSTS */}
      < section className="section-padding bg-cream" >
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">À Lire Aussi</span>
            <h2 className="section-title">Articles Similaires</h2>
          </div>

          <div className="home-blog-grid">
            <div className="tour-card">
              <div className="tour-card-image-wrap tour-card-image-sm">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/08/image-8.jpg"
                  alt="Varanasi Blog"
                  onError={(e) => { e.target.src = '/images/dest-rajasthan.jpg'; }}
                />
              </div>
              <div className="tour-card-body">
                <div className="mega-blog-meta">Spiritualité • Inde du Nord</div>
                <h3 className="tour-card-title tour-card-title-sm">Les ghats mystiques de Varanasi le long du Gange</h3>
                <Link href="/blog/detail" className="btn btn-sm btn-outline mt-auto">
                  Lire l'article
                </Link>
              </div>
            </div>

            <div className="tour-card">
              <div className="tour-card-image-wrap tour-card-image-sm">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2025/07/slide8-300x176.jpg"
                  alt="Nepal Blog"
                  onError={(e) => { e.target.src = '/images/dest-jodhpur.jpg'; }}
                />
              </div>
              <div className="tour-card-body">
                <div className="mega-blog-meta">Népal • Trekking</div>
                <h3 className="tour-card-title tour-card-title-sm">Guide complet pour un trek réussi dans l'Himalaya</h3>
                <Link href="/blog/detail" className="btn btn-sm btn-outline mt-auto">
                  Lire l'article
                </Link>
              </div>
            </div>

            <div className="tour-card">
              <div className="tour-card-image-wrap tour-card-image-sm">
                <img
                  src="https://www.jodhpurvoyage.com/wp-content/uploads/2024/07/jaipur-travel.jpg"
                  alt="Jaipur Travel"
                  onError={(e) => { e.target.src = '/images/dest-jaipur.jpg'; }}
                />
              </div>
              <div className="tour-card-body">
                <div className="mega-blog-meta">Rajasthan • Histoire</div>
                <h3 className="tour-card-title tour-card-title-sm">Jaipur : Les secrets de la Cité Rose des Maharajas</h3>
                <Link href="/blog/detail" className="btn btn-sm btn-outline mt-auto">
                  Lire l'article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogDetailPage() {
  return (
    <Suspense fallback={<div className="container section-padding text-center">Chargement de l'article...</div>}>
      <BlogDetailContent />
    </Suspense>
  );
}

