import Aside from './src/aside.vue'

import { install } from '../_utils'

export const FAside = /* @__PURE__ */ (() => install(Aside))()

export type FAsideInstance = InstanceType<typeof Aside>
