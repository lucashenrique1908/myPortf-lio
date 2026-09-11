import { useContext } from 'react'
import { VisitorContext } from '../../../context/VisitorContext'
import useLanguage from '../../../hooks/useLanguage'
import Button from '../../ui/Button/Button'

export default function VisitorModeSwitcher() {
  const { copy: { visitor } } = useLanguage()
  const { visitorType, setVisitorType } = useContext(VisitorContext)
  if (visitorType === null) return null

  const nextType = visitorType === 'recruiter' ? 'client' : 'recruiter'

  return (
    <div className="visitor-actions" role="group" aria-label={visitor.label}>
      <Button onClick={() => setVisitorType(nextType)}>
        {visitor[nextType]}
      </Button>
      <Button variant="secondary" onClick={() => setVisitorType(null)}>{visitor.reset}</Button>
    </div>
  )
}
