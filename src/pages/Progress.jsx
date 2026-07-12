import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Trophy } from 'lucide-react'
import useStore from '../store/useStore'

export default function Progress() {
  const weightLogs = useStore((s) => s.weightLogs)
  const addWeightLog = useStore((s) => s.addWeightLog)
  const personalRecords = useStore((s) => s.personalRecords)
  const [weight, setWeight] = useState('')

  const chartData = weightLogs.map((w) => ({
    date: new Date(w.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
    peso: w.weight,
  }))

  const recordsOrdenados = Object.entries(personalRecords || {}).sort((a, b) => b[1].kg - a[1].kg)

  const handleAdd = () => {
    if (!weight) return
    addWeightLog(Number(weight))
    setWeight('')
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto pb-6">
      <h1 className="text-2xl font-bold">Progreso</h1>

      <div className="mt-5 bg-neutral-900 rounded-xl p-4">
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