import CollapseAnimation from './src/collapse-animation.vue'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCollapseAnimation: ComponentPublicInstance = installWebComponent(CollapseAnimation, '')

/** collapse-animation 组件实例类型 */
export type CollapseAnimationInstance = InstanceType<typeof CollapseAnimation>

export * from './src/interface'

export default FCollapseAnimation
