import { useEffect, useRef } from 'react'
import Container from '../../ui/Container/Container'

export default function ExperienceLayout({ label, title, children }) {
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current.focus({ preventScroll: true })
  }, [])

  return (
    <main className="section visitor-experience" aria-labelledby="visitor-heading">
      <Container>
        <div className="visitor-content">
          <p className="text-h3">{'<Lucas />'}</p>
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
