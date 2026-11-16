import useLanguage from '../../hooks/useLanguage'
import { recruiterProfile, techStack } from '../../data/recruiter'

const marqueeItems = [
  recruiterProfile.title,
  ...techStack.find(group => group.id === 'core').technologies,
  'Git',
  'Tailwind CSS',
  'Next.js',
  'Nest.js',
  'PostgreSQL',
  'GSAP',
  'Node.js',
]

export default function Marquee() {
  const { copy: { marquee } } = useLanguage()
  const items = marqueeItems

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
