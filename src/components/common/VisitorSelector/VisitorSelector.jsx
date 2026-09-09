import { useContext } from 'react'
import { VisitorContext } from '../../../context/VisitorContext'
import useLanguage from '../../../hooks/useLanguage'
import Button from '../../ui/Button/Button'

export default function VisitorSelector() {
  const { copy: { intro } } = useLanguage()
  const { setVisitorType } = useContext(VisitorContext)

  return (
    <div className="visitor-actions" role="group" aria-labelledby="visitor-heading">
      <Button onClick={() => setVisitorType('recruiter')}>{intro.recruiter}</Button>
      <Button variant="secondary" onClick={() => setVisitorType('client')}>
        {intro.client}
      </Button>
    </div>
  )
}
