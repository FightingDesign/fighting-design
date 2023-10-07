import Image from './src/image.vue'

import style from '../../fighting-theme/src/image.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FImage: ComponentPublicInstance = installWebComponent(Image, style)

export * from './src/interface'

export default FImage
