import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from "./galerrySlice";


export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
})
