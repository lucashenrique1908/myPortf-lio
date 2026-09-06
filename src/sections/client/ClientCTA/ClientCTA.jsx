import ClientSection from '../ClientSection'
import Button from '../../../components/ui/Button/Button'
import { contactConfig } from '../../../data/contact'
import { clientContent } from '../../../data/client'

export default function ClientCTA() {
  const content = clientContent.contact
  const channels = [
    { id: 'whatsapp', label: content.whatsapp, url: contactConfig.whatsappUrl },
    { id: 'email', label: content.email, url: contactConfig.email ? 'mailto:' + contactConfig.email : null },
    { id: 'linkedin', label: content.linkedin, url: contactConfig.linkedinUrl },
    { id: 'form', label: content.form, url: contactConfig.formUrl },
  ].filter(channel => channel.url)

  return (
    <ClientSection id="client-contact" {...content}>
      <p className="text-h3 client-copy">{content.description}</p>
      {channels.length > 0 ? (
        <>
          <div className="client-actions"><Button href={channels[0].url}>{content.quote}</Button></div>
          <ul className="client-actions">
            {channels.map(channel => <li key={channel.id}><a className="client-link" href={channel.url}>{channel.label}</a></li>)}
          </ul>
        </>
      ) : <p className="client-muted">{content.pending}</p>}
    </ClientSection>
  )
}
