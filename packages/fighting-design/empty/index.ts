import Empty from './src/empty.vue'

import style from '../../fighting-theme/src/empty.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FEmpty: ComponentPublicInstance = installWebComponent(Empty, style)

/** empty 组件实例类型 */
export type EmptyInstance = InstanceType<typeof Empty>

export * from './src/interface'

export default FEmpty
