// react-responsive-carousel を使わずCSSは独自実装して

// Carousel.tsx

import React, { useState, useEffect, useRef } from 'react'

type CarouselItem = {
  id: number
  image: string
  altText: string
}

interface CarouselProps {
  items: CarouselItem[]
  interval?: number
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  interval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      interval
    )

    return () => {
      resetTimeout()
    }
  }, [activeIndex, interval, items.length])

  return (
    <div className="relative overflow-hidden">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item absolute w-full h-full top-0 transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
