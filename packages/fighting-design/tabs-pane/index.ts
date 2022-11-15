import TabsPane from './src/tabs-pane.vue'

import { install } from '../_utils'

export const FTabsPane = install(TabsPane)

export type TabsPaneInstance = InstanceType<typeof TabsPane>

export * from './src/interface.d'

export default TabsPane
