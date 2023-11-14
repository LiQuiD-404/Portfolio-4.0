import { configureStore } from '@reduxjs/toolkit'
import activeReducer from '../activeSlice'
export const store = configureStore({
  reducer: {
    active: activeReducer,
  },
})