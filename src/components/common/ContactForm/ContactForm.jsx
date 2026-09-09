import { useId, useRef, useState } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import { contactConfig } from '../../../data/contact'
import { contactLimits, createContactMailto, validateContact } from '../../../utils/contact'
import Button from '../../ui/Button/Button'

export default function ContactForm() {
  const { copy: { form: text } } = useLanguage()
  const id = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

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
    const url = createContactMailto(contactConfig.email, values, text)
    if (!url) { setStatus('unavailable'); return }
    setStatus('prepared')
    window.location.href = url
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
    </form>
  )
}
