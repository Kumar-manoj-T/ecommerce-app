"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import { Star, Minus, Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { addToCart } from "@/lib/slices/cartSlice"
import { useParams } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



// Mock reviews data
const mockReviews = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 5,
    date: "August 14, 2023",
    verified: true,
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    date: "August 15, 2023",
    verified: true,
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a nod from me.",
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 4,
    date: "August 16, 2023",
    verified: true,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4,
    date: "August 17, 2023",
    verified: true,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 4,
    date: "August 18, 2023",
    verified: true,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 5,
    date: "August 19, 2023",
    verified: true,
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
]

export default function ProductDetailPage() {
  const [isMobile, setIsMobile] = useState(false);
  const params = useParams()
  const dispatch = useAppDispatch()
  const { items: products } = useAppSelector((state) => state.products)

  const product = products.find((p) => p.id === params.id)
  const relatedProducts = products.filter((p) => p.id !== params.id && p.category === product?.category).slice(0, 4)

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [reviewsToShow, setReviewsToShow] = useState(3) // Start with 3 reviews visible  
  const [showAllReviews, setShowAllReviews] = useState(false) // State to toggle showing all reviews
  const [sortBy, setSortBy] = useState("latest")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update review count when screen size changes
  useEffect(() => {
    setReviewsToShow(isMobile ? 3 : 6);
  }, [isMobile]);


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
      })
    )
  }

  const sortedReviews = [...mockReviews].sort((a, b) => {
    switch (sortBy) {
      case "highest":
        return b.rating - a.rating
      case "lowest":
        return a.rating - b.rating
      case "latest":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  // console.log("Selected Product:", product);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8 lg:px-16 ">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span>Men</span>
            <span>/</span>
            <span className="text-gray-900">T-shirts</span>
          </nav>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Mobile: Single main image */}
            <div className="lg:hidden space-y-4">
              {/* Main Image */}
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images?.[selectedImageIndex] || product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Additional Images in horizontal scroll */}
              {product?.images?.length > 0 ? (
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                  {product?.images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`min-w-[80px] aspect-square overflow-hidden rounded-md bg-gray-100 border-2 cursor-pointer ${selectedImageIndex === index ? "border-black" : "border-transparent hover:border-gray-300"
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${index}`}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500">No additional images</div>
              )}
            </div>


            {/* Desktop: Main image + thumbnails */}
            <div className="hidden lg:flex gap-4">
              {/* Thumbnail Images on the left (vertical stack) */}
              <div className="flex flex-col gap-4 w-40">
                {product.images?.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-md bg-gray-100 border-2 cursor-pointer ${selectedImageIndex === index ? "border-black" : "border-transparent hover:border-gray-300"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index}`}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )) || (
                    <div className="text-sm text-gray-500">No additional images</div>
                  )}
              </div>

              {/* Main image on the right */}
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex-1 max-w-[500px]">
                <Image
                  src={product.images?.[selectedImageIndex] || product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>



          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold uppercase">{product.name}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating}/5</span>
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
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-black" : "border-gray-300"
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
                        className={`px-4 py-2 border rounded-md cursor-pointer text-center block ${selectedSize === size
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
              <div className="flex items-center border rounded-full">
                <Button variant="ghost" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={handleAddToCart} className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 md:mt-16">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="flex w-full border-b border-gray-200 bg-white">
              <TabsTrigger
                value="details"
                className="flex-1 text-center py-2 text-sm font-medium text-gray-500 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="flex-1 text-center py-2 text-sm font-medium text-gray-500 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
              >
                Rating & Reviews
              </TabsTrigger>
              <TabsTrigger
                value="faqs"
                className="flex-1 text-center py-2 text-sm font-medium text-gray-500 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
              >
                FAQs
              </TabsTrigger>
            </TabsList>



            <TabsContent value="details" className="mt-8">
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {/* Reviews Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold">All Reviews ({mockReviews.length})</h3>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M3 6h18M7 12h10m-7 6h4" />
                          </svg>
                          {sortBy === "latest"
                            ? "Latest"
                            : sortBy === "highest"
                              ? "Highest Rated"
                              : "Lowest Rated"}
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                          <DropdownMenuRadioItem value="latest">Latest</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="highest">Highest Rated</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="lowest">Lowest Rated</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Write a Review</Button>
                  </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedReviews.slice(0, reviewsToShow).map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                      {/* Review Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="p-1">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-lg">{review.name}</span>
                        {review.verified && (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">"{review.review}"</p>

                      {/* Review Date */}
                      <p className="text-gray-500 text-sm">Posted on {review.date}</p>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {mockReviews.length > 0 && (
                  showAllReviews && reviewsToShow < mockReviews.length ? (
                    <div className="text-center mt-4">
                      <Button
                        variant="outline"
                        className="rounded-full py-6 px-8"
                      >
                        Load More Reviews
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center mt-4">
                      <Button
                        variant="outline"
                        onClick={() => setReviewsToShow((prev) => prev + 3)}
                        className="rounded-full py-6 px-8"
                      >
                        Load More Reviews
                      </Button>
                    </div>
                  )
                )}
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
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
