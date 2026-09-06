import Container from '../../components/ui/Container/Container'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'

export default function ClientSection({ id, label, title, children }) {
  return (
    <section id={id} className="section client-section" tabIndex={-1} aria-labelledby={id + '-title'}>
      <Container>
        <div className="client-section-heading"><SectionTitle id={id + '-title'} label={label} title={title} /></div>
        <div className="client-section-content">{children}</div>
      </Container>
    </section>
  )
}
