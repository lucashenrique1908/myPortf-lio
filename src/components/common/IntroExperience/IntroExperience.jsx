import ExperienceLayout from '../VisitorExperience/ExperienceLayout'
import VisitorSelector from '../VisitorSelector/VisitorSelector'

export default function IntroExperience() {
  return (
    <ExperienceLayout label="Antes de continuar..." title="O que trouxe você até aqui?">
      <VisitorSelector />
    </ExperienceLayout>
  )
}
