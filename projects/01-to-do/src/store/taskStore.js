import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const handleRehydrate = async () => {
  await taskStore.persist.rehydrate()
}

export const taskStore = create(
  persist((set) => ({
    tasks: [],
    selectedTask: null,
    setTasks: (tasksNew) => set(() => ({ tasks: tasksNew })),
    setselectedTask: (taskSelected) => set(() => ({ selectedTask: taskSelected })),
    onRehydrateStorage: () => handleRehydrate(),
  }),
  {
    name: 'tasks',
    partialize: (state) => ({ tasks: state.tasks }),
  }
  )
)