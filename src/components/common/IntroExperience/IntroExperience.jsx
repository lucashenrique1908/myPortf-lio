import useLanguage from '../../../hooks/useLanguage'
import ExperienceLayout from '../VisitorExperience/ExperienceLayout'
import VisitorSelector from '../VisitorSelector/VisitorSelector'

export default function IntroExperience() {
  const { copy: { intro } } = useLanguage()
  return (
    <ExperienceLayout label={intro.label} title={intro.title}>
      <VisitorSelector />
    </ExperienceLayout>
  )
}
