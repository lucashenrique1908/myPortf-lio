import medidaVibrante1 from '../assets/images/medidaVibrante1.jpg'
import medidaVibrante2 from '../assets/images/medidaVibrante2.jpg'
import medidaVibrante3 from '../assets/images/medidaVibrante3.png'
import medidaVibrante4 from '../assets/images/medidaVibrante4.png'
import medidaVibrante5 from '../assets/images/medidaVibrante5.png'
import studio1 from '../assets/images/studio1.jpg'
import studio2 from '../assets/images/studio2.jpg'
import studio3 from '../assets/images/studio3.jpg'
import studio4 from '../assets/images/studio4.jpg'
import gitfinder1 from '../assets/images/gitfinder1.png'
import gitfinder2 from '../assets/images/gitfinder2.png'
import gitfinder3 from '../assets/images/gitfinder3.png'

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
    screenshots: [
      { src: gitfinder1, alt: 'Tela do projeto GitHub Finder' },
      { src: gitfinder2, alt: 'Busca no projeto GitHub Finder' },
      { src: gitfinder3, alt: 'Resultado do projeto GitHub Finder' },
    ],
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
    screenshots: [
      { src: medidaVibrante1, alt: 'Página inicial da Medida Vibrante' },
      { src: medidaVibrante2, alt: 'Serviços da Medida Vibrante' },
      { src: medidaVibrante3, alt: 'Galeria da Medida Vibrante' },
      { src: medidaVibrante4, alt: 'Avaliações da Medida Vibrante' },
      { src: medidaVibrante5, alt: 'Contato da Medida Vibrante' },
    ],
  },
  {
    ...caseStudyDefaults,
    id: 'studio-cedro', slug: 'studio-cedro', title: 'Studio Cedro Marcenaria',
    category: 'Projeto real para cliente', clientType: 'Cliente',
    summary: 'Site profissional de marcenaria.',
    description: 'Site profissional desenvolvido para o Studio Cedro Marcenaria, utilizando React e Vite.',
    technologies: ['React', 'Vite'],
    liveUrl: 'https://www.studiocedromarcenaria.com/', repositoryUrl: null,
    screenshots: [
      { src: studio1, alt: 'Página inicial do Studio Cedro Marcenaria' },
      { src: studio2, alt: 'Projetos do Studio Cedro Marcenaria' },
      { src: studio3, alt: 'Serviços do Studio Cedro Marcenaria' },
      { src: studio4, alt: 'Contato do Studio Cedro Marcenaria' },
    ],
  },
]

export const projects = [...clientProjects, ...developerProjects]
