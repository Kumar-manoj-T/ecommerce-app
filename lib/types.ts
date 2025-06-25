export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  rating: number
  reviewCount: number
  colors: string[]
  sizes: string[]
  description: string
  isOnSale?: boolean
  discount?: number
  dressStyle?: string[]
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  selectedColor: string
  selectedSize: string
}

export interface Filters {
  category: string
  priceRange: [number, number]
  colors: string[]
  sizes: string[]
  dressStyle: string[]
  sortBy: string
  searchQuery: string
}
