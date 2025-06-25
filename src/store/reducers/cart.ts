import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../pages/Home'

type CartState = {
  items: ItemCardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemCardapio>) => {
      const clothing = state.items.find((item) => item.id === action.payload.id)

      if (!clothing) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    finish: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, finish } = cartSlice.actions
export default cartSlice.reducer
