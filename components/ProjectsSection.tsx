import React, { useState } from 'react';
import { FolderKanban, CheckCircle2, Clock, Landmark, Users, ArrowUpRight, Award } from 'lucide-react';
import { PROJECTS, RESEARCH_LINES } from '../data/gensexData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'en_curso' | 'finalizado'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (statusFilter === 'all') return true;
    return proj.status === statusFilter;
  });

  return (
    <section id="proyectos" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <FolderKanban size={13} />
            Investigación Aplicada & Transferencia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Proyectos de Investigación & Vinculación
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Iniciativas financiadas por fondos de investigación competitivos y convenios interinstitucionales con entidades públicas y de la sociedad civil, orientadas a la transformación social.
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-bold text-stone-500 mr-2">Estado:</span>
          {[
            { id: 'all', label: 'Todos los proyectos' },
            { id: 'en_curso', label: 'En Ejecución' },
            { id: 'finalizado', label: 'Concluidos con Transferencia' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                statusFilter === tab.id
                  ? 'bg-[#2d184c] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#e6ded4] text-stone-600 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const line = RESEARCH_LINES.find((l) => l.id === project.lineId);
            const isEnCurso = project.status === 'en_curso';

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#e6ded4] p-6 sm:p-8 shadow-xs hover:border-[#df5a42]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-stone-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isEnCurso
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {isEnCurso ? <Clock size={13} /> : <CheckCircle2 size={13} />}
                      <span>{isEnCurso ? 'En Ejecución' : 'Finalizado con Transferencia'}</span>
                    </span>

                    <span className="font-mono text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                      {project.code}
                    </span>
                  </div>

                  <span className="text-xs text-stone-500 font-medium">
                    Período: <strong className="text-stone-700">{project.period}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Main Project Details */}
                  <div className="lg:col-span-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1e1333] leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Objectives */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                        Objetivos Principales
                      </h4>
                      <ul className="space-y-2">
                        {project.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#df5a42] shrink-0 mt-2"></span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact and Outcomes */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                        Resultados & Transferencia Social
                      </h4>
                      <div className="space-y-2">
                        {project.outcomes.map((out, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[#FAF8F5] border border-[#e6ded4]/80 text-xs text-stone-700 flex items-start gap-2"
                          >
                            <Award size={15} className="text-[#2d184c] shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="lg:col-span-4 bg-[#FAF8F5] p-5 rounded-xl border border-[#e6ded4] flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                          Investigador Responsable
                        </span>
                        <div className="font-serif font-bold text-base text-[#1e1333]">
                          {project.leadResearcher}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                          Financiamiento / Entidad
                        </span>
                        <div className="text-xs text-stone-700 font-medium">
                          {project.fundingBody}
                        </div>
                      </div>

                      {line && (
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                            Línea GENSEX Asociada
                          </span>
                          <div className="text-xs font-semibold text-[#df5a42]">
                            {line.title}
                          </div>
                        </div>
                      )}

                      {project.partners && (
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                            Instituciones Aliadas
                          </span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {project.partners.map((partner, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded text-[11px] bg-white border border-[#e6ded4] text-stone-600"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-stone-200">
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2d184c] hover:text-[#df5a42] transition-colors"
                      >
                        <span>Solicitar informe o vinculación</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
