import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'

export default function RecruiterSection({ id, label, title, children }) {
  return (
    <section id={id} className="section recruiter-section" tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className="recruiter-section-grid">
          <SectionTitle id={id + '-title'} label={label} title={title} />
          <div className="recruiter-section-content">{children}</div>
        </div>
      </Container>
    </section>
  )
}
