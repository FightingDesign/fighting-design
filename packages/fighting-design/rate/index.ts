import Rate from './src/rate.vue'

import style from '../../fighting-theme/src/rate.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRate: ComponentPublicInstance = installWebComponent(Rate, style)

/** rate 组件实例类型 */
export type RateInstance = InstanceType<typeof Rate>

export * from './src/interface'

export default FRate
