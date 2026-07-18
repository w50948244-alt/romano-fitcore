import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import useStore from '../store/useStore'
import { supabase } from '../lib/supabase'

const kgALb = (kg) => Math.round(kg * 2.20462 * 10) / 10

export default function Profile() {
  const profile = useStore((s) => s.profile)
  const updateProfile = useStore((s) => s.updateProfile)
  const weightLogs = useStore((s) => s.weightLogs)
  const addWeightLog = useStore((s) => s.addWeightLog)
  const [nuevoPeso, setNuevoPeso] = useState('')
  const [modoClaro, setModoClaro] = useState(false)

  useEffect(() => {
    const guardado = localStorage.getItem('fitcore_theme')
    const esClaro = guardado === 'light'
    setModoClaro(esClaro)
    document.body.classList.toggle('light', esClaro)
  }, [])

  const toggleTema = () => {
    const nuevo = !modoClaro
    setModoClaro(nuevo)
    document.body.classList.toggle('light', nuevo)
    localStorage.setItem('fitcore_theme', nuevo ? 'light' : 'dark')
  }

  const currentWeight = weightLogs[weightLogs.length - 1]?.weight ?? profile.weightStart

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  const registrarPeso = () => {
    const valor = parseFloat(nuevoPeso)
    if (!valor || valor <= 0) return
    addWeightLog(valor)
    setNuevoPeso('')
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Perfil</h1>

      <div className="mt-5 bg-neutral-900 rounded-xl p-4 flex justify-between text-center">
        <div>
          <p className="text-xl font-bold">{profile.weightStart != null ? `${profile.weightStart}kg` : '-'}</p>
          <p className="text-neutral-500 text-xs mt-1">Peso inicial</p>
          {profile.weightStart != null && (
            <p className="text-neutral-600 text-[10px] mt-0.5">{kgALb(profile.weightStart)}lb</p>
          )}
        </div>
        <div>
          <p className="text-xl font-bold text-red-500">{currentWeight != null ? `${currentWeight}kg` : '-'}</p>
          <p className="text-neutral-500 text-xs mt-1">Peso actual</p>
          {currentWeight != null && (
            <p className="text-neutral-600 text-[10px] mt-0.5">{kgALb(currentWeight)}lb</p>
          )}
        </div>
      </div>

      {profile.weightStart == null && (
        <div className="mt-3 bg-neutral-900 rounded-xl p-4">
          <label className="text-neutral-500 text-xs">Registra tu peso actual para empezar</label>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              value={nuevoPeso}
              onChange={(e) => setNuevoPeso(e.target.value)}
              placeholder="Ej: 70"
              className="flex-1 bg-neutral-800 rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={registrarPeso}
              className="bg-red-600 hover:bg-red-700 transition rounded-lg px-4 text-sm font-medium"
            >
              Guardar
            </button>
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3">
        {[
          { key: 'name', label: 'Nombre' },
          { key: 'age', label: 'Edad' },
          { key: 'height', label: 'Altura (cm)' },
          { key: 'goal', label: 'Objetivo' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label className="text-neutral-500 text-xs">{label}</label>
            <input
              value={profile[key]}
              onChange={(e) => updateProfile({ [key]: e.target.value })}
              className="w-full bg-neutral-900 rounded-lg px-3 py-2 text-sm outline-none mt-1"
            />
          </div>
        ))}

        <div>
          <label className="text-neutral-500 text-xs">Género</label>
          <div className="flex bg-neutral-900 rounded-lg p-1 mt-1">
            <button
              onClick={() => updateProfile({ gender: 'male' })}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition ${profile.gender === 'male' ? 'bg-red-600 text-white' : 'text-neutral-400'}`}
            >
              Hombre
            </button>
            <button
              onClick={() => updateProfile({ gender: 'female' })}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition ${profile.gender === 'female' ? 'bg-red-600 text-white' : 'text-neutral-400'}`}
            >
              Mujer
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={toggleTema}
        className="w-full mt-6 bg-neutral-900 rounded-xl p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {modoClaro ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-blue-400" />}
          <span className="text-sm font-medium">{modoClaro ? 'Modo claro' : 'Modo oscuro'}</span>
        </div>
        <div className={`w-11 h-6 rounded-full flex items-center px-0.5 transition ${modoClaro ? 'bg-red-600 justify-end' : 'bg-neutral-700 justify-start'}`}>
          <div className="w-5 h-5 rounded-full bg-white" />
        </div>
      </button>

      <button
        onClick={handleLogout}
        className="w-full mt-3 border border-red-600 text-red-500 rounded-xl py-3 text-sm font-medium"
      >
        Cerrar sesión
      </button>
    </div>
  )
}