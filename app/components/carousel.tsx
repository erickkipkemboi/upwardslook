"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  const slides = [
    {
      src: "/1.jpg",
      title: "Explore Nature",
      description: "Step into untouched landscapes where every corner tells a story. From lush forests to serene rivers, reconnect with the raw beauty of the wild and let your senses come alive.",
    },
    {
      src: "/2.jpg",
      title: "Adventure Awaits",
      description: "Embark on journeys that challenge your limits and ignite your spirit. Whether it's trekking, rafting, or wildlife exploration, thrilling adventures are just a step away.",
    },
    {
      src: "/3.jpg",
      title: "Peaceful Retreat",
      description: "Find your sanctuary away from the noise and stress of everyday life. Relax in tranquil settings, breathe fresh air, and rejuvenate your mind, body, and soul.",
    },
    {
      src: "/5.jpg",
      title: "City Lights",
      description: "Experience the vibrant energy of the urban world. From dazzling nightscapes to bustling streets, immerse yourself in the culture, cuisine, and nightlife that make the city come alive.",
    },
  ]
  
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen h-screen overflow-hidden"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="w-full h-screen relative">
            <div className="w-full h-full relative">
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 pt-[10%]">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-center max-w-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
