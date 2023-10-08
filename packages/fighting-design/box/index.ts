import Box from './src/box.vue'

import style from '../../fighting-theme/src/box.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBox: ComponentPublicInstance = installWebComponent(Box, style)

/** box 组件实例类型 */
export type BoxInstance = InstanceType<typeof Box>

export * from './src/interface'

export default FBox
