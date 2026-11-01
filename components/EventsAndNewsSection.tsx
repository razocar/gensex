import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Newspaper, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { ACADEMIC_EVENTS, NEWS_ITEMS } from '../data/gensexData';
import { AcademicEvent } from '../types';

export const EventsAndNewsSection: React.FC = () => {
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);

  const handleRegister = (event: AcademicEvent) => {
    setRegisteredEventId(event.id);
    setTimeout(() => setRegisteredEventId(null), 3000);
  };

  return (
    <section id="eventos" className="py-20 md:py-28 bg-white border-y border-[#e6ded4]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <Calendar size={13} />
            Agenda & Contingencia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Eventos Académicos & Noticias
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Mantente al día con nuestros coloquios, seminarios internacionales, columnas de opinión en prensa y actividades abiertas a la comunidad académica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Upcoming Events Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-xl font-bold text-[#1e1333]">
                Próximas Actividades & Seminarios
              </h3>
              <span className="text-xs font-semibold text-[#df5a42] bg-[#df5a42]/10 px-2.5 py-0.5 rounded-full">
                Inscripciones Abiertas
              </span>
            </div>

            {ACADEMIC_EVENTS.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#e6ded4] hover:border-[#df5a42]/50 transition-all duration-200 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#2d184c] text-white">
                      {event.type}
                    </span>
                    <span className="text-xs font-medium text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                      {event.modality}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#df5a42] flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{event.date}</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1e1333] leading-snug">
                  {event.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="text-xs text-stone-500 space-y-1 pt-1">
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-stone-400 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-stone-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-stone-500">
                    Expositores: <strong className="text-stone-700">{event.speakers.join(', ')}</strong>
                  </div>

                  <button
                    onClick={() => handleRegister(event)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2d184c] hover:bg-[#442371] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {registeredEventId === event.id ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>¡Inscripción Confirmada!</span>
                      </>
                    ) : (
                      <span>Inscribirme Gratis</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* News & Opinion Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif text-xl font-bold text-[#1e1333]">
                Noticias & Opinión
              </h3>
              <Newspaper size={18} className="text-stone-400" />
            </div>

            <div className="space-y-4">
              {NEWS_ITEMS.map((item) => (
                <article
                  key={item.id}
                  className="p-5 rounded-xl border border-[#e6ded4] bg-white hover:border-stone-400 transition-all duration-200"
                >
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
                    <span className="font-bold uppercase tracking-wider text-[#df5a42]">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#1e1333] leading-snug mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                    <span>{item.author}</span>
                    <span className="text-stone-400">{item.readTime}</span>
                  </div>

                  {item.mediaSource && (
                    <div className="mt-2 pt-1 text-[11px] text-[#7e57c2] font-semibold flex items-center gap-1">
                      <span>Publicado en {item.mediaSource}</span>
                      <ExternalLink size={11} />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
