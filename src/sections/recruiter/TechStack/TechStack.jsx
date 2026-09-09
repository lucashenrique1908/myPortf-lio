import useLanguage from '../../../hooks/useLanguage'
import RecruiterSection from '../RecruiterSection'
import Tag from '../../../components/ui/Tag/Tag'

export default function TechStack() {
  const { copy: { recruiterContent, techStack } } = useLanguage()
  return (
    <RecruiterSection id="tech-stack" {...recruiterContent.stack}>
      <div className="recruiter-stack">
        {techStack.map(group => (
          <div key={group.id}>
            <h3 className="text-label">{group.title}</h3>
            <ul className="recruiter-tags">
              {group.technologies.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
            </ul>
          </div>
        ))}
      </div>
    </RecruiterSection>
  )
}
