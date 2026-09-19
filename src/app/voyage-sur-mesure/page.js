'use client';

import React, { useState } from 'react';

export default function VoyageSurMesurePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinations: [],
    duration: '10 à 15 jours',
    travelers: '2 personnes',
    travelDate: '',
    hotelCategory: 'Charme & Haveli (3/4*)',
    budget: '',
    comments: '',
  });

  const handleDestinationToggle = (dest) => {
    setFormData((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter((d) => d !== dest)
        : [...prev.destinations, dest],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[45vh] min-h-[380px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-rajasthan.jpg"
          alt="Voyage Sur Mesure Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-magic"></i> Devis Gratuit & Sans Engagement
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Votre Voyage Sur Mesure
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Confiez-nous votre projet de voyage. Nos conseillers francophones locaux créeront votre itinéraire personnalisé sous 24h.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 bg-[#F8FBFB]">
        <div className="max-w-4xl mx-auto px-6">
          {submitted ? (
            <div className="bg-white p-12 rounded-3xl text-center space-y-4 shadow-xl border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                <i className="fas fa-check"></i>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#1A2B2C]">Merci pour votre demande !</h2>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Votre demande de voyage sur mesure a bien été transmise à nos conseillers francophones à Jodhpur. Vous recevrez une proposition personnalisée sous 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8 font-nav">
              {/* Step 1: Destinations */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#1A2B2C] border-b border-gray-100 pb-2">
                  1. Vos Destinations Souhaitées
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {['Rajasthan', 'Delhi & Agra', 'Kerala & Sud', 'Népal', 'Varanasi', 'Ladakh', 'Gujarat', 'Bhoutan'].map((dest) => (
                    <button
                      type="button"
                      key={dest}
                      onClick={() => handleDestinationToggle(dest)}
                      className={`p-3 rounded-xl border font-semibold text-center transition-all ${
                        formData.destinations.includes(dest)
                          ? 'border-[#1D747A] bg-[#1D747A] text-white shadow-md'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Trip Parameters */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#1A2B2C] border-b border-gray-100 pb-2">
                  2. Paramètres du Voyage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Durée du Séjour</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    >
                      <option>7 à 10 jours</option>
                      <option>10 à 15 jours</option>
                      <option>15 à 20 jours</option>
                      <option>Plus de 3 semaines</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Nombre de Voyageurs</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    >
                      <option>1 personne (Solo)</option>
                      <option>2 personnes (Couple)</option>
                      <option>Famille (3-5 personnes)</option>
                      <option>Groupe (&gt;6 personnes)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Date Approximative</label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-[#1A2B2C] border-b border-gray-100 pb-2">
                  3. Vos Coordonnées
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Nom & Prénom *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Dupont"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Adresse Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jean.dupont@email.fr"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Téléphone (avec indicatif pays)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +33 6 12 34 56 78"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Précisions & Envies Particulières</label>
                    <textarea
                      rows={4}
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      placeholder="Racontez-nous vos envies, le type d'expériences recherchées, exigences alimentaires..."
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-primary text-sm font-bold uppercase px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Envoyer Ma Demande De Devis Gratuit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
