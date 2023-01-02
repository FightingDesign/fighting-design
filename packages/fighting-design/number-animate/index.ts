import { install } from '../_utils'
import NumberAnimate from './src/number-animate.vue'

export const FNumberAnimate = install(NumberAnimate)

export type NumberAnimateInstance = InstanceType<typeof NumberAnimate>

export * from './src/interface.d'

export default FNumberAnimate
