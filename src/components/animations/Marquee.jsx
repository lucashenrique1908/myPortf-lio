import { useState } from 'react'
import { recruiterProfile, techStack } from '../../data/recruiter'

const items = [recruiterProfile.title, ...techStack.find(group => group.id === 'core').technologies]

export default function Marquee() {
  const [paused, setPaused] = useState(false)

  return (
    <aside className="motion-marquee" aria-label="Áreas e tecnologias" data-paused={paused}>
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
      <button className="button button--secondary motion-marquee-control" type="button" onClick={() => setPaused(value => !value)}>
        {paused ? 'Retomar movimento' : 'Pausar movimento'}
      </button>
    </aside>
  )
}
