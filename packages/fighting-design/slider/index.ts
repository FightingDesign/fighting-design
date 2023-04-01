import Slider from './src/slider.vue'

import { install } from '../_utils'

export const FSlider = install(Slider)

/** slider 组件实例类型 */
export type SliderInstance = InstanceType<typeof Slider>

export * from './src/interface'

export default FSlider
