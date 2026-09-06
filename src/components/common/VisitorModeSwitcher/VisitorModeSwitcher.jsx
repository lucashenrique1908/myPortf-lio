import { useContext } from 'react'
import { VisitorContext } from '../../../context/VisitorContext'
import Button from '../../ui/Button/Button'

export default function VisitorModeSwitcher() {
  const { visitorType, setVisitorType } = useContext(VisitorContext)
  if (visitorType === null) return null

  const nextType = visitorType === 'recruiter' ? 'client' : 'recruiter'

  return (
    <div className="visitor-actions" role="group" aria-label="Alterar experiência">
      <Button onClick={() => setVisitorType(nextType)}>
        {nextType === 'client' ? 'Mudar para modo cliente' : 'Mudar para modo recrutador'}
      </Button>
      <Button variant="secondary" onClick={() => setVisitorType(null)}>Escolher novamente</Button>
    </div>
  )
}
