import Table from './src/table.vue'

import style from '../../fighting-theme/src/table.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTable: ComponentPublicInstance = installWebComponent(Table, style)

export * from './src/interface.d'

export default FTable
