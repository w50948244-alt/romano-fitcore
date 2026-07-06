import useStore from '../store/useStore'
import { supabase } from '../lib/supabase'

export default function Profile() {
  const profile = useStore((s) => s.profile)
  const updateProfile = useStore((s) => s.updateProfile)
  const weightLogs = useStore((s) => s.weightLogs)

  const currentWeight = weightLogs[weightLogs.length - 1]?.weight ?? profile.weightStart

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Perfil</h1>

      <div className="mt-5 bg-neutral-900 rounded-xl p-4 flex justify-between text-center">
        <div>
          <p className="text-xl font-bold">{profile.weightStart}kg</p>
          <p className="text-neutral-500 text-xs mt-1">Peso inicial</p>
        </div>
        <div>
          <p className="text-xl font-bold text-red-500">{currentWeight}kg</p>
          <p className="text-neutral-500 text-xs mt-1">Peso actual</p>
        </div>
      </div>

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
      </div>

      <button
        onClick={handleLogout}
        className="w-full mt-8 border border-red-600 text-red-500 rounded-xl py-3 text-sm font-medium"
      >
        Cerrar sesión
      </button>
    </div>
  )
}