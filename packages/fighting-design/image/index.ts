import Image from './src/image.vue'

import { install } from '../_utils'

export const FImage = install(Image)

export type FImageInstance = InstanceType<typeof Image>

declare module 'vue' {
  export interface GlobalComponents {
    FImage: typeof FImage
  }
}
