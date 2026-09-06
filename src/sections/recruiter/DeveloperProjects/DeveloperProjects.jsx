import RecruiterSection from '../RecruiterSection'
import ProjectCard from '../../../components/common/ProjectCard/ProjectCard'
import { developerProjects } from '../../../data/projects'
import { recruiterContent } from '../../../data/recruiter'

export default function DeveloperProjects() {
  return (
    <RecruiterSection id="projects" {...recruiterContent.projects}>
      <div className="recruiter-project-grid">
        {developerProjects.map((project, index) => <ProjectCard key={project.id} project={project} number={index + 1} />)}
      </div>
    </RecruiterSection>
  )
}
