// Reactでカルーセルが表示されるコンポーネントを書いて
// TailwindCSSベースで実装して
// TypeScriptベースで実装して

// CarouselComponent.tsx

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselComponent.css'

type CarouselItem = {
  id: number
  image: string
  altText: string
}

interface CarouselComponentProps {
  items: CarouselItem[]
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  items,
}) => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showIndicators={false}
        interval={5000}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
