import { create } from 'zustand'
import { supabase } from '../lib/supabase'

const perfilVacio = { name: '', age: 25, height: 175, weightStart: null, goal: 'Ganar fuerza', gender: null, userId: null }

const rutinasPorDefecto = [
  { id: '1', name: 'Push Day', days: ['Lunes', 'Jueves'], exercises: [
    { id: 'e1', name: 'Press banca', sets: 4, reps: 8, kg: 60 },
    { id: 'e2', name: 'Press militar', sets: 3, reps: 10, kg: 30 },
  ]},
  { id: '2', name: 'Pull Day', days: ['Martes', 'Viernes'], exercises: [
    { id: 'e3', name: 'Dominadas', sets: 4, reps: 8, kg: 0 },
    { id: 'e4', name: 'Remo con barra', sets: 4, reps: 10, kg: 50 },
  ]},
]

// Guarda una copia local instantánea (funciona sin internet) y en segundo plano la sube a Supabase
function guardarDatosUsuario(userId, data) {
  if (!userId) return
  localStorage.setItem(`fitcore_data_${userId}`, JSON.stringify(data))

  supabase
    .from('user_data')
    .upsert({ user_id: userId, data, updated_at: new Date().toISOString() })
    .then(({ error }) => {
      if (error) console.warn('No se pudo sincronizar con la nube:', error.message)
    })
}

const useStore = create((set, get) => ({
  profile: perfilVacio,
  routines: rutinasPorDefecto,
  logs: [],
  weightLogs: [],
  personalRecords: {}, // { 'Press banca': { kg: 80, date: '...' }, ... }
  cargandoDatos: true,

  addRoutine: (routine) => set((s) => {
    const routines = [...s.routines, { ...routine, id: Date.now().toString() }]
    guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines, logs: s.logs, weightLogs: s.weightLogs, personalRecords: s.personalRecords })
    return { routines }
  }),

  deleteRoutine: (id) => set((s) => {
    const routines = s.routines.filter(r => r.id !== id)
    guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines, logs: s.logs, weightLogs: s.weightLogs, personalRecords: s.personalRecords })
    return { routines }
  }),

  // exercisesDetail = [{ name, sets, reps, kg }] - Devuelve la lista de nombres con récord nuevo
  addLog: (log, exercisesDetail = []) => {
    let nuevosRecords = []
    set((s) => {
      const logs = [...s.logs, { ...log, exercisesDetail, id: Date.now().toString(), date: new Date().toISOString() }]

      const personalRecords = { ...s.personalRecords }
      exercisesDetail.forEach((ex) => {
        const actual = personalRecords[ex.name]
        if (ex.kg > 0 && (!actual || ex.kg > actual.kg)) {
          personalRecords[ex.name] = { kg: ex.kg, date: new Date().toISOString() }
          nuevosRecords.push(ex.name)
        }
      })

      guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines: s.routines, logs, weightLogs: s.weightLogs, personalRecords })
      return { logs, personalRecords }
    })
    return nuevosRecords
  },

  addWeightLog: (weight) => set((s) => {
    const weightLogs = [...s.weightLogs, { date: new Date().toISOString(), weight }]
    const profile = s.profile.weightStart == null ? { ...s.profile, weightStart: weight } : s.profile
    guardarDatosUsuario(s.profile.userId, { profile, routines: s.routines, logs: s.logs, weightLogs, personalRecords: s.personalRecords })
    return { weightLogs, profile }
  }),

  updateProfile: (data) => set((s) => {
    const profile = { ...s.profile, ...data }
    guardarDatosUsuario(profile.userId, { profile, routines: s.routines, logs: s.logs, weightLogs: s.weightLogs, personalRecords: s.personalRecords })
    return { profile }
  }),

  // Se llama cuando Supabase confirma la sesion (login con Google o con correo)
  loadProfileForUser: async (user) => {
    if (!user) {
      set({ profile: perfilVacio, routines: rutinasPorDefecto, logs: [], weightLogs: [], personalRecords: {}, cargandoDatos: false })
      return
    }

    set({ cargandoDatos: true })

    const nombreDetectado =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split('@')[0] ||
      'Usuario'

    // 1) Intenta traer los datos desde la nube - así se ve igual en cualquier dispositivo
    let datosNube = null
    try {
      const { data, error } = await supabase
        .from('user_data')
        .select('data')
        .eq('user_id', user.id)
        .maybeSingle()
      if (!error && data) datosNube = data.data
    } catch (e) {
      console.warn('Sin conexión a la nube, se usará la copia local si existe.')
    }

    // 2) Si no hay nube (o falló), usa la copia local guardada en este navegador
    const guardadoLocal = JSON.parse(localStorage.getItem(`fitcore_data_${user.id}`) || 'null')
    const fuente = datosNube || guardadoLocal

    if (fuente) {
      set({
        profile: { ...perfilVacio, ...fuente.profile, name: nombreDetectado, userId: user.id },
        routines: fuente.routines ?? rutinasPorDefecto,
        logs: fuente.logs ?? [],
        weightLogs: fuente.weightLogs ?? [],
        personalRecords: fuente.personalRecords ?? {},
        cargandoDatos: false,
      })
      if (!datosNube && guardadoLocal) {
        guardarDatosUsuario(user.id, guardadoLocal)
      }
    } else {
      set({
        profile: { ...perfilVacio, name: nombreDetectado, userId: user.id },
        routines: rutinasPorDefecto,
        logs: [],
        weightLogs: [],
        personalRecords: {},
        cargandoDatos: false,
      })
    }
  },
}))

export default useStore