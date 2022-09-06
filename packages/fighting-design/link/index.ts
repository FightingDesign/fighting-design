import Link from './src/link.vue'

import { install } from '../_utils'

export const FLink = /* @__PURE__ */ (() => install(Link))()

export type FLinkInstance = InstanceType<typeof Link>
