import BackTop from './src/back-top.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(BackTop)

export const FBackTop = BackTop

export type FBackTopInstance = InstanceType<typeof BackTop>
