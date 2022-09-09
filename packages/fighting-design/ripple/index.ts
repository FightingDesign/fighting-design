import Ripple from './src/ripple.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Ripple)

export const FRipple = Ripple

export type FRippleInstance = InstanceType<typeof Ripple>
