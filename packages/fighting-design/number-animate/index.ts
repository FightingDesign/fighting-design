import NumberAnimate from './src/number-animate.vue'

import style from '../../fighting-theme/src/number-animate.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FNumberAnimate: ComponentPublicInstance = installWebComponent(NumberAnimate, style)

/** number-animate 组件实例类型 */
export type NumberAnimateInstance = InstanceType<typeof NumberAnimate>

export * from './src/interface'

export default FNumberAnimate
