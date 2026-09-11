import useLanguage from '../../../hooks/useLanguage'
import ClientSection from '../ClientSection'

export default function ClientAbout() {
  const { copy: { clientContent } } = useLanguage()
  return (
    <ClientSection id="client-about" {...clientContent.about}>
      <div className="client-about-copy">
        <p className="text-h3">{clientContent.about.description}</p>
        {clientContent.about.detail && <p className="client-muted">{clientContent.about.detail}</p>}
      </div>
    </ClientSection>
  )
}
