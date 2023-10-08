import ImagePreview from './src/image-preview.vue'

import style from '../../fighting-theme/src/image-preview.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FImagePreview: ComponentPublicInstance = installWebComponent(ImagePreview, style)

/** image-preview 组件实例类型 */
export type ImagePreviewInstance = InstanceType<typeof ImagePreview>

export * from './src/interface'

export default FImagePreview
