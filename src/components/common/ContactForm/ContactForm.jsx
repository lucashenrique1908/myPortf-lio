import { useContext, useEffect, useId, useRef, useState } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import { contactConfig } from '../../../data/contact'
import { contactLimits, createContactMailto, validateContact } from '../../../utils/contact'
import Button from '../../ui/Button/Button'
import { VisitorContext } from '../../../context/VisitorContext'

export default function ContactForm() {
  const { copy: { form: text } } = useLanguage()
  const { visitorType } = useContext(VisitorContext)
  const id = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [showContactChoices, setShowContactChoices] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!showContactChoices) return undefined
    function closeOnEscape(event) {
      if (event.key === 'Escape') closeContactChoices()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [showContactChoices])

  function change(event) {
    const { name, value } = event.target
    setValues(current => ({ ...current, [name]: value }))
    setErrors(current => ({ ...current, [name]: undefined }))
    setStatus(null)
  }

  function submit(event) {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('invalid')
      formRef.current.elements.namedItem(Object.keys(nextErrors)[0]).focus()
      return
    }
    setStatus(null)
    setIsClosing(false)
    setShowContactChoices(true)
  }

  function closeContactChoices() {
    setIsClosing(true)
    window.setTimeout(() => {
      setShowContactChoices(false)
      setIsClosing(false)
    }, 1000)
  }

  function contactBody() {
    const message = values.message.trim() || text.whatsappDefault
    return [
      text.name + ': ' + values.name.trim(),
      text.email + ': ' + values.email.trim(),
      text.subject + ': ' + values.subject.trim(),
      '',
      message,
    ].join('\n')
  }

  function chooseContact(channel) {
    setShowContactChoices(false)
    setIsClosing(false)
    if (channel === 'linkedin') {
      window.open(contactConfig.linkedinUrl, '_blank', 'noopener,noreferrer')
      return
    }
    if (channel === 'email') {
      const url = createContactMailto(contactConfig.email, values, text)
      if (!url) { setStatus('unavailable'); return }
      window.open(url, '_self')
      return
    }
    const whatsappUrl = contactConfig.whatsappUrl + '?text=' + encodeURIComponent(contactBody())
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={submit} noValidate aria-labelledby={id + '-title'} aria-describedby={id + '-hint'}>
      <h3 id={id + '-title'} className="text-h3">{text.title}</h3>
      <p>{text.description}</p>
      <p id={id + '-hint'}>{contactConfig.email ? text.mailtoHint : text.unavailable}</p>
      <div className="contact-fields">
        {Object.keys(contactLimits).map(field => {
          const props = {
            id: id + '-' + field, name: field, value: values[field], onChange: change, required: true,
            maxLength: contactLimits[field],
            'aria-invalid': Boolean(errors[field]),
            'aria-describedby': errors[field] ? id + '-' + field + '-error' : undefined,
          }
          return (
            <div className={field === 'message' ? 'contact-field contact-field--wide' : 'contact-field'} key={field}>
              <label htmlFor={props.id}>{text[field]}</label>
              {field === 'message' ? <textarea {...props} rows={6} /> : (
                <input {...props} type={field === 'email' ? 'email' : 'text'} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'} />
              )}
              {errors[field] && <p className="contact-error" id={id + '-' + field + '-error'}>{text.errors[errors[field]]}</p>}
            </div>
          )
        })}
      </div>
      <div><Button type="submit">{text.submit}</Button></div>
      <p className="contact-status" role="status" aria-live="polite" aria-atomic="true">{status ? text[status] : ''}</p>
      {showContactChoices && (
        <div className="contact-choice-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && closeContactChoices()}>
          <div className={'contact-choice' + (isClosing ? ' slide-out-fwd-center' : ' roll-in-left')} role="dialog" aria-modal="true" aria-labelledby={id + '-choice-title'}>
            <button className="contact-choice-close" type="button" onClick={closeContactChoices} aria-label={text.closeChoice}>×</button>
            <h4 id={id + '-choice-title'}>{text.contactQuestion}</h4>
            <div className="contact-choice-actions">
              {visitorType === 'recruiter' && <Button type="button" onClick={() => chooseContact('linkedin')}>LinkedIn</Button>}
              <Button type="button" onClick={() => chooseContact('email')}>Email</Button>
              <Button type="button" onClick={() => chooseContact('whatsapp')}>WhatsApp</Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
