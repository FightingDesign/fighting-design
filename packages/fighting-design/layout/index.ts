import Layout from './src/layout.vue'

import style from '../../fighting-theme/src/layout.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLayout: ComponentPublicInstance = installWebComponent(Layout, style)

/** layout 组件实例类型 */
export type LayoutInstance = InstanceType<typeof Layout>

export * from './src/interface'

export default FLayout
