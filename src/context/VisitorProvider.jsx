import { useEffect, useState } from 'react'
import { VisitorContext } from './VisitorContext'

const STORAGE_KEY = 'visitorType'

function normalizeVisitorType(value) {
  return value === 'recruiter' || value === 'client' ? value : null
}

function readVisitorType() {
  try {
    return normalizeVisitorType(localStorage.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}

export function VisitorProvider({ children }) {
  const [visitorType, setVisitorState] = useState(readVisitorType)

  function setVisitorType(value) {
    setVisitorState(normalizeVisitorType(value))
  }

  useEffect(() => {
    try {
      if (visitorType === null) {
        localStorage.removeItem(STORAGE_KEY)
      } else {
        localStorage.setItem(STORAGE_KEY, visitorType)
      }
    } catch {
      // A experiência continua em memória se o armazenamento estiver indisponível.
    }
  }, [visitorType])

  return (
    <VisitorContext.Provider value={{ visitorType, setVisitorType }}>
      {children}
    </VisitorContext.Provider>
  )
}
