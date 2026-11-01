import React, { useState } from 'react';
import { Users, Mail, ExternalLink, GraduationCap, Award, BookOpen, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESEARCHERS, RESEARCH_LINES } from '../data/gensexData';
import { Researcher } from '../types';

export const TeamSection: React.FC = () => {
  const [selectedResearcher, setSelectedResearcher] = useState<Researcher | null>(null);

  return (
    <section id="equipo" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <Users size={13} />
            Cuerpo Académico
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Equipo de Investigadores e Investigadoras
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Un equipo interdisciplinario proveniente del Trabajo Social, la Filosofía, los Derechos Humanos y las Políticas Públicas comprometido con la excelencia científica y la justicia social.
          </p>
        </div>

        {/* Researchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {RESEARCHERS.map((researcher) => {
            const isDirector = researcher.id === 'rodrigo-azocar';
            return (
              <div
                key={researcher.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 ${
                  isDirector
                    ? 'border-[#df5a42] shadow-md ring-1 ring-[#df5a42]/20'
                    : 'border-[#e6ded4] hover:border-stone-400 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Avatar / Badge */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2d184c] to-[#442371] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-sm">
                      {researcher.name
                        .split(' ')
                        .filter((p) => !p.startsWith('Dra') && !p.startsWith('Mg'))
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    {isDirector && (
                      <span className="absolute -bottom-2 -left-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#df5a42] text-white shadow-xs">
                        Director
                      </span>
                    )}
                  </div>

                  {/* Name & Academic Role */}
                  <h3 className="font-serif text-lg font-bold text-[#1e1333] leading-snug mb-1">
                    {researcher.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#df5a42] mb-2">
                    {researcher.role}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium mb-4 line-clamp-2">
                    {researcher.academicTitle}
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {researcher.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] bg-stone-100 text-stone-600 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`mailto:${researcher.email}`}
                    title={`Contactar a ${researcher.name}`}
                    className="text-stone-400 hover:text-[#df5a42] transition-colors p-1"
                  >
                    <Mail size={16} />
                  </a>

                  <button
                    onClick={() => setSelectedResearcher(researcher)}
                    className="text-xs font-semibold text-[#2d184c] hover:text-[#df5a42] transition-colors cursor-pointer"
                  >
                    Ver Perfil & Publicaciones →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Researchers / Thesis Network Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e6ded4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#df5a42]/10 text-[#df5a42] flex items-center justify-center shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1e1333]">
                Red de Tesistas y Asistentes de Investigación
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                GENSEX fomenta activamente la formación de nuevos talentos científicos en pregrado y postgrado en Trabajo Social y Ciencias Sociales, integrándolos a proyectos de investigación aplicada y publicaciones conjuntas.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Postular a Tesis en GENSEX
          </a>
        </div>
      </div>

      {/* Researcher Bio Modal */}
      {selectedResearcher && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e6ded4] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedResearcher(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#2d184c] text-white flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                {selectedResearcher.name
                  .split(' ')
                  .filter((p) => !p.startsWith('Dra') && !p.startsWith('Mg'))
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1e1333]">
                  {selectedResearcher.name}
                </h3>
                <div className="text-sm font-semibold text-[#df5a42]">
                  {selectedResearcher.role}
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  {selectedResearcher.institution}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-stone-700 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Trayectoria y Perfil Académico
                </h4>
                <p className="bg-[#FAF8F5] p-4 rounded-xl border border-[#e6ded4]">
                  {selectedResearcher.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Líneas de Especialización
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedResearcher.specialties.map((sp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Publicaciones Destacadas
                </h4>
                <ul className="space-y-2">
                  {selectedResearcher.featuredPublications.map((pub, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                      <CheckCircle2 size={15} className="text-[#df5a42] shrink-0 mt-0.5" />
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-stone-400" />
                  <a
                    href={`mailto:${selectedResearcher.email}`}
                    className="text-[#df5a42] font-semibold hover:underline"
                  >
                    {selectedResearcher.email}
                  </a>
                </div>

                {selectedResearcher.orcid && (
                  <div className="text-stone-500 font-mono">
                    ORCID: <strong className="text-stone-700">{selectedResearcher.orcid}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
