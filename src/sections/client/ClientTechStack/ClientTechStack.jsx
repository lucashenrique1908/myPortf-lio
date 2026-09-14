import useLanguage from '../../../hooks/useLanguage'
import ClientSection from '../ClientSection'
import Tag from '../../../components/ui/Tag/Tag'

export default function ClientTechStack() {
  const { copy: { clientContent } } = useLanguage()
  return (
    <ClientSection motion="technology" id="client-stack" {...clientContent.stack}>
      <p className="client-muted client-copy">{clientContent.stack.description}</p>
      <ul className="client-tags">
        {clientContent.stack.technologies.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
      </ul>
    </ClientSection>
  )
}
