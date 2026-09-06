import ClientSection from '../ClientSection'
import { clientContent } from '../../../data/client'

export default function ClientAbout() {
  return (
    <ClientSection id="client-about" {...clientContent.about}>
      <div className="client-about-copy">
        <p className="text-h3">{clientContent.about.description}</p>
        <p className="client-muted">{clientContent.about.detail}</p>
      </div>
    </ClientSection>
  )
}
