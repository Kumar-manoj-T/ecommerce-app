"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useAppSelector } from "@/lib/hooks"

export default function HomePage() {
  const { items: products } = useAppSelector((state) => state.products)
  const newArrivals = products.slice(0, 4)
  const topSelling = products.slice(4, 8)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f2f0f1]">
        <div className="flex mx-auto px-10 pt-6 md:pt-8 w-screen">
          <div className="md:px-10 lg:pt-6 pb-0 flex flex-col md:flex-row gap-10">
            <div className="lg:w-3/6 w-full">
              <h1 className="font-integral text-3xl md:text-4xl lg:text-7xl font-[1000] leading-tight md:py-5">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className="text-gray-600 text-base md:text-lg pb-5">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
              </p>
              <Button size="lg" className="px-6 md:px-20 rounded-full w-fit">
                Shop Now
              </Button>
              <div className="grid grid-cols-3 gap-4 md:flex md:items-center md:space-x-8">
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
              <div className="">
                <Image
                  src="Images/hero.png"
                  alt="Hero Image"
                  width={550}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
        <div className="flex mx-auto px-10 bg-black py-6 md:py-8 w-screen">
          <div className="grid grid-cols-5 gap-2 md:grid-flow-col justify-center items-center space-x-4 md:space-x-12 overflow-x-auto">
            {/* Versace Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/logo/versace.png"
                alt="Versace"
                width={120}
                height={40}
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>

            {/* Zara Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/logo/zara.png"
                alt="Zara"
                width={80}
                height={40}
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>

            {/* Gucci Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/logo/gucci.png"
                alt="Gucci"
                width={100}
                height={40}
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>

            {/* Prada Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/logo/prada.png"
                alt="Prada"
                width={100}
                height={40}
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>

            {/* Calvin Klein Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/logo/klein.png"
                alt="Calvin Klein"
                width={120}
                height={40}
                className="h-6 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">NEW ARRIVALS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
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

      {/* Top Selling */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">TOP SELLING</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#F0F0F0] rounded-2xl p-4 md:p-8 shadow">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10">BROWSE BY DRESS STYLE</h1>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden grid grid-cols-1 gap-5 ">
              <Link href="/shop?category=casual">
                <div className="rounded-xl overflow-hidden bg-white shadow group">
                  <div className="h-48 w-full overflow-hidden">
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

              <Link href="/shop?category=formal">
                <div className="rounded-xl overflow-hidden bg-white shadow group">
                  <div className="h-48 w-full overflow-hidden">
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

              <Link href="/shop?category=party">
                <div className="rounded-xl overflow-hidden bg-white shadow group">
                  <div className="h-48 w-full overflow-hidden">
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

              <Link href="/shop?category=gym">
                <div className="rounded-xl overflow-hidden bg-white shadow group">
                  <div className="h-48 w-full overflow-hidden">
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

            {/* Desktop Layout - Grid */}
            <div className="hidden md:block">
              {/* Top Row */}
              <div className="flex gap-6 mb-6">
                {/* Casual (1/3) */}
                <Link href="/shop?category=casual" className="w-1/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[380px] w-full overflow-hidden">
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

                {/* Formal (2/3) */}
                <Link href="/shop?category=formal" className="w-2/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[380px] w-full overflow-hidden">
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

              {/* Bottom Row */}
              <div className="flex gap-6">
                {/* Party (2/3) */}
                <Link href="/shop?category=party" className="w-2/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[380px] w-full overflow-hidden">
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

                {/* Gym (1/3) */}
                <Link href="/shop?category=gym" className="w-1/3">
                  <div className="rounded-xl overflow-hidden bg-white shadow group">
                    <div className="h-[380px] w-full overflow-hidden">
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to
                  elegant dresses, every piece I've bought has exceeded my expectations."
                </p>
                <div className="font-semibold text-sm md:text-base">Sarah M.</div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}
