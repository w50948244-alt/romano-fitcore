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
import ResetPassword from './pages/ResetPassword'

function App() {
  const [session, setSession] = useState(undefined)
  const [esRecuperacion, setEsRecuperacion] = useState(false)
  const loadProfileForUser = useStore((s) => s.loadProfileForUser)
  const cargandoDatos = useStore((s) => s.cargandoDatos)

  useEffect(() => {
    const temaGuardado = localStorage.getItem('fitcore_theme')
    if (temaGuardado === 'light') document.body.classList.add('light')
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      loadProfileForUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setEsRecuperacion(true)
      setSession(session)
      loadProfileForUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (esRecuperacion) return <ResetPassword />

  if (session === undefined || (session && cargandoDatos)) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-600 text-xs">Sincronizando tu progreso...</p>
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