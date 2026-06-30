import { useState, useEffect, useRef } from 'react'
import useStore from '../store/useStore'

export default function Workout() {
  const routines = useStore((s) => s.routines)
  const addLog = useStore((s) => s.addLog)
  const [active, setActive] = useState(null)
  const [seconds, setSeconds] = useState(0)
  const [data, setData] = useState({})
  const intervalRef = useRef(null)

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [active])

  const start = (routine) => {
    setActive(routine)
    setSeconds(0)
    const init = {}
    routine.exercises.forEach((ex) => { init[ex.id] = { sets: ex.sets, reps: ex.reps, kg: ex.kg } })
    setData(init)
  }

  const finish = () => {
    const volume = Object.values(data).reduce((acc, d) => acc + d.sets * d.reps * d.kg, 0)
    addLog({ routineName: active.name, durationSeconds: seconds, volume })
    setActive(null)
    clearInterval(intervalRef.current)
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
    <div className="px-5 pt-8 max-w-md mx-auto">
      <div className="bg-red-600 rounded-2xl p-5 text-center">
        <p className="text-red-100 text-xs uppercase">{active.name}</p>
        <p className="text-4xl font-bold mt-1 tabular-nums">{fmt(seconds)}</p>
      </div>

      <div className="mt-5 space-y-3">
        {active.exercises.map((ex) => (
          <div key={ex.id} className="bg-neutral-900 rounded-xl p-4">
            <p className="font-semibold mb-2">{ex.name}</p>
            <div className="flex gap-2">
              {['sets', 'reps', 'kg'].map((field) => (
                <input
                  key={field}
                  type="number"
                  value={data[ex.id]?.[field] ?? 0}
                  onChange={(e) => setData((d) => ({ ...d, [ex.id]: { ...d[ex.id], [field]: Number(e.target.value) } }))}
                  className="flex-1 bg-neutral-800 rounded-lg px-2 py-2 text-sm text-center outline-none"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={finish} className="w-full bg-red-600 rounded-xl py-3 mt-5 font-semibold">
        Finalizar entrenamiento
      </button>
    </div>
  )
}