import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/ui/Container/Container'
import ProjectCaseStudy from '../components/common/ProjectCaseStudy/ProjectCaseStudy'
import useLanguage from '../hooks/useLanguage'
import LanguageSwitcher from '../components/common/LanguageSwitcher/LanguageSwitcher'
import '../styles/project.css'

export default function Project() {
  const { slug } = useParams()
  const { copy: { projects, caseStudy } } = useLanguage()
  const project = projects.find(item => item.slug === slug)
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    document.title = `${project?.title ?? caseStudy.notFound} | Lucas`
  }, [project?.title, caseStudy.notFound])

  return (
    <main className="project-page" aria-labelledby="project-title">
      <Container>
        <nav className="project-nav" aria-label={caseStudy.navigation}>
          <Link className="button button--secondary" to="/">{caseStudy.back}</Link>
          <LanguageSwitcher />
        </nav>
        {project ? <ProjectCaseStudy project={project} headingRef={headingRef} /> : (
          <header className="project-hero">
            <h1 id="project-title" className="text-h1" tabIndex={-1} ref={headingRef}>{caseStudy.notFound}</h1>
            <p>{caseStudy.notFoundDescription}</p>
          </header>
        )}
      </Container>
    </main>
  )
}
