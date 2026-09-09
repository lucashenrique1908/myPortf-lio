import useLanguage from '../../../hooks/useLanguage'

export default function LanguageSwitcher() {
  const { language, setLanguage, copy } = useLanguage()
  return (
    <div className="language-switcher" role="group" aria-label={copy.common.language}>
      {[['pt', 'Português'], ['en', 'English']].map(([code, name]) => (
        <button key={code} type="button" lang={code} aria-label={name} aria-pressed={language === code} onClick={() => setLanguage(code)}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
