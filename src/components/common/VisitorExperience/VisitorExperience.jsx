import ExperienceLayout from './ExperienceLayout'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'

export function RecruiterExperience() {
  return (
    <ExperienceLayout label="Modo recrutador" title="Experiência para recrutadores">
      <p className="text-body visitor-muted">Você está no modo recrutador. O conteúdo desta experiência será desenvolvido nas próximas sprints.</p>
      <VisitorModeSwitcher />
    </ExperienceLayout>
  )
}

export function ClientExperience() {
  return (
    <ExperienceLayout label="Modo cliente" title="Experiência para clientes">
      <p className="text-body visitor-muted">Você está no modo cliente. O conteúdo desta experiência será desenvolvido nas próximas sprints.</p>
      <VisitorModeSwitcher />
    </ExperienceLayout>
  )
}
