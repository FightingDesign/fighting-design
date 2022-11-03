import ImagePreview from './src/image-preview.vue'

import style from '../../fighting-theme/src/image-preview.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FImagePreview: ComponentPublicInstance = installWebComponent(ImagePreview, style)

export * from './src/interface.d'

export default FImagePreview
