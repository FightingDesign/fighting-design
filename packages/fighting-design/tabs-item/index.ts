import TabsItem from './src/tabs-item.vue'

import style from '../../fighting-theme/src/tabs-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTabsItem: ComponentPublicInstance = installWebComponent(TabsItem, style)

export * from './src/interface'

export default FTabsItem
