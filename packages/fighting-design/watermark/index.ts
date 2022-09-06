import Watermark from './src/watermark.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Watermark)

export const FWatermark = Watermark

export type FWatermarkInstance = InstanceType<typeof Watermark>
