import { useContext } from 'react'
import { VisitorContext } from '../../../context/VisitorContext'
import Button from '../../ui/Button/Button'

export default function VisitorSelector() {
  const { setVisitorType } = useContext(VisitorContext)

  return (
    <div className="visitor-actions" role="group" aria-labelledby="visitor-heading">
      <Button onClick={() => setVisitorType('recruiter')}>Estou recrutando</Button>
      <Button variant="secondary" onClick={() => setVisitorType('client')}>
        Preciso de um desenvolvedor
      </Button>
    </div>
  )
}
