import Carousel from './src/carousel.vue'

import { install } from '../_utils'

export const FCarousel = install(Carousel)

export type CarouselInstance = InstanceType<typeof Carousel>

export default Carousel
