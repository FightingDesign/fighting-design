import Layout from './src/layout.vue'

import { install } from '../_utils'

export const FLayout = install(Layout)

/** layout 组件实例类型 */
export type LayoutInstance = InstanceType<typeof Layout>

export * from './src/interface.d'

export default FLayout
