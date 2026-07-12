import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Dumbbell, Eye, EyeOff } from 'lucide-react'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
      } else if (mode === 'register') {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) setError(error.message)
        else setMessage('Revisa tu correo para confirmar tu cuenta.')
      } else if (mode === 'recover') {
        if (!email) {
          setError('Escribe tu correo primero.')
        } else {
          const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
          })
          if (error) setError(error.message)
          else setMessage('Te enviamos un correo para restablecer tu contraseña.')
        }
      }
    } catch (err) {
      console.error('Error inesperado:', err)
      setError('Error inesperado: ' + (err?.message || JSON.stringify(err)))
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setLoadingGoogle(true)
    setError('')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) setError(error.message)
    setLoadingGoogle(false)
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
          <p className="text-neutral-500 text-xs">Tu entrenamiento, tu progreso</p>
        </div>
      </div>

      <div className="w-full max-w-sm bg-neutral-900 rounded-2xl p-6">

        {mode !== 'recover' && (
          <div className="flex bg-neutral-800 rounded-xl p-1 mb-6">
            <button
              onClick={() => { setMode('login'); setError(''); setMessage('') }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${mode === 'login' ? 'bg-red-600 text-white' : 'text-neutral-400'}`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => { setMode('register'); setError(''); setMessage('') }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${mode === 'register' ? 'bg-red-600 text-white' : 'text-neutral-400'}`}
            >
              Registrarse
            </button>
          </div>
        )}

        {mode === 'recover' && (
          <div className="mb-6">
            <button
              onClick={() => { setMode('login'); setError(''); setMessage('') }}
              className="text-neutral-500 text-xs flex items-center gap-1 hover:text-white transition"
            >
              ← Volver al inicio de sesión
            </button>
            <h2 className="text-lg font-bold text-white mt-3">Recuperar contraseña</h2>
            <p className="text-neutral-500 text-xs mt-1">Te enviaremos un correo para restablecerla.</p>
          </div>
        )}

        {mode !== 'recover' && (
          <>
            <button
              onClick={handleGoogle}
              disabled={loadingGoogle}
              className="w-full flex items-center justify-center gap-3 bg-neutral-800 hover:bg-neutral-700 transition rounded-xl py-3 text-sm font-medium mb-4 disabled:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.5 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.3C9.7 35.7 16.3 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C37 39 44 34 44 24c0-1.3-.1-2.7-.4-3.9z"/>
              </svg>
              {loadingGoogle ? 'Redirigiendo...' : 'Continuar con Google'}
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-neutral-800" />
              <span className="text-neutral-600 text-xs">o con correo</span>
              <div className="flex-1 h-px bg-neutral-800" />
            </div>
          </>
        )}

        <div className="space-y-3">
          <div>
            <label className="text-neutral-500 text-xs">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="correo@ejemplo.com"
              className="w-full bg-neutral-800 rounded-lg px-3 py-3 text-sm outline-none mt-1 focus:ring-1 focus:ring-red-600 text-white"
            />
          </div>

          {mode !== 'recover' && (
            <div>
              <label className="text-neutral-500 text-xs">Contraseña</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ingresar Contraseña"
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
          )}
        </div>

        {error && <p className="text-red-400 text-xs mt-3">{error}</p>}
        {message && <p className="text-green-400 text-xs mt-3">{message}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 mt-5 font-semibold text-sm disabled:opacity-50"
        >
          {loading ? 'Cargando...' : mode === 'login' ? 'Entrar' : mode === 'register' ? 'Crear cuenta' : 'Enviar correo'}
        </button>

        {mode === 'login' && (
          <p className="text-center text-neutral-600 text-xs mt-4">
            ¿Olvidaste tu contraseña?{' '}
            <button
              onClick={() => { setMode('recover'); setError(''); setMessage('') }}
              className="text-red-500 hover:underline"
            >
              Recuperar
            </button>
          </p>
        )}
      </div>

      <p className="text-neutral-700 text-xs mt-6 text-center max-w-xs">
        Al continuar aceptas los Términos de servicio y la Política de privacidad de Romano FitCore
      </p>
    </div>
  )
}