import TabsItem from './src/tabs-item.vue'

import style from '../../fighting-theme/src/tabs-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTabsItem: ComponentPublicInstance = installWebComponent(TabsItem, style)

/** tabs-item 组件实例类型 */
export type TabsItemInstance = InstanceType<typeof TabsItem>

export * from './src/interface'

export default FTabsItem
