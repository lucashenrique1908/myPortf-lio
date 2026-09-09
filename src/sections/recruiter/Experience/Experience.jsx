import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'

export default function Experience() {
  const { copy: { recruiterContent, clientProjects } } = useLanguage()
  const content = recruiterContent.experience
  return (
    <RecruiterSection id="experience" {...content}>
      <h3 className="text-h3">{content.role}</h3>
      <p className="recruiter-muted">{content.description}</p>
      <p className="text-label">{content.projectsLabel}</p>
      <ul className="recruiter-client-projects">
        {clientProjects.map(project => (
          <li key={project.id}>
            <a className="recruiter-link recruiter-row" href={project.liveUrl}>
              <span>{project.title}</span><span className="text-label">{content.visit} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </RecruiterSection>
  )
}
