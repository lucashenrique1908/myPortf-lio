import Tag from '../../ui/Tag/Tag'
import { recruiterContent } from '../../../data/recruiter'

export default function ProjectCard({ project, number }) {
  return (
    <article className="developer-project" aria-labelledby={project.slug + '-title'}>
      <div className="recruiter-row text-label recruiter-muted">
        <span>{String(number).padStart(2, '0')}</span>
        <span>{project.category}</span>
      </div>
      <h3 id={project.slug + '-title'} className="text-h3">{project.title}</h3>
      <p className="recruiter-muted">{project.description}</p>
      {project.technologies.length > 0 && (
        <ul className="recruiter-tags" aria-label="Tecnologias do projeto">
          {project.technologies.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
        </ul>
      )}
      <div className="recruiter-actions">
        {project.liveUrl && <a className="recruiter-link" href={project.liveUrl}>{recruiterContent.projects.live}</a>}
        {project.repositoryUrl && <a className="recruiter-link" href={project.repositoryUrl}>{recruiterContent.projects.repository}</a>}
      </div>
    </article>
  )
}
