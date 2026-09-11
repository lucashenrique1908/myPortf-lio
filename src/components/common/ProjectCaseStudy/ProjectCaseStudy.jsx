import useLanguage from '../../../hooks/useLanguage'
import Button from '../../ui/Button/Button'
import Tag from '../../ui/Tag/Tag'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import TextReveal from '../../animations/TextReveal'
import useScrollReveal from '../../../hooks/useScrollReveal'

function CaseStudySection({ id, title, children }) {
  const { copy: { caseStudy } } = useLanguage()
  const revealRef = useScrollReveal()
  return (
    <section ref={revealRef} className="project-section" aria-labelledby={id}>
      <SectionTitle id={id} label={caseStudy.label} title={title} />
      <div className="project-content">{children}</div>
    </section>
  )
}

export default function ProjectCaseStudy({ project, headingRef }) {
  const { copy: { caseStudy, common } } = useLanguage()
  const sections = [
    ['overview', caseStudy.overview, project.description],
    ['problem', caseStudy.problem, project.problem],
    ['solution', caseStudy.solution, project.solution],
    ['role', caseStudy.role, project.role],
    ['features', caseStudy.features, project.features],
    ['technologies', caseStudy.technologies, project.technologies],
    ['challenges', caseStudy.challenges, project.challenges],
    ['result', caseStudy.result, project.result],
    ['planned-scope', caseStudy.plannedScope, project.plannedScope],
  ].filter(([, , content]) => Array.isArray(content) ? content.some(item => item?.trim()) : content?.trim())
  // Imagens futuras devem ter src e alt reais; não são criados placeholders.
  const images = [project.image, ...project.screenshots].filter(item => item?.src?.trim() && item?.alt?.trim())

  return (
    <article aria-labelledby="project-title">
      <header className="project-hero">
        {project.category && <p className="text-label project-muted">{project.category}</p>}
        <h1 id="project-title" className="text-h1" tabIndex={-1} ref={headingRef}><TextReveal key={project.slug}>{project.title}</TextReveal></h1>
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
        <CaseStudySection id="project-images" title={caseStudy.images}>
          {images.map(item => <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />)}
        </CaseStudySection>
      )}
      {(project.liveUrl || project.repositoryUrl) && (
        <CaseStudySection id="project-links" title={caseStudy.links}>
          <div className="project-actions">
            {project.liveUrl && <Button href={project.liveUrl}>{common.live}</Button>}
            {project.repositoryUrl && <Button href={project.repositoryUrl} variant="secondary">{common.repository}</Button>}
          </div>
        </CaseStudySection>
      )}
    </article>
  )
}
