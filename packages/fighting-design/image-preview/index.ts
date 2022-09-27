import ImagePreview from './src/image-preview.vue'

import { install } from '../_utils'

export const FImagePreview = install(ImagePreview)

export type ImagePreviewInstance = InstanceType<typeof ImagePreview>

export type { ImagePreviewPropsType } from './src/image-preview'

declare module 'vue' {
  export interface GlobalComponents {
    FImagePreview: typeof FImagePreview
  }
}
