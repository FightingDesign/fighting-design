import ToolbarItem from './src/toolbar-item.vue'

import style from '../../fighting-theme/src/toolbar-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FToolbarItem: ComponentPublicInstance = installWebComponent(ToolbarItem, style)

/** toolbar-item 组件实例类型 */
export type ToolbarItemInstance = InstanceType<typeof ToolbarItem>

export * from './src/interface'

export default FToolbarItem
