import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer
    let revealed = false

    function reveal(animate) {
      revealed = true
      element.dataset.revealed = 'true'
      element.classList.toggle('motion-revealed', animate)
      observer?.unobserve(element)
    }

    function observe() {
      observer?.disconnect()
      if (reducedMotion.matches) {
        // Content is visible by default, also when preferences change.
        element.classList.remove('motion-revealed')
        return
      }
      if (revealed) return
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          reveal(!element.contains(document.activeElement))
        }
      }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })
      observer.observe(element)
    }

    function onFocus() { reveal(false) }
    observe()
    element.addEventListener('focusin', onFocus)
    reducedMotion.addEventListener('change', observe)
    return () => {
      observer?.disconnect()
      element.removeEventListener('focusin', onFocus)
      reducedMotion.removeEventListener('change', observe)
      element.classList.remove('motion-revealed')
    }
  }, [])

  return ref
}
