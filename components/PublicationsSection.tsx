import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Copy,
  Check,
  Filter,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles
} from 'lucide-react';
import { PUBLICATIONS, RESEARCH_LINES } from '../data/gensexData';
import { Publication, PublicationType, ResearchAreaId } from '../types';

interface PublicationsSectionProps {
  selectedLineFilter: ResearchAreaId | 'all';
  onClearLineFilter: () => void;
  onSetLineFilter: (line: ResearchAreaId | 'all') => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  selectedLineFilter,
  onClearLineFilter,
  onSetLineFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<PublicationType | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>('pub-libro-pandemia');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // Filtered publications
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      // Type match
      if (selectedType !== 'all' && pub.type !== selectedType) {
        return false;
      }
      // Line match
      if (selectedLineFilter !== 'all' && pub.lineId !== selectedLineFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(query);
        const matchesAuthors = pub.authors.some((a) => a.toLowerCase().includes(query));
        const matchesKeywords = pub.keywords.some((k) => k.toLowerCase().includes(query));
        const matchesJournal = pub.journalOrEditorial.toLowerCase().includes(query);
        const matchesAbstract = pub.abstract.toLowerCase().includes(query);
        return matchesTitle || matchesAuthors || matchesKeywords || matchesJournal || matchesAbstract;
      }
      return true;
    });
  }, [selectedType, selectedLineFilter, searchQuery]);

  const copyApaCitation = (pub: Publication) => {
    const authorsStr = pub.authors.join(', ');
    const citation = `${authorsStr} (${pub.year}). ${pub.title}. ${pub.journalOrEditorial}${
      pub.volumeOrPages ? `, ${pub.volumeOrPages}` : ''
    }. ${pub.doi ? `https://doi.org/${pub.doi}` : ''}`;

    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSimulatedDownload = (pub: Publication) => {
    setDownloadToast(`Descargando "${pub.title.substring(0, 45)}..." (${pub.pdfSize || 'PDF'})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const getTypeLabel = (type: PublicationType) => {
    switch (type) {
      case 'libro':
        return 'Libro';
      case 'articulo':
        return 'Artículo Indexado';
      case 'capitulo':
        return 'Capítulo de Libro';
      case 'guia':
        return 'Guía Metodológica';
      case 'informe':
        return 'Documento de Trabajo';
      default:
        return 'Publicación';
    }
  };

  const getTypeBadgeClass = (type: PublicationType) => {
    switch (type) {
      case 'libro':
        return 'bg-[#df5a42]/10 text-[#df5a42] border-[#df5a42]/30';
      case 'articulo':
        return 'bg-[#2d184c]/10 text-[#2d184c] border-[#2d184c]/30';
      case 'guia':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <section id="publicaciones" className="py-20 md:py-28 bg-white border-y border-[#e6ded4]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Toast Notification */}
        {downloadToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1e1333] text-white px-5 py-3 rounded-xl shadow-xl border border-stone-700 flex items-center gap-3 animate-fade-in text-sm">
            <Download size={18} className="text-[#df5a42] animate-bounce" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#df5a42] bg-[#df5a42]/10 mb-4">
            <BookOpen size={13} />
            Producción Científica
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1333] leading-tight mb-4">
            Repositorio de Publicaciones & Libros
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Explora las obras monográficas, artículos indexados en Scopus/SciELO, documentos de política pública y guías metodológicas producidas por el equipo de investigadores de GENSEX con acceso abierto.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FAF8F5] p-4 sm:p-6 rounded-2xl border border-[#e6ded4] mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título, autor (ej. Azócar, Brito), palabras clave o revista..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] focus:ring-1 focus:ring-[#df5a42] transition-all text-stone-900 placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Line of Research Filter */}
            <div className="md:col-span-6 flex items-center gap-2">
              <Filter size={16} className="text-stone-400 shrink-0 hidden sm:block" />
              <select
                value={selectedLineFilter}
                onChange={(e) => onSetLineFilter(e.target.value as ResearchAreaId | 'all')}
                aria-label="Filtrar por línea de investigación"
                className="w-full py-2.5 px-3 bg-white border border-[#e6ded4] rounded-xl text-sm focus:outline-none focus:border-[#df5a42] text-stone-800"
              >
                <option value="all">Todas las Líneas de Investigación</option>
                {RESEARCH_LINES.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.title}
                  </option>
                ))}
              </select>
              {selectedLineFilter !== 'all' && (
                <button
                  onClick={onClearLineFilter}
                  className="shrink-0 text-xs text-[#df5a42] hover:underline font-medium px-2 py-1"
                >
                  Quitar filtro
                </button>
              )}
            </div>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-stone-200 overflow-x-auto">
            <span className="text-xs font-bold text-stone-500 mr-2 shrink-0">Tipo:</span>
            {[
              { id: 'all', label: 'Todos los formatos' },
              { id: 'libro', label: 'Libros' },
              { id: 'articulo', label: 'Artículos Indexados' },
              { id: 'capitulo', label: 'Capítulos' },
              { id: 'guia', label: 'Guías & Manuales' },
              { id: 'informe', label: 'Informes de Política' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id as PublicationType | 'all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedType === t.id
                    ? 'bg-[#2d184c] text-white font-semibold'
                    : 'bg-white border border-[#e6ded4] text-stone-600 hover:bg-stone-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-stone-500">
          <span>
            Mostrando <strong>{filteredPublications.length}</strong> de {PUBLICATIONS.length} publicaciones
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Acceso Abierto (Open Access)
          </span>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => {
            const isAbstractExpanded = expandedAbstractId === pub.id;
            const line = RESEARCH_LINES.find((l) => l.id === pub.lineId);

            return (
              <article
                key={pub.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                  pub.isFeatured
                    ? 'bg-gradient-to-br from-white to-[#FAF8F5] border-[#e6ded4] shadow-xs hover:border-[#df5a42]/60'
                    : 'bg-white border-[#e6ded4] hover:border-stone-300'
                }`}
              >
                {/* Card Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getTypeBadgeClass(
                        pub.type
                      )}`}
                    >
                      {getTypeLabel(pub.type)}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">{pub.year}</span>
                    {pub.isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Sparkles size={11} /> Destacado
                      </span>
                    )}
                  </div>

                  {line && (
                    <span className="text-xs text-stone-500 font-medium hidden md:inline-block">
                      Línea: <strong className="text-stone-700">{line.title}</strong>
                    </span>
                  )}
                </div>

                {/* Title & Authors */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1e1333] leading-snug mb-2">
                  {pub.title}
                </h3>

                <p className="text-sm text-stone-700 font-medium mb-2">
                  {pub.authors.map((author, index) => {
                    const isAzocar = author.toLowerCase().includes('azócar') || author.toLowerCase().includes('azocar');
                    return (
                      <span key={index}>
                        {index > 0 && '; '}
                        <span className={isAzocar ? 'font-bold text-[#df5a42]' : 'text-stone-800'}>
                          {author}
                        </span>
                      </span>
                    );
                  })}
                </p>

                {/* Journal / Editorial / Pages */}
                <div className="text-xs text-stone-500 font-mono mb-4 flex flex-wrap items-center gap-3">
                  <span className="italic">{pub.journalOrEditorial}</span>
                  {pub.volumeOrPages && <span>• {pub.volumeOrPages}</span>}
                  {pub.doi && (
                    <span className="text-[#7e57c2] bg-[#7e57c2]/10 px-2 py-0.5 rounded">
                      DOI: {pub.doi}
                    </span>
                  )}
                </div>

                {/* Abstract Section */}
                <div className="mb-4 text-xs sm:text-sm text-stone-600 leading-relaxed bg-[#FAF8F5]/80 p-3.5 rounded-xl border border-[#e6ded4]/60">
                  <p className={isAbstractExpanded ? '' : 'line-clamp-2'}>
                    {pub.abstract}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedAbstractId(isAbstractExpanded ? null : pub.id)
                    }
                    className="mt-2 text-xs font-semibold text-[#df5a42] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    {isAbstractExpanded ? (
                      <>
                        <span>Ver menos</span>
                        <ChevronUp size={13} />
                      </>
                    ) : (
                      <>
                        <span>Leer resumen completo</span>
                        <ChevronDown size={13} />
                      </>
                    )}
                  </button>
                </div>

                {/* Keywords Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {pub.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] bg-stone-100 text-stone-600"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                {/* Actions Toolbar: APA Citation Copy & Download */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyApaCitation(pub)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#e6ded4] text-xs font-medium text-stone-700 hover:border-[#df5a42] hover:text-[#df5a42] bg-white transition-all cursor-pointer shadow-2xs"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">¡Cita APA Copiada!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copiar Cita APA 7</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSimulatedDownload(pub)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#2d184c] hover:bg-[#442371] text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                    >
                      <Download size={13} />
                      <span>Descargar Texto Completo ({pub.pdfSize || 'PDF'})</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredPublications.length === 0 && (
            <div className="p-12 text-center bg-[#FAF8F5] rounded-2xl border border-[#e6ded4]">
              <FileText size={36} className="mx-auto text-stone-400 mb-3" />
              <h4 className="font-serif text-lg font-bold text-stone-700 mb-1">
                No se encontraron publicaciones
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 mb-4">
                Prueba ajustando los términos de búsqueda o quitando los filtros de línea o tipo.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  onClearLineFilter();
                }}
                className="px-4 py-2 bg-[#df5a42] text-white rounded-lg text-xs font-semibold"
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
