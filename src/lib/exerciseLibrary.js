// Librería de ejercicios: cada uno con su grupo muscular, nivel y guía paso a paso
export const libreriaEjercicios = {
  // ---- PECHO ----
  'Press banca': {
    grupo: 'Pecho', nivel: 'intermedio',
    guia: [
      'Acuéstate en el banco con los pies firmes en el piso.',
      'Agarra la barra un poco más ancho que los hombros.',
      'Baja la barra controladamente hasta rozar el pecho.',
      'Empuja hacia arriba sin despegar los glúteos del banco.',
    ],
  },
  'Press inclinado con mancuernas': {
    grupo: 'Pecho', nivel: 'intermedio',
    guia: [
      'Ajusta el banco a 30-45 grados de inclinación.',
      'Sujeta una mancuerna en cada mano a la altura del pecho.',
      'Empuja hacia arriba hasta extender los brazos.',
      'Baja controladamente sin golpear los hombros.',
    ],
  },
  'Aperturas con mancuernas': {
    grupo: 'Pecho', nivel: 'principiante',
    guia: [
      'Acuéstate en el banco con una mancuerna en cada mano, brazos extendidos arriba.',
      'Abre los brazos hacia los lados con un ligero ángulo en el codo.',
      'Baja hasta sentir el estiramiento en el pecho.',
      'Vuelve a subir juntando las mancuernas arriba.',
    ],
  },
  'Fondos en paralelas': {
    grupo: 'Pecho', nivel: 'avanzado',
    guia: [
      'Sujétate de las barras paralelas con los brazos extendidos.',
      'Baja el cuerpo flexionando los codos, inclinando el torso ligeramente hacia adelante.',
      'Baja hasta sentir estiramiento en el pecho.',
      'Empuja hacia arriba hasta extender los brazos por completo.',
    ],
  },

  // ---- ESPALDA ----
  'Dominadas': {
    grupo: 'Espalda', nivel: 'avanzado',
    guia: [
      'Agarra la barra con las palmas hacia afuera, un poco más ancho que los hombros.',
      'Sube el cuerpo hasta que la barbilla pase la barra.',
      'Baja controladamente hasta extender los brazos completamente.',
      'Evita balancear el cuerpo para tomar impulso.',
    ],
  },
  'Remo con barra': {
    grupo: 'Espalda', nivel: 'intermedio',
    guia: [
      'Inclina el torso hacia adelante manteniendo la espalda recta.',
      'Sujeta la barra con agarre firme.',
      'Tira de la barra hacia el abdomen apretando los omóplatos.',
      'Baja controladamente sin redondear la espalda.',
    ],
  },
  'Jalón al pecho': {
    grupo: 'Espalda', nivel: 'principiante',
    guia: [
      'Sujeta la barra de la polea alta más ancho que los hombros.',
      'Tira hacia abajo llevando la barra hasta el pecho.',
      'Aprieta los omóplatos al final del movimiento.',
      'Sube controladamente sin usar impulso.',
    ],
  },
  'Remo con mancuerna': {
    grupo: 'Espalda', nivel: 'principiante',
    guia: [
      'Apoya una rodilla y una mano en el banco, la otra mano sujeta la mancuerna.',
      'Tira de la mancuerna hacia la cadera, codo pegado al cuerpo.',
      'Aprieta la espalda arriba del movimiento.',
      'Baja controladamente sin girar el torso.',
    ],
  },

  // ---- PIERNA ----
  'Sentadilla': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Coloca la barra sobre los trapecios, pies al ancho de hombros.',
      'Baja flexionando cadera y rodillas, manteniendo la espalda recta.',
      'Baja hasta que los muslos queden paralelos al piso.',
      'Empuja con los talones para volver a subir.',
    ],
  },
  'Peso muerto': {
    grupo: 'Pierna/Espalda', nivel: 'avanzado',
    guia: [
      'Pies al ancho de cadera, barra pegada a las espinillas.',
      'Sujeta la barra con espalda recta y pecho arriba.',
      'Levanta empujando el piso con los pies, extendiendo cadera y rodillas juntas.',
      'Baja controladamente siguiendo el mismo recorrido.',
    ],
  },
  'Zancadas': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Da un paso largo hacia adelante.',
      'Baja hasta que ambas rodillas formen un ángulo de 90 grados.',
      'Empuja con el talón delantero para volver a la posición inicial.',
      'Alterna piernas o completa todas las repeticiones de un lado primero.',
    ],
  },
  'Prensa de piernas': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Siéntate en la máquina con los pies al ancho de hombros sobre la plataforma.',
      'Baja controladamente flexionando las rodillas hacia el pecho.',
      'Empuja la plataforma hasta casi extender las piernas, sin bloquear las rodillas.',
      'Controla el descenso, no dejes caer el peso.',
    ],
  },
  'Extensión de cuádriceps': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Siéntate en la máquina con las piernas dobladas bajo el rodillo.',
      'Extiende las piernas hacia adelante hasta casi estirarlas por completo.',
      'Mantén un segundo arriba apretando el cuádriceps.',
      'Baja controladamente sin soltar el peso de golpe.',
    ],
  },

  // ---- HOMBRO ----
  'Press militar': {
    grupo: 'Hombro', nivel: 'intermedio',
    guia: [
      'De pie o sentado, sujeta la barra a la altura de los hombros.',
      'Empuja hacia arriba hasta extender los brazos por completo.',
      'Baja controladamente hasta la posición inicial.',
      'Mantén el core apretado durante todo el movimiento.',
    ],
  },
  'Elevaciones laterales': {
    grupo: 'Hombro', nivel: 'principiante',
    guia: [
      'De pie, sujeta una mancuerna en cada mano a los lados.',
      'Eleva los brazos hacia los lados hasta la altura de los hombros.',
      'Mantén un ligero ángulo en el codo durante todo el movimiento.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },
  'Face pull': {
    grupo: 'Hombro', nivel: 'intermedio',
    guia: [
      'Sujeta la cuerda de la polea a la altura de la cara.',
      'Tira hacia tu cara separando las manos al final del recorrido.',
      'Aprieta los omóplatos y los hombros hacia atrás.',
      'Vuelve controladamente a la posición inicial.',
    ],
  },

  // ---- BRAZO ----
  'Curl de bíceps': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'De pie, sujeta las mancuernas con los brazos extendidos.',
      'Flexiona los codos llevando el peso hacia los hombros.',
      'Mantén los codos pegados al torso durante el movimiento.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },
  'Extensión de tríceps': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'Sujeta la cuerda o barra de la polea alta con ambas manos.',
      'Mantén los codos pegados al torso.',
      'Extiende los brazos hacia abajo hasta estirarlos por completo.',
      'Vuelve controladamente sin mover los codos.',
    ],
  },
  'Curl martillo': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'De pie, sujeta las mancuernas con las palmas mirando hacia el cuerpo.',
      'Flexiona los codos manteniendo esa posición de agarre.',
      'Sube hasta la altura del hombro.',
      'Baja controladamente sin girar la muñeca.',
    ],
  },

  // ---- CORE ----
  'Plancha': {
    grupo: 'Core', nivel: 'principiante',
    guia: [
      'Apóyate sobre antebrazos y puntas de los pies.',
      'Mantén el cuerpo en línea recta de cabeza a talones.',
      'Aprieta el abdomen y los glúteos.',
      'Evita que la cadera suba o baje demasiado.',
    ],
  },
  'Elevación de piernas': {
    grupo: 'Core', nivel: 'intermedio',
    guia: [
      'Acuéstate boca arriba con las piernas extendidas.',
      'Eleva las piernas juntas hasta formar un ángulo de 90 grados.',
      'Baja controladamente sin tocar el piso del todo.',
      'Mantén la espalda baja pegada al piso durante todo el movimiento.',
    ],
  },
  'Russian twist': {
    grupo: 'Core', nivel: 'intermedio',
    guia: [
      'Siéntate con las rodillas dobladas, torso ligeramente reclinado.',
      'Sujeta un peso con ambas manos frente al pecho.',
      'Gira el torso de lado a lado tocando el piso con el peso.',
      'Mantén los pies elevados para mayor dificultad si puedes.',
    ],
  },

  // ---- CARDIO ----
  'Caminadora / Cardio suave': {
    grupo: 'Cardio', nivel: 'principiante',
    guia: [
      'Mantén un ritmo constante donde puedas hablar sin ahogarte.',
      'Postura erguida, brazos relajados.',
      'Ideal 20-30 minutos para empezar.',
      'Aumenta intensidad gradualmente semana a semana.',
    ],
  },
  'Bicicleta estática': {
    grupo: 'Cardio', nivel: 'principiante',
    guia: [
      'Ajusta el asiento a la altura de tu cadera.',
      'Mantén un ritmo de pedaleo constante.',
      'Espalda recta, sin apoyarte demasiado en el manubrio.',
      'Ideal 15-25 minutos.',
    ],
  },
  'Salto de cuerda': {
    grupo: 'Cardio', nivel: 'intermedio',
    guia: [
      'Sujeta la cuerda con los codos cerca del cuerpo.',
      'Salta lo justo para que la cuerda pase bajo tus pies.',
      'Aterriza suave, sobre la punta de los pies.',
      'Empieza con intervalos cortos de 30-60 segundos.',
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

function calcularNivelYCargas(profile) {
  const edad = Number(profile.age) || 25
  const peso = Number(profile.weightStart) || 70
  const altura = Number(profile.height) || 170
  const imc = peso / Math.pow(altura / 100, 2)

  let nivel = 'intermedio'
  if (edad >= 45 || imc >= 30) nivel = 'principiante'
  else if (edad <= 30 && imc < 25) nivel = 'avanzado'

  const cargasBase = {
    principiante: { sets: 3, reps: 12, factor: 0.4 },
    intermedio: { sets: 4, reps: 10, factor: 0.6 },
    avanzado: { sets: 4, reps: 8, factor: 0.8 },
  }[nivel]

  return { nivel, cargasBase, peso }
}

export function generarRutinaRecomendada(profile) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile)
  const objetivo = (profile.goal || '').toLowerCase()
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

export function generarRutinaPorGrupo(profile, grupoElegido) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile)
  const kgSugerido = () => Math.max(0, Math.round(((peso * cargasBase.factor * 0.6) / 2.5)) * 2.5)

  const ejercicios = Object.entries(libreriaEjercicios)
    .filter(([, info]) => info.grupo.includes(grupoElegido))
    .map(([nombre], i) => ({
      name: nombre,
      sets: cargasBase.sets,
      reps: cargasBase.reps,
      kg: kgSugerido(),
      id: `rec_${Date.now()}_${i}`,
    }))

  return {
    name: `${grupoElegido} (nivel ${nivel})`,
    days: [],
    exercises: ejercicios,
  }
}

// Plantillas de "split" (distribución semanal) segun cuantos dias eligio el usuario
const SPLITS = {
  1: [{ nombre: 'Full Body', grupos: ['Pecho', 'Espalda', 'Pierna'] }],
  2: [
    { nombre: 'Tren Superior', grupos: ['Pecho', 'Espalda', 'Hombro', 'Brazo'] },
    { nombre: 'Tren Inferior', grupos: ['Pierna', 'Core'] },
  ],
  3: [
    { nombre: 'Empuje (Pecho/Hombro/Tríceps)', grupos: ['Pecho', 'Hombro', 'Brazo'] },
    { nombre: 'Tirón (Espalda/Bíceps)', grupos: ['Espalda', 'Brazo'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Core'] },
  ],
  4: [
    { nombre: 'Pecho y Tríceps', grupos: ['Pecho', 'Brazo'] },
    { nombre: 'Espalda y Bíceps', grupos: ['Espalda', 'Brazo'] },
    { nombre: 'Pierna', grupos: ['Pierna'] },
    { nombre: 'Hombro y Core', grupos: ['Hombro', 'Core'] },
  ],
  5: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda'] },
    { nombre: 'Pierna', grupos: ['Pierna'] },
    { nombre: 'Hombro', grupos: ['Hombro'] },
    { nombre: 'Brazo y Core', grupos: ['Brazo', 'Core'] },
  ],
  6: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda'] },
    { nombre: 'Pierna', grupos: ['Pierna'] },
    { nombre: 'Hombro', grupos: ['Hombro'] },
    { nombre: 'Brazo', grupos: ['Brazo'] },
    { nombre: 'Core y Cardio', grupos: ['Core', 'Cardio'] },
  ],
  7: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda'] },
    { nombre: 'Pierna', grupos: ['Pierna'] },
    { nombre: 'Hombro', grupos: ['Hombro'] },
    { nombre: 'Brazo', grupos: ['Brazo'] },
    { nombre: 'Core y Cardio', grupos: ['Core', 'Cardio'] },
    { nombre: 'Cardio ligero (recuperación activa)', grupos: ['Cardio'] },
  ],
}

// Genera un horario semanal completo: una rutina por cada dia elegido, con ejercicios variados
// diasElegidos = ['Lunes', 'Miercoles', 'Viernes'] por ejemplo
export function generarHorarioSemanal(profile, diasElegidos) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile)
  const kgSugerido = () => Math.max(0, Math.round(((peso * cargasBase.factor * 0.6) / 2.5)) * 2.5)

  const cantidadDias = Math.min(Math.max(diasElegidos.length, 1), 7)
  const plantilla = SPLITS[cantidadDias]

  return diasElegidos.map((dia, i) => {
    const bloque = plantilla[i % plantilla.length]
    const ejerciciosDelBloque = Object.entries(libreriaEjercicios)
      .filter(([, info]) => bloque.grupos.some((g) => info.grupo.includes(g)))
      .slice(0, 5) // maximo 5 ejercicios por dia para no hacerlo interminable
      .map(([nombre], idx) => ({
        name: nombre,
        sets: cargasBase.sets,
        reps: cargasBase.reps,
        kg: kgSugerido(),
        id: `horario_${Date.now()}_${i}_${idx}`,
      }))

    return {
      name: `${bloque.nombre} (nivel ${nivel})`,
      days: [dia],
      exercises: ejerciciosDelBloque,
    }
  })
}