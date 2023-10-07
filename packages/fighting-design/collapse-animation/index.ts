import CollapseAnimation from './src/collapse-animation.vue'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCollapseAnimation: ComponentPublicInstance = installWebComponent(CollapseAnimation, '')

export * from './src/interface'

export default FCollapseAnimation
