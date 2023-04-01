import ImagePreview from './src/image-preview.vue'

import { install } from '../_utils'

export const FImagePreview = install(ImagePreview)

/** image-preview 组件实例类型 */
export type ImagePreviewInstance = InstanceType<typeof ImagePreview>

export * from './src/interface'

export default FImagePreview
