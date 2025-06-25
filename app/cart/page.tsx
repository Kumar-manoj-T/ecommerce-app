"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"
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
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/shop">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Cart</span>
          </nav>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-8 uppercase">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden mx-auto sm:mx-0 flex-shrink-0">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-base md:text-lg mb-2">{item.product.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <p>
                      <span className="font-medium">Size:</span> {item.selectedSize}
                    </p>
                    <p>
                      <span className="font-medium">Color:</span> {item.selectedColor}
                    </p>
                  </div>
                  <p className="font-bold text-lg md:text-xl">${item.product.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-xl h-fit shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-base text-red-600">
                <span>Discount (-20%)</span>
                <span className="font-semibold">-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-base">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">${deliveryFee}</span>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add promo code"
                  className="flex-1 rounded-full border-gray-300 focus:border-black focus:ring-black"
                />
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 hover:border-black hover:bg-black hover:text-white px-6"
                >
                  Apply
                </Button>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all"
                size="lg"
              >
                Go to Checkout →
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Secure checkout
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link href="/shop">
            <Button variant="outline" className="rounded-full px-8">
              ← Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
