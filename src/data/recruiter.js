// Conteúdo-base em português; traduções centralizadas em data/i18n.
// Contatos centralizados em contactConfig. URL do currículo ainda pendente.
export const recruiterProfile = {
  title: 'Front-End Developer',
  location: 'Portugal',
  resumeUrl: null,
}

export const recruiterContent = {
  mode: 'Experiência para recrutadores',
  hero: {
    introduction: 'Interfaces modernas. Experiências responsivas.',
    projects: 'Ver projetos', resume: 'Ver currículo',
  },
  about: {
    label: '01 / Sobre', title: 'Interfaces com propósito.',
    description: 'Sou Lucas Souza, Front-End Developer e freelancer baseado em Portugal, com experiência no desenvolvimento de projetos reais para clientes. Crio interfaces e aplicações web modernas, responsivas e focadas na experiência do usuário, utilizando React e JavaScript para transformar necessidades reais em soluções digitais funcionais, claras e bem estruturadas.',
  },
  experience: {
    label: '02 / Experiência', title: 'Projetos reais. Trabalho independente.',
    role: 'Freelance Front-End Developer',
    description: 'Desenvolvimento de interfaces web para clientes, com atenção à apresentação do conteúdo e à adaptação a diferentes telas.',
    projectsLabel: 'Projetos para clientes', visit: 'Visitar site',
  },
  projects: { label: '03 / Projetos selecionados', title: 'Selected Projects', live: 'Ver projeto', repository: 'Ver código' },
  stack: { label: '04 / Tecnologias', title: 'Tech Stack' },
  workflow: {
    label: '05 / Processo', title: 'Como desenvolvo',
    description: 'Este portfólio segue um fluxo de tarefas no Jira e branches de feature, com validação antes da integração. A publicação é uma etapa separada, reservada às versões aprovadas.',
  },
  resume: {
    label: '06 / Currículo', title: 'Minha experiência, em um documento.',
    description: '',
    pending: 'Currículo em preparação. Visualização e download estarão disponíveis quando o documento for adicionado.',
    view: 'Visualizar currículo', download: 'Baixar CV',
  },
  contact: {
    label: '07 / Contato', title: 'Vamos conversar.',
    description: 'Quer conversar sobre meu perfil para uma vaga de Front-End Developer?',
    email: 'Email', linkedin: 'LinkedIn', pending: 'Contatos profissionais em breve.',
  },
}

export const techStack = [
  { id: 'core', title: 'Core Front-End', technologies: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { id: 'web', title: 'React / Web', technologies: ['React Router', 'Context API', 'Axios', 'REST APIs'] },
  { id: 'tools', title: 'Tools / Workflow', technologies: ['Git', 'GitHub', 'Vite', 'Jira'] },
  { id: 'other', title: 'Outras tecnologias com experiência', technologies: ['Firebase'] },
]
