import Layout from './src/layout.vue'

import { install } from '../_utils'

export const FLayout = install(Layout)

export type FLayoutInstance = InstanceType<typeof Layout>
