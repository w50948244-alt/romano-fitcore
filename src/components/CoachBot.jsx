import { useState, useEffect, useRef } from 'react'
import { Bot, X, Send } from 'lucide-react'
import useStore from '../store/useStore'

// Calcula racha de días consecutivos entrenando, a partir de los logs
function calcularRacha(logs) {
  if (!logs.length) return 0
  const dias = [...new Set(logs.map(l => new Date(l.date).toDateString()))]
    .map(d => new Date(d))
    .sort((a, b) => b - a)

  let racha = 0
  let cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  for (const dia of dias) {
    const diff = Math.round((cursor - dia) / 86400000)
    if (diff === 0 || diff === 1) {
      racha++
      cursor = dia
    } else break
  }
  return racha
}

// Genera un mensaje de bienvenida personalizado según género, racha y progreso
function mensajeInicial(profile, logs, weightLogs) {
  const trato = profile.gender === 'female' ? 'campeona' : profile.gender === 'male' ? 'campeón' : 'crack'
  const racha = calcularRacha(logs)
  const perdidoOganado = weightLogs.length > 1
    ? weightLogs[weightLogs.length - 1].weight - weightLogs[0].weight
    : 0

  if (racha >= 3) {
    return `¡${racha} días seguidos entrenando, ${trato}! 🔥 Así se hace, no bajes el ritmo.`
  }
  if (perdidoOganado < 0) {
    return `Vas ${Math.abs(perdidoOganado).toFixed(1)}kg abajo desde que empezaste, ${trato}. ¡Sigue así!`
  }
  if (logs.length === 0) {
    return `Hola ${profile.name}, soy tu coach. Aún no registras entrenamientos — ¿empezamos hoy?`
  }
  return `Hola de nuevo, ${trato}. Estoy aquí si necesitas un empujón extra hoy.`
}

// Respuestas del coach ante palabras clave del usuario (reglas simples)
function responderCoach(texto, profile, logs, routines) {
  const t = texto.toLowerCase()
  const trato = profile.gender === 'female' ? 'campeona' : profile.gender === 'male' ? 'campeón' : 'crack'

  if (t.includes('cansad') || t.includes('flojera') || t.includes('no quiero')) {
    return `Sé que hoy cuesta, ${trato}. Pero recuerda: no tienes que sentirte motivada para empezar, solo tienes que empezar. 5 minutos y ves cómo sigues.`
  }
  if (t.includes('rutina') || t.includes('ejercicio')) {
    const nombres = routines.map(r => r.name).join(', ') || 'aún no tienes rutinas creadas'
    return `Tus rutinas actuales son: ${nombres}. ¿Quieres que ajustemos alguna?`
  }
  if (t.includes('peso') || t.includes('bajar') || t.includes('subir')) {
    return `La constancia pesa más que la báscula. Sigue registrando tu peso cada semana para ver la tendencia real, no el día a día.`
  }
  if (t.includes('gracias')) {
    return `¡Para eso estoy! Nos vemos en tu próximo entrenamiento 💪`
  }
  if (t.includes('racha') || t.includes('dias')) {
    return `Llevas ${calcularRacha(logs)} días seguidos entrenando. ¡Cada día cuenta para construir el hábito!`
  }
  return `Te escucho. Cuéntame si quieres consejos sobre tu rutina, tu peso, o simplemente necesitas motivación.`
}

export default function CoachBot() {
  const profile = useStore((s) => s.profile)
  const logs = useStore((s) => s.logs)
  const routines = useStore((s) => s.routines)
  const weightLogs = useStore((s) => s.weightLogs)

  const [open, setOpen] = useState(false)
  const [mensajes, setMensajes] = useState([])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open && mensajes.length === 0) {
      setMensajes([{ from: 'bot', text: mensajeInicial(profile, logs, weightLogs) }])
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes])

  const enviar = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const botMsg = { from: 'bot', text: responderCoach(input, profile, logs, routines) }
    setMensajes((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  const avatarColor = profile.gender === 'female' ? 'bg-pink-600' : profile.gender === 'male' ? 'bg-red-600' : 'bg-neutral-700'

  return (
    <>
      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed bottom-24 right-5 ${avatarColor} w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 active:scale-95 transition`}
        >
          <Bot size={26} className="text-white" />
        </button>
      )}

      {/* Panel de chat */}
      {open && (
        <div className="fixed bottom-20 right-3 left-3 sm:left-auto sm:w-96 h-[70vh] max-h-[520px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className={`${avatarColor} px-4 py-3 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-white" />
              <p className="text-white font-semibold text-sm">Tu Coach FitCore</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {mensajes.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.from === 'user'
                      ? 'bg-red-600 text-white rounded-br-sm'
                      : 'bg-neutral-800 text-neutral-200 rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-neutral-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviar()}
              placeholder="Escríbele a tu coach..."
              className="flex-1 bg-neutral-800 rounded-lg px-3 py-2 text-sm outline-none text-white"
            />
            <button
              onClick={enviar}
              className="bg-red-600 hover:bg-red-700 transition rounded-lg px-3 flex items-center justify-center"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
