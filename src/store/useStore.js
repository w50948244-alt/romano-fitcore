import { create } from 'zustand'

const useStore = create((set) => ({
  profile: { name: 'Romano', age: 25, height: 175, weightStart: 80, goal: 'Ganar fuerza' },
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
  updateProfile: (data) => set((s) => ({ profile: { ...s.profile, ...data } })),
}))

export default useStore