import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function RecruiterSection({ id, label, title, children, motion }) {
  const revealRef = useScrollReveal()
  return (
    <section ref={revealRef} id={id} className="section recruiter-section" data-motion={motion} tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className={'recruiter-section-grid motion-section-visual'}>
          <SectionTitle id={id + '-title'} label={label} title={title} />
          <div className="recruiter-section-content">{children}</div>
        </div>
      </Container>
    </section>
  )
}
