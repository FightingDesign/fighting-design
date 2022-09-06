import Header from './src/header.vue'

import { install } from '../_utils'

export const FHeader = /* @__PURE__ */ () => install(Header)

export type FHeaderInstance = InstanceType<typeof Header>
