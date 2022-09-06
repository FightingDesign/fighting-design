import List from './src/list.vue'

import { install } from '../_utils'

export const FList = /* @__PURE__ */ () => install(List)

export type FListInstance = InstanceType<typeof List>
