import TabsPane from './src/tabs-pane.vue'

import { install } from '../_utils'

export const FTabsPane = install(TabsPane)

/** tabs-pane 组件实例类型 */
export type TabsPaneInstance = InstanceType<typeof TabsPane>

export * from './src/interface'

export default FTabsPane
