import Switch from './src/switch.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Switch)

export const FSwitch = Switch

export type FSwitchInstance = InstanceType<typeof Switch>
