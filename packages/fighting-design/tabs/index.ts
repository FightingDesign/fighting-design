import Tabs from './src/tabs.vue'

import { install } from '../_utils'

export const FTabs = install(Tabs)

export type TabsInstance = InstanceType<typeof Tabs>

export * from './src/interface.d'

export default FTabs
