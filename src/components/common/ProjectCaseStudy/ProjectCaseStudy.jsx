import Button from '../../ui/Button/Button'
import Tag from '../../ui/Tag/Tag'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'

function CaseStudySection({ id, title, children }) {
  return (
    <section className="project-section" aria-labelledby={id}>
      <SectionTitle id={id} label="Case study" title={title} />
      <div className="project-content">{children}</div>
    </section>
  )
}

export default function ProjectCaseStudy({ project, headingRef }) {
  const sections = [
    ['overview', 'Visão geral', project.description],
    ['problem', 'Problema', project.problem],
    ['solution', 'Solução', project.solution],
    ['role', 'Minha atuação', project.role],
    ['features', 'Funcionalidades', project.features],
    ['technologies', 'Tecnologias', project.technologies],
    ['challenges', 'Desafios', project.challenges],
    ['result', 'Resultado', project.result],
    ['planned-scope', 'Escopo planejado', project.plannedScope],
  ].filter(([, , content]) => Array.isArray(content) ? content.some(item => item?.trim()) : content?.trim())
  // Imagens futuras devem ter src e alt reais; não são criados placeholders.
  const images = [project.image, ...project.screenshots].filter(item => item?.src?.trim() && item?.alt?.trim())

  return (
    <article aria-labelledby="project-title">
      <header className="project-hero">
        {project.category && <p className="text-label project-muted">{project.category}</p>}
        <h1 id="project-title" className="text-h1" tabIndex={-1} ref={headingRef}>{project.title}</h1>
        {project.summary && <p className="project-summary">{project.summary}</p>}
      </header>
      {sections.map(([id, title, content]) => (
        <CaseStudySection key={id} id={`project-${id}`} title={title}>
          {Array.isArray(content) ? (
            <ul className={id === 'technologies' ? 'project-tags' : 'project-list'}>
              {content.filter(item => item?.trim()).map(item => <li key={item}>{id === 'technologies' ? <Tag>{item}</Tag> : item}</li>)}
            </ul>
          ) : <p>{content}</p>}
        </CaseStudySection>
      ))}
      {images.length > 0 && (
        <CaseStudySection id="project-images" title="Imagens do projeto">
          {images.map(item => <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}
        </CaseStudySection>
      )}
      {(project.liveUrl || project.repositoryUrl) && (
        <CaseStudySection id="project-links" title="Links do projeto">
          <div className="project-actions">
            {project.liveUrl && <Button href={project.liveUrl}>Visitar site</Button>}
            {project.repositoryUrl && <Button href={project.repositoryUrl} variant="secondary">Ver código</Button>}
          </div>
        </CaseStudySection>
      )}
    </article>
  )
}
