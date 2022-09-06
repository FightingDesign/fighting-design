import ToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

export const FToolbarItem = /* @__PURE__ */ () => install(ToolbarItem)

export type FToolbarItemInstance = InstanceType<typeof ToolbarItem>
