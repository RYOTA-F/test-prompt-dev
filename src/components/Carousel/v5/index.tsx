// 画像サイズがバラバラでも同じサイズに自動調整されるよう修正して

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
  width?: number
  height?: number
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  interval = 5000,
  width = 300,
  height = 200,
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
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ width, height }}
    >
      <div
        className="carousel absolute top-0 left-0 flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(activeIndex * 100) / items.length}%)`,
          width: `${items.length * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item w-full h-full flex items-center justify-center"
            style={{ width: `${100 / items.length}%` }}
          >
            <img
              src={item.image}
              alt={item.altText}
              className="object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
