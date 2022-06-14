import { configureStore, createSlice } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = configureStore({
  reducer: {
  },
  middleware: [thunk]
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch