"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-12 mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
            STAY UP TO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-xl mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-white text-black py-3 px-4 rounded-full w-full"
            />
            <Button className="bg-white text-black hover:bg-gray-100 py-3 px-6 rounded-full w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold block mb-4">
              SHOP.CO
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs">
              We have clothes that suit your style and that you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3 flex-wrap">
              {/* Social Icons */}
              <Link href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">COMPANY</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-black">Features</Link></li>
              <li><Link href="/works" className="text-gray-600 hover:text-black">Works</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-black">Career</Link></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">HELP</h4>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-gray-600 hover:text-black">Customer Support</Link></li>
              <li><Link href="/delivery" className="text-gray-600 hover:text-black">Delivery Details</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">FAQ</h4>
            <ul className="space-y-3 mb-6">
              <li><Link href="/account" className="text-gray-600 hover:text-black">Account</Link></li>
              <li><Link href="/orders" className="text-gray-600 hover:text-black">Manage Deliveries</Link></li>
              <li><Link href="/orders" className="text-gray-600 hover:text-black">Orders</Link></li>
              <li><Link href="/payments" className="text-gray-600 hover:text-black">Payments</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">RESOURCES</h4>
            <ul className="space-y-3">
              <li><Link href="/ebooks" className="text-gray-600 hover:text-black">Free eBooks</Link></li>
              <li><Link href="/tutorial" className="text-gray-600 hover:text-black">Development Tutorial</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-black">How to - Blog</Link></li>
              <li><Link href="/playlist" className="text-gray-600 hover:text-black">YouTube Playlist</Link></li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t pt-6 border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-gray-600 text-sm">
          <p>Shop.co © {new Date().getFullYear()}, All Rights Reserved</p>
          <div className="flex gap-3 items-center justify-center">
            <div className="w-12 h-8 bg-white border rounded flex items-center justify-center font-bold text-blue-600 text-xs">
              VISA
            </div>
            <div className="w-12 h-8 bg-white border rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-12 h-8 bg-white border rounded flex items-center justify-center font-bold text-blue-600 text-xs">
              PayPal
            </div>
            <div className="w-12 h-8 bg-white border rounded flex items-center justify-center font-bold text-xs">
              Pay
            </div>
            <div className="w-12 h-8 bg-white border rounded flex items-center justify-center font-bold text-xs">
              G Pay
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
