import { create } from 'zustand'

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

// Guarda todo el progreso de la cuenta actual en el navegador
function guardarDatosUsuario(userId, data) {
  if (!userId) return
  localStorage.setItem(`fitcore_data_${userId}`, JSON.stringify(data))
}

const useStore = create((set, get) => ({
  profile: perfilVacio,
  routines: rutinasPorDefecto,
  logs: [],
  weightLogs: [],

  addRoutine: (routine) => set((s) => {
    const routines = [...s.routines, { ...routine, id: Date.now().toString() }]
    guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines, logs: s.logs, weightLogs: s.weightLogs })
    return { routines }
  }),

  deleteRoutine: (id) => set((s) => {
    const routines = s.routines.filter(r => r.id !== id)
    guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines, logs: s.logs, weightLogs: s.weightLogs })
    return { routines }
  }),

  addLog: (log) => set((s) => {
    const logs = [...s.logs, { ...log, id: Date.now().toString(), date: new Date().toISOString() }]
    guardarDatosUsuario(s.profile.userId, { profile: s.profile, routines: s.routines, logs, weightLogs: s.weightLogs })
    return { logs }
  }),

  addWeightLog: (weight) => set((s) => {
    const weightLogs = [...s.weightLogs, { date: new Date().toISOString(), weight }]
    // Si aun no tenia peso inicial, este primer registro lo define
    const profile = s.profile.weightStart == null ? { ...s.profile, weightStart: weight } : s.profile
    guardarDatosUsuario(s.profile.userId, { profile, routines: s.routines, logs: s.logs, weightLogs })
    return { weightLogs, profile }
  }),

  updateProfile: (data) => set((s) => {
    const profile = { ...s.profile, ...data }
    guardarDatosUsuario(profile.userId, { profile, routines: s.routines, logs: s.logs, weightLogs: s.weightLogs })
    return { profile }
  }),

  // Se llama cuando Supabase confirma la sesion (login con Google o con correo)
  loadProfileForUser: (user) => {
    if (!user) {
      // Sin sesion: todo vacio
      set({ profile: perfilVacio, routines: rutinasPorDefecto, logs: [], weightLogs: [] })
      return
    }

    const nombreDetectado =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split('@')[0] ||
      'Usuario'

    const guardado = JSON.parse(localStorage.getItem(`fitcore_data_${user.id}`) || 'null')

    if (guardado) {
      // Esta cuenta ya tenia datos guardados: los recuperamos tal cual
      set({
        profile: { ...guardado.profile, name: nombreDetectado, userId: user.id },
        routines: guardado.routines ?? rutinasPorDefecto,
        logs: guardado.logs ?? [],
        weightLogs: guardado.weightLogs ?? [],
      })
    } else {
      // Cuenta nueva: nace sin peso, sin logs, con rutinas de ejemplo
      set({
        profile: { ...perfilVacio, name: nombreDetectado, userId: user.id },
        routines: rutinasPorDefecto,
        logs: [],
        weightLogs: [],
      })
    }
  },
}))

export default useStore