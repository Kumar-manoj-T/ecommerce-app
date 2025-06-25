import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Filters } from "../types"

const initialState: Filters = {
  category: "",
  priceRange: [0, 500],
  colors: [],
  sizes: [],
  dressStyle: [],
  sortBy: "featured",
  searchQuery: "",
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      const color = action.payload
      if (state.colors.includes(color)) {
        state.colors = state.colors.filter((c) => c !== color)
      } else {
        state.colors.push(color)
      }
    },
    toggleSize: (state, action: PayloadAction<string>) => {
      const size = action.payload
      if (state.sizes.includes(size)) {
        state.sizes = state.sizes.filter((s) => s !== size)
      } else {
        state.sizes.push(size)
      }
    },
    toggleDressStyle: (state, action: PayloadAction<string>) => {
      const style = action.payload
      console.log("Toggling dress style:---->", style)
      if (state.dressStyle.includes(style)) {
        state.dressStyle = state.dressStyle.filter((s) => s !== style)
      } else {
        state.dressStyle.push(style)
      }
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    clearFilters: (state) => {
      state.category = ""
      state.priceRange = [0, 500]
      state.colors = []
      state.sizes = []
      state.dressStyle = []
      state.searchQuery = ""
    },
  },
})

export const {
  setCategory,
  setPriceRange,
  toggleColor,
  toggleSize,
  toggleDressStyle,
  setSortBy,
  setSearchQuery,
  clearFilters,
} = filtersSlice.actions
export default filtersSlice.reducer
