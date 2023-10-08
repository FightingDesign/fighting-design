import Ripple from './src/ripple.vue'

import style from '../../fighting-theme/src/ripple.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRipple: ComponentPublicInstance = installWebComponent(Ripple, style)

/** ripple 组件实例类型 */
export type RippleInstance = InstanceType<typeof Ripple>

export * from './src/interface'

export default FRipple
