import { useState } from 'react'
import { Plus, Trash2, ChevronDown } from 'lucide-react'
import useStore from '../store/useStore'

export default function Routines() {
  const routines = useStore((s) => s.routines)
  const deleteRoutine = useStore((s) => s.deleteRoutine)
  const addRoutine = useStore((s) => s.addRoutine)
  const [expanded, setExpanded] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')

  const handleAdd = () => {
    if (!name.trim()) return
    addRoutine({ name, days: [], exercises: [] })
    setName('')
    setShowForm(false)
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rutinas</h1>
        <button onClick={() => setShowForm(!showForm)} className="bg-red-600 p-2 rounded-full">
          <Plus size={20} />
        </button>
      </div>

      {showForm && (
        <div className="mt-4 bg-neutral-900 rounded-xl p-4 flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de rutina"
            className="flex-1 bg-neutral-800 rounded-lg px-3 py-2 text-sm outline-none"
          />
          <button onClick={handleAdd} className="bg-red-600 px-4 rounded-lg text-sm font-medium">Crear</button>
        </div>
      )}

      <div className="mt-5 space-y-3">
        {routines.map((r) => (
          <div key={r.id} className="bg-neutral-900 rounded-xl p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(expanded === r.id ? null : r.id)}>
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-neutral-500 text-xs">{r.days.join(', ') || 'Sin días asignados'}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={(e) => { e.stopPropagation(); deleteRoutine(r.id) }} className="text-neutral-600">
                  <Trash2 size={16} />
                </button>
                <ChevronDown size={18} className={`transition-transform ${expanded === r.id ? 'rotate-180' : ''}`} />
              </div>
            </div>
            {expanded === r.id && (
              <div className="mt-3 space-y-2 border-t border-neutral-800 pt-3">
                {r.exercises.length === 0 && <p className="text-neutral-600 text-sm">Sin ejercicios aún.</p>}
                {r.exercises.map((ex) => (
                  <div key={ex.id} className="flex justify-between text-sm">
                    <span>{ex.name}</span>
                    <span className="text-neutral-500">{ex.sets}x{ex.reps} · {ex.kg}kg</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}