import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import PointerAccent from './components/animations/PointerAccent'

function App() {
  return (
    <>
      <PointerAccent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
    </>
  )
}

export default App
