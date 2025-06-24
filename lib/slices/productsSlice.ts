import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "../types"

interface ProductsState {
  items: Product[]
  loading: boolean
  error: string | null
}

const mockProducts: Product[] = [
  
  {
    id: "1",
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    image: "/Images/1.png",
    category: "T-shirts",
    rating: 5.0,
    reviewCount: 60,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L"],
    description: "Stylish striped t-shirt perfect for casual wear.",
    isOnSale: true,
    discount: 25,
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    image: "/Images/2.png",
    category: "Jeans",
    rating: 3.5,
    reviewCount: 55,
    colors: ["Blue", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Comfortable skinny fit jeans for everyday wear.",
    isOnSale: true,
    discount: 20,
  },
  {
    id: "3",
    name: "Checkered Shirt",
    price: 180,
    image: "/Images/3.png",
    category: "Shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic checkered shirt for a timeless look.",
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    image: "/Images/4.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Orange", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Trendy sleeve striped t-shirt.",
    isOnSale: true,
    discount: 30,
  },
  {
    id: "5",
    name: "Vertical Striped Shirt",
    price: 212,
    image: "/Images/5.png",
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 35,
    colors: ["White", "Black", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    price: 145,
    image: "/Images/6.png",
    category: "Jeans",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic polo shirt with tipping details for a sophisticated look.",
  },
  {
    id: "7",
    name: "Polo Shirt",
    price: 180,
    image: "/Images/7.png",
    category: "Shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic polo shirt with tipping details for a sophisticated look.",
  },
  {
    id: "8",
    name: "Casual Shirt",
    price: 200,
    image: "/Images/8.png",
    category: "Shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    description: "Casual shirt with a relaxed fit and breathable fabric.",
  },
]

const initialState: ProductsState = {
  items: mockProducts,
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setProducts, setLoading, setError } = productsSlice.actions
export default productsSlice.reducer
