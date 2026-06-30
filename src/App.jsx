import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Routines from './pages/Routines'
import Workout from './pages/Workout'
import Progress from './pages/Progress'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progreso" element={<Progress />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <NavBar />
    </div>
  )
}

export default App