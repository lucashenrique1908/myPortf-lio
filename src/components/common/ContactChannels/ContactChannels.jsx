import { contactConfig } from '../../../data/contact'
import useLanguage from '../../../hooks/useLanguage'

export default function ContactChannels() {
  const { copy: { contact } } = useLanguage()
  const channels = [
    ['email', contactConfig.email ? 'mailto:' + contactConfig.email : null],
    ['linkedin', contactConfig.linkedinUrl],
    ['whatsapp', contactConfig.whatsappUrl],
    ['github', contactConfig.githubUrl],
    ['form', contactConfig.formUrl],
  ].filter(([, url]) => url)

  if (!channels.length) return <p>{contact.pending}</p>

  return (
    <ul className="contact-channels" aria-label={contact.label}>
      {channels.map(([key, url]) => <li key={key}><a className="recruiter-link" href={url}>{contact[key]}</a></li>)}
    </ul>
  )
}
