import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, GraduationCap, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Quiénes Somos' },
    { id: 'lineas', label: 'Líneas' },
    { id: 'publicaciones', label: 'Publicaciones' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'equipo', label: 'Equipo' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#e6ded4] py-3'
            : 'bg-[#FAF8F5] border-b border-[#e6ded4]/60 py-4'
        }`}
      >
        {/* Top institutional sub-bar */}
        <div className="container mx-auto px-4 sm:px-6 mb-2 hidden lg:flex justify-between items-center text-xs text-stone-500 border-b border-stone-200/50 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">Universidad Autónoma de Chile</span>
            <span>•</span>
            <span>Facultad de Ciencias Sociales y Humanidades</span>
            <span>•</span>
            <span className="text-[#df5a42] font-medium">Carrera de Trabajo Social</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-stone-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Investigación en Red Cono Sur
            </span>
            <span>•</span>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
              className="hover:text-[#df5a42] transition-colors"
            >
              Postulaciones & Contacto
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Identity */}
          <div
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2d184c] text-white flex items-center justify-center font-serif font-bold text-xl shadow-sm group-hover:bg-[#df5a42] transition-colors duration-300">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight text-[#1e1333]">
                  GENSEX
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#df5a42]/10 text-[#df5a42]">
                  UA Chile
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide hidden sm:block">
                Género y Sexualidades en Contextos de Diversidades Culturales
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#df5a42] font-semibold bg-[#df5a42]/10'
                      : 'hover:text-[#2d184c] hover:bg-stone-200/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              title="Buscar en el sitio (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-stone-600 bg-white border border-[#e6ded4] rounded-full hover:border-[#df5a42] hover:text-[#df5a42] shadow-2xs transition-all cursor-pointer"
            >
              <Search size={14} />
              <span className="hidden md:inline">Buscar</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.2 bg-stone-100 text-[10px] font-mono rounded text-stone-500">
                ⌘K
              </kbd>
            </button>

            {/* Direct CTA to Publications */}
            <button
              onClick={() => scrollToSection('publicaciones')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#2d184c] text-white hover:bg-[#3d2163] shadow-sm transition-all cursor-pointer"
            >
              <BookOpen size={13} />
              <span>Repositorio</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-30 bg-[#FAF8F5]/98 backdrop-blur-lg border-t border-[#e6ded4] flex flex-col p-6 xl:hidden overflow-y-auto animate-fade-in">
          <div className="mb-4 pb-3 border-b border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Universidad Autónoma de Chile
            </span>
            <p className="text-sm font-serif font-bold text-[#1e1333] mt-0.5">
              Grupo de Investigación GENSEX
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#df5a42]/10 text-[#df5a42] font-semibold'
                    : 'text-stone-800 hover:bg-stone-200/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#e6ded4] rounded-lg text-sm font-medium text-stone-700"
            >
              <Search size={16} />
              <span>Buscar publicaciones o proyectos</span>
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full py-2.5 px-4 bg-[#2d184c] text-white rounded-lg text-sm font-semibold text-center"
            >
              Contactar al Grupo GENSEX
            </button>
          </div>
        </div>
      )}
    </>
  );
};
