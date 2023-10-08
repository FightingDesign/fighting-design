import Space from './src/space.vue'

import style from '../../fighting-theme/src/space.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSpace: ComponentPublicInstance = installWebComponent(Space, style)

/** space 组件实例类型 */
export type SpaceInstance = InstanceType<typeof Space>

export * from './src/interface'

export default FSpace
