import { create } from 'zustand'

const useStore = create((set, get) => ({
  profile: { name: '', age: 25, height: 175, weightStart: 80, goal: 'Ganar fuerza', gender: null, userId: null },
  routines: [
    { id: '1', name: 'Push Day', days: ['Lunes', 'Jueves'], exercises: [
      { id: 'e1', name: 'Press banca', sets: 4, reps: 8, kg: 60 },
      { id: 'e2', name: 'Press militar', sets: 3, reps: 10, kg: 30 },
    ]},
    { id: '2', name: 'Pull Day', days: ['Martes', 'Viernes'], exercises: [
      { id: 'e3', name: 'Dominadas', sets: 4, reps: 8, kg: 0 },
      { id: 'e4', name: 'Remo con barra', sets: 4, reps: 10, kg: 50 },
    ]},
  ],
  logs: [],
  weightLogs: [{ date: new Date().toISOString(), weight: 80 }],

  addRoutine: (routine) => set((s) => ({ routines: [...s.routines, { ...routine, id: Date.now().toString() }] })),
  deleteRoutine: (id) => set((s) => ({ routines: s.routines.filter(r => r.id !== id) })),
  addLog: (log) => set((s) => ({ logs: [...s.logs, { ...log, id: Date.now().toString(), date: new Date().toISOString() }] })),
  addWeightLog: (weight) => set((s) => ({ weightLogs: [...s.weightLogs, { date: new Date().toISOString(), weight }] })),

  updateProfile: (data) => set((s) => {
    const nuevoPerfil = { ...s.profile, ...data }
    // Si cambia el genero y ya sabemos el usuario, lo guardamos para esa cuenta especifica
    if (data.gender && nuevoPerfil.userId) {
      localStorage.setItem(`fitcore_gender_${nuevoPerfil.userId}`, data.gender)
    }
    return { profile: nuevoPerfil }
  }),

  // Se llama cuando Supabase confirma la sesion (login con Google o con correo)
  loadProfileForUser: (user) => {
    if (!user) {
      // Sin sesion: perfil vacio
      set({ profile: { name: '', age: 25, height: 175, weightStart: 80, goal: 'Ganar fuerza', gender: null, userId: null } })
      return
    }
    const nombreDetectado =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split('@')[0] ||
      'Usuario'

    const generoGuardado = localStorage.getItem(`fitcore_gender_${user.id}`)

    set((s) => ({
      profile: {
        ...s.profile,
        name: nombreDetectado,
        gender: generoGuardado || null,
        userId: user.id,
      },
    }))
  },
}))

export default useStore