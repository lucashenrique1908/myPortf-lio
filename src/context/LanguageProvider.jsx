import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from '../data/i18n'

function normalizeLanguage(value) {
  return value === 'en' ? 'en' : 'pt'
}

function readLanguage() {
  try { return normalizeLanguage(localStorage.getItem('language')) }
  catch { return 'pt' }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readLanguage)

  function setLanguage(value) { setLanguageState(normalizeLanguage(value)) }

  useEffect(() => {
    document.documentElement.lang = language
    try { localStorage.setItem('language', language) }
    catch { /* Language switching continues in memory. */ }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
