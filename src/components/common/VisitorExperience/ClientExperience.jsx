import Container from '../../ui/Container/Container'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'
import ClientHero from '../../../sections/client/ClientHero/ClientHero'
import Services from '../../../sections/client/Services/Services'
import ClientProjects from '../../../sections/client/ClientProjects/ClientProjects'
import HowIWork from '../../../sections/client/HowIWork/HowIWork'
import ClientTechStack from '../../../sections/client/ClientTechStack/ClientTechStack'
import ClientAbout from '../../../sections/client/ClientAbout/ClientAbout'
import ClientCTA from '../../../sections/client/ClientCTA/ClientCTA'
import { clientContent } from '../../../data/client'

export default function ClientExperience() {
  return (
    <div className="client-experience">
      <header className="client-header">
        <Container>
          <div className="client-header-content">
            <p className="text-h3">{clientContent.brand}</p>
            <VisitorModeSwitcher />
          </div>
        </Container>
      </header>
      <main>
        <ClientHero />
        <Services />
        <ClientProjects />
        <HowIWork />
        <ClientTechStack />
        <ClientAbout />
        <ClientCTA />
      </main>
    </div>
  )
}
