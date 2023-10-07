import NumberAnimate from './src/number-animate.vue'

import style from '../../fighting-theme/src/number-animate.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FNumberAnimate: ComponentPublicInstance = installWebComponent(NumberAnimate, style)

export * from './src/interface'

export default FNumberAnimate
