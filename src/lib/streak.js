// Calcula cuántos días consecutivos ha entrenado el usuario, a partir de sus logs y dias marcados manualmente
export function calcularRacha(logs, manualDays = []) {
  const fechasLogs = (logs || []).map((l) => new Date(l.date).toDateString())
  const todasLasFechas = [...new Set([...fechasLogs, ...(manualDays || [])])]
  if (!todasLasFechas.length) return 0

  const dias = todasLasFechas
    .map((d) => new Date(d))
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

// Dice si el usuario ya entreno hoy (para no romper la racha visualmente)
export function entrenoHoy(logs) {
  if (!logs || !logs.length) return false
  const hoy = new Date().toDateString()
  return logs.some((l) => new Date(l.date).toDateString() === hoy)
}