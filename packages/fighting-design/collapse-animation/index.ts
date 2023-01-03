import CollapseAnimation from './src/collapse-animation.vue'

import { install } from '../_utils'

export const FCollapseAnimation = install(CollapseAnimation)

export type CollapseAnimationInstance = InstanceType<typeof CollapseAnimation>

export * from './src/interface.d'

export default FCollapseAnimation
