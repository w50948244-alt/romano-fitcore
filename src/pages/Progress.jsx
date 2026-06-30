import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import useStore from '../store/useStore'

export default function Progress() {
  const weightLogs = useStore((s) => s.weightLogs)
  const addWeightLog = useStore((s) => s.addWeightLog)
  const [weight, setWeight] = useState('')

  const chartData = weightLogs.map((w) => ({
    date: new Date(w.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
    peso: w.weight,
  }))

  const handleAdd = () => {
    if (!weight) return
    addWeightLog(Number(weight))
    setWeight('')
  }

  return (
    <div className="px-5 pt-8 max-w-md mx-auto">
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

      <div className="mt-5">
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