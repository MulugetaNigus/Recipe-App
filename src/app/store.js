import { configureStore } from '@reduxjs/toolkit'
import IDReducers from '../features/ID'

export const store = configureStore({
  reducer: IDReducers,
})