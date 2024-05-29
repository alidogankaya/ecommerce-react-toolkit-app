import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchFromLocalStorage = () => {
  let basket = localStorage.getItem('basket')
  if (basket) {
    return JSON.parse(localStorage.getItem('basket'))
  } else {
    return []
  }
}

const setFromLocalStorage = (data) => {
  localStorage.setItem('basket', JSON.stringify(data))
  
}

const initialState = {
  basket: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
}

export const getBasket = createAsyncThunk(
  'getBasket',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data;
  },
)

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const isItemInBasket = state.basket.find(item => item.id === action.payload.id)
      if (isItemInBasket) {
        state.basket = state.basket.map(item => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity
            let tempTotalPrice = tempQuantity * item.price
            return { ...item, quantity: tempQuantity, totalPrice: tempTotalPrice }
          } else {
            return item
          }
        })
      } else {
        state.basket.push({ ...action.payload, totalPrice: action.payload.price * action.payload.quantity })
      }
      setFromLocalStorage(state.basket)
      state.itemCount = state.basket.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.basket.reduce((total, item) => total + item.totalPrice, 0)

    },
    removeFromBasket: (state, action) => {
      // Sepetten çıkarılacak ürünü bul ve çıkar
      const TempBasket = state.basket.filter(item => item.id !== action.payload)
      state.basket = TempBasket
      
      // Sepeti ve diğer bilgileri güncelle
      setFromLocalStorage(state.basket)
      
      // Toplam ürün sayısını ve toplam tutarı güncelle
      state.itemCount = state.basket.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.basket.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    
    
    clearBasket: (state) => {
      state.basket = []
      setFromLocalStorage(state.basket)
      state.itemCount = 0
      state.totalAmount = 0
    },
    getTotalItemCount: (state) => {
      state.itemCount = state.basket.reduce((total, item) => total + item.quantity, 0)
      state.totalAmount = state.basket.reduce((total, item) => total + item.price * item.quantity, 0)

    },
  },
})
export const { addToBasket, removeFromBasket, clearBasket, getTotalItemCount } = basketSlice.actions;

export default basketSlice.reducer
