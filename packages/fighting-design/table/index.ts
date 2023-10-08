import Table from './src/table.vue'

import style from '../../fighting-theme/src/table.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTable: ComponentPublicInstance = installWebComponent(Table, style)

/** table 组件实例类型 */
export type TableInstance = InstanceType<typeof Table>

export * from './src/interface'

export default FTable
