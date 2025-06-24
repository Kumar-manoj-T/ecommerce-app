"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setCategory, setPriceRange, toggleColor, toggleSize, toggleDressStyle } from "@/lib/slices/filtersSlice"

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
const colors = [
  { name: "Green", value: "#10b981" },
  { name: "Red", value: "#ef4444" },
  { name: "Yellow", value: "#eab308" },
  { name: "Orange", value: "#f97316" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Pink", value: "#ec4899" },
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#000000" },
]
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
const dressStyles = ["Casual", "Formal", "Party", "Gym"]

interface MobileFiltersProps {
  open: boolean
  onClose: () => void
}

export function MobileFilters({ open, onClose }: MobileFiltersProps) {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filters)

  const handleApplyFilters = () => {
    onClose()
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:w-96 p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold">Filters</SheetTitle>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Categories */}
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category} className="flex items-center justify-between py-2">
                  <Label className="text-base cursor-pointer flex-1" htmlFor={category}>
                    {category}
                  </Label>
                  <Checkbox
                    id={category}
                    checked={filters.category === category}
                    onCheckedChange={() => dispatch(setCategory(filters.category === category ? "" : category))}
                  />
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Price</h3>
              <div className="space-y-4">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => dispatch(setPriceRange(value as [number, number]))}
                  max={500}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Colors</h3>
              <div className="grid grid-cols-5 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => dispatch(toggleColor(color.name))}
                    className={`w-10 h-10 rounded-full border-2 ${
                      filters.colors.includes(color.name) ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={filters.sizes.includes(size) ? "default" : "outline"}
                    size="sm"
                    onClick={() => dispatch(toggleSize(size))}
                    className="text-xs"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Dress Style</h3>
              {dressStyles.map((style) => (
                <div key={style} className="flex items-center justify-between py-2">
                  <Label className="text-base cursor-pointer flex-1" htmlFor={style}>
                    {style}
                  </Label>
                  <Checkbox
                    id={style}
                    checked={filters.dressStyle.includes(style)}
                    onCheckedChange={() => dispatch(toggleDressStyle(style))}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t">
            <Button onClick={handleApplyFilters} className="w-full">
              Apply Filter
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
