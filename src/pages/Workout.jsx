import { useState, useEffect, useRef } from 'react'
import { Info, Trophy, Timer } from 'lucide-react'
import useStore from '../store/useStore'
import { buscarGuia } from '../lib/exerciseLibrary'
import { sonidoDescansoTerminado, sonidoLogro } from '../lib/sound'
import Confetti from '../components/Confetti'

export default function Workout() {
  const routines = useStore((s) => s.routines)
  const addLog = useStore((s) => s.addLog)
  const [active, setActive] = useState(null)
  const [seconds, setSeconds] = useState(0)
  const [data, setData] = useState({})
  const [guiaAbierta, setGuiaAbierta] = useState(null)
  const [recordsNuevos, setRecordsNuevos] = useState([])
  const [descanso, setDescanso] = useState(null) // segundos restantes del descanso, o null si no hay
  const [mostrarConfeti, setMostrarConfeti] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [active])

  useEffect(() => {
    if (descanso === null) return
    if (descanso <= 0) {
      if (navigator.vibrate) navigator.vibrate([200, 100, 200])
      sonidoDescansoTerminado()
      const t = setTimeout(() => setDescanso(null), 1200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setDescanso((d) => d - 1), 1000)
    return () => clearTimeout(t)
  }, [descanso])

  const iniciarDescanso = (segundos) => {
    setDescanso(segundos)
  }

  const start = (routine) => {
    setActive(routine)
    setSeconds(0)
    setRecordsNuevos([])
    const init = {}
    routine.exercises.forEach((ex) => { init[ex.id] = { sets: ex.sets, reps: ex.reps, kg: ex.kg } })
    setData(init)
  }

  const finish = () => {
    const volume = Object.values(data).reduce((acc, d) => acc + d.sets * d.reps * d.kg, 0)
    const exercisesDetail = active.exercises.map((ex) => ({
      name: ex.name,
      sets: data[ex.id]?.sets ?? 0,
      reps: data[ex.id]?.reps ?? 0,
      kg: data[ex.id]?.kg ?? 0,
    }))

    const nuevos = addLog({ routineName: active.name, durationSeconds: seconds, volume }, exercisesDetail)

    sonidoLogro()
    setMostrarConfeti(true)

    if (nuevos.length > 0) {
      setRecordsNuevos(nuevos)
      setTimeout(() => {
        setActive(null)
        clearInterval(intervalRef.current)
        setRecordsNuevos([])
        setMostrarConfeti(false)
      }, 2600)
    } else {
      setTimeout(() => {
        setActive(null)
        clearInterval(intervalRef.current)
        setMostrarConfeti(false)
      }, 2600)
    }
  }

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  if (!active) {
    return (
      <div className="px-5 pt-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold">Entrenar</h1>
        <p className="text-neutral-500 text-sm mt-1">Elige una rutina para comenzar</p>
        <div className="mt-5 space-y-3">
          {routines.map((r) => (
            <button key={r.id} onClick={() => start(r)} className="w-full bg-neutral-900 rounded-xl p-4 text-left hover:bg-neutral-800 transition">
              <p className="font-semibold">{r.name}</p>
              <p className="text-neutral-500 text-xs">{r.exercises.length} ejercicios</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto relative">
      {mostrarConfeti && <Confetti />}

      {recordsNuevos.length > 0 && (
        <div className="fixed top-6 left-5 right-5 max-w-md mx-auto bg-yellow-500 text-neutral-900 rounded-xl p-4 z-50 flex items-center gap-3 shadow-xl">
          <Trophy size={24} />
          <div>
            <p className="font-bold text-sm">¡Nuevo récord personal! 🎉</p>
            <p className="text-xs">{recordsNuevos.join(', ')}</p>
          </div>
        </div>
      )}

      {descanso !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
          <p className="text-neutral-400 text-sm uppercase tracking-wide mb-2">Descansando</p>
          <p className="text-7xl font-bold tabular-nums text-red-500">
            {descanso > 0 ? descanso : '¡Vamos! 💪'}
          </p>
          {descanso > 0 && (
            <button
              onClick={() => setDescanso(0)}
              className="mt-8 text-neutral-400 text-sm underline"
            >
              Saltar descanso
            </button>
          )}
        </div>
      )}

      <div className="bg-red-600 rounded-2xl p-5 text-center">
        <p className="text-red-100 text-xs uppercase">{active.name}</p>
        <p className="text-4xl font-bold mt-1 tabular-nums">{fmt(seconds)}</p>
      </div>

      <div className="mt-5 space-y-3">
        {active.exercises.map((ex) => {
          const info = buscarGuia(ex.name)
          return (
            <div key={ex.id} className="bg-neutral-900 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{ex.name}</p>
                <button onClick={() => setGuiaAbierta(guiaAbierta === ex.id ? null : ex.id)} className="text-red-500">
                  <Info size={16} />
                </button>
              </div>
              {guiaAbierta === ex.id && (
                <div className="bg-neutral-800 rounded-lg p-3 mb-2">
                  <p className="text-xs text-red-400 uppercase mb-1">{info.grupo}</p>
                  <ol className="list-decimal list-inside space-y-1 text-neutral-300 text-xs">
                    {info.guia.map((paso, i) => <li key={i}>{paso}</li>)}
                  </ol>
                </div>
              )}
              <div className="flex gap-2">
                {['sets', 'reps', 'kg'].map((field) => (
                  <input
                    key={field}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={data[ex.id]?.[field] ?? 0}
                    onChange={(e) => {
                      const soloNumeros = e.target.value.replace(/[^0-9]/g, '')
                      setData((d) => ({ ...d, [ex.id]: { ...d[ex.id], [field]: Number(soloNumeros) } }))
                    }}
                    className="flex-1 w-0 bg-neutral-800 rounded-lg px-2 py-2 text-sm text-center outline-none box-border"
                  />
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => iniciarDescanso(60)}
                  className="flex-1 flex items-center justify-center gap-1 bg-neutral-800 hover:bg-neutral-700 transition rounded-lg py-2 text-xs text-neutral-300"
                >
                  <Timer size={13} /> Descansar 60s
                </button>
                <button
                  onClick={() => iniciarDescanso(90)}
                  className="flex-1 flex items-center justify-center gap-1 bg-neutral-800 hover:bg-neutral-700 transition rounded-lg py-2 text-xs text-neutral-300"
                >
                  <Timer size={13} /> 90s
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <button onClick={finish} className="w-full bg-red-600 rounded-xl py-3 mt-5 font-semibold">
        Finalizar entrenamiento
      </button>
    </div>
  )
}