"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) // Auto-slide continues even after user interacts
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen h-screen"  
      
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-screen">
            <div className="w-full h-full flex items-center justify-center">
              <Card className="w-full h-full">
                <CardContent className="flex w-full h-full items-center justify-center bg-gray-900 text-white text-6xl font-bold">
                  Slide {index + 1}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  )
}
