import NumberAnimate from './src/number-animate.vue'

import { install } from '../_utils'

export const FNumberAnimate = install(NumberAnimate)

/** number-animate 组件实例类型 */
export type NumberAnimateInstance = InstanceType<typeof NumberAnimate>

export * from './src/interface'

export default FNumberAnimate
