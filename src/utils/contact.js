// These limits keep the mailto draft short; mail clients may impose smaller limits.
export const contactLimits = { name: 100, email: 254, subject: 150, message: 3000 }

export function validateContact(values) {
  const errors = {}
  for (const [field, limit] of Object.entries(contactLimits)) {
    const value = values[field].trim()
    if (!value) errors[field] = 'required'
    else if (value.length > limit) errors[field] = 'tooLong'
  }
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'email'
  return errors
}

export function createContactMailto(email, values, labels) {
  if (!email) return null
  const subject = values.subject.trim().replace(/[\r\n]+/g, ' ')
  const body = [
    labels.name + ': ' + values.name.trim(),
    labels.email + ': ' + values.email.trim(),
    '',
    values.message.trim(),
  ].join('\r\n')
  return 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
}
