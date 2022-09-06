import Header from './src/header.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Header)

export const FHeader = Header

export type FHeaderInstance = InstanceType<typeof Header>
