"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks"
import { addToCart } from "@/lib/slices/cartSlice"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(
      addToCart({
        product,
        selectedColor: product.colors[0],
        selectedSize: product.sizes[0],
        quantity: 1,
      }),
    )
  }

  return (
    <div className="group relative">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="flex items-center space-x-1 text-xs md:text-sm">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500">
              {product.rating}/5 ({product.reviewCount})
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-lg font-semibold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xs md:text-sm text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-xs md:text-sm text-red-500 bg-red-100 px-1 md:px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
      <Button
        onClick={handleAddToCart}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        size="sm"
      >
        Add to Cart
      </Button>
    </div>
  )
}
