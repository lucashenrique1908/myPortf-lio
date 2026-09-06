import { createContext, useState } from 'react'

// O contexto e o provider ficam juntos neste arquivo.
// eslint-disable-next-line react-refresh/only-export-components
export const VisitorContext = createContext(null)

export function VisitorProvider({ children }) {
  const [visitorType, setVisitorType] = useState(null)

  return (
    <VisitorContext.Provider value={{ visitorType, setVisitorType }}>
      {children}
    </VisitorContext.Provider>
  )
}
