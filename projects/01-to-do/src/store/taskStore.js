import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// export const taskStore = create((set) => ({
//   tasks: [],
//   setTasks: (tasksNew) => set(() => ({ tasks: tasksNew }))
// }))

export const taskStore = create(
  persist((set) => ({
    tasks: [],
    selectedTask: null,
    setTasks: (tasksNew) => set(() => ({ tasks: tasksNew })),
    setselectedTask: (taskSelected) => set(() => ({ selectedTask: taskSelected }))
  }),
  {
    name: 'tasks',
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => ({ tasks: state.tasks }),
  }
  )
)