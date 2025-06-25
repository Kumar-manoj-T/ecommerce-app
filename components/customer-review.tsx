"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Star } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is on-point with the latest trends.",
  },
  {
    name: "Monica D.",
    text: "Every time I order from Shop.co, I know I’m getting high-quality fashion that fits beautifully. Highly recommended!",
  },
  {
    name: "Monica D.",
    text: "Every time I order from Shop.co, I know I’m getting high-quality fashion that fits beautifully. Highly recommended!",
  }, {
    name: "Monica D.",
    text: "Every time I order from Shop.co, I know I’m getting high-quality fashion that fits beautifully. Highly recommended!",
  }, {
    name: "Monica D.",
    text: "Every time I order from Shop.co, I know I’m getting high-quality fashion that fits beautifully. Highly recommended!",
  }, {
    name: "Monica D.",
    text: "Every time I order from Shop.co, I know I’m getting high-quality fashion that fits beautifully. Highly recommended!",
  },
]

export default function CustomerReview() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative lg:px-14">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4 items-center">
            <div
              className="swiper-button-prev !w-4 !h-4 !p-0 !m-0 !bg-none !text-transparent !shadow-none !border-none !static !top-auto !left-auto cursor-pointer"
            >
              <img src="/Images/left-arow.png" alt="Previous" className="w-full h-full object-contain" />
            </div>

           
            <div
              className="swiper-button-next !w-4 !h-4 !p-0 !m-0 !bg-none !text-transparent !shadow-none !border-none !static !top-auto !left-auto cursor-pointer"
            >
              <img src="/Images/right-arow.png" alt="Next" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000 }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm h-full flex flex-col justify-between min-h-[230px]">
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">"{review.text}"</p>
                </div>
                <div className="font-semibold text-sm md:text-base">{review.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
