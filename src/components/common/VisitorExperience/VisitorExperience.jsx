import ExperienceLayout from './ExperienceLayout'
import VisitorModeSwitcher from '../VisitorModeSwitcher/VisitorModeSwitcher'

export function ClientExperience() {
  return (
    <ExperienceLayout label="Modo cliente" title="Experiência para clientes">
      <p className="text-body visitor-muted">Você está no modo cliente. O conteúdo desta experiência será desenvolvido nas próximas sprints.</p>
      <VisitorModeSwitcher />
    </ExperienceLayout>
  )
}
