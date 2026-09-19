import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Notre Équipe | Jodhpur Voyage - Guides Francophones & Chauffeurs',
  description: 'Découvrez l\'équipe locale francophone de Jodhpur Voyage. Guides certifiés, chauffeurs expérimentés et concepteurs de voyages passionnés.',
};

export default function NotreEquipePage() {
  const teamMembers = [
    {
      name: 'Mr Singh',
      role: 'Fondateur & Direct Directeur',
      photo: '/images/image-12.jpg',
      bio: 'Diplômé en tourisme de l\'université de Jodhpur, Mr Singh cumule 20 ans d\'expérience dans l\'organisation de circuits sur mesure en Inde.',
    },
    {
      name: 'Vikramaditya Rathore',
      role: 'Responsable Logistique & Safaris',
      photo: '/images/image-8.jpg',
      bio: 'Expert du désert du Thar et de la logistique routière, il supervise le confort et la sécurité de tous vos déplacements.',
    },
    {
      name: 'Pooja Choudhary',
      role: 'Guide Francophone & Culture',
      photo: '/images/image-6.jpg',
      bio: 'Spécialiste de l\'histoire du Rajputana et du patrimoine moghol, elle partage les légendes locales avec enthousiasme.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chauffeur Senior Privé',
      photo: '/images/image-9.jpg',
      bio: 'Plus de 15 ans de conduite prudente sur les routes du Rajasthan et d\'Inde du Nord. Attentionné et toujours souriant.',
    },
  ];

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[40vh] min-h-[340px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Notre Equipe Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-users"></i> Des Passionnés à Votre Service
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Notre Équipe Locale
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Rencontrez les visages, guides francophones et chauffeurs chevronnés qui font le succès de votre séjour en Inde.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-subtitle">Savoir-Faire & Convivialité</span>
            <h2 className="font-heading text-3xl font-bold text-[#1A2B2C] mt-2">
              Des Experts Francophones sur le Terrain
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Chaque membre de notre équipe partage l&apos;amour de son patrimoine et l&apos;exigence d&apos;un service de haute qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-[#F8FBFB] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group text-center p-6 space-y-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-md border-4 border-white group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1A2B2C]">{member.name}</h3>
                  <span className="text-xs font-bold uppercase text-[#C58B39] block mt-1">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1A2B2C] text-white p-8 sm:p-12 rounded-3xl text-center space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">Vous Souhaitez Échanger Avec Notre Équipe ?</h3>
            <p className="text-gray-300 text-sm max-w-xl mx-auto font-light">
              Nos conseillers vous répondent directement en français pour construire votre parcours.
            </p>
            <div>
              <Link href="/contact" className="btn-secondary text-xs font-bold uppercase px-6 py-3 rounded-lg inline-flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>Nous Contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
