import CollapseAnimation from './src/collapse-animation.vue'

import { install } from '../_utils'

export const FCollapseAnimation = install(CollapseAnimation)

/** collapse-animation 组件实例类型 */
export type CollapseAnimationInstance = InstanceType<typeof CollapseAnimation>

export * from './src/interface'

export default FCollapseAnimation
