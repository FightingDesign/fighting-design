import ToolbarItem from './src/toolbar-item.vue'

import style from '../../fighting-theme/src/toolbar-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FToolbarItem: ComponentPublicInstance = installWebComponent(ToolbarItem, style)

export * from './src/interface.d'

export default FToolbarItem
