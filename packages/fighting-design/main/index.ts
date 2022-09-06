import Main from './src/main.vue'

import { install } from '../_utils'

export const FMain = /* @__PURE__ */ () => install(Main)

export type FMainInstance = InstanceType<typeof Main>
