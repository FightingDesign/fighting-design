import Image from './src/image.vue'

import style from '../../fighting-theme/src/image.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FImage: ComponentPublicInstance = installWebComponent(Image, style)

/** image 组件实例类型 */
export type ImageInstance = InstanceType<typeof Image>

export * from './src/interface'

export default FImage
