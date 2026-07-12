import { useMemo } from 'react'

const COLORES = ['#dc2626', '#f59e0b', '#22c55e', '#3b82f6', '#eab308', '#ffffff']

export default function Confetti() {
  const piezas = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duracion: 2 + Math.random() * 1.5,
      color: COLORES[Math.floor(Math.random() * COLORES.length)],
      rotacionInicial: Math.random() * 360,
      tamano: 6 + Math.random() * 6,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <style>{`
        @keyframes caerConfeti {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0.9; }
        }
      `}</style>
      {piezas.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: 0,
            width: p.tamano,
            height: p.tamano * 1.6,
            backgroundColor: p.color,
            animation: `caerConfeti ${p.duracion}s ease-in ${p.delay}s forwards`,
            transform: `rotate(${p.rotacionInicial}deg)`,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  )
}