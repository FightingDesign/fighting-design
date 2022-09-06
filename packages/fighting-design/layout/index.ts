import Layout from './src/layout.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Layout)

export const FLayout = Layout

export type FLayoutInstance = InstanceType<typeof Layout>
