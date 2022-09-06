import Switch from './src/switch.vue'

import { install } from '../_utils'

export const FSwitch = /* @__PURE__ */ (() => install(Switch))()

export type FSwitchInstance = InstanceType<typeof Switch>
