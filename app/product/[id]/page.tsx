"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { addToCart } from "@/lib/slices/cartSlice"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { items: products } = useAppSelector((state) => state.products)

  const product = products.find((p) => p.id === params.id)
  const relatedProducts = products.filter((p) => p.id !== params.id && p.category === product?.category).slice(0, 4)

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        selectedColor,
        selectedSize,
        quantity,
      }),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {product.images?.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating}/5 ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl md:text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg md:text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">-{product.discount}%</span>
              </>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">Select Colors</h3>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={color} className="sr-only" />
                    <Label
                      htmlFor={color}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                        selectedColor === color ? "border-black" : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "white"
                            ? "#ffffff"
                            : color.toLowerCase() === "black"
                              ? "#000000"
                              : color.toLowerCase() === "red"
                                ? "#ef4444"
                                : color.toLowerCase() === "blue"
                                  ? "#3b82f6"
                                  : color.toLowerCase() === "green"
                                    ? "#10b981"
                                    : color.toLowerCase() === "gray"
                                      ? "#6b7280"
                                      : color.toLowerCase(),
                      }}
                    />
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">Choose Size</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <div className="grid grid-cols-4 md:flex md:flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={size} className="sr-only" />
                    <Label
                      htmlFor={size}
                      className={`px-4 py-2 border rounded-md cursor-pointer ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
              <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-8">
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">All Reviews ({product.reviewCount})</h3>
                <Button>Write a Review</Button>
              </div>
              {/* Mock reviews */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-medium">Customer {i}</span>
                    </div>
                    <p className="text-gray-600">Great product! The quality is excellent and it fits perfectly.</p>
                    <span className="text-sm text-gray-500">Posted on August {10 + i}, 2023</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faqs" className="mt-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">What is your return policy?</h4>
                <p className="text-gray-600">We offer a 30-day return policy for all items.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">How do I care for this item?</h4>
                <p className="text-gray-600">Machine wash cold, tumble dry low.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
