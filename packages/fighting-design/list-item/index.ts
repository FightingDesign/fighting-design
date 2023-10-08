import ListItem from './src/list-item.vue'

import style from '../../fighting-theme/src/list-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FListItem: ComponentPublicInstance = installWebComponent(ListItem, style)

/** list-item 组件实例类型 */
export type ListItemInstance = InstanceType<typeof ListItem>

export * from './src/interface'

export default FListItem
