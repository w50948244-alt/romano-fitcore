// Librería de ejercicios: cada uno con su grupo muscular y guía paso a paso
export const libreriaEjercicios = {
  'Press banca': {
    grupo: 'Pecho',
    guia: [
      'Acuéstate en el banco con los pies firmes en el piso.',
      'Agarra la barra un poco más ancho que los hombros.',
      'Baja la barra controladamente hasta rozar el pecho.',
      'Empuja hacia arriba sin despegar los glúteos del banco.',
    ],
  },
  'Press militar': {
    grupo: 'Hombro',
    guia: [
      'De pie o sentado, sujeta la barra a la altura de los hombros.',
      'Empuja hacia arriba hasta extender los brazos por completo.',
      'Baja controladamente hasta la posición inicial.',
      'Mantén el core apretado durante todo el movimiento.',
    ],
  },
  'Dominadas': {
    grupo: 'Espalda',
    guia: [
      'Agarra la barra con las palmas hacia afuera, un poco más ancho que los hombros.',
      'Sube el cuerpo hasta que la barbilla pase la barra.',
      'Baja controladamente hasta extender los brazos completamente.',
      'Evita balancear el cuerpo para tomar impulso.',
    ],
  },
  'Remo con barra': {
    grupo: 'Espalda',
    guia: [
      'Inclina el torso hacia adelante manteniendo la espalda recta.',
      'Sujeta la barra con agarre firme.',
      'Tira de la barra hacia el abdomen apretando los omóplatos.',
      'Baja controladamente sin redondear la espalda.',
    ],
  },
  'Sentadilla': {
    grupo: 'Pierna',
    guia: [
      'Coloca la barra sobre los trapecios, pies al ancho de hombros.',
      'Baja flexionando cadera y rodillas, manteniendo la espalda recta.',
      'Baja hasta que los muslos queden paralelos al piso (o más si tu movilidad lo permite).',
      'Empuja con los talones para volver a subir.',
    ],
  },
  'Peso muerto': {
    grupo: 'Pierna/Espalda',
    guia: [
      'Pies al ancho de cadera, barra pegada a las espinillas.',
      'Sujeta la barra con espalda recta y pecho arriba.',
      'Levanta empujando el piso con los pies, extendiendo cadera y rodillas juntas.',
      'Baja controladamente siguiendo el mismo recorrido.',
    ],
  },
  'Zancadas': {
    grupo: 'Pierna',
    guia: [
      'Da un paso largo hacia adelante.',
      'Baja hasta que ambas rodillas formen un ángulo de 90°.',
      'Empuja con el talón delantero para volver a la posición inicial.',
      'Alterna piernas o completa todas las repeticiones de un lado primero.',
    ],
  },
  'Curl de bíceps': {
    grupo: 'Brazo',
    guia: [
      'De pie, sujeta las mancuernas con los brazos extendidos.',
      'Flexiona los codos llevando el peso hacia los hombros.',
      'Mantén los codos pegados al torso durante el movimiento.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },
  'Plancha': {
    grupo: 'Core',
    guia: [
      'Apóyate sobre antebrazos y puntas de los pies.',
      'Mantén el cuerpo en línea recta de cabeza a talones.',
      'Aprieta el abdomen y los glúteos.',
      'Evita que la cadera suba o baje demasiado.',
    ],
  },
  'Caminadora / Cardio suave': {
    grupo: 'Cardio',
    guia: [
      'Mantén un ritmo constante donde puedas hablar sin ahogarte.',
      'Postura erguida, brazos relajados.',
      'Ideal 20-30 minutos para empezar.',
      'Aumenta intensidad gradualmente semana a semana.',
    ],
  },
}

// Busca una guía por nombre de ejercicio (coincidencia flexible)
export function buscarGuia(nombreEjercicio) {
  const encontrado = Object.keys(libreriaEjercicios).find(
    (key) => key.toLowerCase() === nombreEjercicio.toLowerCase()
  )
  if (encontrado) return libreriaEjercicios[encontrado]
  return {
    grupo: 'General',
    guia: [
      'Mantén siempre la espalda recta y el core activado.',
      'Controla el movimiento tanto al subir como al bajar el peso.',
      'Respira: exhala al hacer fuerza, inhala al regresar.',
      'Si sientes dolor (no fatiga muscular normal), detente.',
    ],
  }
}

// Genera una rutina recomendada según el perfil del usuario (edad, peso, altura, objetivo)
export function generarRutinaRecomendada(profile) {
  const edad = Number(profile.age) || 25
  const peso = Number(profile.weightStart) || 70
  const altura = Number(profile.height) || 170
  const objetivo = (profile.goal || '').toLowerCase()

  const imc = peso / Math.pow(altura / 100, 2)

  // Nivel de intensidad según edad e IMC (más conservador si hay más edad o IMC alto)
  let nivel = 'intermedio'
  if (edad >= 45 || imc >= 30) nivel = 'principiante'
  else if (edad <= 30 && imc < 25) nivel = 'avanzado'

  const cargasBase = {
    principiante: { sets: 3, reps: 12, factor: 0.4 },
    intermedio: { sets: 4, reps: 10, factor: 0.6 },
    avanzado: { sets: 4, reps: 8, factor: 0.8 },
  }[nivel]

  // kg sugerido = un porcentaje del peso corporal, redondeado a multiplos de 2.5
  const kgSugerido = (multiplicador) =>
    Math.max(0, Math.round(((peso * cargasBase.factor * multiplicador) / 2.5)) * 2.5)

  let ejercicios = []

  if (objetivo.includes('perder') || objetivo.includes('bajar') || objetivo.includes('grasa')) {
    // Objetivo: pérdida de grasa → más cardio y circuitos de cuerpo completo
    ejercicios = [
      { name: 'Sentadilla', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.5) },
      { name: 'Zancadas', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.2) },
      { name: 'Plancha', sets: 3, reps: 30, kg: 0 },
      { name: 'Caminadora / Cardio suave', sets: 1, reps: 1, kg: 0 },
    ]
  } else if (objetivo.includes('fuerza') || objetivo.includes('músculo') || objetivo.includes('muscul') || objetivo.includes('ganar')) {
    // Objetivo: fuerza / ganar músculo → pesos compuestos más pesados
    ejercicios = [
      { name: 'Press banca', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.7) },
      { name: 'Peso muerto', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(1) },
      { name: 'Remo con barra', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.6) },
      { name: 'Press militar', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.4) },
    ]
  } else {
    // Objetivo general / mantenimiento
    ejercicios = [
      { name: 'Sentadilla', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.5) },
      { name: 'Press banca', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.5) },
      { name: 'Remo con barra', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.5) },
      { name: 'Plancha', sets: 3, reps: 30, kg: 0 },
    ]
  }

  return {
    name: `Rutina para ti (nivel ${nivel})`,
    days: [],
    exercises: ejercicios.map((ex, i) => ({ ...ex, id: `rec_${Date.now()}_${i}` })),
  }
}