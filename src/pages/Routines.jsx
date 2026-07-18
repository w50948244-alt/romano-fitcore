import { useState } from 'react'
import { Plus, Trash2, ChevronDown, Sparkles, Info, Dumbbell, CalendarDays, Check } from 'lucide-react'
import useStore from '../store/useStore'
import { generarRutinaRecomendada, generarRutinaPorGrupo, generarHorarioSemanal, buscarGuia } from '../lib/exerciseLibrary'

const kgALb = (kg) => Math.round(kg * 2.20462 * 10) / 10

const GRUPOS = ['Pecho', 'Espalda', 'Pierna']
const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export default function Routines() {
  const routines = useStore((s) => s.routines)
  const deleteRoutine = useStore((s) => s.deleteRoutine)
  const addRoutine = useStore((s) => s.addRoutine)
  const profile = useStore((s) => s.profile)
  const [expanded, setExpanded] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [guiaAbierta, setGuiaAbierta] = useState(null)
  const [showHorario, setShowHorario] = useState(false)
  const [diasElegidos, setDiasElegidos] = useState([])

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

  const handleGrupo = (grupo) => {
    if (!profile.age || !profile.height || !profile.weightStart) {
      alert('Completa tu edad, altura y peso en Perfil para generar una rutina a tu medida.')
      return
    }
    const rutina = generarRutinaPorGrupo(profile, grupo)
    addRoutine(rutina)
  }

  const toggleDia = (dia) => {
    setDiasElegidos((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    )
  }

  const generarHorario = () => {
    if (!profile.age || !profile.height || !profile.weightStart) {
      alert('Completa tu edad, altura y peso en Perfil para generar tu horario.')
      return
    }
    if (diasElegidos.length === 0) {
      alert('Elige al menos un día de entrenamiento.')
      return
    }
    // Ordena los dias elegidos segun el orden real de la semana
    const diasOrdenados = DIAS.filter((d) => diasElegidos.includes(d))
    const nuevasRutinas = generarHorarioSemanal(profile, diasOrdenados)
    nuevasRutinas.forEach((r) => addRoutine(r))
    setShowHorario(false)
    setDiasElegidos([])
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

      <div className="mt-3">
        <p className="text-neutral-500 text-xs uppercase mb-2">O elige qué entrenar hoy</p>
        <div className="grid grid-cols-3 gap-2">
          {GRUPOS.map((g) => (
            <button
              key={g}
              onClick={() => handleGrupo(g)}
              className="bg-neutral-900 hover:bg-neutral-800 transition rounded-xl p-3 flex flex-col items-center gap-1.5"
            >
              <Dumbbell size={18} className="text-red-500" />
              <span className="text-xs font-medium">{g}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowHorario(!showHorario)}
        className="w-full mt-3 bg-neutral-900 hover:bg-neutral-800 transition rounded-xl p-4 flex items-center gap-3"
      >
        <CalendarDays size={22} className="text-red-500" />
        <div className="text-left">
          <p className="font-semibold text-sm">Crear mi horario semanal completo</p>
          <p className="text-neutral-500 text-xs">Elige tus días y te armamos una rutina para cada uno</p>
        </div>
      </button>

      {showHorario && (
        <div className="mt-3 bg-neutral-900 rounded-xl p-4">
          <p className="text-sm font-medium mb-3">¿Qué días vas a entrenar?</p>
          <div className="grid grid-cols-2 gap-2">
            {DIAS.map((dia) => (
              <button
                key={dia}
                onClick={() => toggleDia(dia)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                  diasElegidos.includes(dia) ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {dia}
                {diasElegidos.includes(dia) && <Check size={15} />}
              </button>
            ))}
          </div>
          <p className="text-neutral-600 text-[11px] mt-3">
            {diasElegidos.length === 0 && 'Selecciona al menos un día.'}
            {diasElegidos.length > 0 && `Con ${diasElegidos.length} ${diasElegidos.length === 1 ? 'día' : 'días'}, te armamos un split de ${diasElegidos.length === 1 ? 'cuerpo completo' : diasElegidos.length <= 2 ? 'tren superior/inferior' : diasElegidos.length === 3 ? 'empuje/tirón/pierna' : 'por grupo muscular'}.`}
          </p>
          <button
            onClick={generarHorario}
            className="w-full bg-red-600 hover:bg-red-700 transition rounded-lg py-2.5 text-sm font-medium mt-3"
          >
            Generar mi horario
          </button>
        </div>
      )}

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
                          <span className="text-neutral-500">{ex.sets}x{ex.reps} · {ex.kg}kg <span className="text-neutral-600">({kgALb(ex.kg)}lb)</span></span>
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