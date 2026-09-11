import useLanguage from '../../hooks/useLanguage'
import { recruiterProfile, techStack } from '../../data/recruiter'

const items = [recruiterProfile.title, ...techStack.find(group => group.id === 'core').technologies, 'Git']

export default function Marquee() {
  const { copy: { marquee } } = useLanguage()

  return (
    <aside className="motion-marquee" aria-label={marquee.label}>
      <p className="motion-sr-only">{items.join(' — ')}</p>
      <div className="motion-marquee-window" aria-hidden="true">
        <div className="motion-marquee-track">
          {[0, 1].map(copy => (
            <div className="motion-marquee-group" key={copy}>
              {items.map(item => <span key={item}>{item}<span className="motion-marquee-divider"> / </span></span>)}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
