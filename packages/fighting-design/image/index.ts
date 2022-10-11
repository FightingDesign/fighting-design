import Image from './src/image.vue'

import { install } from '../_utils'

export const FImage = install(Image)

export type ImageInstance = InstanceType<typeof Image>

export type { ImagePropsType } from './src/image'

export type { ImageFitType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FImage: typeof FImage
  }
}
