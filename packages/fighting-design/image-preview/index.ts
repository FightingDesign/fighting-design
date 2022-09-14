import ImagePreview from './src/image-preview.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(ImagePreview)

export const FImagePreview = ImagePreview

export type FImagePreviewInstance = InstanceType<typeof ImagePreview>
