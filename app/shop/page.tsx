"use client"

import { useMemo } from "react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { ProductCard } from "@/components/product-card"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setSortBy } from "@/lib/slices/filtersSlice"
import { MobileFilters } from "@/components/mobile-filters"
import { useState } from "react"

export default function ShopPage() {
  const dispatch = useAppDispatch()
  const { items: products } = useAppSelector((state) => state.products)
  const filters = useAppSelector((state) => state.filters)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Color filter
      if (filters.colors.length > 0) {
        const hasMatchingColor = product.colors.some((color) => filters.colors.includes(color))
        if (!hasMatchingColor) return false
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const hasMatchingSize = product.sizes.some((size) => filters.sizes.includes(size))
        if (!hasMatchingSize) return false
      }

      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        if (!product.name.toLowerCase().includes(query) && !product.category.toLowerCase().includes(query)) {
          return false
        }
      }

      // Dress style filter
      if (filters.dressStyle.length > 0) {
        const hasMatchingStyle = product?.dressStyle?.some((style) => filters.dressStyle.includes(style))
        if (!hasMatchingStyle) return false
      }

      return true
    })

    // Sort products
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [products, filters])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <aside className="hidden lg:block lg:w-64">
          <FiltersSidebar />
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                {filters.searchQuery
                  ? `Results for "${filters.searchQuery}"`
                  : filters.category
                    ? `${filters.category} Collection`
                    : filters.dressStyle.length > 0
                      ? `${filters.dressStyle.join(", ")} Style`
                      : "All Products"}
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Showing 1-{filteredProducts.length} of {filteredProducts.length} Products
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setShowMobileFilters(true)} className="lg:hidden">
                Filters
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-sm">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]" align="end">
                  <DropdownMenuRadioGroup value={filters.sortBy} onValueChange={(value) => dispatch(setSortBy(value))}>
                    <DropdownMenuRadioItem value="featured">Most Popular</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="rating">Highest Rated</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}

          <div className="mt-8 w-full flex justify-center items-center space-x-1 sm:space-x-2 overflow-hidden">
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">Prev</button>
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">1</button>
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">2</button>
            <span className="px-2 py-1 text-xs sm:text-sm">...</span>
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">9</button>
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">10</button>
            <button className="px-2 py-1 border rounded text-xs sm:text-sm">Next</button>
          </div>


        </div>
      </div>
      <MobileFilters open={showMobileFilters} onClose={() => setShowMobileFilters(false)} />
    </div>
  )
}