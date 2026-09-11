import useLanguage from '../../../hooks/useLanguage'
import ClientSection from '../ClientSection'
import ProjectCard from '../../../components/common/ProjectCard/ProjectCard'

export default function ClientProjects() {
  const { copy: { clientProjects, clientContent } } = useLanguage()
  return (
    <ClientSection id="client-projects" {...clientContent.projects}>
      <div className="client-projects">
        {clientProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={index + 1} labels={clientContent.projects} showTechnologies={false} />
        ))}
      </div>
    </ClientSection>
  )
}
