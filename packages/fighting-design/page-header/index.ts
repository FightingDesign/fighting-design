import PageHeader from './src/page-header.vue'

import style from '../../fighting-theme/src/page-header.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FPageHeader: ComponentPublicInstance = installWebComponent(PageHeader, style)

/** page-header 组件实例类型 */
export type PageHeaderInstance = InstanceType<typeof PageHeader>

export * from './src/interface'

export default FPageHeader
