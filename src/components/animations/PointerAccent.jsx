import { useEffect, useRef } from 'react'

export default function PointerAccent() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    const desktop = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let stop = () => {}

    function configure() {
      stop()
      if (!desktop.matches) return
      let frame = 0
      let x = 0
      let y = 0

      function hide() {
        cancelAnimationFrame(frame)
        frame = 0
        element.removeAttribute('data-visible')
      }

      function move(event) {
        if (event.pointerType !== 'mouse') { hide(); return }
        x = event.clientX
        y = event.clientY
        element.dataset.interactive = Boolean(event.target.closest?.('a, button'))
        if (!frame) {
          frame = requestAnimationFrame(() => {
            element.style.transform = `translate3d(${x}px, ${y}px, 0)`
            element.dataset.visible = 'true'
            frame = 0
          })
        }
      }

      function onKey(event) { if (event.key === 'Tab') hide() }
      window.addEventListener('pointermove', move, { passive: true })
      document.documentElement.addEventListener('pointerleave', hide)
      window.addEventListener('blur', hide)
      window.addEventListener('keydown', onKey)
      document.addEventListener('visibilitychange', hide)
      stop = () => {
        hide()
        window.removeEventListener('pointermove', move)
        document.documentElement.removeEventListener('pointerleave', hide)
        window.removeEventListener('blur', hide)
        window.removeEventListener('keydown', onKey)
        document.removeEventListener('visibilitychange', hide)
      }
    }

    configure()
    desktop.addEventListener('change', configure)
    return () => {
      stop()
      desktop.removeEventListener('change', configure)
    }
  }, [])

  return <div className="motion-pointer-layer" aria-hidden="true"><div className="motion-pointer" ref={ref}><span /></div></div>
}
