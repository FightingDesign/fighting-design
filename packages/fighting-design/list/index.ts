import List from './src/list.vue'

import style from '../../fighting-theme/src/list.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FList: ComponentPublicInstance = installWebComponent(List, style)

/** list 组件实例类型 */
export type ListInstance = InstanceType<typeof List>

export * from './src/interface'

export default FList
