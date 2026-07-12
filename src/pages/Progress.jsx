import { useState, useRef } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Trophy, Share2, Flame, ChevronLeft, ChevronRight } from 'lucide-react'
import useStore from '../store/useStore'
import { calcularRacha } from '../lib/streak'

const DIAS_SEMANA = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

// Genera el mes completo (mesRef) en semanas de lunes a domingo,
// incluyendo dias del mes anterior/siguiente para completar la cuadricula
function generarDiasCalendario(logs, mesRef, manualDays) {
  const diasConEntreno = new Set(logs.map((l) => new Date(l.date).toDateString()))
  const manualSet = new Set(manualDays || [])

  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)

  const primerDiaMes = new Date(mesRef.getFullYear(), mesRef.getMonth(), 1)
  const ultimoDiaMes = new Date(mesRef.getFullYear(), mesRef.getMonth() + 1, 0)

  const diaSemanaInicio = (primerDiaMes.getDay() + 6) % 7 // lunes = 0
  const inicio = new Date(primerDiaMes)
  inicio.setDate(primerDiaMes.getDate() - diaSemanaInicio)

  const diaSemanaFin = (ultimoDiaMes.getDay() + 6) % 7
  const fin = new Date(ultimoDiaMes)
  fin.setDate(ultimoDiaMes.getDate() + (6 - diaSemanaFin))

  const dias = []
  const cursor = new Date(inicio)
  while (cursor <= fin) {
    const fecha = new Date(cursor)
    const fechaTexto = fecha.toDateString()
    dias.push({
      fecha,
      fechaTexto,
      entreno: diasConEntreno.has(fechaTexto) || manualSet.has(fechaTexto),
      esManual: manualSet.has(fechaTexto) && !diasConEntreno.has(fechaTexto),
      esHoy: fechaTexto === hoy.toDateString(),
      esFuturo: fecha > hoy,
      esOtroMes: fecha.getMonth() !== mesRef.getMonth(),
    })
    cursor.setDate(cursor.getDate() + 1)
  }
  return dias
}

function textoMes(mesRef) {
  const texto = mesRef.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

export default function Progress() {
  const weightLogs = useStore((s) => s.weightLogs)
  const addWeightLog = useStore((s) => s.addWeightLog)
  const personalRecords = useStore((s) => s.personalRecords)
  const logs = useStore((s) => s.logs)
  const profile = useStore((s) => s.profile)
  const manualDays = useStore((s) => s.manualDays)
  const toggleManualDay = useStore((s) => s.toggleManualDay)
  const [weight, setWeight] = useState('')
  const [mesSeleccionado, setMesSeleccionado] = useState(() => new Date())
  const canvasRef = useRef(null)

  const chartData = weightLogs.map((w) => ({
    date: new Date(w.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
    peso: w.weight,
  }))

  const recordsOrdenados = Object.entries(personalRecords || {}).sort((a, b) => b[1].kg - a[1].kg)
  const diasCalendario = generarDiasCalendario(logs, mesSeleccionado, manualDays)
  const racha = calcularRacha(logs, manualDays)

  const hoy = new Date()
  const esMesActual = mesSeleccionado.getMonth() === hoy.getMonth() && mesSeleccionado.getFullYear() === hoy.getFullYear()

  const mesAnterior = () => {
    setMesSeleccionado((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))
  }
  const mesSiguiente = () => {
    if (esMesActual) return
    setMesSeleccionado((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))
  }

  const handleAdd = () => {
    if (!weight) return
    addWeightLog(Number(weight))
    setWeight('')
  }

  const compartirLogro = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 800

    // Fondo con degrade
    const grad = ctx.createLinearGradient(0, 0, 0, 800)
    grad.addColorStop(0, '#1a1a1a')
    grad.addColorStop(1, '#0a0a0a')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 800, 800)

    // Franja roja arriba
    ctx.fillStyle = '#dc2626'
    ctx.fillRect(0, 0, 800, 12)

    ctx.textAlign = 'center'
    ctx.fillStyle = '#737373'
    ctx.font = '28px Arial'
    ctx.fillText('ROMANO FITCORE', 400, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 44px Arial'
    ctx.fillText(profile.name || 'Atleta', 400, 160)

    const mejorRecord = recordsOrdenados[0]

    ctx.fillStyle = '#dc2626'
    ctx.font = 'bold 130px Arial'
    ctx.fillText(mejorRecord ? `${mejorRecord[1].kg}kg` : `${racha}`, 400, 380)

    ctx.fillStyle = '#a3a3a3'
    ctx.font = '32px Arial'
    ctx.fillText(mejorRecord ? `Récord en ${mejorRecord[0]}` : 'Días de racha entrenando', 400, 430)

    ctx.fillStyle = '#525252'
    ctx.font = '24px Arial'
    ctx.fillText(`🔥 ${racha} días seguidos  ·  ${logs.length} entrenamientos totales`, 400, 520)

    ctx.fillStyle = '#404040'
    ctx.font = '20px Arial'
    ctx.fillText(new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }), 400, 720)

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'mi-logro-fitcore.png', { type: 'image/png' })
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: 'Mi logro en Romano FitCore' })
          return
        } catch (e) {
          // si cancela el share, cae al metodo de descarga
        }
      }
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'mi-logro-fitcore.png'
      a.click()
      URL.revokeObjectURL(url)
    }, 'image/png')
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto pb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Progreso</h1>
        <button
          onClick={compartirLogro}
          className="flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 transition rounded-lg px-3 py-2 text-xs font-medium"
        >
          <Share2 size={14} className="text-red-500" /> Compartir
        </button>
      </div>
      <canvas ref={canvasRef} className="hidden" />

      {racha > 0 && (
        <div className="mt-4 flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3">
          <Flame size={20} className="text-orange-500" />
          <p className="text-sm text-orange-400 font-semibold">{racha} {racha === 1 ? 'día seguido' : 'días seguidos'} entrenando</p>
        </div>
      )}

      <div className="mt-4 bg-neutral-900 rounded-xl p-4">
        <div className="flex justify-between items-center mb-3">
          <button onClick={mesAnterior} className="p-1 text-neutral-400 hover:text-white transition">
            <ChevronLeft size={18} />
          </button>
          <p className="text-sm font-medium">{textoMes(mesSeleccionado)}</p>
          <button
            onClick={mesSiguiente}
            disabled={esMesActual}
            className={`p-1 transition ${esMesActual ? 'text-neutral-800' : 'text-neutral-400 hover:text-white'}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1.5 mb-1.5">
          {DIAS_SEMANA.map((d, i) => (
            <p key={i} className="text-center text-[10px] text-neutral-600">{d}</p>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {diasCalendario.map((d, i) => (
            <button
              key={i}
              onClick={() => !d.esFuturo && toggleManualDay(d.fechaTexto)}
              disabled={d.esFuturo}
              title={
                d.esFuturo
                  ? d.fecha.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
                  : `${d.fecha.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })} — clic para ${d.entreno ? 'desmarcar' : 'marcar'}`
              }
              className={`aspect-square rounded-sm flex items-center justify-center text-[9px] transition ${
                d.esOtroMes ? 'opacity-20' : ''
              } ${
                d.esFuturo ? 'bg-transparent border border-dashed border-neutral-800 text-neutral-700 cursor-default' :
                d.entreno ? 'bg-red-600 text-white hover:bg-red-700 cursor-pointer' : 'bg-neutral-800 text-neutral-600 hover:bg-neutral-700 cursor-pointer'
              } ${d.esHoy ? 'ring-2 ring-white/50' : ''}`}
            >
              {d.fecha.getDate()}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-3 text-[10px] text-neutral-600">
          <div className="w-2.5 h-2.5 rounded-sm bg-neutral-800" /> sin entrenar
          <div className="w-2.5 h-2.5 rounded-sm bg-red-600 ml-2" /> entrenaste
        </div>
        <p className="text-[10px] text-neutral-600 mt-1">Toca un día para marcarlo o desmarcarlo</p>
      </div>

      <div className="mt-4 bg-neutral-900 rounded-xl p-4">
        <p className="text-neutral-500 text-xs uppercase mb-2">Evolución de peso</p>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" stroke="#525252" fontSize={11} />
            <YAxis stroke="#525252" fontSize={11} domain={['auto', 'auto']} />
            <Tooltip contentStyle={{ background: '#171717', border: 'none', borderRadius: 8 }} />
            <Line type="monotone" dataKey="peso" stroke="#dc2626" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Registrar peso de hoy (kg)"
          className="flex-1 bg-neutral-900 rounded-lg px-3 py-2 text-sm outline-none"
        />
        <button onClick={handleAdd} className="bg-red-600 px-4 rounded-lg text-sm font-medium">Guardar</button>
      </div>

      <div className="mt-6">
        <p className="text-neutral-500 text-xs uppercase mb-2 flex items-center gap-1">
          <Trophy size={13} className="text-yellow-500" /> Récords personales
        </p>
        {recordsOrdenados.length === 0 ? (
          <div className="bg-neutral-900 rounded-xl p-4 text-center">
            <p className="text-neutral-600 text-sm">Aún no tienes récords. Termina un entrenamiento para empezar a marcarlos.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {recordsOrdenados.map(([nombre, r]) => (
              <div key={nombre} className="flex justify-between items-center bg-neutral-900 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-yellow-500" />
                  <span className="text-sm">{nombre}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">{r.kg} kg</p>
                  <p className="text-neutral-600 text-[10px]">{new Date(r.date).toLocaleDateString('es-ES')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-neutral-500 text-xs uppercase mb-2">Historial</p>
        <div className="space-y-2">
          {[...weightLogs].reverse().map((w, i) => (
            <div key={i} className="flex justify-between bg-neutral-900 rounded-lg px-3 py-2 text-sm">
              <span className="text-neutral-400">{new Date(w.date).toLocaleDateString('es-ES')}</span>
              <span className="font-medium">{w.weight} kg</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}