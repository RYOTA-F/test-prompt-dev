// ブログの一番上に挿入するパーツを実装してください。

// 要件は以下の通りです。

// # ブログトップ・カルーセル
// 1. ブログの一番上に挿入するカルーセルのコンポーネント実装

// ## 要件: 1
// 1. 見た目
//   1-1. 画像が3個、横に並ぶように実装してください。
//     1-1-1. 縦：横比は全て、1:1.78
// 	1-2. 真ん中が少し大きく、両サイドが少し小さく表示してください。
// 		1-2-1. 真ん中: 横300px
//     1-2-2. 両サイド: 横200px
//   1-3. それぞれの画像のmarginは16pxにしてください。
//   1-4. border-radiusは5pxにしてください。
//   1-5. サイズがバラバラな画像でも同じサイズに調整してください。
//   1-6. コンポーネント全体の大きさは画面幅いっぱいに広がるようにしてください。
//   1-7. 画像は全て画面内に表示してください。
//   1.8. 画面の中央に配置してください。

// 2. 動き
//   2-1. 画像を横にスライドして並び替えてください。
// 		2-1-1. 待機時間はPropsで指定
//     2-1-2. 常に真ん中が大きくなるよう表示
// 	2-2. スライド時間は1秒間にしてください。
//   2-3. 滑らかに横に画像をスライドしてください。

// ## 要件: 2
// 1. Reactで実装してください。
//   1-1. Functional Componentベース
//   1-2. export default を使用
// 2. TypeScriptベースで実装してください。
// 3. CSSはTailwind CSSで実装してください。
// 4. Propsは以下の通りにしてください。
//   4-1. images: 画像の path と alt を指定
//   4-2. interval: カルーセルの待機時間
// 5. ライブラリは使わず独自のCSSで実装してください。

// Carousel.tsx
import React, { useState, useEffect } from 'react'
import { useWindowSize } from './useWindowSize'

interface CarouselProps {
  images: { path: string; alt: string }[]
  interval: number
}

export default function Carousel({ images, interval }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const windowSize = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, interval)
    return () => clearTimeout(timer)
  }, [currentIndex, interval])

  return (
    <div
      className="w-full h-auto flex items-center justify-center overflow-hidden relative"
      style={{ height: 'calc(300px / 1.78)' }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={image.alt}
          className={`absolute object-cover ${
            index === currentIndex ? 'w-72 h-auto' : 'w-48 h-auto'
          } rounded-md mx-4 transition-all duration-1000 ease-in-out transform ${
            currentIndex === index ? 'scale-125' : ''
          }`}
          style={{
            left: `calc(50% - ${(index - currentIndex) * (200 + 16)}px)`,
            zIndex: index === currentIndex ? 10 : 1,
          }}
        />
      ))}
    </div>
  )
}
