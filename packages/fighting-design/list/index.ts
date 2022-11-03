import List from './src/list.vue'

import style from '../../fighting-theme/src/list.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FList: ComponentPublicInstance = installWebComponent(List, style)

export * from './src/interface.d'

export default FList
