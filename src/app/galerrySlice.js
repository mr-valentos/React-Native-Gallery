import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getGallery } from "../api/gallery";

export const fetchPhotos = createAsyncThunk(
  'gallery/fetchGallery',
  async () => {
    const response = await getGallery()
    return response
  }
)

const initialState = {
  gallery: [],
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.gallery = action.payload;
    })
  },
})

// export const { } = gallerySlice.actions

export default gallerySlice.reducer
