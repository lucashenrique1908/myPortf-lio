import useLanguage from '../../../hooks/useLanguage'
import ClientSection from '../ClientSection'

export default function Services() {
  const { copy: { services, clientContent } } = useLanguage()
  const serviceRows = [services.slice(0, 3), services.slice(3, 6)]

  return (
    <ClientSection id="client-services" {...clientContent.services}>
      <div className="client-services" role="list">
        {serviceRows.map((row, rowIndex) => (
          <div className={`client-services-row ${rowIndex === 1 ? 'client-services-row--reverse' : ''}`} key={rowIndex}>
            <div className="client-services-track">
              {[0, 1].map(copy => (
                <div className="client-services-group" key={copy} aria-hidden={copy === 1}>
                  {row.map(service => (
                    <article className="client-service-card" key={service.id} role="listitem">
                      <h3 className="text-h3">{service.title}</h3>
                      <p className="client-muted">{service.description}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ClientSection>
  )
}
