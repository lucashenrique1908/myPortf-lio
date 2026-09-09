import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function ClientSection({ id, label, title, children }) {
  const revealRef = useScrollReveal()
  return (
    <section ref={revealRef} id={id} className="section client-section" tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className="client-section-heading"><SectionTitle id={id + '-title'} label={label} title={title} /></div>
        <div className="client-section-content">{children}</div>
      </Container>
    </section>
  )
}
