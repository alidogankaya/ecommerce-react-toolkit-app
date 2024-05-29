import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../features/categorySlice'
import productSlice from '../features/productSlice'
import basketSlice from '../features/basketSlice'

export default configureStore({
  reducer: {

    categories:categorySlice,
    products:productSlice,
    basket:basketSlice
  },
})