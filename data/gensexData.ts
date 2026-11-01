import { ResearchLine, Researcher, Publication, Project, PodcastEpisode, AcademicEvent, NewsItem } from '../types';

export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'masculinidades',
    title: 'Masculinidades Críticas y Transformaciones',
    subtitle: 'Deconstrucción de mandatos hegemónicos, paternidades y vínculos afectivos',
    shortDescription: 'Indagación teórica y empírica sobre las transformaciones de las masculinidades en Chile y América Latina, tensionando roles hegemónicos y promoviendo prácticas de cuidado y no violencia.',
    fullDescription: 'Esta línea profundiza en la configuración de las identidades masculinas en el Chile actual, analizando cómo los mandatos tradicionales de género interactúan con las nuevas demandas de igualdad, corresponsabilidad en el cuidado y erradicación de las violencias. Se investigan las experiencias de hombres jóvenes universitarios, sectores populares y cuerpos institucionales, aportando evidencia para la redefinición de políticas públicas y modelos pedagógicos.',
    keyTopics: [
      'Masculinidades juveniles y universitarias',
      'Paternidades corresponsables y éticas del cuidado',
      'Salud mental masculina y desarticulación de mandatos de riesgo',
      'Varones frente al avance de los feminismos'
    ],
    currentProjects: [
      'Estudio Longitudinal de Masculinidades y Equidad de Género',
      'Formatos formativos en masculinidades para la prevención de violencia'
    ],
    methodologies: ['Entrevistas biográfico-narrativas', 'Grupos de discusión focalizados', 'Investigación-acción participativa'],
    icon: 'Users',
    color: '#df5a42'
  },
  {
    id: 'genero-interseccionalidad',
    title: 'Estudios de Género e Interseccionalidad',
    subtitle: 'Epistemologías del sur, desigualdades cruzadas y diversidades culturales',
    shortDescription: 'Abordaje analítico de las desigualdades de género articuladas con variables de clase, pertenencia étnico-cultural, territorio y condición migratoria.',
    fullDescription: 'Desde una mirada crítica e interdisciplinaria situada en el sur global, esta línea investiga cómo los sistemas de opresión y privilegio se entrelazan en la vida cotidiana. Examina los procesos de inserción social de mujeres migrantes, las dinámicas de poder en espacios laborales y académicos, y la producción teórica feminista contemporánea aplicada a la realidad latinoamericana.',
    keyTopics: [
      'Interseccionalidad: género, etnia, clase y migración',
      'Epistemologías feministas descoloniales',
      'Economía del cuidado y trayectorias laborales precarias',
      'Políticas de reconocimiento y justicia social distributiva'
    ],
    currentProjects: [
      'Trayectorias de mujeres migrantes en el cono sur y redes de cuidado',
      'Interseccionalidad en la intervención social comunitaria'
    ],
    methodologies: ['Etnografía reflexiva', 'Análisis de discurso crítico', 'Mapeos corporales y territoriales'],
    icon: 'Layers',
    color: '#7e57c2'
  },
  {
    id: 'diversidades-sexuales',
    title: 'Diversidades y Disidencias Sexo-Genéricas',
    subtitle: 'Identidades LGBTIQA+, derechos, trayectorias de vida e inclusión',
    shortDescription: 'Estudio de las vivencias, resistencias y derechos de las comunidades de las diversidades y disidencias sexuales y de género en Chile y la región.',
    fullDescription: 'El grupo GENSEX genera conocimiento pionero sobre la situación de personas trans, no binarias y disidencias sexo-genéricas en diversos ámbitos institucionales. Se analizan las barreras de acceso a la salud, educación y empleo, así como los avances legislativos (Identidad de Género, Matrimonio Igualitario) y los desafíos culturales pendientes para garantizar vidas plenas y libres de discriminación.',
    keyTopics: [
      'Niñeces y juventudes trans en el entorno educativo',
      'Acceso a salud integral afirmativa para personas LGBTIQA+',
      'Memoria social y luchas de los movimientos de la diversidad sexual',
      'Espacio público, habitar disidente y seguridad urbana'
    ],
    currentProjects: [
      'Observatorio Metropolitano de Derechos e Inclusión Sexo-Genérica',
      'Protocolos institucionales para la acogida y reconocimiento de identidades de género'
    ],
    methodologies: ['Historias de vida', 'Mapeo participativo de seguridades', 'Análisis normativo y de políticas'],
    icon: 'Sparkles',
    color: '#d4973b'
  },
  {
    id: 'violencia-ddhh',
    title: 'Violencia de Género, DDHH y Formación Institucional',
    subtitle: 'Transformación formativa, prevención integral y derechos humanos',
    shortDescription: 'Investigación orientada a desnaturalizar las violencias basadas en el género y diseñar modelos formativos para instituciones públicas y formativas.',
    fullDescription: 'Con un fuerte compromiso con el impacto social, esta línea analiza las múltiples expresiones de la violencia patriarcal (física, psicológica, vicaria, institucional y simbólica). Destaca la vinculación con instituciones del Estado como Carabineros de Chile y centros educativos, desarrollando diagnósticos y programas formativos en perspectiva de género y derechos humanos para transformar culturas organizacionales.',
    keyTopics: [
      'Formación policial y de seguridad pública con enfoque de género y DDHH',
      'Educación no sexista desde la primera infancia hasta la educación superior',
      'Protocolos de atención, denuncia y reparación en violencia de género',
      'Violencia vicaria y justicia con perspectiva de género'
    ],
    currentProjects: [
      'Revisión y diseño curricular en género y DDHH para escuelas formativas policiales (ESFOCAR/UA)',
      'Estrategias comunitarias de primera respuesta ante la violencia hacia las mujeres'
    ],
    methodologies: ['Evaluación curricular cuali-cuantitativa', 'Talleres de deconstrucción vivencial', 'Sistematización de intervenciones'],
    icon: 'ShieldCheck',
    color: '#2a1745'
  },
  {
    id: 'trabajo-social',
    title: 'Trabajo Social Crítico y Políticas Públicas',
    subtitle: 'A 100 años de la profesión: debate ético-político y acción transformadora',
    shortDescription: 'Reflexión epistemológica y metodológica sobre el rol del Trabajo Social contemporáneo en la garantía de derechos y formulación de políticas públicas.',
    fullDescription: 'En el marco del centenario del Trabajo Social en Chile y América Latina, esta línea sitúa a la disciplina en el centro del debate ético-político frente a las desigualdades estructurales. Se indaga en las prácticas de intervención social en contextos de crisis (como la post-pandemia), la ética del trabajo profesional con poblaciones vulneradas y la incidencia directa en el diseño de programas sociales estatales.',
    keyTopics: [
      'Centenario del Trabajo Social: historia crítica y nuevos paradigmas',
      'Intervención social comunitaria en escenarios de catástrofe y crisis',
      'Ética profesional y derechos humanos en la política social',
      'Transversalización de género en los servicios sociales públicos'
    ],
    currentProjects: [
      '100 Años de Trabajo Social en Chile: Memoria y Proyecciones Disciplinares',
      'Sistematización de buenas prácticas de intervención social inclusiva'
    ],
    methodologies: ['Sistematización de experiencias', 'Análisis genealógico de archivos', 'Delphi con expertos sectoriales'],
    icon: 'BookOpen',
    color: '#3d2163'
  }
];

export const RESEARCHERS: Researcher[] = [
  {
    id: 'rodrigo-azocar',
    name: 'Rodrigo Azócar González',
    role: 'Director y Coordinador General',
    academicTitle: 'Licenciado en Trabajo Social, Magíster en Trabajo Social (c) Doctor en Ciencias Sociales',
    institution: 'Universidad Autónoma de Chile • Carrera de Trabajo Social',
    email: 'rodrigo.azocar@uautonoma.cl',
    bio: 'Trabajador Social y académico investigador de la Universidad Autónoma de Chile. Fundador y director del Grupo de Investigación GENSEX. Especialista en estudios sobre masculinidades, diversidades y disidencias sexo-genéricas, interseccionalidad y formación institucional con enfoque de género. Ha liderado proyectos de investigación y transferencia en derechos humanos junto a instituciones públicas y de seguridad del Estado chileno, así como publicaciones en revistas científicas indexadas.',
    specialties: ['Masculinidades Críticas', 'Diversidad Sexo-Genérica', 'Formación Policial y DDHH', 'Políticas Sociales'],
    orcid: '0000-0002-8419-5321',
    scholarUrl: 'https://scholar.google.com/citations?user=GENSEX_RAZOCAR',
    researchGateUrl: 'https://www.researchgate.net/profile/Rodrigo-Azocar-Gonzalez',
    lines: ['masculinidades', 'diversidades-sexuales', 'violencia-ddhh', 'trabajo-social'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    featuredPublications: [
      'Género y Sexualidades en Carabineros: Revisión crítica de la formación actual',
      'Configuraciones de la masculinidad en jóvenes universitarios chilenos',
      'Intervención social y educativa en tiempos de pandemia (Coordinador y autor)'
    ]
  },
  {
    id: 'sonia-brito',
    name: 'Dra. Sonia Brito Rodríguez',
    role: 'Investigadora Principal Asociada',
    academicTitle: 'Doctora en Derechos Humanos, Magíster en Trabajo Social',
    institution: 'Universidad Autónoma de Chile',
    email: 'sonia.brito@uautonoma.cl',
    bio: 'Investigadora senior con amplia trayectoria en derechos humanos, epistemología del Trabajo Social e inclusión de grupos prioritarios. Ha publicado múltiples libros y artículos de alto impacto sobre intervención social fundada, memoria histórica y justicia social. Integra redes iberoamericanas de investigación sobre políticas públicas y derechos fundamentales.',
    specialties: ['Derechos Humanos Fundamentales', 'Epistemología del Trabajo Social', 'Inclusión Social', 'Ética y Deontología'],
    orcid: '0000-0001-9234-8812',
    scholarUrl: 'https://scholar.google.com',
    researchGateUrl: 'https://www.researchgate.net',
    lines: ['trabajo-social', 'violencia-ddhh', 'genero-interseccionalidad'],
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    featuredPublications: [
      'Intervención social y educativa en tiempos de pandemia',
      'Los 100 años del Trabajo Social en Chile: debates ético-políticos contemporáneos',
      'Sujetos de derechos y políticas de reconocimiento en el Chile actual'
    ]
  },
  {
    id: 'lorena-basualto',
    name: 'Dra. Lorena Basualto Porra',
    role: 'Investigadora Principal Asociada',
    academicTitle: 'Doctora en Teología y Filosofía, Especialista en Estudios de Género',
    institution: 'Universidad Autónoma de Chile • GENSEX',
    email: 'lorena.basualto@uautonoma.cl',
    bio: 'Académica e investigadora interdisciplinaria. Sus líneas de trabajo se focalizan en el diálogo entre teologías críticas, feminismos del sur, migración e interculturalidad. Ha investigado profundamente los procesos de exclusión simbólica de las mujeres y colectivos disidentes, promoviendo espacios de diálogo interreligioso y comunitario con enfoque descolonial.',
    specialties: ['Feminismos Críticos del Sur', 'Interculturalidad y Migración', 'Teología Feminista', 'Ética del Reconocimiento'],
    orcid: '0000-0003-1122-9014',
    scholarUrl: 'https://scholar.google.com',
    researchGateUrl: 'https://www.researchgate.net',
    lines: ['genero-interseccionalidad', 'diversidades-sexuales'],
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    featuredPublications: [
      'Mujeres, espiritualidad y resistencias en contextos de migración',
      'Cuerpo y territorio: lecturas feministas decoloniales en el sur andino',
      'Intervención social y educativa en tiempos de pandemia (Capítulo)'
    ]
  },
  {
    id: 'claudia-flores',
    name: 'Mg. Claudia Flores Morales',
    role: 'Investigadora Adjunta',
    academicTitle: 'Magíster en Políticas Públicas e Inclusión Social, Trabajadora Social',
    institution: 'Universidad Autónoma de Chile',
    email: 'claudia.flores@uautonoma.cl',
    bio: 'Especialista en diseño y evaluación de políticas de equidad de género en educación y programas territoriales de prevención de la violencia intrafamiliar. Coordina el vínculo con organizaciones comunitarias y la red de estudiantes tesistas adscritos a los proyectos del grupo.',
    specialties: ['Políticas Públicas de Género', 'Prevención de Violencias Comunitarias', 'Metodologías Participativas'],
    orcid: '0000-0002-7744-1290',
    scholarUrl: 'https://scholar.google.com',
    lines: ['violencia-ddhh', 'trabajo-social', 'genero-interseccionalidad'],
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    featuredPublications: [
      'Educación no sexista en la formación escolar básica',
      'Modelos de acompañamiento psicosocial con enfoque interseccional'
    ]
  }
];

export const COLLABORATORS = [
  {
    name: 'Red LIESS',
    role: 'Laboratorio Iberoamericano para el Estudio Sociohistórico de las Sexualidades',
    region: 'Iberoamérica',
    link: 'https://redliess.com'
  },
  {
    name: 'ESFOCAR - Escuela de Formación de Carabineros',
    role: 'Convenio de Cooperación Formativa en Género y DDHH',
    region: 'Chile',
    link: '#'
  },
  {
    name: 'CLACSO - Grupo de Trabajo Género y Disidencias',
    role: 'Red Latinoamericana de Ciencias Sociales',
    region: 'América Latina',
    link: 'https://clacso.org'
  },
  {
    name: 'Red Chilena contra la Violencia hacia las Mujeres',
    role: 'Articulación de la Sociedad Civil y Academia',
    region: 'Chile',
    link: '#'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-libro-pandemia',
    title: 'Intervención social y educativa en tiempos de pandemia',
    authors: ['Rodrigo Azócar González (Coord.)', 'Sonia Brito Rodríguez', 'Lorena Basualto Porra', 'et al.'],
    year: 2020,
    type: 'libro',
    journalOrEditorial: 'Ediciones Universidad Autónoma de Chile',
    volumeOrPages: 'ISBN 978-956-8454-93-2 • 284 páginas',
    doi: '10.32457/ua.libro.pandemia.2020',
    abstract: 'Obra colectiva que sistematiza los aprendizajes, desafíos éticos y metodologías emergentes para el Trabajo Social y la educación durante la crisis sociosanitaria provocada por el COVID-19 en Chile. Aborda de manera transversal cómo el confinamiento intensificó las desigualdades de género, la violencia intrafamiliar y las dificultades de acceso a servicios esenciales en sectores vulnerables.',
    keywords: ['Intervención Social', 'Pandemia COVID-19', 'Género', 'Políticas Públicas', 'Educación'],
    lineId: 'trabajo-social',
    downloadUrl: '#',
    pdfSize: '4.8 MB',
    isFeatured: true
  },
  {
    id: 'pub-carabineros-ddhh',
    title: 'Género y Sexualidades en Carabineros: Revisión crítica de la formación actual',
    authors: ['Rodrigo Azócar González', 'Rodrigo Esteban Donoso Figueroa'],
    year: 2023,
    type: 'articulo',
    journalOrEditorial: 'Revista Latinoamericana de Educación Inclusiva (Scielo / Redalyc)',
    volumeOrPages: 'Vol. 17, Nº 2, págs. 89-108',
    doi: '10.4067/S0718-73782023000200089',
    abstract: 'Artículo de investigación que examina críticamente las mallas curriculares, prácticas pedagógicas y discursos en torno al género y las sexualidades dentro de los procesos de formación de Carabineros de Chile. Propone lineamientos concretos para la modernización institucional basada en el respeto irrestricto a los derechos humanos y la no discriminación.',
    keywords: ['Carabineros de Chile', 'Formación Policial', 'Perspectiva de Género', 'Derechos Humanos', 'Diversidad Sexual'],
    lineId: 'violencia-ddhh',
    downloadUrl: '#',
    pdfSize: '1.2 MB',
    isFeatured: true
  },
  {
    id: 'pub-masculinidades-jovenes',
    title: 'Configuraciones de la masculinidad en jóvenes universitarios: Mandatos tradicionales y aperturas contemporáneas',
    authors: ['Rodrigo Azócar González', 'Equipo GENSEX'],
    year: 2024,
    type: 'articulo',
    journalOrEditorial: 'Revista de Estudios Sociales y de Género',
    volumeOrPages: 'Vol. 29, Nº 1, págs. 45-67',
    doi: '10.22320/resg.2024.29.1.3',
    abstract: 'Estudio empírico cualitativo con estudiantes universitarios en Santiago de Chile sobre la reinterpretación de los mandatos de masculinidad hegemónica a partir de la masificación de los movimientos feministas en los campus. Se identifican tensiones entre discursos políticamente correctos y prácticas cotidianas de complicidad machista.',
    keywords: ['Masculinidades', 'Juventud Universitaria', 'Feminismo', 'Deconstrucción', 'Identidad'],
    lineId: 'masculinidades',
    downloadUrl: '#',
    pdfSize: '890 KB',
    isFeatured: true
  },
  {
    id: 'pub-100-anos-ts',
    title: 'Cien años de Trabajo Social en Chile: Reflexiones epistemológicas desde el enfoque de género y derechos humanos',
    authors: ['Sonia Brito Rodríguez', 'Rodrigo Azócar González'],
    year: 2025,
    type: 'articulo',
    journalOrEditorial: 'Cuadernos de Trabajo Social Iberoamericano',
    volumeOrPages: 'Vol. 14, Nº 1, págs. 12-31',
    doi: '10.5209/cuts.2025.14.01',
    abstract: 'Conmemoración del centenario de la primera Escuela de Trabajo Social de Chile y Latinoamérica (fundada en 1925). El trabajo analiza la evolución teórica de la disciplina, destacando la transición desde enfoques tutelares hacia una práctica crítica comprometida con la emancipación de género y la defensa irrestricta de los derechos humanos.',
    keywords: ['Centenario Trabajo Social', 'Epistemología Crítica', 'Género', 'Memoria Disciplinar'],
    lineId: 'trabajo-social',
    downloadUrl: '#',
    pdfSize: '1.5 MB',
    isFeatured: true
  },
  {
    id: 'pub-diversidad-escolar',
    title: 'Infancias trans y escuelas inclusivas: Análisis de la aplicación de la circular sobre identidad de género en Chile',
    authors: ['Claudia Flores Morales', 'Rodrigo Azócar González'],
    year: 2023,
    type: 'informe',
    journalOrEditorial: 'Serie Cuadernos de Políticas Públicas GENSEX - UA',
    volumeOrPages: 'Documento de Trabajo Nº 4 • 56 páginas',
    doi: '10.32457/gensex.dt.2023.04',
    abstract: 'Informe de diagnóstico regional sobre la implementación de las normativas de identidad de género en establecimientos educacionales de la Región Metropolitana. Analiza los principales nudos críticos reportados por comunidades escolares, apoderados/as y estudiantes, formulando 10 recomendaciones de política pública.',
    keywords: ['Identidad de Género', 'Educación Inclusiva', 'Infancias Trans', 'Derechos de la Niñez'],
    lineId: 'diversidades-sexuales',
    downloadUrl: '#',
    pdfSize: '2.1 MB',
    isFeatured: false
  },
  {
    id: 'pub-migracion-cuidados',
    title: 'Cuerpos, fronteras y cadenas globales de cuidado: Mujeres migrantes en la periferia de Santiago',
    authors: ['Lorena Basualto Porra', 'Sonia Brito Rodríguez'],
    year: 2023,
    type: 'capitulo',
    journalOrEditorial: 'En: "Movilidades, Género y Resistencias en el Cono Sur", Editorial Universitaria',
    volumeOrPages: 'Capítulo 6, págs. 143-172',
    doi: '10.1017/eduni.2023.c6',
    abstract: 'Capítulo de libro que explora las experiencias de mujeres migrantes peruanas, bolivianas y venezolanas insertas en el trabajo doméstico y de cuidado no remunerado en comunas del Gran Santiago. Plantea un marco interpretativo que enlaza la teoría del cuidado con la decolonialidad.',
    keywords: ['Migración', 'Interseccionalidad', 'Cuidado', 'Decolonialidad', 'Trabajo Doméstico'],
    lineId: 'genero-interseccionalidad',
    downloadUrl: '#',
    pdfSize: '1.7 MB',
    isFeatured: false
  },
  {
    id: 'pub-guia-intervencion',
    title: 'Guía metodológica para la transversalización de la perspectiva de género en la intervención social local',
    authors: ['Equipo GENSEX (Coord. Rodrigo Azócar G.)'],
    year: 2022,
    type: 'guia',
    journalOrEditorial: 'Manuales de Extensión Académica Universidad Autónoma de Chile',
    volumeOrPages: '112 páginas ilustradas con matrices de evaluación',
    doi: '10.32457/ua.guia.genero.2022',
    abstract: 'Herramienta práctica diseñada para trabajadoras y trabajadores sociales, psicólogos/as comunitarios y gestores municipales. Proporciona matrices de diagnóstico rápido, indicadores no sexistas y orientaciones para diseñar proyectos sociales con pertinencia interseccional.',
    keywords: ['Guía Práctica', 'Metodología', 'Intervención Local', 'Indicadores de Género'],
    lineId: 'genero-interseccionalidad',
    downloadUrl: '#',
    pdfSize: '3.4 MB',
    isFeatured: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-carabineros',
    code: 'GENSEX-TR-2023/24',
    title: 'Programa de Fortalecimiento Curricular en Género, Sexualidades y Derechos Humanos para Escuelas Formativas de Carabineros',
    leadResearcher: 'Rodrigo Azócar González',
    fundingBody: 'Convenio de Cooperación ESFOCAR • Universidad Autónoma de Chile',
    period: '2022 – 2024 (Concluido con transferencia activa)',
    status: 'finalizado',
    summary: 'Iniciativa pionera que evaluó y rediseñó módulos de instrucción para futuros suboficiales y oficiales de Carabineros de Chile, introduciendo marcos de derechos humanos, no discriminación por orientación sexual o identidad de género, y herramientas para la atención respetuosa a víctimas de violencia.',
    objectives: [
      'Diagnosticar la percepción y formación previa en género en más de 800 estudiantes de la ESFOCAR.',
      'Elaborar manuales docentes y guías pedagógicas actualizadas con normativa nacional e internacional de DDHH.',
      'Capacitar al cuerpo de instructores y profesores en metodologías activas y no revictimizantes.'
    ],
    outcomes: [
      'Malla de formación policial con módulo obligatorio de 45 horas pedagógicas en género y DDHH.',
      'Publicación de artículo de investigación en revista Scielo.',
      'Sistematización de 3 manuales prácticos de actuación policial frente a agresiones de odio.'
    ],
    lineId: 'violencia-ddhh',
    partners: ['Escuela de Formación de Carabineros (ESFOCAR)', 'Carrera de Trabajo Social UA']
  },
  {
    id: 'proj-masculinidades-salud',
    code: 'UA-INV-2024-08',
    title: 'Masculinidades, Mandatos de Género y Salud Mental: Un estudio comparado en jóvenes del Gran Santiago',
    leadResearcher: 'Rodrigo Azócar González',
    fundingBody: 'Fondo Concursable de Investigación Interdisciplinaria UA',
    period: '2024 – 2026 (En ejecución)',
    status: 'en_curso',
    summary: 'Investigación orientada a desentrañar los factores asociados a la reticencia de los varones jóvenes a buscar apoyo psicológico, identificando cómo la adhesión al mandato hegemónico de invulnerabilidad eleva tasas de ideación suicida, adicciones y comportamientos violentos.',
    objectives: [
      'Aplicar encuesta a 1.200 estudiantes de educación superior sobre mandatos de masculinidad y salud mental.',
      'Realizar 30 entrevistas en profundidad con varones que hayan atravesado crisis afectivas o de salud mental.',
      'Codiseñar una campaña comunitaria de sensibilización centrada en masculinidades afectivas y de cuidado.'
    ],
    outcomes: [
      'Primer informe de resultados preliminares presentado en seminario internacional de CLACSO.',
      'Observatorio digital de indicadores de salud mental y género.'
    ],
    lineId: 'masculinidades',
    partners: ['Dirección de Asuntos Estudiantiles UA', 'Red Latinoamericana de Masculinidades']
  },
  {
    id: 'proj-100-anos',
    code: 'TS-CENT-2024/25',
    title: 'Memoria Crítica y Proyecciones del Trabajo Social en Chile: Reflexiones en su Centenario',
    leadResearcher: 'Dra. Sonia Brito Rodríguez & Rodrigo Azócar González',
    fundingBody: 'Vicerrectoría de Investigación y Doctorados UA',
    period: '2024 – 2025 (En ejecución)',
    status: 'en_curso',
    summary: 'Proyecto conmemorativo de los 100 años del Trabajo Social en Chile (1925-2025). Rescata las genealogías de las mujeres pioneras en la profesión, el rol de la disciplina durante los períodos de dictadura y post-dictadura, y los debates epistémicos actuales en torno al feminismo y la justicia distributiva.',
    objectives: [
      'Reconstruir archivos históricos orales y documentales de las escuelas de Trabajo Social pioneras en el país.',
      'Organizar ciclos de conversatorios y conferencias magistrales con pensadoras iberoamericanas.',
      'Publicar un libro monográfico conmemorativo de libre acceso internacional.'
    ],
    outcomes: [
      'Ciclo de 6 podcasts "100 Años de Trabajo Social" en Spotify y YouTube.',
      'Manuscrito del libro conmemorativo en revisión de pares ciegos.'
    ],
    lineId: 'trabajo-social',
    partners: ['Colegio de Trabajadoras y Trabajadores Sociales de Chile', 'Red LIESS']
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-ep-01',
    number: 1,
    title: '100 Años de Trabajo Social en Chile: Desafíos ético-políticos y enfoque de género',
    date: 'Agosto 2024',
    duration: '48 min',
    description: 'En este primer episodio conmemorativo, Rodrigo Azócar dialoga con la Dra. Sonia Brito sobre el nacimiento del Trabajo Social en 1925, las tensiones entre la caridad asistencial y la justicia emancipatoria, y por qué el enfoque de género es hoy la piedra angular de la profesión.',
    guests: ['Dra. Sonia Brito Rodríguez (Doctora en Derechos Humanos)', 'Rodrigo Azócar González (Conducción)'],
    tags: ['Trabajo Social', 'Historia', 'Centenario', 'Género'],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com'
  },
  {
    id: 'pod-ep-02',
    number: 2,
    title: '¿Qué significa ser hombre hoy? Tensiones, privilegios y mandatos de masculinidad',
    date: 'Octubre 2024',
    duration: '52 min',
    description: 'Una conversación abierta sobre los miedos, contradicciones y posibilidades de cambio en los varones contemporáneos. Abordamos cómo hablar de privilegios sin caer en posturas defensivas y la importancia de tejer redes de afecto entre varones.',
    guests: ['Rodrigo Azócar González (Investigador GENSEX)', 'Invitados de la Red Chilena de Masculinidades'],
    tags: ['Masculinidades', 'Feminismo', 'Salud Mental', 'Paternidad'],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com'
  },
  {
    id: 'pod-ep-03',
    number: 3,
    title: 'Niñeces y juventudes trans: El derecho a existir sin miedo en las escuelas',
    date: 'Diciembre 2024',
    duration: '44 min',
    description: 'Analizamos junto a Claudia Flores y activistas de la sociedad civil el estado de la implementación de protocolos de género en la educación chilena, los discursos de odio emergentes y la necesidad de una educación sexual integral no sexista.',
    guests: ['Mg. Claudia Flores Morales', 'Representante de Colectivos de Familias Trans'],
    tags: ['Diversidad Sexual', 'Infancias Trans', 'Educación', 'DDHH'],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com'
  },
  {
    id: 'pod-ep-04',
    number: 4,
    title: 'Formación policial con perspectiva de género: Una experiencia de investigación y cambio',
    date: 'Marzo 2025',
    duration: '56 min',
    description: 'Los investigadores de GENSEX relatan los bastidores del trabajo con la Escuela de Formación de Carabineros (ESFOCAR): resistencias iniciales, quiebres metodológicos y cómo el enfoque de DDHH transforma la relación entre policía y ciudadanía.',
    guests: ['Rodrigo Azócar González', 'Rodrigo Donoso Figueroa'],
    tags: ['Seguridad Pública', 'Carabineros', 'Formación', 'DDHH'],
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://youtube.com'
  }
];

export const ACADEMIC_EVENTS: AcademicEvent[] = [
  {
    id: 'event-01',
    title: 'Seminario Internacional: Masculinidades, Políticas de Cuidado y No Violencia en el Cono Sur',
    type: 'Seminario',
    date: '24 de Octubre, 2025',
    time: '09:30 - 13:30 hrs (GMT-3)',
    location: 'Auditorio Central Campus Providencia, Universidad Autónoma de Chile',
    modality: 'Híbrido',
    description: 'Encuentro con destacados expositores de Chile, Argentina, Uruguay y Brasil para debatir sobre los avances legislativos en sistemas integrales de cuidado y la inclusión de hombres en tareas de reproducción de la vida.',
    speakers: ['Rodrigo Azócar González (GENSEX)', 'Dra. Mara Viveros Vigoya (Invitada Internacional)', 'Representante MINCAP'],
    isUpcoming: true
  },
  {
    id: 'event-02',
    title: 'Conversatorio: Desafíos del Trabajo Social ante las Nuevas Disidencias y Realidades Sexo-Genéricas',
    type: 'Conversatorio',
    date: '12 de Noviembre, 2025',
    time: '18:00 - 20:00 hrs',
    location: 'Aula Magna Sede El Llano Subercaseaux / Transmisión YouTube Live',
    modality: 'Híbrido',
    description: 'Mesa redonda orientada a estudiantes, egresados/as de ciencias sociales y profesionales que intervienen en programas de salud, infancia y justicia.',
    speakers: ['Dra. Sonia Brito Rodríguez', 'Mg. Claudia Flores', 'Dirigenta OTD Chile'],
    isUpcoming: true
  },
  {
    id: 'event-03',
    title: 'Lanzamiento del Libro Digital: Guías de Acción No Sexista para el Ámbito Municipal',
    type: 'Lanzamiento',
    date: '5 de Diciembre, 2025',
    time: '11:00 - 12:30 hrs',
    location: 'Sala de Conferencias Virtual GENSEX',
    modality: 'Online',
    description: 'Presentación formal del documento con descarga gratuita para equipos municipales y organizaciones no gubernamentales de todo Chile.',
    speakers: ['Equipo de Investigación GENSEX'],
    isUpcoming: true
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-01',
    title: 'GENSEX presenta resultados del estudio sobre formación de género en Carabineros en congreso latinoamericano',
    date: '10 de Marzo, 2025',
    category: 'Investigación',
    summary: 'La ponencia liderada por el académico Rodrigo Azócar destacó la relevancia de integrar el enfoque de género como un pilar innegociable de la función policial moderna y democrática.',
    content: 'En el marco del Congreso Latinoamericano de Ciencias Sociales, el Grupo de Investigación GENSEX expuso las conclusiones de su trabajo conjunto con la ESFOCAR. La investigación demostró un incremento significativo en la comprensión de conceptos clave de DDHH y una reducción notable en estereotipos machistas entre los aspirantes capacitados.',
    author: 'Comunicaciones GENSEX',
    readTime: '3 min de lectura'
  },
  {
    id: 'news-02',
    title: 'Columna en Le Monde Diplomatique: "¿Hacia dónde van las políticas de masculinidades en Chile?"',
    date: '18 de Febrero, 2025',
    category: 'Medios',
    summary: 'Análisis crítico publicado por investigadores del grupo sobre los límites del punitivismo y la necesidad de políticas estatales de prevención dirigidas expresamente a hombres.',
    content: 'El artículo plantea que no es suficiente condenar las violencias; se requiere una inversión sostenida en educación socioemocional y dispositivos comunitarios donde los hombres puedan problematizar sus vínculos sin temor al escarnio, entendiendo la igualdad como una ganancia colectiva.',
    author: 'Rodrigo Azócar & Sonia Brito',
    readTime: '5 min de lectura',
    mediaSource: 'Le Monde Diplomatique Edición Cono Sur'
  },
  {
    id: 'news-03',
    title: 'Convocatoria Abierta: Estudiantes tesistas de pre y postgrado para el ciclo 2025-2026',
    date: '28 de Enero, 2025',
    category: 'Vinculación',
    summary: 'Se ofrecen cupos de patrocinio de tesis y ayudantías de investigación remuneradas en las líneas de masculinidades, diversidades y Trabajo Social.',
    content: 'Invitamos a estudiantes de Trabajo Social, Sociología, Psicología, Educación y disciplinas afines a postular sus anteproyectos de tesis para recibir tutoría especializada, acceso a bases de datos y apoyo en publicación científica.',
    author: 'Coordinación Académica GENSEX',
    readTime: '2 min de lectura'
  }
];

export const IMPACT_STATS = [
  { value: '+12', label: 'Años de Investigación', sublabel: 'Generando evidencia crítica en Chile' },
  { value: '+45', label: 'Publicaciones Científicas', sublabel: 'Libros, artículos indexados y guías' },
  { value: '+1,800', label: 'Personas Capacitadas', sublabel: 'Estudiantes, funcionarios y policías' },
  { value: '5', label: 'Líneas Prioritarias', sublabel: 'Con proyectos activos e interdisciplinares' }
];
