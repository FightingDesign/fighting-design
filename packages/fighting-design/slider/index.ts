import Slider from './src/slider.vue'

import style from '../../fighting-theme/src/slider.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSlider: ComponentPublicInstance = installWebComponent(Slider, style)

export * from './src/interface'

export default FSlider
