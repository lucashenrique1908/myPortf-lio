import RecruiterSection from '../RecruiterSection'
import { recruiterContent, recruiterProfile } from '../../../data/recruiter'

export default function RecruiterCTA() {
  const content = recruiterContent.contact
  return (
    <RecruiterSection id="contact" {...content}>
      <p className="recruiter-lead">{content.description}</p>
      <div className="recruiter-actions">
        {recruiterProfile.email && <a className="recruiter-link" href={'mailto:' + recruiterProfile.email}>{content.email}</a>}
        {recruiterProfile.linkedinUrl && <a className="recruiter-link" href={recruiterProfile.linkedinUrl}>{content.linkedin}</a>}
      </div>
      {!recruiterProfile.email && !recruiterProfile.linkedinUrl && <p className="recruiter-muted">{content.pending}</p>}
    </RecruiterSection>
  )
}
