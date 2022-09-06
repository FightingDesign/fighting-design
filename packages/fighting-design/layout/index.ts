import Layout from './src/layout.vue'

import { install } from '../_utils'

export const FLayout = /* @__PURE__ */ (() => install(Layout))()

export type FLayoutInstance = InstanceType<typeof Layout>
