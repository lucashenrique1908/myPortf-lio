import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'
import imgCode from '../../../assets/images/imgCode.jpg'

export default function About() {
  const { copy: { recruiterContent } } = useLanguage()
  return (
    <RecruiterSection id="about" {...recruiterContent.about}>
      <div className="client-about-copy">
        <div className="client-about-text">
          <p className="text-h3">{recruiterContent.about.description}</p>
        </div>
        <img className="client-about-image" src={imgCode} alt="Programming illustration" />
      </div>
    </RecruiterSection>
  )
}
