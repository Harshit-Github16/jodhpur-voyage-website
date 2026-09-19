'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-body text-[#2B3334]">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[350px] bg-[#1A2B2C] text-white flex items-center justify-center overflow-hidden">
        <img
          src="/images/dest-jodhpur.jpg"
          alt="Contact Us Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121F20]/90 via-[#1A2B2C]/75 to-transparent"></div>

        <div className="max-w-[1340px] mx-auto px-6 relative z-10 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C58B39] text-white shadow-md">
            <i className="fas fa-envelope"></i> Interlocuteurs Francophones
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            Contactez-Nous
          </h1>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto font-light">
            Une question ? Un projet de voyage ? Nos conseillers locaux à Jodhpur vous répondent rapidement en français.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Direct Contact Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="section-subtitle">Siège & Bureau</span>
              <h2 className="font-heading text-3xl font-bold text-[#1A2B2C]">
                À Votre Écoute 7j/7
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Basés à Jodhpur au Rajasthan, nous assurons un suivi personnalisé avant, pendant et après votre séjour.
              </p>
            </div>

            <div className="space-y-4 font-nav text-xs">
              <div className="flex items-start gap-4 p-4 bg-[#F8FBFB] rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#1D747A]/10 text-[#1D747A] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div className="font-bold text-[#1A2B2C]">Adresse du Siège</div>
                  <div className="text-gray-500 font-normal mt-0.5">Jodhpur Voyage Pvt. Ltd., Jodhpur, Rajasthan - 342001, Inde</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F8FBFB] rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#C58B39]/10 text-[#C58B39] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="font-bold text-[#1A2B2C]">Email Direct</div>
                  <a href="mailto:Info@jodhpurvoyage.com" className="text-[#1D747A] hover:underline font-semibold block mt-0.5">
                    Info@jodhpurvoyage.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F8FBFB] rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <div className="font-bold text-[#1A2B2C]">Téléphone & WhatsApp</div>
                  <a href="https://wa.me/919650698669" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline font-bold block mt-0.5">
                    +91-96 50 69 86 69 (WhatsApp 24/7)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F8FBFB] p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm font-nav">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1A2B2C]">Message Envoyé !</h3>
                <p className="text-xs text-gray-600">
                  Merci pour votre message. Notre équipe locale vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-heading text-2xl font-bold text-[#1A2B2C] mb-2">Envoyez-nous un Message</h3>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Votre Nom Complèt *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marie Curie"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Votre Adresse Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. marie@email.fr"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    placeholder="e.g. Question sur le circuit Rajasthan"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Posez votre question ou détaillez votre demande..."
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1D747A]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xs font-bold uppercase py-3.5 rounded-xl shadow-md mt-2"
                >
                  Envoyer Le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
