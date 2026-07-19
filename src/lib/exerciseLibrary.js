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
  'Press declinado': {
    grupo: 'Pecho', nivel: 'intermedio',
    guia: [
      'Acuéstate en el banco declinado con los pies asegurados.',
      'Sujeta la barra un poco más ancho que los hombros.',
      'Baja la barra hasta la parte baja del pecho.',
      'Empuja hacia arriba sin bloquear los codos de golpe.',
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
  'Cruce de poleas': {
    grupo: 'Pecho', nivel: 'intermedio',
    guia: [
      'Sujeta ambas poleas altas con los brazos extendidos a los lados.',
      'Junta las manos al frente del pecho con un ligero ángulo en el codo.',
      'Aprieta el pecho al final del movimiento.',
      'Vuelve controladamente a la posición inicial.',
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
  'Flexiones de pecho': {
    grupo: 'Pecho', nivel: 'principiante',
    guia: [
      'Manos al ancho de hombros, cuerpo en línea recta.',
      'Baja el pecho hacia el piso flexionando los codos.',
      'Mantén el core apretado durante todo el movimiento.',
      'Empuja hacia arriba hasta extender los brazos.',
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
  'Dominadas supinas': {
    grupo: 'Espalda', nivel: 'intermedio',
    guia: [
      'Agarra la barra con las palmas hacia ti, al ancho de los hombros.',
      'Sube el cuerpo hasta que la barbilla pase la barra.',
      'Enfócate en apretar la espalda y el bíceps.',
      'Baja controladamente sin soltar de golpe.',
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
  'Remo en polea baja': {
    grupo: 'Espalda', nivel: 'principiante',
    guia: [
      'Siéntate con las rodillas ligeramente flexionadas, sujeta el agarre.',
      'Tira hacia el abdomen manteniendo la espalda recta.',
      'Aprieta los omóplatos al final del recorrido.',
      'Vuelve controladamente sin redondear la espalda.',
    ],
  },
  'Peso muerto rumano': {
    grupo: 'Espalda', nivel: 'intermedio',
    guia: [
      'De pie, sujeta la barra al frente con los brazos extendidos.',
      'Baja la barra pegada a las piernas, empujando la cadera hacia atrás.',
      'Mantén las rodillas casi rectas con una ligera flexión.',
      'Sube apretando glúteos y espalda baja.',
    ],
  },
  'Hiperextensiones': {
    grupo: 'Espalda', nivel: 'principiante',
    guia: [
      'Colócate en el banco de hiperextensiones con la cadera apoyada.',
      'Baja el torso controladamente manteniendo la espalda recta.',
      'Sube apretando la espalda baja y los glúteos.',
      'Evita hiperextender demasiado arriba.',
    ],
  },

  // ---- PIERNA (cuádriceps / isquios / glúteos) ----
  'Sentadilla': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Coloca la barra sobre los trapecios, pies al ancho de hombros.',
      'Baja flexionando cadera y rodillas, manteniendo la espalda recta.',
      'Baja hasta que los muslos queden paralelos al piso.',
      'Empuja con los talones para volver a subir.',
    ],
  },
  'Sentadilla frontal': {
    grupo: 'Pierna', nivel: 'avanzado',
    guia: [
      'Coloca la barra al frente sobre los hombros, codos elevados.',
      'Baja manteniendo el torso lo más vertical posible.',
      'Baja hasta que los muslos queden paralelos al piso.',
      'Empuja con los talones para subir sin perder el equilibrio.',
    ],
  },
  'Sentadilla búlgara': {
    grupo: 'Pierna', nivel: 'intermedio',
    guia: [
      'Coloca un pie atrás apoyado en un banco.',
      'Baja flexionando la rodilla delantera hasta casi 90 grados.',
      'Mantén el torso erguido durante el movimiento.',
      'Empuja con el talón delantero para subir.',
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
  'Zancadas caminando': {
    grupo: 'Pierna', nivel: 'intermedio',
    guia: [
      'Da un paso largo hacia adelante y baja la rodilla trasera casi al piso.',
      'Empuja con el talón delantero y avanza al siguiente paso sin detenerte.',
      'Mantén el torso erguido durante todo el recorrido.',
      'Alterna piernas en cada paso.',
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
  'Curl femoral (isquiotibiales)': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Acuéstate boca abajo en la máquina con los tobillos bajo el rodillo.',
      'Flexiona las rodillas llevando los talones hacia los glúteos.',
      'Aprieta los isquiotibiales al final del movimiento.',
      'Baja controladamente sin soltar el peso de golpe.',
    ],
  },
  'Puente de glúteo': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Acuéstate boca arriba con las rodillas flexionadas, pies apoyados.',
      'Eleva la cadera apretando los glúteos.',
      'Mantén un segundo arriba en la posición más alta.',
      'Baja controladamente sin dejar caer la cadera de golpe.',
    ],
  },
  'Hip thrust': {
    grupo: 'Pierna', nivel: 'intermedio',
    guia: [
      'Apoya la espalda alta en un banco, barra sobre la cadera.',
      'Pies firmes en el piso, rodillas a 90 grados.',
      'Empuja la cadera hacia arriba apretando los glúteos.',
      'Baja controladamente sin perder la tensión.',
    ],
  },
  'Abducción de cadera': {
    grupo: 'Pierna', nivel: 'principiante',
    guia: [
      'Siéntate en la máquina con las piernas juntas contra los apoyos.',
      'Abre las piernas hacia afuera contra la resistencia.',
      'Aprieta el glúteo medio al final del movimiento.',
      'Vuelve controladamente a la posición inicial.',
    ],
  },

  // ---- PANTORRILLA ----
  'Elevación de talones de pie': {
    grupo: 'Pantorrilla', nivel: 'principiante',
    guia: [
      'De pie, con o sin peso, apóyate en la punta de los pies.',
      'Sube lo más alto posible elevando los talones.',
      'Mantén un segundo arriba apretando la pantorrilla.',
      'Baja controladamente hasta estirar completamente.',
    ],
  },
  'Elevación de talones sentado': {
    grupo: 'Pantorrilla', nivel: 'principiante',
    guia: [
      'Siéntate en la máquina con las rodillas bajo el apoyo.',
      'Sube los talones lo más alto posible.',
      'Aprieta la pantorrilla arriba del movimiento.',
      'Baja controladamente hasta sentir el estiramiento.',
    ],
  },
  'Salto de pantorrilla en prensa': {
    grupo: 'Pantorrilla', nivel: 'intermedio',
    guia: [
      'En la máquina de prensa, coloca solo la punta de los pies en la plataforma.',
      'Empuja extendiendo el tobillo, elevando el peso.',
      'Aprieta la pantorrilla al final del movimiento.',
      'Baja controladamente sin rebotar bruscamente.',
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
  'Press Arnold': {
    grupo: 'Hombro', nivel: 'avanzado',
    guia: [
      'Sentado, sujeta las mancuernas frente a los hombros con las palmas hacia ti.',
      'Empuja hacia arriba girando las palmas hacia afuera al extender.',
      'En la posición alta, los brazos deben estar extendidos con palmas al frente.',
      'Baja controladamente invirtiendo el giro.',
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
  'Elevaciones frontales': {
    grupo: 'Hombro', nivel: 'principiante',
    guia: [
      'De pie, sujeta una mancuerna en cada mano al frente de los muslos.',
      'Eleva un brazo (o ambos) al frente hasta la altura del hombro.',
      'Baja controladamente sin usar impulso.',
      'Alterna brazos si haces uno a la vez.',
    ],
  },
  'Pájaros (deltoide posterior)': {
    grupo: 'Hombro', nivel: 'principiante',
    guia: [
      'Inclina el torso hacia adelante con las mancuernas colgando.',
      'Eleva los brazos hacia los lados apretando los omóplatos.',
      'Mantén un ligero ángulo en el codo.',
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

  // ---- TRAPECIO ----
  'Encogimientos con mancuernas': {
    grupo: 'Trapecio', nivel: 'principiante',
    guia: [
      'De pie, sujeta una mancuerna en cada mano a los costados.',
      'Eleva los hombros hacia las orejas, sin usar los brazos.',
      'Mantén un segundo arriba apretando el trapecio.',
      'Baja controladamente sin dejar caer el peso de golpe.',
    ],
  },
  'Encogimientos con barra': {
    grupo: 'Trapecio', nivel: 'intermedio',
    guia: [
      'De pie, sujeta la barra al frente con agarre firme.',
      'Eleva los hombros hacia arriba en línea recta.',
      'Aprieta el trapecio en la parte alta del movimiento.',
      'Baja controladamente hasta la posición inicial.',
    ],
  },
  'Remo al mentón': {
    grupo: 'Trapecio', nivel: 'intermedio',
    guia: [
      'De pie, sujeta la barra con agarre cerrado frente al cuerpo.',
      'Tira hacia arriba llevando los codos por encima de las manos.',
      'Sube hasta la altura del mentón.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },

  // ---- BRAZO (bíceps / tríceps) ----
  'Curl de bíceps': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'De pie, sujeta las mancuernas con los brazos extendidos.',
      'Flexiona los codos llevando el peso hacia los hombros.',
      'Mantén los codos pegados al torso durante el movimiento.',
      'Baja controladamente sin balancear el cuerpo.',
    ],
  },
  'Curl con barra': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'De pie, sujeta la barra con agarre supino al ancho de hombros.',
      'Flexiona los codos llevando la barra hacia el pecho.',
      'Mantén los codos pegados al torso.',
      'Baja controladamente sin balancear el cuerpo.',
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
  'Curl concentrado': {
    grupo: 'Brazo', nivel: 'intermedio',
    guia: [
      'Siéntate, apoya el codo en la parte interna del muslo.',
      'Sujeta la mancuerna con el brazo extendido hacia el piso.',
      'Flexiona el codo llevando el peso hacia el hombro.',
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
  'Press francés': {
    grupo: 'Brazo', nivel: 'intermedio',
    guia: [
      'Acuéstate en el banco sujetando la barra con los brazos extendidos hacia arriba.',
      'Flexiona los codos bajando la barra hacia la frente.',
      'Mantén los codos fijos apuntando al techo.',
      'Extiende de nuevo hacia arriba sin mover los hombros.',
    ],
  },
  'Fondos de tríceps en banco': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'Apoya las manos en el borde de un banco detrás de ti, piernas extendidas.',
      'Baja el cuerpo flexionando los codos hacia atrás.',
      'Baja hasta formar un ángulo de 90 grados en el codo.',
      'Empuja hacia arriba hasta extender los brazos.',
    ],
  },
  'Patada de tríceps': {
    grupo: 'Brazo', nivel: 'principiante',
    guia: [
      'Inclina el torso hacia adelante, codo pegado al cuerpo formando 90 grados.',
      'Extiende el antebrazo hacia atrás hasta estirar el brazo completo.',
      'Aprieta el tríceps al final del movimiento.',
      'Regresa controladamente a la posición inicial.',
    ],
  },

  // ---- ANTEBRAZO ----
  'Curl de muñeca': {
    grupo: 'Antebrazo', nivel: 'principiante',
    guia: [
      'Siéntate y apoya el antebrazo en el muslo o en un banco, palma hacia arriba.',
      'Sujeta una mancuerna o barra ligera.',
      'Flexiona la muñeca hacia arriba, solo moviendo la muñeca.',
      'Baja controladamente sin mover el antebrazo.',
    ],
  },
  'Curl de muñeca invertido': {
    grupo: 'Antebrazo', nivel: 'principiante',
    guia: [
      'Misma posición que el curl de muñeca, pero con la palma hacia abajo.',
      'Sujeta el peso con agarre firme.',
      'Eleva la muñeca hacia arriba lentamente.',
      'Baja controladamente sin perder el control del peso.',
    ],
  },
  'Farmer walk (caminata con peso)': {
    grupo: 'Antebrazo', nivel: 'intermedio',
    guia: [
      'Sujeta una mancuerna o pesa rusa pesada en cada mano.',
      'Camina en línea recta manteniendo el torso erguido.',
      'Aprieta el agarre durante todo el recorrido.',
      'Controla la respiración, pasos cortos y firmes.',
    ],
  },
  'Colgado de barra (dead hang)': {
    grupo: 'Antebrazo', nivel: 'principiante',
    guia: [
      'Sujeta una barra fija con ambas manos, cuerpo relajado colgando.',
      'Mantén el agarre firme el mayor tiempo posible.',
      'Respira de forma controlada mientras aguantas.',
      'Suelta con cuidado al terminar.',
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
  'Plancha lateral': {
    grupo: 'Core', nivel: 'intermedio',
    guia: [
      'Apóyate sobre un antebrazo y el borde del pie del mismo lado.',
      'Mantén el cuerpo en línea recta, cadera elevada.',
      'Aprieta el core durante todo el tiempo.',
      'Cambia de lado al terminar el tiempo.',
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
  'Crunch abdominal': {
    grupo: 'Core', nivel: 'principiante',
    guia: [
      'Acuéstate boca arriba con las rodillas flexionadas.',
      'Eleva los hombros del piso contrayendo el abdomen.',
      'No jales el cuello con las manos.',
      'Baja controladamente sin relajar del todo.',
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
  'Rueda abdominal': {
    grupo: 'Core', nivel: 'avanzado',
    guia: [
      'De rodillas, sujeta la rueda con ambas manos frente a ti.',
      'Rueda hacia adelante extendiendo el cuerpo, manteniendo el core apretado.',
      'Baja solo hasta donde controles el movimiento sin arquear la espalda.',
      'Regresa contrayendo el abdomen para volver a la posición inicial.',
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
  'Burpees': {
    grupo: 'Cardio', nivel: 'avanzado',
    guia: [
      'De pie, baja a posición de sentadilla y apoya las manos en el piso.',
      'Lanza los pies hacia atrás quedando en posición de plancha.',
      'Regresa los pies y salta hacia arriba con los brazos extendidos.',
      'Repite el movimiento de forma fluida.',
    ],
  },
  'Remo en máquina (cardio)': {
    grupo: 'Cardio', nivel: 'intermedio',
    guia: [
      'Siéntate con los pies asegurados y sujeta el remo.',
      'Empuja con las piernas primero, luego tira con los brazos.',
      'Regresa en el mismo orden invertido, controlado.',
      'Mantén un ritmo constante durante toda la sesión.',
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

function calcularNivelYCargas(profile, nivelForzado) {
  const peso = Number(profile.weightStart) || 70

  let nivel = nivelForzado
  if (!nivel) {
    const edad = Number(profile.age) || 25
    const altura = Number(profile.height) || 170
    const imc = peso / Math.pow(altura / 100, 2)
    nivel = 'intermedio'
    if (edad >= 45 || imc >= 30) nivel = 'principiante'
    else if (edad <= 30 && imc < 25) nivel = 'avanzado'
  }

  const cargasBase = {
    principiante: { sets: 3, reps: 12, factor: 0.4 },
    intermedio: { sets: 4, reps: 10, factor: 0.6 },
    avanzado: { sets: 4, reps: 8, factor: 0.8 },
  }[nivel]

  return { nivel, cargasBase, peso }
}

export function generarRutinaRecomendada(profile, nivelForzado) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile, nivelForzado)
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

// gruposElegidos puede ser un string (un solo grupo) o un array de varios grupos combinados
export function generarRutinaPorGrupo(profile, gruposElegidos, nivelForzado) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile, nivelForzado)
  const kgSugerido = () => Math.max(0, Math.round(((peso * cargasBase.factor * 0.6) / 2.5)) * 2.5)

  const listaGrupos = Array.isArray(gruposElegidos) ? gruposElegidos : [gruposElegidos]

  const ejercicios = Object.entries(libreriaEjercicios)
    .filter(([, info]) => listaGrupos.some((g) => info.grupo.includes(g)))
    .map(([nombre], i) => ({
      name: nombre,
      sets: cargasBase.sets,
      reps: cargasBase.reps,
      kg: kgSugerido(),
      id: `rec_${Date.now()}_${i}`,
    }))

  return {
    name: `${listaGrupos.join(' + ')} (nivel ${nivel})`,
    days: [],
    exercises: ejercicios,
  }
}

// Plantillas de "split" (distribución semanal) segun cuantos dias eligio el usuario
const SPLITS = {
  1: [{ nombre: 'Full Body', grupos: ['Pecho', 'Espalda', 'Pierna'] }],
  2: [
    { nombre: 'Tren Superior', grupos: ['Pecho', 'Espalda', 'Hombro', 'Brazo'] },
    { nombre: 'Tren Inferior', grupos: ['Pierna', 'Pantorrilla', 'Core'] },
  ],
  3: [
    { nombre: 'Empuje (Pecho/Hombro/Tríceps)', grupos: ['Pecho', 'Hombro', 'Brazo'] },
    { nombre: 'Tirón (Espalda/Bíceps)', grupos: ['Espalda', 'Trapecio', 'Brazo'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Pantorrilla', 'Core'] },
  ],
  4: [
    { nombre: 'Pecho y Tríceps', grupos: ['Pecho', 'Brazo'] },
    { nombre: 'Espalda y Bíceps', grupos: ['Espalda', 'Trapecio', 'Brazo'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Pantorrilla'] },
    { nombre: 'Hombro y Core', grupos: ['Hombro', 'Core'] },
  ],
  5: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda', 'Trapecio'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Pantorrilla'] },
    { nombre: 'Hombro', grupos: ['Hombro'] },
    { nombre: 'Brazo, Antebrazo y Core', grupos: ['Brazo', 'Antebrazo', 'Core'] },
  ],
  6: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Pantorrilla'] },
    { nombre: 'Hombro y Trapecio', grupos: ['Hombro', 'Trapecio'] },
    { nombre: 'Brazo y Antebrazo', grupos: ['Brazo', 'Antebrazo'] },
    { nombre: 'Core y Cardio', grupos: ['Core', 'Cardio'] },
  ],
  7: [
    { nombre: 'Pecho', grupos: ['Pecho'] },
    { nombre: 'Espalda', grupos: ['Espalda'] },
    { nombre: 'Pierna', grupos: ['Pierna', 'Pantorrilla'] },
    { nombre: 'Hombro y Trapecio', grupos: ['Hombro', 'Trapecio'] },
    { nombre: 'Brazo y Antebrazo', grupos: ['Brazo', 'Antebrazo'] },
    { nombre: 'Core y Cardio', grupos: ['Core', 'Cardio'] },
    { nombre: 'Cardio ligero (recuperación activa)', grupos: ['Cardio'] },
  ],
}

// Genera un horario semanal completo: una rutina por cada dia elegido, con ejercicios variados
export function generarHorarioSemanal(profile, diasElegidos, nivelForzado) {
  const { nivel, cargasBase, peso } = calcularNivelYCargas(profile, nivelForzado)
  const kgSugerido = () => Math.max(0, Math.round(((peso * cargasBase.factor * 0.6) / 2.5)) * 2.5)

  const cantidadDias = Math.min(Math.max(diasElegidos.length, 1), 7)
  const plantilla = SPLITS[cantidadDias]

  return diasElegidos.map((dia, i) => {
    const bloque = plantilla[i % plantilla.length]
    const ejerciciosDelBloque = Object.entries(libreriaEjercicios)
      .filter(([, info]) => bloque.grupos.some((g) => info.grupo.includes(g)))
      .slice(0, 6) // maximo 6 ejercicios por dia para no hacerlo interminable
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