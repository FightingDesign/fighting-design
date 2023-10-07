import CollapseAnimation from './src/collapse-animation.vue'

import style from '../../fighting-theme/src/collapse-animation.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCollapseAnimation: ComponentPublicInstance = installWebComponent(CollapseAnimation, style)

export * from './src/interface'

export default FCollapseAnimation
