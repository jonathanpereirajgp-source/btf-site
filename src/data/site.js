// Single source of truth for services, team, portfolio etc. (from BTF docs)

// Proprietary BTF photography (tratada para web — editorial)
export const photos = {
  sistemaHome:           '/photos/sistema-home.jpg',           // Home — pull quote "Compreendemos o sistema"
  engenhariaDeDados:     '/photos/engenharia-de-dados.jpg',    // Serviços — Engenharia de Dados
  sistemaEspecialidade:  '/photos/sistema-especialidade.jpg',  // Especialidade — pull quote
  especialidadeHero:     '/photos/especialidade-hero.jpg',     // Especialidade — header
  cienciaDeDados:        '/photos/ciencia-de-dados.jpg',       // Home — preview portfólio /03 Ciência de Dados
  dashboardMonitoramento:'/photos/dashboard-monitoramento.jpg',// Portfólio — case Dashboard de monitoramento ambiental
  modelagemEcologica:    '/photos/modelagem-ecologica.jpg',   // Portfólio — case Modelagem ecológica preditiva
}

// Stock editorial imagery (fallback / outros usos).
export const stock = {
  forestRoad:    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
  forestFog:     'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80',
  forestCanopy:  'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
  forestRiver:   'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  topoMap:       'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  notebookData:  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  chartsLaptop:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  scienceField:  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80',
  labNotebook:   'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
  waterReflection: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80',
}

export const services = [
  {
    slug: 'ciencia-de-dados',
    title: 'Ciência de Dados',
    short: 'Modelagem estatística, ML e análise preditiva.',
    description:
      'Desenvolvemos soluções analíticas avançadas para transformar dados complexos em inteligência operacional e estratégica. Aplicamos modelagem estatística, machine learning e análise preditiva para identificação de padrões, geração de insights e suporte à tomada de decisão baseada em dados.',
    items: [
      'Modelagem estatística avançada',
      'Machine learning',
      'Análise preditiva',
      'Inteligência analítica',
      'Storytelling com dados',
      'Modelos analíticos customizados',
    ],
    icon: 'Brain',
    accent: 'lime',
  },
  {
    slug: 'engenharia-de-dados',
    title: 'Engenharia de Dados',
    short: 'Pipelines, ETL e infraestrutura escalável.',
    description:
      'Estruturamos arquiteturas analíticas robustas e pipelines automatizados para coleta, tratamento, integração e escalabilidade de dados. Garantimos qualidade, padronização, rastreabilidade e eficiência em fluxos analíticos complexos.',
    items: [
      'ETL e integração de dados',
      'Estruturação de bancos de dados',
      'Padronização de dados',
      'Integração de múltiplas fontes',
      'Pipelines automatizados',
      'Processamento escalável',
    ],
    icon: 'Network',
    accent: 'flame',
  },
  {
    slug: 'dashboards-bi',
    title: 'Dashboards & BI',
    short: 'Visualização estratégica em Power BI, Shiny e R.',
    description:
      'Desenvolvemos dashboards interativos e sistemas de visualização estratégica para monitoramento de indicadores, inteligência operacional e suporte à tomada de decisão. Transformamos dados em informações acessíveis, organizadas e orientadas à gestão.',
    items: [
      'Power BI',
      'Shiny',
      'RMarkdown',
      'Visualização analítica',
      'Relatórios automatizados',
      'Monitoramento de indicadores',
    ],
    icon: 'LineChart',
    accent: 'lime',
  },
  {
    slug: 'automacao',
    title: 'Automação de Processos e Relatórios',
    short: 'Rotinas analíticas automatizadas em larga escala.',
    description:
      'Automatizamos rotinas analíticas e processos técnicos para reduzir tempo operacional, minimizar erros e aumentar eficiência e padronização. Desenvolvemos fluxos automatizados para geração de relatórios, atualização de indicadores e processamento de dados em larga escala.',
    items: [
      'Relatórios ambientais',
      'Relatórios técnicos automatizados',
      'Monitoramento de indicadores',
      'Processamento automatizado',
      'Atualização automática de análises',
      'Automação de fluxos operacionais',
    ],
    icon: 'Cog',
    accent: 'flame',
  },
]

export const team = [
  {
    name: 'Cláudio Tavares Jr.',
    role: 'Biólogo · Cientista e Engenheiro de Dados',
    title: 'Doutor em Ciências Naturais',
    photo: '/team/claudio.jpg',
    bio: 'Experiência em ETL, modelagem estatística, machine learning, pipelines de dados e visualização analítica utilizando R, Python e Power BI. Atua no desenvolvimento de arquiteturas analíticas, automação de processos e soluções orientadas por dados aplicadas a sistemas complexos.',
    tags: ['R', 'Python', 'Power BI', 'Machine Learning', 'Pipelines'],
  },
  {
    name: 'Graziella França',
    role: 'Bióloga · Cientista e Engenheira de Dados',
    title: 'Doutora em Ecologia',
    photo: '/team/graziella.jpg',
    bio: 'Atua com ETL, modelagem estatística, automação de processos, inteligência analítica e desenvolvimento de soluções aplicadas a dados ambientais, integrando ciência e tecnologia para construção de fluxos analíticos escaláveis.',
    tags: ['ETL', 'Estatística', 'Automação', 'Dados Ambientais'],
  },
  {
    name: 'Thaise Bahia',
    role: 'Bióloga · Cientista e Analista de Dados',
    title: 'Doutora em Ecologia',
    photo: '/team/thaise.jpg',
    imgPos: 'object-top', // cabeça no topo da foto — alinha ao topo p/ não cortar
    bio: 'Experiência em gestão de dados e metadados, modelagem estatística, automação analítica e desenvolvimento de relatórios técnicos. Atua na organização e estruturação de processos analíticos orientados por dados.',
    tags: ['Metadados', 'Modelagem', 'Relatórios', 'Estruturação'],
  },
]

export const partners = [
  'Sete Soluções e Tecnologia Ambiental',
  'Z.A Soluções Ambientais',
  'Ecodes Consultoria Ambiental',
  'Spelayon Consultoria',
  'Doceana Consultoria Ambiental',
]

export const stack = [
  'R', 'Python', 'Power BI', 'Shiny', 'tidyverse', 'ggplot2', 'RMarkdown',
  'Big Data Analytics', 'Machine Learning', 'Pipelines de Dados', 'ETL', 'Automação Analítica',
]

export const values = [
  { k: 'Inovação', d: 'Buscamos novas abordagens analíticas continuamente.' },
  { k: 'Excelência técnica', d: 'Rigor científico aplicado a soluções de produção.' },
  { k: 'Inteligência analítica', d: 'Decisões orientadas por dados, do início ao fim.' },
  { k: 'Ciência aplicada', d: 'Conhecimento ecológico que contextualiza os dados.' },
  { k: 'Transparência', d: 'Métodos auditáveis, métricas claras.' },
  { k: 'Qualidade e confiabilidade', d: 'Padronização e rastreabilidade em cada etapa.' },
  { k: 'Escalabilidade', d: 'Soluções que crescem com o projeto.' },
  { k: 'Compromisso com resultados', d: 'Foco no impacto real para o cliente.' },
]

export const ambientalAreas = [
  'Monitoramento ambiental',
  'Biodiversidade',
  'Ecologia',
  'Licenciamento ambiental',
  'Gestão ambiental',
  'Modelagem ecológica',
  'Inteligência analítica aplicada ao meio ambiente',
]

export const portfolioCases = [
  {
    title: 'Dashboard de monitoramento ambiental',
    client: 'Consultoria parceira',
    summary:
      'Plataforma de visualização contínua de indicadores ambientais com atualização automatizada e camadas analíticas em Power BI.',
    tags: ['Power BI', 'Pipelines', 'Monitoramento'],
  },
  {
    title: 'Pipeline integrado de dados de campo',
    client: 'Consultoria ambiental',
    summary:
      'Padronização e integração de múltiplas fontes de coleta de campo em um pipeline ETL automatizado, com rastreabilidade ponta a ponta.',
    tags: ['ETL', 'Padronização', 'R'],
  },
  {
    title: 'Modelagem ecológica preditiva',
    client: 'Projeto científico',
    summary:
      'Modelos estatísticos e de machine learning aplicados a séries temporais ecológicas para apoiar decisão em projetos de licenciamento.',
    tags: ['Machine Learning', 'Estatística', 'Licenciamento'],
  },
  {
    title: 'Automação de relatórios técnicos',
    client: 'Consultoria técnica',
    summary:
      'Geração automatizada de relatórios técnicos em RMarkdown, reduzindo tempo operacional e padronizando entregas recorrentes.',
    tags: ['Automação', 'RMarkdown', 'Padronização'],
  },
  {
    title: 'Estruturação de banco de metadados',
    client: 'Equipe interna',
    summary:
      'Modelo de metadados que organiza e relaciona variáveis ambientais de longo prazo, viabilizando análises comparativas.',
    tags: ['Metadados', 'Estruturação', 'Banco de dados'],
  },
  {
    title: 'Inteligência analítica para ESG',
    client: 'Cliente corporativo',
    summary:
      'Consolidação de métricas de sustentabilidade em camada analítica única, com dashboards executivos e alertas automáticos.',
    tags: ['ESG', 'BI', 'Inteligência'],
  },
]

export const differentiators = [
  'Equipe multidisciplinar altamente qualificada',
  'Forte integração entre ciência, tecnologia e análise estratégica',
  'Expertise em sistemas ambientais complexos',
  'Soluções analíticas personalizadas',
  'Automação e escalabilidade de processos',
  'Infraestrutura analítica robusta',
  'Pipelines inteligentes',
  'Integração e padronização de dados',
  'Visualização estratégica de informações',
  'Alta capacidade técnica em modelagem e automação',
]
