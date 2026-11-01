import React, { useState } from 'react';
import { Target, Compass, HeartHandshake, ShieldCheck, BookMarked, Globe, CheckCircle2 } from 'lucide-react';
import { COLLABORATORS } from '../data/gensexData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'enfoque' | 'centenario'>('mision');

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white border-y border-[#e6ded4]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <Compass size={13} />
            Quiénes Somos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Construyendo conocimiento situado frente a las desigualdades contemporáneas
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            El <strong>Grupo de Investigación Género y Sexualidades en Contextos de Diversidades Culturales (GENSEX)</strong> es un espacio interdisciplinario adscrito a la Carrera de Trabajo Social de la Universidad Autónoma de Chile, dedicado a la generación de evidencia, la docencia reflexiva y la incidencia comunitaria.
          </p>
        </div>

        {/* Interactive Tab navigation */}
        <div className="flex border-b border-stone-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('mision')}
            className={`pb-3 px-4 sm:px-6 text-sm sm:text-base font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'mision'
                ? 'border-[#df5a42] text-[#df5a42]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Misión, Visión y Propósito
          </button>
          <button
            onClick={() => setActiveTab('enfoque')}
            className={`pb-3 px-4 sm:px-6 text-sm sm:text-base font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'enfoque'
                ? 'border-[#df5a42] text-[#df5a42]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Enfoque Epistemológico
          </button>
          <button
            onClick={() => setActiveTab('centenario')}
            className={`pb-3 px-4 sm:px-6 text-sm sm:text-base font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'centenario'
                ? 'border-[#df5a42] text-[#df5a42]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            100 Años de Trabajo Social & Incidencia
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'mision' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
              <p>
                <span className="font-serif text-2xl font-bold text-[#2d184c] mr-1">G</span>
                ENSEX nació con la firme convicción de que los fenómenos sociales emergentes en torno al género, las orientaciones sexuales y las identidades de género deben ser abordados de manera rigurosa, no tutelar y enraizada en las realidades culturales de Chile y América Latina.
              </p>
              <p>
                Buscamos <strong>aportar a una sociedad democrática, justa y libre de violencias</strong>, donde la diversidad sea reconocida como un valor constitutivo de la dignidad humana y no como una fuente de marginación o vulneración.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#e6ded4]">
                  <div className="flex items-center gap-2 font-serif font-bold text-lg text-[#2d184c] mb-2">
                    <Target size={18} className="text-[#df5a42]" />
                    <span>Misión</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Generar investigaciones teóricas y empíricas de excelencia que iluminen los debates éticos, políticos y metodológicos en torno al género y las sexualidades, formando profesionales conscientes e incidiendo en políticas públicas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#e6ded4]">
                  <div className="flex items-center gap-2 font-serif font-bold text-lg text-[#2d184c] mb-2">
                    <Compass size={18} className="text-[#7e57c2]" />
                    <span>Visión</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Consolidarse como un referente iberoamericano de investigación social crítica en masculinidades, diversidades sexuales y prevención de violencia, articulando la academia con la sociedad civil y el Estado.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#e6ded4]">
              <h3 className="font-serif text-lg font-bold text-[#1e1333] mb-4">
                Ejes de Trabajo Institucional
              </h3>
              <ul className="space-y-3.5">
                {[
                  {
                    title: 'Investigación Fundada y Publicación',
                    desc: 'Artículos científicos en Scopus, SciELO y libros de acceso abierto con respaldo editorial.',
                  },
                  {
                    title: 'Formación y Docencia No Sexista',
                    desc: 'Cursos de pregrado, postgrado y diplomados en derechos humanos, género y masculinidades.',
                  },
                  {
                    title: 'Transferencia a Instituciones del Estado',
                    desc: 'Colaboración y capacitación a policías, establecimientos educativos y ministerios.',
                  },
                  {
                    title: 'Divulgación Abierta a la Comunidad',
                    desc: 'Podcasts, conversatorios gratuitos, columnas de opinión y material descargable.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#df5a42] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-[#1e1333]">{item.title}</div>
                      <div className="text-xs text-stone-500 leading-relaxed mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'enfoque' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#e6ded4]">
              <div className="w-10 h-10 rounded-lg bg-[#df5a42]/10 text-[#df5a42] flex items-center justify-center mb-4">
                <HeartHandshake size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e1333] mb-2">
                Interseccionalidad Situada
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                El género no opera en el vacío. Cruzamos variables de clase social, etnicidad, condición migratoria, edad y territorio para comprender cómo se reproducen las opresiones o se abren márgenes de autonomía en las comunidades chilenas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#e6ded4]">
              <div className="w-10 h-10 rounded-lg bg-[#7e57c2]/10 text-[#7e57c2] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e1333] mb-2">
                Masculinidades No Punitivas
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Reconocemos la urgencia de convocar a los varones a la conversación sobre equidad de género. Investigamos las resistencias y abrimos caminos hacia masculinidades corresponsables en el cuidado y comprometidas con el fin de la violencia machista.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#e6ded4]">
              <div className="w-10 h-10 rounded-lg bg-[#d4973b]/10 text-[#d4973b] flex items-center justify-center mb-4">
                <Globe size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1e1333] mb-2">
                Epistemologías del Sur
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Priorizamos la producción de conocimiento descolonial, recuperando las vivencias de los pueblos del cono sur, las memorias comunitarias y los saberes de los movimientos sociales frente al academicismo eurocéntrico tradicional.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'centenario' && (
          <div className="p-8 rounded-2xl bg-[#2d184c] text-white animate-fade-in relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 mb-4">
                Hito Histórico 1925 – 2025
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-white">
                100 Años de Trabajo Social en Chile: Memoria y Proyecciones Emancipatorias
              </h3>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed mb-6">
                Chile fue el país pionero en fundar la primera Escuela de Servicio Social de América Latina en 1925. En este centenario, GENSEX lidera investigaciones y proyectos de memoria que analizan cómo la profesión ha transitado desde la beneficencia decimonónica hacia un Trabajo Social crítico, defensor de los derechos humanos y actor clave en las transformaciones de género del siglo XXI.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#df5a42]"></span>
                  <span>Ciclo de Podcasts Conmemorativos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Libro Monográfico en curso</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-300"></span>
                  <span>Seminarios Internacionales</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Institutional Collaborations Footer */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6 text-center">
            Redes de Cooperación y Alianzas Académicas
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COLLABORATORS.map((collab, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#e6ded4] text-center hover:border-[#df5a42]/50 transition-colors"
              >
                <div className="font-semibold text-sm text-[#1e1333] mb-1">
                  {collab.name}
                </div>
                <div className="text-xs text-stone-500">
                  {collab.role}
                </div>
                <div className="text-[11px] font-medium text-[#df5a42] mt-1.5">
                  {collab.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
