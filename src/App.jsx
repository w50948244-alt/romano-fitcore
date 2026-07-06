import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import useStore from './store/useStore'
import NavBar from './components/NavBar'
import CoachBot from './components/CoachBot'
import Home from './pages/Home'
import Routines from './pages/Routines'
import Workout from './pages/Workout'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import Auth from './pages/Auth'

function App() {
  const [session, setSession] = useState(undefined)
  const loadProfileForUser = useStore((s) => s.loadProfileForUser)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      loadProfileForUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      loadProfileForUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (session === undefined) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!session) return <Auth />

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progreso" element={<Progress />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CoachBot />
      <NavBar />
    </div>
  )
}

export default App