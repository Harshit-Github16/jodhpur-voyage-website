import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog Voyage Inde & Népal | Conseils & Guides de Voyage | Jodhpur Voyage',
  description: 'Retrouvez nos articles de blog, conseils pratiques, guides de voyage et secrets locaux pour préparer votre séjour au Rajasthan et en Inde.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Les 7 Ruelles Bleues Secrètes de Jodhpur à Photographier absolument',
      category: 'Guide Photo',
      date: '02 Septembre 2026',
      readTime: '5 min de lecture',
      img: '/images/dest-jodhpur.jpg',
      excerpt: 'Explorez le quartier historique de Navchokiya, ses façades indigo, le puits à degrés Toorji Ka Jhalra et ses toits secrets.',
      slug: 'detail',
    },
    {
      title: 'Guide Complet du Safari Désert à Osian : Dunes, Chameaux & Musique Folk',
      category: 'Aventure Désert',
      date: '05 Septembre 2026',
      readTime: '6 min de lecture',
      img: '/images/Voyage-Jaisalmer.jpg',
      excerpt: 'Tout ce qu\'il faut savoir pour organiser une escapade désertique à Osian près de Jodhpur loin de la foule.',
      slug: 'detail',
    },
    {
      title: 'Saveurs de Jodhpur : Le Guide de la Street Food Marwari',
      category: 'Gastronomie',
      date: '07 Septembre 2026',
      readTime: '4 min de lecture',
      img: '/images/dest-rajasthan.jpg',
      excerpt: 'Goûtez aux fameux Pyaaz Kachori, Mirchi Vada et à la légendaire Makhaniya Lassi de la Clock Tower.',
      slug: 'detail',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Blog Voyage Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-newspaper"></i> Blog & Conseils de Voyage
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Carnets de Voyage
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Conseils d&apos;experts, secrets locaux et récits d&apos;immersion culturelle pour préparer votre aventure en Inde.
          </p>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-[#F8FBFB] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1D747A] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                      <span><i className="far fa-calendar-alt text-[#C58B39]"></i> {post.date}</span>
                      <span>•</span>
                      <span><i className="far fa-clock text-[#1D747A]"></i> {post.readTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#1A2B2C] group-hover:text-[#1D747A] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#1D747A]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#C58B39] flex items-center gap-2">
                      <span>Lire L&apos;Article</span>
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
