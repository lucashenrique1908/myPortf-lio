import RecruiterSection from '../RecruiterSection'
import { workflow } from '../../../data/workflow'
import { recruiterContent } from '../../../data/recruiter'

export default function DevelopmentWorkflow() {
  return (
    <RecruiterSection id="workflow" {...recruiterContent.workflow}>
      <p className="recruiter-muted">{recruiterContent.workflow.description}</p>
      <ol className="recruiter-workflow" role="list">
        {workflow.map((step, index) => (
          <li key={step.id}>
            <span className="text-label recruiter-muted" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p className="recruiter-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </RecruiterSection>
  )
}
