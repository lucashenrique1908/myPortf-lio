import ClientSection from '../ClientSection'
import { services } from '../../../data/services'
import { clientContent } from '../../../data/client'

export default function Services() {
  return (
    <ClientSection id="client-services" {...clientContent.services}>
      <ol className="client-services" role="list">
        {services.map((service, index) => (
          <li key={service.id}>
            <span className="text-label client-muted" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-h3">{service.title}</h3>
            <p className="client-muted">{service.description}</p>
          </li>
        ))}
      </ol>
    </ClientSection>
  )
}
