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
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish striped t-shirt perfect for casual wear.",
    isOnSale: true,
    discount: 25,
    dressStyle:["Casual"]

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
    sizes: ["S", "M", "L", "XX-L", "3X-L"],
    description: "Comfortable skinny fit jeans for everyday wear.",
    isOnSale: true,
    discount: 20,
    dressStyle:["Casual"]
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
    dressStyle:["Casual"]
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
    dressStyle:["Casual"]
  },
  {
    id: "5",
    name: "Vertical Striped Shirt",
    price: 212,
    image: "/Images/5.png",
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    category: "Shirts",
    rating: 4.5,
    reviewCount: 35,
    colors: ["Green", "Black", ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    dressStyle:["Casual"]
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    price: 145,
    image: "/Images/6.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Orange","Red", "white",],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic polo shirt with tipping details for a sophisticated look.",
    dressStyle:["Casual"]
  },
  {
    id: "7",
    name: "Half Shorts",
    price: 180,
    image: "/Images/7.png",
    category: "Shorts",
    rating: 4.5,
    reviewCount: 45,
    colors: [ "Blue", "White",],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic polo shirt with tipping details for a sophisticated look.",
    dressStyle:["Casual"]
  },
  {
    id: "8",
    name: "Black Fit Jeans",
    price: 200,
    image: "/Images/8.png",
    category: "Jeans",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Black",],
    sizes: ["S", "M", "L", "XL"],
    description: "Casual shirt with a relaxed fit and breathable fabric.",
    dressStyle:["Casual"]
  },
  {
    id: "9",
    name: "Graphic T-shirt",
    price: 150,
    image: "/Images/9.png",
    images:["/Images/9.png", "/Images/90.png", "/Images/91.png"],
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Black", "Green"],
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish graphic t-shirt with a modern design.",
    dressStyle:["Casual"]
  },
  {
    id: "10",
    name: "Zara T-shirt",
    price: 220,
    image: "/Images/10.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["White", "Blue", ],
    sizes: ["S", "M", "L", "XL"],
    description: "Slim fit jeans with a comfortable stretch.",
    dressStyle:["Casual"]
  },
  {
    id: "11",
    name: "Polo T-shirt",
    price: 300,
    image: "/Images/11.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["Red",],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic denim jacket with a timeless design.",
    dressStyle:["Casual", "Formal"]
  },
  {
    id: "12",
    name: "Casual T-shirt",
    price: 450,
    image: "/Images/12.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: ["White","Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium leather jacket for a rugged look.",
    dressStyle:["Casual",]
  },
  {
    id: "13",
    name: "Polo T-shirt",
    price: 500,
    image: "/Images/13.png",
    category: "T-shirts",
    rating: 4.5,
    reviewCount: 45,
    colors: [ "Blue","White" ],
    sizes: ["S", "M", "L", "XL"],
    description: "Warm winter coat with a stylish design.",
    dressStyle:["Casual", "Formal"]
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
