import Tag from './src/tag.vue'

import style from '../../fighting-theme/src/tag.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTag: ComponentPublicInstance = installWebComponent(Tag, style)

export * from './src/interface'

export default FTag
