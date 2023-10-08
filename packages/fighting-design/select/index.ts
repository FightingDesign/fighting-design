import Select from './src/select.vue'

import style from '../../fighting-theme/src/select.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSelect: ComponentPublicInstance = installWebComponent(Select, style)

/** select 组件实例类型 */
export type SelectInstance = InstanceType<typeof Select>

export * from './src/interface'

export default FSelect
