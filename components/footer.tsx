"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              STAY UP TO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="Enter your email address" className="bg-white text-black pr-4 py-3 rounded-full" />
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-full font-medium">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl md:text-3xl font-bold mb-4 block">
              SHOP.CO
            </Link>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">HELP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ & Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">FAQ</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/account" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Payments
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ebooks" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link href="/tutorial" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link href="/playlist" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">Shop.co © 2000-2023, All Rights Reserved</p>

            {/* Payment Methods */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">VISA</span>
              </div>
              <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                <div className="w-6 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">PayPal</span>
              </div>
              <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                <span className="text-xs font-bold">Pay</span>
              </div>
              <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                <span className="text-xs font-bold">G Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
