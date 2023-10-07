import Ripple from './src/ripple.vue'

import style from '../../fighting-theme/src/ripple.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FRipple: ComponentPublicInstance = installWebComponent(Ripple, style)

export * from './src/interface'

export default FRipple
