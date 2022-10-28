import ImagePreview from './src/image-preview.vue'

import { install } from '../_utils'

export const FImagePreview = install(ImagePreview)

export * from './src/interface.d'

export type ImagePreviewInstance = InstanceType<typeof ImagePreview>

export default ImagePreview
