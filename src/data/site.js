// Single source of truth for content (services, team, portfolio, etc.)

// Proprietary BTF photography (tratada para web, editorial)
export const photos = {
  // Home
  homeHeroTrio:          '/photos/home-hero-trio.jpg',            // Home hero - trio na mesa (parede laranja)
  sobreHome:             '/photos/sobre-home.jpg',                // Home Sobre - mapa/dashboard sobre floresta
  sistemaHome:           '/photos/sistema-home.jpg',              // Home - pull quote "Compreendemos o sistema" (Pátzcuaro)
  caseDashboards:        '/photos/case-dashboards.jpg',           // Home /01 Dashboards & BI
  caseEngenharia:        '/photos/case-engenharia.jpg',           // Home /02 Engenharia de Dados
  cienciaDeDados:        '/photos/ciencia-de-dados.jpg',          // Home /03 Ciência de Dados

  // Serviços
  engenhariaDeDados:     '/photos/engenharia-de-dados.jpg',       // Serviços - Engenharia de Dados

  // Especialidade
  especialidadeHero:     '/photos/especialidade-hero.jpg',        // Especialidade header (córrego mata)
  sistemaEspecialidade:  '/photos/sistema-especialidade.jpg',     // Especialidade pull quote (lago)

  // Sobre
  missao:                '/photos/missao.jpg',                    // Sobre - Missão (corredeira)
  visao:                 '/photos/visao.jpg',                     // Sobre - Visão (borboletas monarcas)
  valores:               '/photos/valores.jpg',                   // Sobre - Valores (campos rupestres)

  // Manual do Cientista
  manualTrio:            '/photos/manual-trio.jpg',               // Manual do Cientista - trio descontraído

  // Portfolio (mantidos)
  dashboardMonitoramento:'/photos/dashboard-monitoramento.jpg',
  modelagemEcologica:    '/photos/modelagem-ecologica.jpg',
}

// Stock editorial fallback (mantido só para casos residuais).
export const stock = {
  forestRoad:      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
  forestFog:       'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80',
  forestCanopy:    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
  forestRiver:     'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  topoMap:         'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  notebookData:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  chartsLaptop:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  scienceField:    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80',
  labNotebook:     'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
  waterReflection: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80',
}

// Home hero copy
export const homeHero = {
  headline: 'Ciência, dados e tecnologia para transformar desafios complexos em soluções inteligentes.',
  sub:      'A BTF Soluções em Dados integra ciência de dados, engenharia de dados e conhecimento especializado em biologia, ecologia e sistemas ambientais para desenvolver soluções analíticas robustas, automatizadas e orientadas à tomada de decisão.',
}

// Home stat row (Fatos)
export const homeFacts = [
  {
    n: '01',
    title: 'Ciência aplicada',
    caption: 'Conhecimento científico que orienta cada solução.',
    d: 'Equipe formada por doutores em Ecologia, Ciências Naturais e especialistas em dados.',
  },
  {
    n: '02',
    title: 'Engenharia robusta',
    caption: 'Dados estruturados para escalar.',
    d: 'Pipelines, integrações e automações robustas, rastreáveis e auditáveis em R, Python e Power BI.',
  },
  {
    n: '03',
    title: 'Método antes do hype',
    caption: 'Tecnologia a serviço do problema.',
    d: 'Selecionamos métodos, modelos e tecnologias com base no desafio real, não na tendência do momento.',
  },
]

export const services = [
  {
    slug: 'ciencia-de-dados',
    title: 'Ciência de Dados',
    short: 'Modelagem estatística e análises preditivas.',
    description:
      'Desenvolvemos soluções analíticas avançadas para transformar dados complexos em inteligência operacional e estratégica. Aplicamos modelagem estatística, machine learning e análise preditiva para identificação de padrões, geração de insights e suporte à tomada de decisão baseada em dados.',
    items: [
      'Análises exploratórias e preditivas',
      'Análises multivariadas',
      'Modelagem estatística avançada',
      'Machine learning',
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
      'Relatórios técnicos',
      'Monitoramento de indicadores',
      'Processamento de big data',
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
    // Cláudio: foto de corpo inteiro. Aproximar com scale para enquadrar melhor.
    imgPos: 'object-[50%_18%] scale-[1.22] origin-top',
    bio: 'Experiência em ETL, modelagem estatística, machine learning, pipelines de dados e visualização analítica utilizando R, Python e Power BI. Atua no desenvolvimento de arquiteturas analíticas, automação de processos e soluções orientadas por dados aplicadas a sistemas complexos.',
    tags: ['R', 'Python', 'Power BI', 'Machine Learning', 'Pipelines'],
  },
  {
    name: 'Graziella França',
    role: 'Bióloga · Cientista e Engenheira de Dados',
    title: 'Doutora em Ecologia',
    photo: '/team/graziella.jpg',
    // Graziella: foto no tamborete. Ancorar no rosto.
    imgPos: 'object-[50%_8%]',
    bio: 'Atua com ETL, modelagem estatística, automação de processos, inteligência analítica e desenvolvimento de soluções aplicadas a dados ambientais, integrando ciência e tecnologia para construção de fluxos analíticos escaláveis.',
    tags: ['ETL', 'Estatística', 'Automação', 'Dados Ambientais'],
  },
  {
    name: 'Thaise Bahia',
    role: 'Bióloga · Cientista e Analista de Dados',
    title: 'Doutora em Ecologia',
    photo: '/team/thaise.jpg',
    // Thaise: rosto no topo. Descer para alinhar com as demais.
    imgPos: 'object-[50%_20%]',
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

// Valores da BTF (aba Sobre) — títulos + descrições ampliadas
export const values = [
  { k: 'Inovação contínua',              d: 'Exploramos novas abordagens analíticas e tecnológicas para antecipar tendências e ampliar possibilidades.' },
  { k: 'Excelência técnica',             d: 'Aplicamos rigor metodológico e precisão estatística em soluções e decisões confiáveis.' },
  { k: 'Inteligência analítica',         d: 'Decisões fundamentadas em evidências, do planejamento inicial à entrega final.' },
  { k: 'Ciência aplicada e contextualizada', d: 'Integramos conhecimento ecológico e científico para dar sentido e relevância aos dados.' },
  { k: 'Transparência metodológica',     d: 'Processos auditáveis, métricas claras e resultados rastreáveis em todas as etapas.' },
  { k: 'Qualidade e confiabilidade',     d: 'Padronização robusta e rastreabilidade que asseguram consistência e credibilidade.' },
  { k: 'Escalabilidade',                 d: 'Soluções que evoluem junto com o projeto, mantendo eficiência em qualquer dimensão.' },
  { k: 'Compromisso com impacto real',   d: 'Foco em resultados práticos e estratégicos que geram valor direto para o cliente.' },
]

// Áreas ambientais (Home /especialidade)
export const ambientalAreas = [
  'Monitoramento ambiental',
  'Biodiversidade e Ecologia',
  'Licenciamento ambiental',
  'Gestão ambiental',
  'Modelagem espacial e funcional',
  'Análises espaciais e da paisagem',
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

// Diferenciais (Home) — 10 itens
export const differentiators = [
  'Equipe multidisciplinar de excelência',
  'Integração estratégica entre ciência, tecnologia',
  'Expertise em sistemas ambientais complexos',
  'Soluções analíticas sob medida',
  'Automação inteligente e escalabilidade de processos',
  'Infraestrutura analítica robusta',
  'Pipelines de dados inteligentes',
  'Integração, tratamento e padronização de dados',
  'Visualização estratégica e comunicativa de informações',
  'Alta capacidade técnica em modelagem e machine learning',
]

// Manual do Cientista — serviços
export const manualServices = [
  {
    title: 'Mentorias personalizadas',
    d: 'Acompanhamento individual, ajudando estudantes e pesquisadores a estruturar seus projetos desde a formulação de perguntas, hipóteses e predições até a análise e escrita dos resultados. As mentorias oferecem orientação prática, apoio emocional e direcionamento estratégico para superar os desafios da vida acadêmica.',
  },
  {
    title: 'Consultorias científicas',
    d: 'Atendimento especializado para resolver problemas específicos em projetos de pesquisa. Seja na organização de dados, na escolha de métodos estatísticos ou na aplicação correta do método científico, a consultoria garante soluções sob medida para cada necessidade.',
  },
  {
    title: 'Cursos e treinamentos',
    d: 'Programas de formação que ensinam desde os fundamentos do método científico até o uso avançado do R e técnicas de análise estatística univariadas e multivariada. Os cursos são pensados para serem acessíveis, práticos e aplicáveis, permitindo que o pesquisador desenvolva autonomia e confiança.',
    link: { label: 'Ver cursos disponíveis', href: 'https://manualdocientista.com' },
  },
  {
    title: 'Comunidade de apoio',
    d: 'Além dos serviços formais, o trabalho também cria um espaço de troca e colaboração, onde pesquisadores podem compartilhar experiências, aprender uns com os outros e sentir que não estão sozinhos na jornada científica.',
  },
]

// Manual do Cientista — trajetórias dos sócios
export const manualTeam = [
  {
    name: 'Graziella',
    text: 'Sempre sonhou em ser cientista, mesmo sem saber exatamente o que era ciência quando criança. Escolheu a biologia achando que fugiria da matemática, mas logo descobriu que ecologia e estatística caminham juntas. Desde a graduação, se apaixonou pelo R e pela estatística, ensinando colegas e aprendendo ainda mais ao compartilhar conhecimento. Hoje, sua trajetória combina sensibilidade ecológica com rigor analítico, e ela segue firme no propósito de transformar dados em histórias que revelam a vida.',
  },
  {
    name: 'Thaise',
    text: 'Formada em biologia, mergulhou em cursos de campo intensos, onde aprendeu na prática o valor do método científico: noites sem dormir, relatórios escritos às pressas e hipóteses testadas sob pressão. Esses momentos de sangue, suor e lágrimas se transformaram em capítulos de livros e artigos científicos. Buscou melhorar sua formação, estudando estatística e R para se tornar referência em análises complexas. Hoje, com experiência acadêmica sólida agrega uma visão estratégica que conecta ciência e impacto real.',
  },
  {
    name: 'Cláudio',
    text: 'Descobriu o poder do método científico ao perceber, ainda no mestrado, que estatística era a chave para transformar dados em conhecimento. Apaixonou-se pelo R depois de noites intensas em cursos de campo, onde a dificuldade de analisar dados se tornou motivação para dominar a ferramenta. Releu clássicos da ecologia, refez cursos para aprender melhor e construiu uma base sólida em análises estatísticas. Hoje, cria pipelines inteligentes e sistemas robustos que sustentam projetos de grande escala, garantindo que cada informação percorra o caminho certo, com eficiência e confiabilidade.',
  },
]

// Diferenciais (aba Sobre) — 10 itens (variação editorial)
export const differentiatorsAbout = [
  'Equipe multidisciplinar altamente qualificada',
  'Convergência entre ciência e estratégia',
  'Expertise em sistemas ambientais complexos',
  'Soluções analíticas sob medida',
  'Automação e escalabilidade inteligente',
  'Infraestrutura analítica sólida',
  'Pipelines otimizados',
  'Integração e padronização de dados',
  'Visualização estratégica',
  'Excelência em modelagem e automação',
]
