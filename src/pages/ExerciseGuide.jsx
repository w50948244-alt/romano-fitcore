import { useState } from 'react'
import { Play } from 'lucide-react'
import { libreriaEjercicios } from '../lib/exerciseLibrary'
import ExerciseAnimation from '../components/ExerciseAnimation'

const niveles = [
  { key: 'principiante', label: 'Principiante' },
  { key: 'intermedio', label: 'Intermedio' },
  { key: 'avanzado', label: 'Avanzado' },
]

export default function ExerciseGuide() {
  const [nivelActivo, setNivelActivo] = useState('principiante')
  const [abierto, setAbierto] = useState(null)

  const ejercicios = Object.entries(libreriaEjercicios).filter(
    ([, info]) => info.nivel === nivelActivo
  )

  return (
    <div className="px-5 pt-8 max-w-md mx-auto pb-6">
      <h1 className="text-2xl font-bold">Guia de Ejercicios</h1>
      <p className="text-neutral-500 text-sm mt-1">Elige tu nivel y aprende la tecnica correcta</p>

      <div className="flex bg-neutral-900 rounded-xl p-1 mt-4">
        {niveles.map((n) => (
          <button
            key={n.key}
            onClick={() => setNivelActivo(n.key)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              nivelActivo === n.key ? 'bg-red-600 text-white' : 'text-neutral-400'
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {ejercicios.length === 0 && (
          <p className="text-neutral-600 text-sm text-center mt-6">
            No hay ejercicios de este nivel todavia.
          </p>
        )}

        {ejercicios.map(([nombre, info]) => (
          <div key={nombre} className="bg-neutral-900 rounded-xl p-4">
            <button
              onClick={() => setAbierto(abierto === nombre ? null : nombre)}
              className="w-full flex justify-between items-center text-left"
            >
              <div>
                <p className="font-semibold">{nombre}</p>
                <p className="text-neutral-500 text-xs">{info.grupo}</p>
              </div>
              <span className="text-red-500 text-xs">{abierto === nombre ? 'Cerrar' : 'Ver'}</span>
            </button>

            {abierto === nombre && (
              <div className="mt-3 border-t border-neutral-800 pt-3">
                <ExerciseAnimation grupo={info.grupo} />

                <ol className="list-decimal list-inside space-y-1 text-neutral-300 text-xs mt-3">
                  {info.guia.map((paso, i) => <li key={i}>{paso}</li>)}
                </ol>

                
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(nombre + ' tecnica correcta')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition rounded-lg py-2 text-xs text-neutral-300"
                >
                  <Play size={14} className="text-red-500" />
                  Ver video real en YouTube
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
