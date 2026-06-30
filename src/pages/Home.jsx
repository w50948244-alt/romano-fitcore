import { Link } from 'react-router-dom'
import useStore from '../store/useStore'

export default function Home() {
  const profile = useStore((s) => s.profile)
  const routines = useStore((s) => s.routines)
  const logs = useStore((s) => s.logs)
  const weightLogs = useStore((s) => s.weightLogs)

  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  const dayName = new Date().toLocaleDateString('es-ES', { weekday: 'long' })
  const todayRoutine = routines.find(r => r.days.some(d => d.toLowerCase() === dayName.toLowerCase()))
  const currentWeight = weightLogs[weightLogs.length - 1]?.weight ?? '-'
  const sessionsThisWeek = logs.length

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <p className="text-neutral-500 text-sm capitalize">{today}</p>
      <h1 className="text-3xl font-bold mt-1">Hola, {profile.name}</h1>

      {todayRoutine ? (
        <div className="mt-6 bg-red-600 rounded-2xl p-5">
          <p className="text-red-100 text-xs uppercase tracking-wide">Rutina de hoy</p>
          <p className="text-2xl font-bold mt-1">{todayRoutine.name}</p>
          <Link to="/workout" className="inline-block mt-3 bg-black/20 px-4 py-2 rounded-lg text-sm font-medium">
            Empezar entrenamiento
          </Link>
        </div>
      ) : (
        <div className="mt-6 bg-neutral-900 rounded-2xl p-5">
          <p className="text-neutral-400 text-sm">No tienes rutina programada hoy. Día de descanso 💪</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold">{currentWeight}</p>
          <p className="text-neutral-500 text-xs mt-1">kg peso</p>
        </div>
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold">{sessionsThisWeek}</p>
          <p className="text-neutral-500 text-xs mt-1">sesiones</p>
        </div>
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold">{routines.length}</p>
          <p className="text-neutral-500 text-xs mt-1">rutinas</p>
        </div>
      </div>
    </div>
  )
}