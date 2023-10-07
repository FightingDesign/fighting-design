import Pagination from './src/pagination.vue'

import style from '../../fighting-theme/src/pagination.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FPagination: ComponentPublicInstance = installWebComponent(Pagination, style)

export * from './src/interface'

export default FPagination
