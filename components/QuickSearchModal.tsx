import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Users, FolderKanban, Radio, ChevronRight } from 'lucide-react';
import { PUBLICATIONS, RESEARCH_LINES, RESEARCHERS, PROJECTS, PODCAST_EPISODES } from '../data/gensexData';
import { ResearchAreaId } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPublicationLine: (lineId: ResearchAreaId) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPublicationLine,
  onNavigateSection,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search triggered by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search matches
  const matchedPubs = trimmed
    ? PUBLICATIONS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.authors.some((a) => a.toLowerCase().includes(trimmed)) ||
          p.keywords.some((k) => k.toLowerCase().includes(trimmed))
      ).slice(0, 4)
    : [];

  const matchedLines = trimmed
    ? RESEARCH_LINES.filter(
        (l) =>
          l.title.toLowerCase().includes(trimmed) ||
          l.keyTopics.some((t) => t.toLowerCase().includes(trimmed)) ||
          l.shortDescription.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const matchedResearchers = trimmed
    ? RESEARCHERS.filter(
        (r) =>
          r.name.toLowerCase().includes(trimmed) ||
          r.specialties.some((s) => s.toLowerCase().includes(trimmed))
      ).slice(0, 3)
    : [];

  const matchedProjects = trimmed
    ? PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.summary.toLowerCase().includes(trimmed)
      ).slice(0, 2)
    : [];

  const matchedPodcasts = trimmed
    ? PODCAST_EPISODES.filter(
        (pod) =>
          pod.title.toLowerCase().includes(trimmed) ||
          pod.tags.some((t) => t.toLowerCase().includes(trimmed))
      ).slice(0, 2)
    : [];

  const totalMatches =
    matchedPubs.length +
    matchedLines.length +
    matchedResearchers.length +
    matchedProjects.length +
    matchedPodcasts.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 sm:pt-24 px-4 animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#e6ded4] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search size={20} className="text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en GENSEX: libros, autores (Azócar, Brito), proyectos, podcast..."
            className="flex-1 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-5">
          {!trimmed && (
            <div className="text-center py-8 text-stone-400 text-xs">
              Escribe un término para buscar publicaciones, proyectos, podcast o investigadores.
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Masculinidades', 'Carabineros', 'Trabajo Social', 'Pandemia', 'Diversidades'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 hover:bg-[#df5a42]/10 hover:text-[#df5a42] text-xs font-medium cursor-pointer"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {trimmed && totalMatches === 0 && (
            <div className="text-center py-8 text-stone-500 text-sm">
              No se encontraron resultados para "<strong>{query}</strong>".
            </div>
          )}

          {/* Publications matches */}
          {matchedPubs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                <BookOpen size={13} />
                <span>Publicaciones</span>
              </div>
              <div className="space-y-1.5">
                {matchedPubs.map((pub) => (
                  <div
                    key={pub.id}
                    onClick={() => {
                      onClose();
                      onSelectPublicationLine(pub.lineId);
                      onNavigateSection('publicaciones');
                    }}
                    className="p-3 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#e6ded4] cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-sm font-bold text-[#1e1333] truncate group-hover:text-[#df5a42]">
                        {pub.title}
                      </div>
                      <div className="text-xs text-stone-500">
                        {pub.authors[0]} ({pub.year}) • {pub.journalOrEditorial}
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-stone-300 group-hover:text-[#df5a42]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lines matches */}
          {matchedLines.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                <FolderKanban size={13} />
                <span>Líneas de Investigación</span>
              </div>
              <div className="space-y-1.5">
                {matchedLines.map((line) => (
                  <div
                    key={line.id}
                    onClick={() => {
                      onClose();
                      onNavigateSection('lineas');
                    }}
                    className="p-3 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#e6ded4] cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-sm font-bold text-[#1e1333] truncate group-hover:text-[#df5a42]">
                        {line.title}
                      </div>
                      <div className="text-xs text-stone-500 truncate">
                        {line.shortDescription}
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-stone-300 group-hover:text-[#df5a42]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Researchers matches */}
          {matchedResearchers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                <Users size={13} />
                <span>Investigadores</span>
              </div>
              <div className="space-y-1.5">
                {matchedResearchers.map((res) => (
                  <div
                    key={res.id}
                    onClick={() => {
                      onClose();
                      onNavigateSection('equipo');
                    }}
                    className="p-3 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#e6ded4] cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-sm font-bold text-[#1e1333] group-hover:text-[#df5a42]">
                        {res.name}
                      </div>
                      <div className="text-xs text-stone-500">
                        {res.role} • {res.specialties.join(', ')}
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-stone-300 group-hover:text-[#df5a42]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Podcast matches */}
          {matchedPodcasts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                <Radio size={13} />
                <span>Podcast Voces GENSEX</span>
              </div>
              <div className="space-y-1.5">
                {matchedPodcasts.map((pod) => (
                  <div
                    key={pod.id}
                    onClick={() => {
                      onClose();
                      onNavigateSection('podcast');
                    }}
                    className="p-3 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#e6ded4] cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-sm font-bold text-[#1e1333] group-hover:text-[#df5a42]">
                        Episodio #{pod.number}: {pod.title}
                      </div>
                      <div className="text-xs text-stone-500">
                        {pod.duration} • {pod.date}
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-stone-300 group-hover:text-[#df5a42]" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF8F5] border-t border-stone-200 flex justify-between items-center text-[11px] text-stone-500 px-4">
          <span>Presiona <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-stone-300">Esc</kbd> para salir</span>
          <span>GENSEX • Universidad Autónoma de Chile</span>
        </div>
      </div>
    </div>
  );
};
