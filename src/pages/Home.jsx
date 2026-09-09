import { useContext, useEffect } from 'react'
import useLanguage from '../hooks/useLanguage'
import { VisitorContext } from '../context/VisitorContext'
import IntroExperience from '../components/common/IntroExperience/IntroExperience'
import ClientExperience from '../components/common/VisitorExperience/ClientExperience'
import RecruiterExperience from '../components/common/VisitorExperience/RecruiterExperience'

export default function Home() {
  const { copy } = useLanguage()
  useEffect(() => { document.title = copy.common.pageTitle }, [copy.common.pageTitle])
  const { visitorType } = useContext(VisitorContext)

  if (visitorType === null) return <IntroExperience />
  if (visitorType === 'recruiter') return <RecruiterExperience />
  return <ClientExperience />
}
