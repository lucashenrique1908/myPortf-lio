import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/ui/Container/Container'
import ProjectCaseStudy from '../components/common/ProjectCaseStudy/ProjectCaseStudy'
import { projects } from '../data/projects'
import '../styles/project.css'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  const headingRef = useRef(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project?.title ?? 'Projeto não encontrado'} | Lucas`
    headingRef.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'auto' })
    return () => { document.title = previousTitle }
  }, [project])

  return (
    <main className="project-page" aria-labelledby="project-title">
      <Container>
        <nav className="project-nav" aria-label="Navegação do projeto">
          <Link className="button button--secondary" to="/">Voltar ao portfólio</Link>
        </nav>
        {project ? <ProjectCaseStudy project={project} headingRef={headingRef} /> : (
          <header className="project-hero">
            <h1 id="project-title" className="text-h1" tabIndex={-1} ref={headingRef}>Projeto não encontrado</h1>
            <p>Não encontramos um projeto com este endereço. Volte ao portfólio para conhecer os projetos disponíveis.</p>
          </header>
        )}
      </Container>
    </main>
  )
}
