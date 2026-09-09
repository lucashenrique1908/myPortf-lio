import useLanguage from '../../../hooks/useLanguage'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Container from '../../ui/Container/Container'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'
import ClientHero from '../../../sections/client/ClientHero/ClientHero'
import Services from '../../../sections/client/Services/Services'
import ClientProjects from '../../../sections/client/ClientProjects/ClientProjects'
import HowIWork from '../../../sections/client/HowIWork/HowIWork'
import ClientTechStack from '../../../sections/client/ClientTechStack/ClientTechStack'
import ClientAbout from '../../../sections/client/ClientAbout/ClientAbout'
import ClientCTA from '../../../sections/client/ClientCTA/ClientCTA'
import Marquee from '../../animations/Marquee'

export default function ClientExperience() {
  const { copy: { clientContent } } = useLanguage()
  return (
    <div className="client-experience">
      <header className="client-header">
        <Container>
          <div className="client-header-content">
            <p className="text-h3">{clientContent.brand}</p>
            <div className="header-controls"><LanguageSwitcher /><VisitorModeSwitcher /></div>
          </div>
        </Container>
      </header>
      <main>
        <ClientHero />
        <Marquee />
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
