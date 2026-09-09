import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'
import ProjectCard from '../../../components/common/ProjectCard/ProjectCard'

export default function DeveloperProjects() {
  const { copy: { developerProjects, recruiterContent } } = useLanguage()
  return (
    <RecruiterSection id="projects" {...recruiterContent.projects}>
      <div className="recruiter-project-grid">
        {developerProjects.map((project, index) => <ProjectCard key={project.id} project={project} number={index + 1} />)}
      </div>
    </RecruiterSection>
  )
}
