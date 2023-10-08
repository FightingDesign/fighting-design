import Watermark from './src/watermark.vue'

import style from '../../fighting-theme/src/watermark.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FWatermark: ComponentPublicInstance = installWebComponent(Watermark, style)

/** watermark 组件实例类型 */
export type WatermarkInstance = InstanceType<typeof Watermark>

export * from './src/interface'

export default FWatermark
