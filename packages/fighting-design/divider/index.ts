import Divider from './src/divider.vue'

import style from '../../fighting-theme/src/divider.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FDivider: ComponentPublicInstance = installWebComponent(Divider, style)

/** divider 组件实例类型 */
export type DividerInstance = InstanceType<typeof Divider>

export * from './src/interface'

export default FDivider
