import Textarea from './src/textarea.vue'

import style from '../../fighting-theme/src/textarea.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FTextarea: ComponentPublicInstance = installWebComponent(Textarea, style)

export * from './src/interface'

export default FTextarea
