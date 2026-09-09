import { recruiterContent, techStack } from '../recruiter'
import { clientContent } from '../client'
import { services } from '../services'
import { workflow } from '../workflow'
import { clientProcess } from '../clientProcess'
import { projects } from '../projects'

const serviceTitles = {
  'landing-pages': 'Páginas de apresentação', 'business-websites': 'Sites empresariais',
  portfolios: 'Portfólios profissionais', responsive: 'Desenvolvimento responsivo',
  api: 'Integração com APIs', firebase: 'Firebase',
}
const workflowTitles = {
  jira: 'Jira', task: 'Tarefa', branch: 'Branch de funcionalidade', development: 'Desenvolvimento',
  review: 'Revisão de código', pr: 'Pull Request', merge: 'Integração', deploy: 'Publicação',
}
const processTitles = { conversation: 'Conversa', planning: 'Planejamento', development: 'Desenvolvimento', delivery: 'Entrega' }
const stackTitles = { core: 'Base Front-End', web: 'React / Web', tools: 'Ferramentas / Processo', other: 'Outras tecnologias com experiência' }

export default {
  common: { language: 'Idioma', pageTitle: 'Lucas | Portfólio', live: 'Visitar site', repository: 'Ver código', caseStudy: 'Ver estudo de caso', technologies: 'Tecnologias do projeto' },
  intro: { label: 'Antes de continuar...', title: 'O que trouxe você até aqui?', recruiter: 'Estou recrutando', client: 'Preciso de um desenvolvedor' },
  visitor: { label: 'Alterar experiência', recruiter: 'Mudar para modo recrutador', client: 'Mudar para modo cliente', reset: 'Escolher novamente' },
  marquee: { label: 'Áreas e tecnologias', pause: 'Pausar movimento', resume: 'Retomar movimento' },
  caseStudy: {
    label: 'Estudo de caso', navigation: 'Navegação do projeto', back: 'Voltar ao portfólio',
    notFound: 'Projeto não encontrado', notFoundDescription: 'Não encontramos um projeto com este endereço. Volte ao portfólio para conhecer os projetos disponíveis.',
    overview: 'Visão geral', problem: 'Problema', solution: 'Solução', role: 'Minha atuação',
    features: 'Funcionalidades', technologies: 'Tecnologias', challenges: 'Desafios',
    result: 'Resultado', plannedScope: 'Escopo planejado', images: 'Imagens do projeto', links: 'Links do projeto',
  },
  contact: { label: 'Canais de contato', email: 'Email', linkedin: 'LinkedIn', whatsapp: 'WhatsApp', github: 'GitHub', form: 'Formulário externo', pending: 'Os canais de contato ainda não estão disponíveis.' },
  form: {
    title: 'Prepare sua mensagem', description: 'Todos os campos são obrigatórios. Seus dados não são enviados nem salvos neste site.',
    unavailable: 'O email de destino ainda não foi configurado. Você pode preencher e validar a mensagem, mas ainda não é possível abrir um email para Lucas.',
    mailtoHint: 'A mensagem será preparada no seu aplicativo de email. Você precisará revisar e enviar por lá; este site não confirma a entrega.',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem', submit: 'Preparar mensagem',
    errors: { required: 'Preencha este campo.', email: 'Informe um email válido.', tooLong: 'O texto excede o limite deste campo.' },
    invalid: 'Revise os campos indicados. Sua mensagem foi mantida.',
    prepared: 'Solicitamos a abertura do seu aplicativo de email. Revise e envie a mensagem por lá. Nenhum envio foi confirmado neste site.',
  },
  recruiterContent: {
    ...recruiterContent,
    projects: { ...recruiterContent.projects, title: 'Projetos selecionados' },
    stack: { ...recruiterContent.stack, title: 'Tecnologias' },
  },
  clientContent: { ...clientContent, hero: { ...clientContent.hero, titleLines: ['Eu crio', 'experiências', 'digitais.'] } },
  services: services.map(item => ({ ...item, title: serviceTitles[item.id] })),
  workflow: workflow.map(item => ({ ...item, title: workflowTitles[item.id] })),
  clientProcess: clientProcess.map(item => ({ ...item, title: processTitles[item.id] })),
  techStack: techStack.map(item => ({ ...item, title: stackTitles[item.id] })),
  projects,
}
