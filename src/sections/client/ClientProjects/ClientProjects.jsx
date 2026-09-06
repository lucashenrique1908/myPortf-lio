import ClientSection from '../ClientSection'
import ProjectCard from '../../../components/common/ProjectCard/ProjectCard'
import { clientProjects } from '../../../data/projects'
import { clientContent } from '../../../data/client'

export default function ClientProjects() {
  return (
    <ClientSection id="client-projects" {...clientContent.projects}>
      <div className="client-projects">
        {clientProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={index + 1} labels={clientContent.projects} />
        ))}
      </div>
    </ClientSection>
  )
}
