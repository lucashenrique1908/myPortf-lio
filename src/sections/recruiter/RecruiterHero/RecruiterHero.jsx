import { useEffect, useRef } from 'react'
import Container from '../../../components/ui/Container/Container'
import Button from '../../../components/ui/Button/Button'
import TextReveal from '../../../components/animations/TextReveal'
import { recruiterContent, recruiterProfile } from '../../../data/recruiter'

export default function RecruiterHero() {
  const titleRef = useRef(null)

  useEffect(() => {
    titleRef.current.focus({ preventScroll: true })
    const target = document.getElementById(window.location.hash.slice(1))
    if (target) target.focus()
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <section className="recruiter-hero" aria-labelledby="recruiter-title">
      <Container>
        <p className="text-label recruiter-muted">{recruiterContent.mode}</p>
        <h1 id="recruiter-title" className="text-display recruiter-hero-title" tabIndex={-1} ref={titleRef}>
          <TextReveal>Front-End</TextReveal>{' '}<TextReveal index={1}>Developer</TextReveal>
        </h1>
        <div className="recruiter-hero-bottom">
          <p className="text-h3">{recruiterContent.hero.introduction}</p>
          <div className="recruiter-hero-details">
            <p className="text-label recruiter-muted">{recruiterProfile.location}</p>
            <div className="recruiter-actions">
              <Button href="#projects">{recruiterContent.hero.projects}</Button>
              <Button href="#resume" variant="secondary">{recruiterContent.hero.resume}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
