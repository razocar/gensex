/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ResearchLinesSection } from './components/ResearchLinesSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PodcastSection } from './components/PodcastSection';
import { TeamSection } from './components/TeamSection';
import { EventsAndNewsSection } from './components/EventsAndNewsSection';
import { ContactAndJoinSection } from './components/ContactAndJoinSection';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ResearchAreaId } from './types';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedLineFilter, setSelectedLineFilter] = useState<ResearchAreaId | 'all'>('all');

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      'inicio',
      'nosotros',
      'lineas',
      'publicaciones',
      'proyectos',
      'podcast',
      'equipo',
      'eventos',
      'contacto',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  const handleSelectLineForFilter = (lineId: ResearchAreaId) => {
    setSelectedLineFilter(lineId);
    scrollToSection('publicaciones');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#df5a42] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main>
        <Hero
          onExploreLines={() => scrollToSection('lineas')}
          onExplorePubs={() => scrollToSection('publicaciones')}
          onExplorePodcasts={() => scrollToSection('podcast')}
        />

        <AboutSection />

        <ResearchLinesSection
          onSelectLineForFilter={handleSelectLineForFilter}
        />

        <PublicationsSection
          selectedLineFilter={selectedLineFilter}
          onClearLineFilter={() => setSelectedLineFilter('all')}
          onSetLineFilter={(line) => setSelectedLineFilter(line)}
        />

        <ProjectsSection />

        <PodcastSection />

        <TeamSection />

        <EventsAndNewsSection />

        <ContactAndJoinSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPublicationLine={handleSelectLineForFilter}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
};

export default App;
