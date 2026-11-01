/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type ResearchAreaId = 
  | 'genero-interseccionalidad'
  | 'masculinidades'
  | 'diversidades-sexuales'
  | 'violencia-ddhh'
  | 'trabajo-social';

export interface ResearchLine {
  id: ResearchAreaId;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  keyTopics: string[];
  currentProjects: string[];
  methodologies: string[];
  icon: string;
  color: string;
}

export interface Researcher {
  id: string;
  name: string;
  role: string;
  academicTitle: string;
  institution: string;
  email: string;
  bio: string;
  specialties: string[];
  orcid?: string;
  scholarUrl?: string;
  researchGateUrl?: string;
  lines: ResearchAreaId[];
  avatarUrl: string;
  featuredPublications: string[];
}

export type PublicationType = 'libro' | 'articulo' | 'capitulo' | 'guia' | 'informe';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: PublicationType;
  journalOrEditorial: string;
  volumeOrPages?: string;
  doi?: string;
  abstract: string;
  keywords: string[];
  lineId: ResearchAreaId;
  downloadUrl?: string;
  pdfSize?: string;
  isFeatured?: boolean;
}

export interface Project {
  id: string;
  code: string;
  title: string;
  leadResearcher: string;
  fundingBody: string;
  period: string;
  status: 'en_curso' | 'finalizado';
  summary: string;
  objectives: string[];
  outcomes: string[];
  lineId: ResearchAreaId;
  partners?: string[];
}

export interface PodcastEpisode {
  id: string;
  number: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  guests: string[];
  audioUrl?: string;
  tags: string[];
  spotifyUrl?: string;
  youtubeUrl?: string;
}

export interface AcademicEvent {
  id: string;
  title: string;
  type: 'Seminario' | 'Conversatorio' | 'Lanzamiento' | 'Conferencia' | 'Taller';
  date: string;
  time: string;
  location: string;
  modality: 'Presencial' | 'Online' | 'Híbrido';
  description: string;
  speakers: string[];
  isUpcoming: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Investigación' | 'Vinculación' | 'Publicación' | 'Medios';
  summary: string;
  content: string;
  author: string;
  readTime: string;
  mediaSource?: string;
}
