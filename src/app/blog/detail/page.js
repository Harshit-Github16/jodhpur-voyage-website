import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Les 7 Ruelles Bleues Secrètes de Jodhpur | Blog Jodhpur Voyage',
  description: 'Découvrez notre guide photo des ruelles bleues de Navchokiya, le puits Toorji Ka Jhalra et les meilleurs panoramas de la cité bleue.',
};

export default function BlogDetailPage() {
  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[400px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Ruelles Bleues Jodhpur"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-camera"></i> Guide Photo Jodhpur
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white max-w-4xl mx-auto leading-tight">
            Les 7 Ruelles Bleues Secrètes de Jodhpur à Photographier Absolument
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-300 pt-2 font-light">
            <span>Par Mr Singh</span>
            <span>•</span>
            <span>02 Septembre 2026</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-sm font-light">
          <p className="text-base text-[#1A2B2C] font-normal border-l-4 border-[#1D747A] pl-4 italic bg-[#F8FBFB] p-4 rounded-r-xl">
            La cité bleue de Jodhpur est un labyrinthe enchanteur de ruelles médiévales peintes à l&apos;indigo. Découvrez nos spots photos préférés loin de la foule touristique.
          </p>

          <h2 className="font-heading text-2xl font-bold text-[#1A2B2C] pt-4">
            1. Le Quartier Historique de Navchokiya
          </h2>
          <p>
            C&apos;est au cœur de Navchokiya que se trouvent les maisons peintes du bleu le plus intense. Traditionnellement réservées aux brahmanes, ces demeures conservent une fraîcheur naturelle remarquable face à la chaleur du désert du Thar.
          </p>

          <div className="my-6 rounded-2xl overflow-hidden shadow-lg h-[380px]">
            <img src="/images/dest-rajasthan.jpg" alt="Navchokiya Jodhpur" className="w-full h-full object-cover" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-[#1A2B2C] pt-4">
            2. Le Puits à Degrés Toorji Ka Jhalra
          </h2>
          <p>
            Érigé au XVIIIe siècle par la reine consort de Jodhpur, ce chef-d&apos;œuvre d&apos;architecture hydraulique offre des perspectives géométriques fascinantes au soleil couchant.
          </p>

          <h2 className="font-heading text-2xl font-bold text-[#1A2B2C] pt-4">
            3. Le Belvédère de Pachetia Hill
          </h2>
          <p>
            Grimpez les marches de pierre menant à Pachetia Hill pour embrasser une vue panoramique à 360° sur toute la ville bleue nichée sous la majestueuse forteresse de Mehrangarh.
          </p>

          {/* AUTHOR BOX */}
          <div className="mt-12 p-6 bg-[#F8FBFB] rounded-2xl border border-gray-100 flex items-center gap-4">
            <img src="/images/image-12.jpg" alt="Author" className="w-16 h-16 rounded-full object-cover border-2 border-[#1D747A]" />
            <div>
              <h4 className="font-heading font-bold text-base text-[#1A2B2C]">Rédigé par Mr Singh</h4>
              <p className="text-xs text-gray-500 mt-1">
                Fondateur de Jodhpur Voyage et guide certifié. Passionné par l&apos;histoire et la photographie du Rajasthan.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <Link href="/blog" className="btn-outline text-xs font-bold uppercase px-6 py-3 rounded-lg">
              <i className="fas fa-arrow-left mr-2"></i> Retour aux Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
