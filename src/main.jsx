import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { VisitorProvider } from './context/VisitorProvider.jsx'
import { LanguageProvider } from './context/LanguageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/myPortf-lio">
      <LanguageProvider>
        <VisitorProvider>
          <App />
        </VisitorProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
