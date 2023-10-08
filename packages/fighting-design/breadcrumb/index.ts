import Breadcrumb from './src/breadcrumb.vue'

import style from '../../fighting-theme/src/breadcrumb.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBreadcrumb: ComponentPublicInstance = installWebComponent(Breadcrumb, style)

/** breadcrumb 组件实例类型 */
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>

export * from './src/interface'

export default FBreadcrumb
