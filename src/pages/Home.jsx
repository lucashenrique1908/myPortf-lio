import { useContext } from 'react'
import { VisitorContext } from '../context/VisitorContext'
import IntroExperience from '../components/common/IntroExperience/IntroExperience'
import { ClientExperience } from '../components/common/VisitorExperience/VisitorExperience'
import RecruiterExperience from '../components/common/VisitorExperience/RecruiterExperience'

export default function Home() {
  const { visitorType } = useContext(VisitorContext)

  if (visitorType === null) return <IntroExperience />
  if (visitorType === 'recruiter') return <RecruiterExperience />
  return <ClientExperience />
}
