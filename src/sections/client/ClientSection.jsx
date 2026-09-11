import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function ClientSection({ id, label, title, children, motion }) {
  const revealRef = useScrollReveal()
  return (
    <section ref={revealRef} id={id} className="section client-section" data-motion={motion} tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className="motion-section-visual">
          <div className="client-section-heading"><SectionTitle id={id + '-title'} label={label} title={title} /></div>
          <div className="client-section-content">{children}</div>
        </div>
      </Container>
    </section>
  )
}
