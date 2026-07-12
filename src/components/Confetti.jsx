import { useMemo } from 'react'

const COLORES = ['#dc2626', '#f59e0b', '#22c55e', '#3b82f6', '#eab308', '#ffffff']

export default function Confetti() {
  const piezas = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duracion: 1.8 + Math.random() * 1.2,
      color: COLORES[Math.floor(Math.random() * COLORES.length)],
      rotacionInicial: Math.random() * 360,
      tamano: 7 + Math.random() * 6,
    }))
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes caerConfetiFitcore {
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
            animationName: 'caerConfetiFitcore',
            animationDuration: `${p.duracion}s`,
            animationTimingFunction: 'ease-in',
            animationDelay: `${p.delay}s`,
            animationFillMode: 'forwards',
            transform: `rotate(${p.rotacionInicial}deg)`,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  )
}