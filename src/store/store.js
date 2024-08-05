import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./Userslice"
export const store = configureStore({
  reducer: {
    User : UserReducer
  },
})