import NumberAnimate from './src/number-animate.vue'

import { install } from '../_utils'

export const FNumberAnimate = install(NumberAnimate)

export type NumberAnimateInstance = InstanceType<typeof NumberAnimate>

export * from './src/interface.d'

export default FNumberAnimate
