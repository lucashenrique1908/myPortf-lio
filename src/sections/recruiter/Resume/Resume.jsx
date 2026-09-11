import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'
import Button from '../../../components/ui/Button/Button'
import { recruiterProfile } from '../../../data/recruiter'
import resumePdf from '../../../../docs/Souzadev.pdf'

export default function Resume() {
  const { copy: { recruiterContent } } = useLanguage()
  const content = recruiterContent.resume
  return (
    <RecruiterSection id="resume" {...content}>
      {recruiterProfile.resumeUrl || resumePdf ? (
        <>
          {content.description && <p className="recruiter-lead">{content.description}</p>}
          <div className="resume-viewer">
            <a className="resume-pdf-frame" href={recruiterProfile.resumeUrl || resumePdf} target="_blank" rel="noopener noreferrer" aria-label={content.view}>
              <iframe src={`${recruiterProfile.resumeUrl || resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} title="Currículo de Lucas Souza" scrolling="no" />
            </a>
          </div>
          <div className="recruiter-actions">
            <Button href={recruiterProfile.resumeUrl || resumePdf} target="_blank" rel="noopener noreferrer">{content.view}</Button>
            <Button href={recruiterProfile.resumeUrl || resumePdf} download variant="secondary">{content.download}</Button>
          </div>
        </>
      ) : <p className="recruiter-muted">{content.pending}</p>}
    </RecruiterSection>
  )
}
