import Ripple from './src/ripple.vue'

import { install } from '../_utils'

export const FRipple = install(Ripple)

export type RippleInstance = InstanceType<typeof Ripple>

export * from './src/interface.d'

export default FRipple
