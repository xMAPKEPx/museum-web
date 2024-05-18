import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './AuthSlice/AuthSlice'

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
})