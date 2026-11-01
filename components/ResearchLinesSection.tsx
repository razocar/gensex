import React, { useState } from 'react';
import { Users, Layers, Sparkles, ShieldCheck, BookOpen, ChevronRight, ArrowRight, FolderKanban, Check } from 'lucide-react';
import { RESEARCH_LINES } from '../data/gensexData';
import { ResearchAreaId } from '../types';

interface ResearchLinesSectionProps {
  onSelectLineForFilter: (lineId: ResearchAreaId) => void;
}

export const ResearchLinesSection: React.FC<ResearchLinesSectionProps> = ({
  onSelectLineForFilter,
}) => {
  const [selectedLineId, setSelectedLineId] = useState<ResearchAreaId>('masculinidades');

  const selectedLine = RESEARCH_LINES.find((l) => l.id === selectedLineId) || RESEARCH_LINES[0];

  const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'Users':
        return <Users size={size} />;
      case 'Layers':
        return <Layers size={size} />;
      case 'Sparkles':
        return <Sparkles size={size} />;
      case 'ShieldCheck':
        return <ShieldCheck size={size} />;
      case 'BookOpen':
      default:
        return <BookOpen size={size} />;
    }
  };

  return (
    <section id="lineas" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <FolderKanban size={13} />
            Áreas de Especialización
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Líneas de Investigación Prioritarias
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Nuestro trabajo se articula en cinco líneas de investigación que abordan de manera empírica, teórica y aplicada las complejidades del género, las diversidades y los derechos fundamentales en Chile.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Line Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {RESEARCH_LINES.map((line) => {
              const isSelected = line.id === selectedLineId;
              return (
                <button
                  key={line.id}
                  onClick={() => setSelectedLineId(line.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#df5a42] shadow-md -translate-y-0.5'
                      : 'bg-white/60 border-[#e6ded4] hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#df5a42] text-white'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {getIcon(line.icon, 20)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-serif text-base sm:text-lg font-bold leading-snug truncate ${
                          isSelected ? 'text-[#1e1333]' : 'text-stone-700'
                        }`}
                      >
                        {line.title}
                      </h3>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 transition-transform ${
                          isSelected ? 'text-[#df5a42] translate-x-1' : 'text-stone-400'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {line.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Line Deep Dive Detail Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#e6ded4] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-stone-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2d184c] text-white">
                {getIcon(selectedLine.icon, 14)}
                <span>Línea Activa</span>
              </span>

              <button
                onClick={() => onSelectLineForFilter(selectedLine.id)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#df5a42] hover:text-[#c84831] transition-colors cursor-pointer"
              >
                <span>Ver publicaciones de esta línea</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1333] mb-2">
              {selectedLine.title}
            </h3>
            <p className="text-sm font-medium text-[#df5a42] mb-5">
              {selectedLine.subtitle}
            </p>

            <div className="prose prose-stone text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
              <p>{selectedLine.fullDescription}</p>
            </div>

            {/* Temas Clave */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Temas Clave de Indagación
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedLine.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#e6ded4]/70 text-xs text-stone-700"
                  >
                    <Check size={14} className="text-[#df5a42] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proyectos Asociados */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Proyectos e Investigaciones Asociadas
              </h4>
              <ul className="space-y-2">
                {selectedLine.currentProjects.map((proj, i) => (
                  <li
                    key={i}
                    className="text-xs sm:text-sm text-stone-800 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d184c]"></span>
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metodologías */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-500 mr-2">
                Metodologías:
              </span>
              {selectedLine.methodologies.map((m, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-stone-100 text-stone-600"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
