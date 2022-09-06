import Watermark from './src/watermark.vue'

import { install } from '../_utils'

export const FWatermark = /* @__PURE__ */ (() => install(Watermark))()

export type FWatermarkInstance = InstanceType<typeof Watermark>
