import ClientSection from '../ClientSection'
import { clientProcess } from '../../../data/clientProcess'
import { clientContent } from '../../../data/client'

export default function HowIWork() {
  return (
    <ClientSection id="client-process" {...clientContent.process}>
      <ol className="client-process" role="list">
        {clientProcess.map((step, index) => (
          <li key={step.id}>
            <span className="text-label client-muted" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-h3">{step.title}</h3>
            <p className="client-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </ClientSection>
  )
}
