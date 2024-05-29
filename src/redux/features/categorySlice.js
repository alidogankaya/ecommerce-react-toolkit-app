import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}



export const getCategory = createAsyncThunk(
    'getCategory',
    // Declare the type your function argument here:
    async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data=response.json()
 
      return data;
    },
  )
  

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
        getCategory.fulfilled,(state,action) => {
        state.categories = action.payload
        
      },
    )
  },
})

// Action creators are generated for each case reducer function

export default categorySlice.reducer