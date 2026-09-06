import RecruiterSection from '../RecruiterSection'
import { recruiterContent } from '../../../data/recruiter'

export default function About() {
  return (
    <RecruiterSection id="about" {...recruiterContent.about}>
      <p className="recruiter-lead">{recruiterContent.about.description}</p>
    </RecruiterSection>
  )
}
