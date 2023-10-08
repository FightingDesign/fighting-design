import BreadcrumbItem from './src/breadcrumb-item.vue'

import style from '../../fighting-theme/src/breadcrumb-item.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBreadcrumbItem: ComponentPublicInstance = installWebComponent(BreadcrumbItem, style)

/** breadcrumb-item 组件实例类型 */
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>

export * from './src/interface'

export default FBreadcrumbItem
