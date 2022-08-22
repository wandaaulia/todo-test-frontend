import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import activityReducer  from '../features/activitySlice'
import { activityApi } from '../services/ActivityApi'

export const store = configureStore({
  reducer: {
     activity: activityReducer,
    [activityApi.reducerPath]: activityApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(activityApi.middleware),
})

setupListeners(store.dispatch)