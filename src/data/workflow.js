export const workflow = [
  { id: 'jira', title: 'Jira', description: 'Organizar o trabalho em sprints.' },
  { id: 'task', title: 'Task', description: 'Definir o escopo e os critérios de aceitação.' },
  { id: 'branch', title: 'Feature Branch', description: 'Isolar cada mudança em uma branch.' },
  { id: 'development', title: 'Development', description: 'Implementar e validar a interface.' },
  { id: 'review', title: 'Code Review', description: 'Revisar o código e o comportamento.' },
  { id: 'pr', title: 'Pull Request', description: 'Apresentar a mudança para integração.' },
  { id: 'merge', title: 'Merge', description: 'Integrar as mudanças aprovadas em develop.' },
  { id: 'deploy', title: 'Deploy', description: 'Publicar somente uma versão aprovada para produção.' },
]
