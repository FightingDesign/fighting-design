import ListItem from './src/list-item.vue'

import style from '../../fighting-theme/src/list-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FListItem: ComponentPublicInstance = installWebComponent(ListItem, style)

export * from './src/interface.d'

export default FListItem
