import { useState } from 'react'
import { Plus, Trash2, ChevronDown, Sparkles, Info } from 'lucide-react'
import useStore from '../store/useStore'
import { generarRutinaRecomendada, buscarGuia } from '../lib/exerciseLibrary'

export default function Routines() {
  const routines = useStore((s) => s.routines)
  const deleteRoutine = useStore((s) => s.deleteRoutine)
  const addRoutine = useStore((s) => s.addRoutine)
  const profile = useStore((s) => s.profile)
  const [expanded, setExpanded] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [guiaAbierta, setGuiaAbierta] = useState(null)

  const handleAdd = () => {
    if (!name.trim()) return
    addRoutine({ name, days: [], exercises: [] })
    setName('')
    setShowForm(false)
  }

  const handleRecomendada = () => {
    if (!profile.age || !profile.height || !profile.weightStart) {
      alert('Completa tu edad, altura y peso en Perfil para generar una rutina a tu medida.')
      return
    }
    const rutina = generarRutinaRecomendada(profile)
    addRoutine(rutina)
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rutinas</h1>
        <button onClick={() => setShowForm(!showForm)} className="bg-red-600 p-2 rounded-full">
          <Plus size={20} />
        </button>
      </div>

      <button
        onClick={handleRecomendada}
        className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition"
      >
        <Sparkles size={22} className="text-white" />
        <div className="text-left">
          <p className="font-semibold text-white text-sm">Generar rutina para mí</p>
          <p className="text-red-100 text-xs">Según tu peso, edad, altura y objetivo</p>
        </div>
      </button>

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
                {r.exercises.map((ex) => {
                  const idGuia = `${r.id}_${ex.id}`
                  const info = buscarGuia(ex.name)
                  return (
                    <div key={ex.id} className="text-sm">
                      <div className="flex justify-between items-center">
                        <span>{ex.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-500">{ex.sets}x{ex.reps} · {ex.kg}kg</span>
                          <button onClick={() => setGuiaAbierta(guiaAbierta === idGuia ? null : idGuia)} className="text-red-500">
                            <Info size={15} />
                          </button>
                        </div>
                      </div>
                      {guiaAbierta === idGuia && (
                        <div className="mt-2 bg-neutral-800 rounded-lg p-3">
                          <p className="text-xs text-red-400 uppercase mb-1">{info.grupo}</p>
                          <ol className="list-decimal list-inside space-y-1 text-neutral-300 text-xs">
                            {info.guia.map((paso, i) => <li key={i}>{paso}</li>)}
                          </ol>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}