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
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,  // ✅ keep auto sliding
      stopOnMouseEnter: false,   // ✅ don’t pause on hover
    })
  )

  return (
    <div className="w-screen h-screen">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <Card className="h-full w-full">
                <CardContent className="flex h-full w-full items-center justify-center p-6">
                  <span className="text-6xl font-bold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Optional: remove these if you don't want manual controls */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}
