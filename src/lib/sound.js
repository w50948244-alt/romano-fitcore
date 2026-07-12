// Genera sonidos simples con la Web Audio API, sin necesitar archivos de audio externos
let audioCtx = null

function getContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

function tono(frecuencia, duracion, tipo = 'sine', volumen = 0.15, delay = 0) {
  try {
    const ctx = getContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = tipo
    osc.frequency.value = frecuencia
    gain.gain.value = volumen
    osc.connect(gain)
    gain.connect(ctx.destination)
    const inicio = ctx.currentTime + delay
    osc.start(inicio)
    gain.gain.exponentialRampToValueAtTime(0.001, inicio + duracion)
    osc.stop(inicio + duracion)
  } catch (e) {
    // Si el navegador bloquea el audio (por no haber interaccion previa), simplemente no suena
  }
}

// Sonido cuando termina el descanso entre series
export function sonidoDescansoTerminado() {
  tono(660, 0.15, 'sine', 0.18, 0)
  tono(880, 0.2, 'sine', 0.18, 0.15)
}

// Sonido de celebracion al terminar el entrenamiento completo
export function sonidoLogro() {
  tono(523, 0.15, 'triangle', 0.15, 0)
  tono(659, 0.15, 'triangle', 0.15, 0.12)
  tono(784, 0.25, 'triangle', 0.18, 0.24)
}