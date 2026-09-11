import useLanguage from '../../../hooks/useLanguage'
import { useEffect, useRef } from 'react'
import Container from '../../../components/ui/Container/Container'
import Button from '../../../components/ui/Button/Button'
import profileImage from '../../../assets/images/profile.jpg'

export default function ClientHero() {
  const { copy: { clientContent } } = useLanguage()
  const headingRef = useRef(null)
  const content = clientContent.hero

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1))
    if (target) target.focus()
    else {
      headingRef.current.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <section className="section client-hero" aria-labelledby="client-title">
      <Container>
        <div className="client-hero-grid">
          <div className="client-hero-copy">
            <p className="text-label client-muted">{content.label}</p>
            <h1 id="client-title" className="text-display client-hero-title tracking-in-expand" ref={headingRef} tabIndex={-1}>
              {content.titleLines.map((line, index) => <span key={line}>{index > 0 && ' '}{line}</span>)}
            </h1>
            <div className="client-hero-introduction">
              <p className="text-h3">{content.description}</p>
              <div className="client-actions">
                <Button href="#client-projects">{content.work}</Button>
                <Button href="#client-contact" variant="secondary">{content.quote}</Button>
              </div>
            </div>
          </div>
          <div className="client-hero-portrait flicker-in-1">
            <img src={profileImage} alt="Lucas Souza" />
          </div>
        </div>
      </Container>
    </section>
  )
}
