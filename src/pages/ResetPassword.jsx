import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { Dumbbell, Eye, EyeOff } from 'lucide-react'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [listo, setListo] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError('')

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirmar) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setListo(true)
      setTimeout(() => navigate('/'), 2000)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-red-600 p-3 rounded-2xl">
          <Dumbbell size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Romano FitCore</h1>
          <p className="text-neutral-500 text-xs">Nueva contraseña</p>
        </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-900 rounded-2xl p-6">
        {listo ? (
          <div className="text-center py-4">
            <p className="text-green-400 font-semibold">¡Contraseña actualizada! ✅</p>
            <p className="text-neutral-500 text-xs mt-2">Redirigiendo...</p>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold text-white mb-1">Crea tu nueva contraseña</h2>
            <p className="text-neutral-500 text-xs mb-5">Debe tener al menos 6 caracteres.</p>

            <div className="space-y-3">
              <div>
                <label className="text-neutral-500 text-xs">Nueva contraseña</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nueva contraseña"
                    className="w-full bg-neutral-800 rounded-lg px-3 py-3 pr-10 text-sm outline-none focus:ring-1 focus:ring-red-600 text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-neutral-500 text-xs">Confirmar contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmar}
                  onChange={(e) => setConfirmar(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Repite la contraseña"
                  className="w-full bg-neutral-800 rounded-lg px-3 py-3 text-sm outline-none mt-1 focus:ring-1 focus:ring-red-600 text-white"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-xs mt-3">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 mt-5 font-semibold text-sm disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Guardar nueva contraseña'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}