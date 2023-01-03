import Slider from './src/slider.vue'

import { install } from '../_utils'

export const FSlider = install(Slider)

export type SliderInstance = InstanceType<typeof Slider>

export * from './src/interface.d'

export default FSlider
