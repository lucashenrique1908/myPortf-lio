import useLanguage from '../../../hooks/useLanguage'
import ProjectPreviewGallery from '../../../components/common/ProjectPreviewGallery/ProjectPreviewGallery'
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
            <ProjectPreviewGallery project={project}>
              <div className="recruiter-row">
                <span>{project.title}</span><a className="recruiter-link text-label" href={project.liveUrl} target="_blank" rel="noreferrer noopener">{content.visit} ↗</a>
              </div>
            </ProjectPreviewGallery>
          </li>
        ))}
      </ul>
    </RecruiterSection>
  )
}
