"use client"

import Link from "next/link"
import { Search, ShoppingCart, User, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setSearchQuery } from "@/lib/slices/filtersSlice"
import { useState } from "react"

export function Header() {
  const dispatch = useAppDispatch()
  const { itemCount } = useAppSelector((state) => state.cart)
  const { searchQuery } = useAppSelector((state) => state.filters)
  const [showPromo, setShowPromo] = useState(true)

  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value))
  }

  return (
    <>
      {showPromo && (
        <div className="bg-black text-white text-center py-2 text-sm px-4 relative">
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="underline">
            Sign Up Now
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1 text-white hover:bg-white/20 h-6 w-6 p-0"
            onClick={() => setShowPromo(false)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link href="/shop" className="text-lg hover:text-gray-600">
                      Shop
                    </Link>
                    <Link href="/on-sale" className="text-lg hover:text-gray-600">
                      On Sale
                    </Link>
                    <Link href="/new-arrivals" className="text-lg hover:text-gray-600">
                      New Arrivals
                    </Link>
                    <Link href="/brands" className="text-lg hover:text-gray-600">
                      Brands
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <Link href="/" className="text-xl md:text-2xl font-bold">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
              <Link href="/on-sale" className="hover:text-gray-600">
                On Sale
              </Link>
              <Link href="/new-arrivals" className="hover:text-gray-600">
                New Arrivals
              </Link>
              <Link href="/brands" className="hover:text-gray-600">
                Brands
              </Link>
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Mobile Search */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>

              {/* Desktop Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for products..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>

              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
