import Aside from './src/aside.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Aside)

export const FAside = Aside

export type FAsideInstance = InstanceType<typeof Aside>
