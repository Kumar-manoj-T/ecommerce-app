import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, Product } from "../types"

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product
        selectedColor: string
        selectedSize: string
        quantity?: number
      }>,
    ) => {
      const { product, selectedColor, selectedSize, quantity = 1 } = action.payload
      const existingItem = state.items.find(
        (item) =>
          item.product.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize,
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({
          id: `${product.id}-${selectedColor}-${selectedSize}`,
          product,
          quantity,
          selectedColor,
          selectedSize,
        })
      }

      // Recalculate totals
      state.total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.quantity = Math.max(0, quantity)
        if (item.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id)
        }
      }
      state.total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.itemCount = 0
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
