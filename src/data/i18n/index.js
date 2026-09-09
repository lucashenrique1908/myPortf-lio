import pt from './pt'
import en from './en'
import { clientProjects, developerProjects } from '../projects'

function withProjectGroups(copy) {
  return {
    ...copy,
    clientProjects: copy.projects.filter(project => clientProjects.some(item => item.id === project.id)),
    developerProjects: copy.projects.filter(project => developerProjects.some(item => item.id === project.id)),
  }
}

export const translations = { pt: withProjectGroups(pt), en: withProjectGroups(en) }
