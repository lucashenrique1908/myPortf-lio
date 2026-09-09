import Tag from '../../ui/Tag/Tag'
import { Link } from 'react-router-dom'
import useLanguage from '../../../hooks/useLanguage'

export default function ProjectCard({ project, number, labels }) {
  const { copy } = useLanguage()
  const linkLabels = labels ?? copy.recruiterContent.projects
  return (
    <article className="developer-project" aria-labelledby={project.slug + '-title'}>
      <div className="recruiter-row text-label recruiter-muted">
        <span>{String(number).padStart(2, '0')}</span>
        {project.category && <span>{project.category}</span>}
      </div>
      <h3 id={project.slug + '-title'} className="text-h3">{project.title}</h3>
      {project.description && <p className="recruiter-muted">{project.description}</p>}
      {project.technologies.length > 0 && (
        <ul className="recruiter-tags" aria-label={copy.common.technologies}>
          {project.technologies.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
        </ul>
      )}
      <div className="recruiter-actions">
        <Link className="recruiter-link" to={`/project/${project.slug}`} aria-label={`${copy.common.caseStudy}: ${project.title}`}>{copy.common.caseStudy}</Link>
        {project.liveUrl && <a className="recruiter-link" href={project.liveUrl}>{linkLabels.live}</a>}
        {project.repositoryUrl && <a className="recruiter-link" href={project.repositoryUrl}>{linkLabels.repository}</a>}
      </div>
    </article>
  )
}
