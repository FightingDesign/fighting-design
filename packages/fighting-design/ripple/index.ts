import Ripple from './src/ripple.vue'

import { install } from '../_utils'

export const FRipple = install(Ripple)

/** ripple 组件实例类型 */
export type RippleInstance = InstanceType<typeof Ripple>

export * from './src/interface'

export default FRipple
