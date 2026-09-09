import ClientSection from '../ClientSection'
import useLanguage from '../../../hooks/useLanguage'
import ContactChannels from '../../../components/common/ContactChannels/ContactChannels'
import ContactForm from '../../../components/common/ContactForm/ContactForm'

export default function ClientCTA() {
  const { copy: { clientContent } } = useLanguage()
  const content = clientContent.contact
  return (
    <ClientSection id="client-contact" {...content}>
      <p className="text-h3 client-copy">{content.description}</p>
      <ContactChannels />
      <ContactForm />
    </ClientSection>
  )
}
