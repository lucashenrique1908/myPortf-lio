import ClientSection from '../ClientSection'
import Tag from '../../../components/ui/Tag/Tag'
import { clientContent, clientTechnologies } from '../../../data/client'

export default function ClientTechStack() {
  return (
    <ClientSection id="client-stack" {...clientContent.stack}>
      <p className="client-muted client-copy">{clientContent.stack.description}</p>
      <ul className="client-tags">
        {clientTechnologies.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
      </ul>
    </ClientSection>
  )
}
