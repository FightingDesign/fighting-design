import Tabs from './src/tabs.vue'

import { install } from '../_utils'

export const FTabs = install(Tabs)

/** tabs 组件实例类型 */
export type TabsInstance = InstanceType<typeof Tabs>

export * from './src/interface'

export default FTabs
