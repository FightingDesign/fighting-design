import Main from './src/main.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Main)

export const FMain = Main

export type FMainInstance = InstanceType<typeof Main>
