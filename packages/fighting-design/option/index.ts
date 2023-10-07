import Option from './src/option.vue'

import style from '../../fighting-theme/src/option.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FOption: ComponentPublicInstance = installWebComponent(Option, style)

export * from './src/interface'

export default FOption
