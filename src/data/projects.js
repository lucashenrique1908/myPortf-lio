// Campos não confirmados ficam vazios. Planejamento não representa entrega.
// image: null ou { src, alt }; screenshots: array de { src, alt } reais.
const caseStudyDefaults = {
  summary: null, role: null, problem: null, solution: null,
  challenges: [], result: null, image: null, screenshots: [], clientType: null,
  features: [], plannedScope: [],
}

export const developerProjects = [
  {
    ...caseStudyDefaults,
    id: 'github-finder', slug: 'github-finder', title: 'GitHub Finder',
    category: 'Projeto técnico', description: 'Apresentação provisória. Detalhes do projeto em preparação.',
    technologies: [], liveUrl: null, repositoryUrl: null,
  },
  {
    ...caseStudyDefaults,
    id: 'crm-sales', slug: 'crm-sales', title: 'CRM Sales',
    category: 'Projeto técnico',
    summary: 'CRM para vendedores e gestores.',
    description: 'Projeto com escopo definido para acompanhar o fluxo Lead → contato → negociação → ganho/perdido. A implementação dos recursos abaixo ainda não está confirmada.',
    plannedScope: [
      'MVP previsto: cadastro e gestão de clientes e contatos; registro e acompanhamento de vendas; busca, filtros, histórico e identificação de cliente novo ou recorrente.',
      'Autenticação planejada: email e senha, recuperação de acesso e cadastro.',
      'Permissões previstas: vendedores gerenciam seus clientes; gestores gerenciam usuários e clientes.',
      'Backend planejado: Node.js. Banco de dados planejado: MongoDB.',
      'Métricas planejadas: desempenho de vendedores, ganhos e perdas, clientes novos e recorrentes.',
    ],
    technologies: [], liveUrl: null, repositoryUrl: null,
  },
]

export const clientProjects = [
  {
    ...caseStudyDefaults,
    id: 'medida-vibrante', slug: 'medida-vibrante', title: 'Medida Vibrante',
    category: 'Projeto real para cliente', clientType: 'Cliente',
    summary: 'Site para uma empresa de climatização.',
    description: 'Site da Medida Vibrante com formulário, galeria, avaliações e uma seção dedicada às zonas atendidas. A interface oferece tema claro e escuro.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Formulário com validação de NIF e telefone.', 'Galeria e avaliações.', 'Tema claro e escuro.', 'Seção de zonas atendidas.'],
    liveUrl: 'https://medidavibrante.com/', repositoryUrl: null,
  },
  {
    ...caseStudyDefaults,
    id: 'studio-cedro', slug: 'studio-cedro', title: 'Studio Cedro Marcenaria',
    category: 'Projeto real para cliente', clientType: 'Cliente',
    summary: 'Site profissional de marcenaria.',
    description: 'Site profissional desenvolvido para o Studio Cedro Marcenaria, utilizando React e Vite.',
    technologies: ['React', 'Vite'],
    liveUrl: 'https://www.studiocedromarcenaria.com/', repositoryUrl: null,
  },
]

export const projects = [...clientProjects, ...developerProjects]
