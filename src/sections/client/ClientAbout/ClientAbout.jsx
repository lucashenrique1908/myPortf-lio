import useLanguage from '../../../hooks/useLanguage'
import ClientSection from '../ClientSection'
import imgCode from '../../../assets/images/imgCode.jpg'

export default function ClientAbout() {
  const { copy: { clientContent } } = useLanguage()
  return (
    <ClientSection id="client-about" {...clientContent.about}>
      <div className="client-about-copy">
        <div className="client-about-text">
          <p className="text-h3">{clientContent.about.description}</p>
          {clientContent.about.detail && <p className="client-muted">{clientContent.about.detail}</p>}
        </div>
        <img className="client-about-image" src={imgCode} alt="Ilustração de programação" />
      </div>
    </ClientSection>
  )
}
