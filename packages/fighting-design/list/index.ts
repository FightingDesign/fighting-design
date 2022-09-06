import List from './src/list.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(List)

export const FList = List

export type FListInstance = InstanceType<typeof List>
