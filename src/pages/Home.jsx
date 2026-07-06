import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useStore from '../store/useStore'

const frases = [
  "El dolor que sientes hoy es la fuerza que sentirás mañana.",
  "No pares cuando estés cansado. Para cuando hayas terminado.",
  "Tu cuerpo puede casi cualquier cosa. Es tu mente la que tienes que convencer.",
  "Cada rep cuenta. Cada día importa.",
  "El único mal entrenamiento es el que no hiciste.",
  "Sé la versión más fuerte de ti mismo.",
  "Los resultados llegan a los que no se rinden.",
  "Entrena duro, come bien, descansa, repite.",
  "No busques la motivación. Construye el hábito.",
  "Hoy es un buen día para superar tu récord.",
  "El gimnasio no te da lo que quieres, te da lo que te mereces.",
  "Pequeños progresos siguen siendo progresos.",
  "La disciplina supera a la motivación siempre.",
  "Tu yo del futuro te lo agradecerá.",
  "Levántate, carga la barra, repite.",
]

export default function Home() {
  const profile = useStore((s) => s.profile)
  const routines = useStore((s) => s.routines)
  const logs = useStore((s) => s.logs)
  const weightLogs = useStore((s) => s.weightLogs)
  const [frase, setFrase] = useState('')
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const hoy = new Date().toDateString()
    const guardado = JSON.parse(localStorage.getItem('fraseDelDia') || 'null')

    if (guardado && guardado.fecha === hoy) {
      // Ya elegimos la frase de hoy, la reutilizamos
      setFrase(guardado.texto)
    } else {
      // Es un nuevo día: elegimos una frase nueva y la guardamos
      const nueva = frases[Math.floor(Math.random() * frases.length)]
      localStorage.setItem('fraseDelDia', JSON.stringify({ fecha: hoy, texto: nueva }))
      setFrase(nueva)
    }
    setFadeIn(true)
  }, [])

  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  const dayName = new Date().toLocaleDateString('es-ES', { weekday: 'long' })
  const todayRoutine = routines.find(r => r.days.some(d => d.toLowerCase() === dayName.toLowerCase()))
  const currentWeight = weightLogs[weightLogs.length - 1]?.weight ?? '-'
  const sessionsThisWeek = logs.length

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <p className="text-neutral-500 text-sm capitalize">{today}</p>
      <h1 className="text-3xl font-bold mt-1 text-white">
        {profile.gender === 'female' ? 'Hola, guerrera' : 'Hola, guerrero'} {profile.name} {profile.gender === 'female' ? '💪🏻' : '👊'}
      </h1>

      <div
        className="mt-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 min-h-[64px] flex items-center"
        style={{ transition: 'opacity 0.5s', opacity: fadeIn ? 1 : 0 }}
      >
        <p className="text-neutral-300 text-sm italic">"{frase}"</p>
      </div>

      {todayRoutine ? (
        <div className="mt-4 bg-red-600 rounded-2xl p-5">
          <p className="text-red-100 text-xs uppercase tracking-wide">Rutina de hoy</p>
          <p className="text-2xl font-bold mt-1">{todayRoutine.name}</p>
          <Link to="/workout" className="inline-block mt-3 bg-black/20 px-4 py-2 rounded-lg text-sm font-medium">
            Empezar entrenamiento →
          </Link>
        </div>
      ) : (
        <div className="mt-4 bg-neutral-900 rounded-2xl p-5">
          <p className="text-neutral-400 text-sm">No tienes rutina programada hoy. Día de descanso 💪</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-white">{currentWeight}</p>
          <p className="text-neutral-500 text-xs mt-1">kg peso</p>
        </div>
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-white">{sessionsThisWeek}</p>
          <p className="text-neutral-500 text-xs mt-1">sesiones</p>
        </div>
        <div className="bg-neutral-900 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-white">{routines.length}</p>
          <p className="text-neutral-500 text-xs mt-1">rutinas</p>
        </div>
      </div>
    </div>
  )
}