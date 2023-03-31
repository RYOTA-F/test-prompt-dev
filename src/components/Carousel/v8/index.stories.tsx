import { Story } from '@storybook/react'

import Carousel from '.'

export default {
  title: 'Components/Carousel/v8',
  component: Carousel,
}

const carouselItems = [
  { src: 'https://placehold.jp/300x168.png', alt: 'Image 1' },
  { src: 'https://placehold.jp/400x300.png', alt: 'Image 1' },
  { src: 'https://placehold.jp/500x400.png', alt: 'Image 1' },
]

const Template: Story = () => (
  <div className="w-[100vw] h-[100vh] flex items-center justify-center">
    <Carousel images={carouselItems} interval={2000} />
  </div>
)

export const Normal = Template.bind({})
