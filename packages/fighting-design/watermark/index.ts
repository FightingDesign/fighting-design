import Watermark from './src/watermark.vue'

import { install } from '../_utils'

export const FWatermark = install(Watermark)

export type WatermarkInstance = InstanceType<typeof Watermark>

export type { WatermarkPropsType } from './src/watermark'

declare module 'vue' {
  export interface GlobalComponents {
    FWatermark: typeof FWatermark
  }
}
