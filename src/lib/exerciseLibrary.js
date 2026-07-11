export const libreriaEjercicios = {
  'Press banca': {
    grupo: 'Pecho',
    nivel: 'intermedio',
    guia: [
      'Acuestate en el banco con los pies firmes en el piso.',
      'Agarra la barra un poco mas ancho que los hombros.',
      'Baja la barra controladamente hasta rozar el pecho.',
      'Empuja hacia arriba sin despegar los gluteos del banco.',
    ],
  },
  'Press militar': {
    grupo: 'Hombro',
    nivel: 'intermedio',
    guia: [
      'De pie o sentado, sujeta la barra a la altura de los hombros.',
      'Empuja hacia arriba hasta extender los brazos por completo.',
      'Baja controladamente hasta la posicion inicial.',
      'Manten el core apretado durante todo el movimiento.',
    ],
  },
  'Dominadas': {
    grupo: 'Espalda',
    nivel: 'avanzado',
    guia: [
      'Agarra la barra con las palmas hacia afuera, un poco mas ancho que los hombros.',
      'Sube el cuerpo hasta que la barbilla pase la barra.',
      'Baja controladamente hasta extender los brazos completamente.',
      'Evita balancear el cuerpo para tomar impulso.',
    ],
  },
  'Remo con barra': {
    grupo: 'Espalda',
    nivel: 'intermedio',
    guia: [
      'Inclina el torso hacia adelante manteniendo la espalda recta.',
      'Sujeta la barra con agarre firme.',
      'Tira de la barra hacia el abdomen apretando los omoplatos.',
      'Baja controladamente sin redondear la espalda.',
    ],
  },
  'Sentadilla': {
    grupo: 'Pierna',
    nivel: 'principiante',
    guia: [
      'Coloca la barra sobre los trapecios, pies al ancho de hombros.',
      'Baja flexionando cadera y rodillas, manteniendo la espalda recta.',
      'Baja hasta que los muslos queden paralelos al piso.',
      'Empuja con los talones para volver a subir.',
    ],
  },
  'Peso muerto': {
    grupo: 'Pierna/Espalda',
    nivel: 'avanzado',
    guia: [
      'Pies al ancho de cadera, barra pegada a las espinillas.',
      'Sujeta la barra con espalda recta y pecho arriba.',
      'Levanta empujando el piso con los pies, extendiendo cadera y rodillas juntas.',
      'Baja controladamente siguiendo el mismo recorrido.',
    ],
  },
  'Zancadas': {
    grupo: 'Pierna',
    nivel: 'principiante',
    guia: [
      'Da un paso largo hacia adelante.',
      'Baja hasta que ambas rodillas formen un angulo de 90 grados.',
      'Empuja con el talon delantero para volver a la posicion inicial.',
      'Alterna piernas o completa todas las repeticiones de un lado primero.',
    ],
  },
  'Curl de biceps': {
    grupo: 'Brazo',
    nivel: 'principiante',
    guia: [
      'De pie, sujeta las mancuernas con los brazos extendidos.',
      'Flexiona los codos llevando el peso hacia los hombros.',
      'Manten los codos pegados al torso durante el movimiento.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },
  'Plancha': {
    grupo: 'Core',
    nivel: 'principiante',
    guia: [
      'Apoyate sobre antebrazos y puntas de los pies.',
      'Manten el cuerpo en linea recta de cabeza a talones.',
      'Aprieta el abdomen y los gluteos.',
      'Evita que la cadera suba o baje demasiado.',
    ],
  },
  'Caminadora / Cardio suave': {
    grupo: 'Cardio',
    nivel: 'principiante',
    guia: [
      'Manten un ritmo constante donde puedas hablar sin ahogarte.',
      'Postura erguida, brazos relajados.',
      'Ideal 20-30 minutos para empezar.',
      'Aumenta intensidad gradualmente semana a semana.',
    ],
  },
}

export function buscarGuia(nombreEjercicio) {
  const encontrado = Object.keys(libreriaEjercicios).find(
    (key) => key.toLowerCase() === nombreEjercicio.toLowerCase()
  )
  if (encontrado) return libreriaEjercicios[encontrado]
  return {
    grupo: 'General',
    guia: [
      'Manten siempre la espalda recta y el core activado.',
      'Controla el movimiento tanto al subir como al bajar el peso.',
      'Respira: exhala al hacer fuerza, inhala al regresar.',
      'Si sientes dolor (no fatiga muscular normal), detente.',
    ],
  }
}

export function generarRutinaRecomendada(profile) {
  const edad = Number(profile.age) || 25
  const peso = Number(profile.weightStart) || 70
  const altura = Number(profile.height) || 170
  const objetivo = (profile.goal || '').toLowerCase()

  const imc = peso / Math.pow(altura / 100, 2)

  let nivel = 'intermedio'
  if (edad >= 45 || imc >= 30) nivel = 'principiante'
  else if (edad <= 30 && imc < 25) nivel = 'avanzado'

  const cargasBase = {
    principiante: { sets: 3, reps: 12, factor: 0.4 },
    intermedio: { sets: 4, reps: 10, factor: 0.6 },
    avanzado: { sets: 4, reps: 8, factor: 0.8 },
  }[nivel]

  const kgSugerido = (multiplicador) =>
    Math.max(0, Math.round(((peso * cargasBase.factor * multiplicador) / 2.5)) * 2.5)

  let ejercicios = []

  if (objetivo.includes('perder') || objetivo.includes('bajar') || objetivo.includes('grasa')) {
    ejercicios = [
      { name: 'Sentadilla', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.5) },
      { name: 'Zancadas', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.2) },
      { name: 'Plancha', sets: 3, reps: 30, kg: 0 },
      { name: 'Caminadora / Cardio suave', sets: 1, reps: 1, kg: 0 },
    ]
  } else if (objetivo.includes('fuerza') || objetivo.includes('musculo') || objetivo.includes('ganar')) {
    ejercicios = [
      { name: 'Press banca', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.7) },
      { name: 'Peso muerto', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(1) },
      { name: 'Remo con barra', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.6) },
      { name: 'Press militar', sets: cargasBase.sets, reps: cargasBase.reps, kg: kgSugerido(0.4) },
    ]
  } else {
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
