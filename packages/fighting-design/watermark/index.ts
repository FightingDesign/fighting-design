import FWatermark from './src/watermark.vue'

import { install } from '../_utils'

export type FWatermarkInstance = InstanceType<typeof FWatermark>

export default install(FWatermark, FWatermark.name)
