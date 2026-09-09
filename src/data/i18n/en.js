import pt from './pt'

const serviceText = {
  'landing-pages': { title: 'Landing Pages', description: 'Pages presenting a service, product or initiative with organised content and clear navigation.' },
  'business-websites': { title: 'Business Websites', description: 'Websites presenting a company, its services and contact options.' },
  portfolios: { title: 'Professional Portfolios', description: 'Portfolios for professionals who want to showcase their work and experience.' },
  responsive: { title: 'Responsive Development', description: 'Interfaces adapted to phones, tablets and computers.' },
  api: { title: 'API Integration', description: 'Connecting interfaces to data and features provided by APIs.' },
  firebase: { title: 'Firebase', description: 'Integrating Firebase features according to the needs and scope of the project.' },
}
const workflowText = {
  jira: { title: 'Jira', description: 'Organise work into sprints.' },
  task: { title: 'Task', description: 'Define the scope and acceptance criteria.' },
  branch: { title: 'Feature Branch', description: 'Isolate each change in a branch.' },
  development: { title: 'Development', description: 'Implement and validate the interface.' },
  review: { title: 'Code Review', description: 'Review the code and its behaviour.' },
  pr: { title: 'Pull Request', description: 'Present the change for integration.' },
  merge: { title: 'Merge', description: 'Integrate approved changes into develop.' },
  deploy: { title: 'Deploy', description: 'Publish only a version approved for production.' },
}
const processText = {
  conversation: { title: 'Conversation', description: 'We discuss your idea, audience and project needs.' },
  planning: { title: 'Planning', description: 'We define the scope, content and stages before development begins.' },
  development: { title: 'Development', description: 'I develop the interface and we agree on adjustments as the work progresses.' },
  delivery: { title: 'Delivery', description: 'We review the website and organise delivery according to our agreement.' },
}
const projectText = {
  'medida-vibrante': {
    category: 'Real client project', clientType: 'Client', summary: 'Website for an air conditioning company.',
    description: 'Medida Vibrante website with a form, gallery, reviews and a section dedicated to service areas. The interface offers light and dark themes.',
    features: ['Form with NIF (tax identification number) and phone validation.', 'Gallery and reviews.', 'Light and dark themes.', 'Service areas section.'],
  },
  'studio-cedro': {
    category: 'Real client project', clientType: 'Client', summary: 'Professional woodworking website.',
    description: 'Professional website developed for Studio Cedro Marcenaria using React and Vite.',
  },
  'github-finder': { category: 'Technical project', description: 'Provisional overview. Project details are being prepared.' },
  'crm-sales': {
    category: 'Technical project', summary: 'CRM for salespeople and managers.',
    description: 'Project with a defined scope to track the Lead → contact → negotiation → won/lost flow. Implementation of the features below has not yet been confirmed.',
    plannedScope: [
      'Planned MVP: creating and managing customers and contacts; recording and tracking sales; search, filters, history and identification of new or returning customers.',
      'Planned authentication: email and password, account recovery and registration.',
      'Planned permissions: salespeople manage their customers; managers manage users and customers.',
      'Planned backend: Node.js. Planned database: MongoDB.',
      'Planned metrics: salesperson performance, wins and losses, new and returning customers.',
    ],
  },
}
const stackTitles = { core: 'Core Front-End', web: 'React / Web', tools: 'Tools / Workflow', other: 'Other technologies I have worked with' }

export default {
  common: { language: 'Language', pageTitle: 'Lucas | Portfolio', live: 'Visit website', repository: 'View code', caseStudy: 'View case study', technologies: 'Project technologies' },
  intro: { label: 'Before we continue...', title: 'What brings you here?', recruiter: 'I am recruiting', client: 'I need a developer' },
  visitor: { label: 'Change experience', recruiter: 'Switch to recruiter mode', client: 'Switch to client mode', reset: 'Choose again' },
  marquee: { label: 'Areas and technologies', pause: 'Pause motion', resume: 'Resume motion' },
  caseStudy: {
    label: 'Case study', navigation: 'Project navigation', back: 'Back to portfolio',
    notFound: 'Project not found', notFoundDescription: 'We could not find a project at this address. Return to the portfolio to explore the available projects.',
    overview: 'Overview', problem: 'Problem', solution: 'Solution', role: 'My Role',
    features: 'Features', technologies: 'Technologies', challenges: 'Challenges',
    result: 'Result', plannedScope: 'Planned Scope', images: 'Project images', links: 'Project Links',
  },
  contact: { label: 'Contact channels', email: 'Email', linkedin: 'LinkedIn', whatsapp: 'WhatsApp', github: 'GitHub', form: 'External form', pending: 'Contact channels are not available yet.' },
  form: {
    title: 'Prepare your message', description: 'All fields are required. Your details are not sent or saved by this website.',
    unavailable: 'The recipient email has not been configured yet. You can fill in and validate your message, but opening an email to Lucas is not available yet.',
    mailtoHint: 'Your message will be prepared in your email app. You will need to review and send it there; this website does not confirm delivery.',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', submit: 'Prepare message',
    errors: { required: 'Please fill in this field.', email: 'Please enter a valid email.', tooLong: 'The text exceeds the limit for this field.' },
    invalid: 'Review the indicated fields. Your message has been kept.',
    prepared: 'We requested that your email app open. Review and send your message there. No delivery has been confirmed by this website.',
  },
  recruiterContent: {
    mode: 'Recruiter experience',
    hero: { introduction: 'Modern interfaces. Responsive experiences.', projects: 'View projects', resume: 'View résumé' },
    about: {
      label: '01 / About', title: 'Interfaces with purpose.',
      description: 'I am Lucas, a Front-End Developer in Portugal. I build web interfaces and applications with React and JavaScript, including real client projects. I focus on responsiveness and the experience of the people using each interface.',
    },
    experience: {
      label: '02 / Experience', title: 'Real projects. Independent work.', role: 'Freelance Front-End Developer',
      description: 'Developing web interfaces for clients, with attention to content presentation and adaptation to different screens.',
      projectsLabel: 'Client projects', visit: 'Visit website',
    },
    projects: { label: '03 / Selected projects', title: 'Selected Projects', live: 'View project', repository: 'View code' },
    stack: { label: '04 / Technologies', title: 'Tech Stack' },
    workflow: {
      label: '05 / Process', title: 'How I develop',
      description: 'This portfolio follows a workflow of Jira tasks and feature branches, with validation before integration. Publishing is a separate step, reserved for approved versions.',
    },
    resume: {
      label: '06 / Résumé', title: 'My experience, in one document.',
      description: 'View or download my résumé to learn about my professional background.',
      pending: 'Résumé in preparation. Viewing and downloading will be available when the document is added.',
      view: 'View résumé', download: 'Download CV',
    },
    contact: {
      label: '07 / Contact', title: 'Let’s talk.',
      description: 'Would you like to discuss my profile for a Front-End Developer role?',
      email: 'Email', linkedin: 'LinkedIn', pending: 'Professional contact details coming soon.',
    },
  },
  clientContent: {
    brand: '<Lucas />',
    hero: { label: 'Websites for businesses and professionals', titleLines: ['I build', 'digital', 'experiences.'], description: 'Modern websites for businesses that want to stand out.', work: 'View my work', quote: 'Request a quote' },
    services: { label: '01 / Services', title: 'What I can create for you.' },
    projects: { label: '02 / Work', title: 'Client projects.', live: 'Visit website', repository: 'View code' },
    process: { label: '03 / Process', title: 'How we work together.' },
    stack: { label: '04 / Technology', title: 'The foundation of every experience.', description: 'Technologies for developing interfaces and integrating the features your project needs.' },
    about: {
      label: '05 / About', title: 'I turn ideas into digital experiences.',
      description: 'I am Lucas, a Front-End Developer based in Portugal. I build modern, responsive websites for businesses and professionals, combining technology, usability and a professional presentation.',
      detail: 'I work with React and JavaScript and have experience with real client projects.',
    },
    contact: {
      label: '06 / Contact', title: 'Have a project?', description: 'Let’s talk about your idea and what you need to build.',
      quote: 'Request a quote', pending: 'Channels for requesting a quote will be available soon.',
      whatsapp: 'WhatsApp', email: 'Email', linkedin: 'LinkedIn', form: 'Form',
    },
  },
  services: pt.services.map(item => ({ ...item, ...serviceText[item.id] })),
  workflow: pt.workflow.map(item => ({ ...item, ...workflowText[item.id] })),
  clientProcess: pt.clientProcess.map(item => ({ ...item, ...processText[item.id] })),
  techStack: pt.techStack.map(item => ({ ...item, title: stackTitles[item.id] })),
  projects: pt.projects.map(item => ({ ...item, ...projectText[item.slug] })),
}
