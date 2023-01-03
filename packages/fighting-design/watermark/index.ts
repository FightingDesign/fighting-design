import Watermark from './src/watermark.vue'

import { install } from '../_utils'

export const FWatermark = install(Watermark)

export type WatermarkInstance = InstanceType<typeof Watermark>

export * from './src/interface.d'

export default FWatermark
