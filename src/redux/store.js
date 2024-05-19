import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlice/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})