import React from 'react';
import { ArrowUp, BookOpen, Heart, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e1333] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Col 1: Brand & Affiliation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#df5a42] text-white flex items-center justify-center font-serif font-bold text-lg">
                G
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                GENSEX
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md">
              <strong>Grupo de Investigación en Género y Sexualidades en Contextos de Diversidades Culturales</strong>. Generando evidencia, formación y vinculación social desde la Carrera de Trabajo Social de la Universidad Autónoma de Chile.
            </p>

            <div className="text-xs text-stone-400 space-y-1">
              <div>Facultad de Ciencias Sociales y Humanidades</div>
              <div>Campus Providencia & El Llano Subercaseaux • Santiago de Chile</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#nosotros" onClick={scrollToSection('nosotros')} className="hover:text-[#df5a42] transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#lineas" onClick={scrollToSection('lineas')} className="hover:text-[#df5a42] transition-colors">
                  Líneas de Investigación
                </a>
              </li>
              <li>
                <a href="#publicaciones" onClick={scrollToSection('publicaciones')} className="hover:text-[#df5a42] transition-colors">
                  Repositorio de Publicaciones
                </a>
              </li>
              <li>
                <a href="#proyectos" onClick={scrollToSection('proyectos')} className="hover:text-[#df5a42] transition-colors">
                  Proyectos & Transferencia
                </a>
              </li>
              <li>
                <a href="#podcast" onClick={scrollToSection('podcast')} className="hover:text-[#df5a42] transition-colors">
                  Podcast "Voces GENSEX"
                </a>
              </li>
              <li>
                <a href="#equipo" onClick={scrollToSection('equipo')} className="hover:text-[#df5a42] transition-colors">
                  Cuerpo Académico
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Lines Quick Access */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Líneas Prioritarias
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Masculinidades Críticas y Paternidades</li>
              <li>• Estudios de Género e Interseccionalidad</li>
              <li>• Diversidades y Disidencias Sexo-Genéricas</li>
              <li>• Violencia de Género, DDHH y Formación Policial</li>
              <li>• Trabajo Social Crítico (Centenario 1925–2025)</li>
            </ul>

            <div className="pt-3">
              <div className="text-[11px] text-stone-400">
                Contacto institucional:
              </div>
              <a
                href="mailto:rodrigo.azocar@uautonoma.cl"
                className="text-xs text-[#df5a42] hover:underline font-medium"
              >
                rodrigo.azocar@uautonoma.cl
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Grupo de Investigación GENSEX • Universidad Autónoma de Chile.</span>
            <span className="hidden md:inline">Acceso Abierto (Creative Commons BY-NC-SA 4.0).</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-stone-300 transition-colors cursor-pointer text-xs"
          >
            <span>Volver arriba</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
