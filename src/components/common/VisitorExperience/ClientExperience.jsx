import AnimatedBrand from '../../animations/AnimatedBrand'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Container from '../../ui/Container/Container'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'
import ClientHero from '../../../sections/client/ClientHero/ClientHero'
import Services from '../../../sections/client/Services/Services'
import ClientProjects from '../../../sections/client/ClientProjects/ClientProjects'
import HowIWork from '../../../sections/client/HowIWork/HowIWork'
import ClientAbout from '../../../sections/client/ClientAbout/ClientAbout'
import ClientCTA from '../../../sections/client/ClientCTA/ClientCTA'
import Marquee from '../../animations/Marquee'

export default function ClientExperience() {
  return (
    <div className="client-experience">
      <header className="client-header">
        <Container>
          <div className="client-header-content">
            <AnimatedBrand />
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
        <ClientAbout />
        <ClientCTA />
      </main>
    </div>
  )
}
