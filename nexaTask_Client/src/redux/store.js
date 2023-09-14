import { configureStore } from '@reduxjs/toolkit'
import TasksSlice from './features/tasks/TasksSlice'
import UserSlice from './features/user/UserSlice'

export const store = configureStore({
  reducer: {
    tasksSlice: TasksSlice,
    userSlice: UserSlice,
  },
})