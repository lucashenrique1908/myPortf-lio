import RecruiterSection from '../RecruiterSection'
import useLanguage from '../../../hooks/useLanguage'
import ContactChannels from '../../../components/common/ContactChannels/ContactChannels'
import ContactForm from '../../../components/common/ContactForm/ContactForm'

export default function RecruiterCTA() {
  const { copy: { recruiterContent } } = useLanguage()
  const content = recruiterContent.contact
  return (
    <RecruiterSection id="contact" {...content}>
      <p className="recruiter-lead">{content.description}</p>
      <ContactChannels />
      <ContactForm />
    </RecruiterSection>
  )
}
