"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { updateQuantity, removeFromCart } from "@/lib/slices/cartSlice"

export default function CartPage() {
  const dispatch = useAppDispatch()
  const { items, total, itemCount } = useAppSelector((state) => state.cart)

  const subtotal = total
  const discount = subtotal * 0.2 // 20% discount
  const deliveryFee = 15
  const finalTotal = subtotal - discount + deliveryFee

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some items to get started!</p>
        <Link href="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span>/</span>
          <span>Cart</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden mx-auto sm:mx-0">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                <p className="text-sm text-gray-600">Color: {item.selectedColor}</p>
                <p className="font-semibold mt-2">${item.product.price}</p>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg h-fit">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${finalTotal.toFixed(0)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Add promo code" />
              <Button variant="outline">Apply</Button>
            </div>

            <Button className="w-full" size="lg">
              Go to Checkout →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
