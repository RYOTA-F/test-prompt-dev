import { Story } from '@storybook/react'

import { Carousel } from '.'

export default {
  title: 'Components/Carousel/v4',
  component: Carousel,
}

const carouselItems = [
  {
    id: 1,
    image: 'https://placehold.jp/300x200.png',
    altText: 'Image 1',
  },
  {
    id: 2,
    image: 'https://placehold.jp/400x300.png',
    altText: 'Image 2',
  },
  {
    id: 3,
    image: 'https://placehold.jp/500x400.png',
    altText: 'Image 3',
  },
]

const Template: Story = () => (
  <div className="w-[100vw] h-[100vh] flex items-center justify-center">
    <Carousel items={carouselItems} interval={2000} />
  </div>
)

export const Normal = Template.bind({})
