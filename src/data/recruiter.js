// Conteúdo separado da apresentação para facilitar uma futura versão PT/EN.
// Pendências reais: URL do currículo, email e perfil pessoal do LinkedIn.
export const recruiterProfile = {
  brand: '<Lucas />',
  title: 'Front-End Developer',
  location: 'Portugal',
  resumeUrl: null,
  email: null,
  linkedinUrl: null,
}

export const recruiterContent = {
  mode: 'Experiência para recrutadores',
  hero: {
    introduction: 'Interfaces modernas. Experiências responsivas.',
    projects: 'Ver projetos', resume: 'Ver currículo',
  },
  about: {
    label: '01 / Sobre', title: 'Interfaces com propósito.',
    description: 'Sou Lucas, Front-End Developer em Portugal. Desenvolvo interfaces e aplicações web com React e JavaScript, incluindo projetos reais para clientes. Meu foco está na responsividade e na experiência de quem utiliza cada interface.',
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
    description: 'Consulte ou baixe o currículo para conhecer meu perfil profissional.',
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
