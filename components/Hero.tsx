import React from 'react';
import { ArrowDown, BookOpen, Users, Award, ExternalLink, Headphones, Sparkles, ChevronRight } from 'lucide-react';
import { IMPACT_STATS } from '../data/gensexData';

interface HeroProps {
  onExploreLines: () => void;
  onExplorePubs: () => void;
  onExplorePodcasts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreLines,
  onExplorePubs,
  onExplorePodcasts,
}) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#442371]/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#df5a42]/5 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2d184c] text-white tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#df5a42]"></span>
            Grupo de Investigación
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-stone-200/70 text-stone-700 border border-stone-300/60">
            Universidad Autónoma de Chile
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-stone-600 bg-white border border-[#e6ded4]">
            Carrera de Trabajo Social • Santiago de Chile
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1e1333] leading-[1.15] font-semibold tracking-tight mb-6">
            Género y Sexualidades en Contextos de{' '}
            <span className="italic font-normal text-[#df5a42]">
              Diversidades Culturales
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal mb-8 max-w-3xl">
            Desde la Universidad Autónoma de Chile, el grupo <strong className="text-[#1e1333] font-semibold">GENSEX</strong> investiga las transformaciones contemporáneas en torno a <span className="underline decoration-[#df5a42]/40 underline-offset-4">masculinidades críticas</span>, <span className="underline decoration-[#7e57c2]/40 underline-offset-4">diversidades sexo-genéricas</span>, <span className="underline decoration-[#d4973b]/40 underline-offset-4">interseccionalidad</span> y <span className="underline decoration-[#2d184c]/40 underline-offset-4">derechos humanos</span>, articulando evidencia científica con la formación profesional y las políticas públicas.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <button
              onClick={onExploreLines}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d184c] text-white text-sm font-semibold hover:bg-[#442371] transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Líneas de Investigación</span>
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onExplorePubs}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#e6ded4] text-[#1e1333] text-sm font-medium hover:border-[#df5a42] hover:text-[#df5a42] transition-all shadow-2xs cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Publicaciones & Repositorio</span>
            </button>

            <button
              onClick={onExplorePodcasts}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#df5a42]/10 text-[#df5a42] hover:bg-[#df5a42]/20 text-sm font-semibold transition-all cursor-pointer"
            >
              <Headphones size={16} />
              <span>Podcast "Voces GENSEX"</span>
            </button>
          </div>
        </div>

        {/* Featured Banner Card: Libro Pandemia & Transferencia */}
        <div className="mb-14 p-5 sm:p-6 bg-white rounded-2xl border border-[#e6ded4] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#faf6fe] text-[#7e57c2] flex items-center justify-center shrink-0 border border-[#7e57c2]/20">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#df5a42] bg-[#df5a42]/10 px-2 py-0.5 rounded">
                  Publicación Destacada
                </span>
                <span className="text-xs text-stone-400">• Ediciones Universidad Autónoma de Chile</span>
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1e1333]">
                Intervención social y educativa en tiempos de pandemia
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Coordinado por Rodrigo Azócar González con capítulos de Sonia Brito, Lorena Basualto y equipo. Disponible para consulta y descarga abierta.
              </p>
            </div>
          </div>
          <button
            onClick={onExplorePubs}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Ver Ficha y Descarga</span>
            <ExternalLink size={13} />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#e6ded4]">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/70 rounded-xl border border-[#e6ded4]/70 hover:bg-white hover:border-[#df5a42]/40 transition-all duration-300"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#2d184c] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-stone-800 mb-0.5">
                {stat.label}
              </div>
              <p className="text-xs text-stone-500 leading-snug">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
