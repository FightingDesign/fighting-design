import ToolbarItem from './src/toolbar-item.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(ToolbarItem)

export const FToolbarItem = ToolbarItem

export type FToolbarItemInstance = InstanceType<typeof ToolbarItem>
