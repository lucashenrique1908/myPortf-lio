import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function RecruiterSection({ id, label, title, children }) {
  const revealRef = useScrollReveal()
  return (
    <section ref={revealRef} id={id} className="section recruiter-section" tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className="recruiter-section-grid">
          <SectionTitle id={id + '-title'} label={label} title={title} />
          <div className="recruiter-section-content">{children}</div>
        </div>
      </Container>
    </section>
  )
}
