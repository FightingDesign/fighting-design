import Divider from './src/divider.vue'

import { install } from '../_utils'

export const FDivider = /* @__PURE__ */ (() => install(Divider))()

export type FDividerInstance = InstanceType<typeof Divider>
