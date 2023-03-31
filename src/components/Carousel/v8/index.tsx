// 横に3枚表示されて真ん中の1枚だけが少し大きく表示されるよう修正して
// 変わらず5秒ごとにスライドするように

// Carousel.tsx
import React, { useState, useEffect, useRef } from 'react'

interface CarouselProps {
  images: { src: string; alt: string }[]
  interval: number
}

const Carousel: React.FC<CarouselProps> = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.style.transform = `translateX(-${activeIndex * 216}px)`
    }
  }, [activeIndex])

  return (
    <div className="relative overflow-hidden w-full">
      <ul ref={ulRef} className="flex transition-all duration-1000">
        {images.map((image, index) => (
          <li
            key={index}
            className={`${
              index === activeIndex ? 'w-300px h-168px' : 'w-200px h-112px'
            } flex-none mx-2 rounded-lg`}
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
