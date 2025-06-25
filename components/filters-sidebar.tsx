"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import {
  setCategory,
  setPriceRange,
  toggleColor,
  toggleSize,
  toggleDressStyle,
  clearFilters,
} from "@/lib/slices/filtersSlice"

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
const colors = ["Black", "Red", "Yellow", "Orange", "Blue", "Purple", "Pink", "White", "Green"]
const sizes = ["XX-S", "X-S", "S", "M", "L", "X-L", "XX-L", "3X-L", "4X-L"]
const dressStyles = ["Casual", "Formal", "Party", "Gym"]

export function FiltersSidebar() {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.filters)

  return (
    <div className="w-64 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={() => dispatch(clearFilters())}>
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        {categories.map((category) => (
          <Label key={category} className="flex items-center space-x-2 cursor-pointer">
            <Checkbox
              checked={filters.category === category}
              onCheckedChange={() => dispatch(setCategory(filters.category === category ? "" : category))}
            />
            <span>{category}</span>
          </Label>
        ))}
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <Label key={color} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={filters.colors.includes(color)}
                    onCheckedChange={() => dispatch(toggleColor(color))}
                  />
                  <span className="text-sm">{color}</span>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <Label key={size} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox checked={filters.sizes.includes(size)} onCheckedChange={() => dispatch(toggleSize(size))} />
                  <span className="text-sm">{size}</span>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dress-style">
          <AccordionTrigger>Dress Style</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {dressStyles.map((style) => (
                <Label key={style} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={filters.dressStyle.includes(style)}
                    onCheckedChange={() => dispatch(toggleDressStyle(style))}
                  />
                  <span>{style}</span>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filter</Button>
    </div>
  )
}
