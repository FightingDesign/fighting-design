import FWatermark from './src/watermark.vue'

import { install } from '../_utils'

install(FWatermark, FWatermark.name)

export type FWatermarkInstance = InstanceType<typeof FWatermark>

export default FWatermark
