import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'

export default function About() {
  const { copy: { recruiterContent } } = useLanguage()
  return (
    <RecruiterSection id="about" {...recruiterContent.about}>
      <p className="recruiter-lead">{recruiterContent.about.description}</p>
    </RecruiterSection>
  )
}
