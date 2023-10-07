import Rate from './src/rate.vue'

import style from '../../fighting-theme/src/rate.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRate: ComponentPublicInstance = installWebComponent(Rate, style)

export * from './src/interface'

export default FRate
