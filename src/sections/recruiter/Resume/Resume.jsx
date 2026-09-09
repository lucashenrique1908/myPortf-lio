import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'
import Button from '../../../components/ui/Button/Button'
import { recruiterProfile } from '../../../data/recruiter'

export default function Resume() {
  const { copy: { recruiterContent } } = useLanguage()
  const content = recruiterContent.resume
  return (
    <RecruiterSection id="resume" {...content}>
      {recruiterProfile.resumeUrl ? (
        <>
          <p className="recruiter-lead">{content.description}</p>
          <div className="recruiter-actions">
            <Button href={recruiterProfile.resumeUrl} target="_blank" rel="noopener noreferrer">{content.view}</Button>
            <Button href={recruiterProfile.resumeUrl} download variant="secondary">{content.download}</Button>
          </div>
        </>
      ) : <p className="recruiter-muted">{content.pending}</p>}
    </RecruiterSection>
  )
}
