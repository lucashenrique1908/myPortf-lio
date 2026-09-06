import Container from '../../ui/Container/Container'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'
import RecruiterHero from '../../../sections/recruiter/RecruiterHero/RecruiterHero'
import About from '../../../sections/recruiter/About/About'
import Experience from '../../../sections/recruiter/Experience/Experience'
import DeveloperProjects from '../../../sections/recruiter/DeveloperProjects/DeveloperProjects'
import TechStack from '../../../sections/recruiter/TechStack/TechStack'
import DevelopmentWorkflow from '../../../sections/recruiter/DevelopmentWorkflow/DevelopmentWorkflow'
import Resume from '../../../sections/recruiter/Resume/Resume'
import RecruiterCTA from '../../../sections/recruiter/RecruiterCTA/RecruiterCTA'
import { recruiterProfile } from '../../../data/recruiter'

export default function RecruiterExperience() {
  return (
    <div className="recruiter-experience">
      <header className="recruiter-header">
        <Container>
          <div className="recruiter-row">
            <p className="text-h3">{recruiterProfile.brand}</p>
            <VisitorModeSwitcher />
          </div>
        </Container>
      </header>
      <main>
        <RecruiterHero />
        <About />
        <Experience />
        <DeveloperProjects />
        <TechStack />
        <DevelopmentWorkflow />
        <Resume />
        <RecruiterCTA />
      </main>
    </div>
  )
}
