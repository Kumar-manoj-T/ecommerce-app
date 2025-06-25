"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useAppSelector } from "@/lib/hooks"
import CustomerReview from "@/components/customer-review"
import '../styles/globals.css'

export default function HomePage() {
  const { items: products } = useAppSelector((state) => state.products)
  const newArrivals = products.slice(0, 4)
  const topSelling = products.slice(4, 8)

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-[#f2f0f1]">
        <div className="flex mx-auto px-4 md:px-10 pt-6 md:pt-8 w-full">
          <div className="md:px-10 lg:pt-6 pb-0 flex flex-col md:flex-row gap-10">
            <div className="lg:w-3/6 w-full">
              <h1 className="font-integral text-3xl md:text-4xl lg:text-7xl font-[1000] leading-tight md:py-5">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className="text-gray-600 text-base md:text-lg pb-7">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
              </p>
              <Button size="lg" className="px-6 md:px-20 rounded-full w-full md:w-auto">
                Shop Now
              </Button>
              <div className="grid grid-cols-3 gap-4 md:flex md:items-center md:space-x-8 pt-6 md:pt-10">
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-3xl font-bold">200+</div>
                  <div className="text-gray-600 text-xs md:text-base">International Brands</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-3xl font-bold">2,000+</div>
                  <div className="text-gray-600 text-xs md:text-base">High-Quality Products</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-3xl font-bold">30,000+</div>
                  <div className="text-gray-600 text-xs md:text-base">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/6 md:overflow-hidden">
              <Image
                src="/Images/hero.png"
                alt="Hero Image"
                width={550}
                height={480}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex mx-auto px-4 md:px-10 bg-black py-6 md:py-8 w-full overflow-x-hidden">
          <div className="grid grid-cols-5 gap-2 md:grid-flow-col justify-center items-center space-x-4 md:space-x-12 overflow-x-auto">
            {[
              { src: "/Images/logo/versace.png", alt: "Versace", width: 120 },
              { src: "/Images/logo/zara.png", alt: "Zara", width: 80 },
              { src: "/Images/logo/gucci.png", alt: "Gucci", width: 100 },
              { src: "/Images/logo/prada.png", alt: "Prada", width: 100 },
              { src: "/Images/logo/klein.png", alt: "Calvin Klein", width: 120 },
            ].map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={40}
                  className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-14">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">NEW ARRIVALS</h2>
          </div>

          {/* Scrollable on mobile, grid on desktop */}
          <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-8 no-scrollbar">
            {newArrivals.map((product) => (
              <div key={product.id} className="min-w-[65%] md:min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <Link href="/shop">
              <Button variant="outline" className="w-full md:w-auto">
                View All
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-14">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">TOP SELLING</h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-8 no-scrollbar">
            {topSelling.map((product) => (
              <div key={product.id} className="min-w-[65%] md:min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <Link href="/shop">
              <Button variant="outline" className="w-full md:w-auto">
                View All
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Browse by Dress Style */}
      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4 lg:px-14">
          <div className="bg-[#F0F0F0] rounded-2xl p-6 md:p-6 shadow">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              BROWSE BY DRESS STYLE
            </h1>

            {/* Mobile Layout */}
            <div className="md:hidden grid grid-cols-1 gap-5">
              {["casual1", "formal1", "party1", "gym1"].map((cat) => (
                <Link key={cat} href={`/shop?category=${cat}`}>
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-48 w-[310px] overflow-hidden">
                      <Image
                        src={`/Images/${cat}.png`}
                        alt={cat}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex gap-4 mb-6">
                <Link href="/shop?category=casual" className="w-1/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[300px] w-full overflow-hidden">
                      <Image
                        src="/Images/casual.png"
                        alt="Casual"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
                <Link href="/shop?category=formal" className="w-2/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[300px] w-full overflow-hidden">
                      <Image
                        src="/Images/formal.png"
                        alt="Formal"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex gap-4">
                <Link href="/shop?category=party" className="w-2/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[300px] w-full overflow-hidden">
                      <Image
                        src="/Images/party.png"
                        alt="Party"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
                <Link href="/shop?category=gym" className="w-1/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[300px] w-full overflow-hidden">
                      <Image
                        src="/Images/gym.png"
                        alt="Gym"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Customer Reviews */}
      <CustomerReview />


    </div>
  )
}
