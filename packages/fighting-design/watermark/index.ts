import Watermark from './src/watermark.vue'

import { install } from '../_utils'

export const FWatermark = install(Watermark)

/** watermark 组件实例类型 */
export type WatermarkInstance = InstanceType<typeof Watermark>

export * from './src/interface'

export default FWatermark
