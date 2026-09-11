import { useEffect, useRef } from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import AnimatedBrand from '../../animations/AnimatedBrand'
import Container from '../../ui/Container/Container'

export default function ExperienceLayout({ label, title, children }) {
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current.focus({ preventScroll: true })
  }, [])

  return (
    <main className="section visitor-experience" aria-labelledby="visitor-heading">
      <Container>
        <div className="visitor-language"><LanguageSwitcher /></div>
        <div className="visitor-content">
          <AnimatedBrand />
          <p className="text-label visitor-muted">{label}</p>
          <h1 id="visitor-heading" className="text-h1" tabIndex={-1} ref={headingRef}>
            {title}
          </h1>
          {children}
        </div>
      </Container>
    </main>
  )
}
