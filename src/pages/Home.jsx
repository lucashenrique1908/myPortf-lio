import { useContext } from 'react'
import { VisitorContext } from '../context/VisitorContext'
import IntroExperience from '../components/common/IntroExperience/IntroExperience'
import { ClientExperience, RecruiterExperience } from '../components/common/VisitorExperience/VisitorExperience'

export default function Home() {
  const { visitorType } = useContext(VisitorContext)

  if (visitorType === null) return <IntroExperience />
  if (visitorType === 'recruiter') return <RecruiterExperience />
  return <ClientExperience />
}
