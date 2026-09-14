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

export function createContactDestination(email, values, labels) {
  const mailto = createContactMailto(email, values, labels)
  if (!mailto) return null

  const senderDomain = values.email.trim().toLowerCase().split('@')[1]
  const subject = values.subject.trim().replace(/[\r\n]+/g, ' ')
  const body = [
    labels.name + ': ' + values.name.trim(),
    labels.email + ': ' + values.email.trim(),
    '',
    values.message.trim(),
  ].join('\r\n')
  const params = new URLSearchParams({ to: email, subject, body })

  if (senderDomain === 'gmail.com' || senderDomain === 'googlemail.com') {
    return 'https://mail.google.com/mail/?view=cm&fs=1&' + params.toString()
  }
  if (/^(outlook|hotmail|live|msn)\./.test(senderDomain)) {
    return 'https://outlook.live.com/mail/0/deeplink/compose?' + params.toString()
  }
  if (senderDomain === 'yahoo.com' || senderDomain === 'yahoo.com.br') {
    return 'https://compose.mail.yahoo.com/?' + params.toString()
  }
  return mailto
}
