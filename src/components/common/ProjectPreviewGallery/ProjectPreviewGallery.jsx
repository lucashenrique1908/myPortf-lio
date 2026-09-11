import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../../../hooks/useLanguage'

// Empty projects use clearly labelled layout slots, never invented screenshots.
export default function ProjectPreviewGallery({ project, children }) {
  const images = (project.screenshots ?? []).filter(image => image?.src && image?.alt?.trim()).slice(0, 3)
  return <PreviewPanel project={project} title={project.title} images={images.length ? images : [null, null, null]}>{children}</PreviewPanel>
}

function PreviewPanel({ project, title, images, children }) {
  const { copy: { preview, common } } = useLanguage()
  const id = useId()
  const triggerRef = useRef(null)
  const scrollerRef = useRef(null)
  const pinnedRef = useRef(false)
  const pointerTypeRef = useRef(null)
  const activeRef = useRef(0)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!open) return
    const scroller = scrollerRef.current
    let frame = 0

    function update() {
      frame = 0
      const bounds = scroller.getBoundingClientRect()
      const center = bounds.left + bounds.width / 2
      const distances = [...scroller.children].map(figure => {
        const rect = figure.getBoundingClientRect()
        return Math.abs(rect.left + rect.width / 2 - center)
      })
      const closest = distances.indexOf(Math.min(...distances))
      if (closest !== activeRef.current) {
        activeRef.current = closest
        setActive(closest)
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    scroller.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(schedule) : null
    resizeObserver?.observe(scroller)
    return () => {
      cancelAnimationFrame(frame)
      scroller.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      resizeObserver?.disconnect()
    }
  }, [open, images.length])

  function move(index) {
    const scroller = scrollerRef.current
    const figure = scroller.children[Math.max(0, Math.min(index, images.length - 1))]
    const bounds = scroller.getBoundingClientRect()
    const target = figure.getBoundingClientRect()
    scroller.scrollBy({
      left: target.left + target.width / 2 - bounds.left - bounds.width / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  function toggle() {
    pinnedRef.current = !open
    setOpen(!open)
  }

  function onKeyDown(event) {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      pinnedRef.current = false
      setOpen(false)
      triggerRef.current.focus()
    }
  }

  return (
    <div className={'project-preview' + (open ? ' is-open' : '')} onKeyDown={onKeyDown}
      onPointerEnter={event => {
        if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) setOpen(true)
      }}
      onPointerLeave={event => {
        if (!pinnedRef.current && !event.currentTarget.contains(document.activeElement)) setOpen(false)
      }}
      onFocusCapture={event => {
        if (event.target !== triggerRef.current) setOpen(true)
      }}
      onBlurCapture={event => {
        if (!pinnedRef.current && !event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <div className={'project-preview-summary' + (open ? ' is-open' : '')} onPointerDown={event => { pointerTypeRef.current = event.pointerType }} onClick={event => {
        if (pointerTypeRef.current !== 'touch' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
        const control = event.target.closest('a, button, input, textarea, select, label, summary, [role="button"], [role="link"], [tabindex], [contenteditable]')
        if (control && event.currentTarget.contains(control)) return
        toggle()
      }}>
        {children}
      </div>
      <button className="project-preview-trigger" type="button" ref={triggerRef}
        aria-expanded={open} aria-controls={id} onClick={toggle}>
        {open ? preview.close : preview.open}<span className="motion-sr-only">: {title}</span>
      </button>
      <div className={'project-preview-panel' + (open ? ' is-open' : '')} id={id} aria-hidden={!open}>
        <div className="project-preview-track" ref={scrollerRef} role="region" aria-label={preview.label + ': ' + title}
          tabIndex={0} onKeyDown={event => {
            if (event.target !== event.currentTarget) return
            const destinations = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: images.length - 1 }
            if (Object.hasOwn(destinations, event.key)) {
              event.preventDefault()
              move(destinations[event.key])
            }
          }}>
          {images.map((image, index) => (
            <figure className="project-preview-item" key={(image?.src ?? 'slot') + index} data-active={active === index}>
              {image ? <img src={image.src} alt={image.alt} loading="lazy" /> : (
                <div className="project-preview-placeholder"><span>{preview.placeholder}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
              )}
            </figure>
          ))}
        </div>
        <div className="project-preview-panel-footer">
          {project.liveUrl ? (
            <a href={project.liveUrl} onClick={event => event.stopPropagation()} target="_blank" rel="noreferrer noopener">{common.live}</a>
          ) : (
            <Link to={`/project/${project.slug}`} onClick={event => event.stopPropagation()}>{common.caseStudy}</Link>
          )}
        </div>
        {images.length > 1 && (
          <div className="project-preview-controls">
            <button type="button" aria-label={preview.previous} onClick={() => move(active - 1)} disabled={active === 0}>←</button>
            <button type="button" aria-label={preview.next} onClick={() => move(active + 1)} disabled={active === images.length - 1}>→</button>
          </div>
        )}
      </div>
    </div>
  )
}
