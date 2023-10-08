import Skeleton from './src/skeleton.vue'

import style from '../../fighting-theme/src/skeleton.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSkeleton: ComponentPublicInstance = installWebComponent(Skeleton, style)

/** skeleton 组件实例类型 */
export type SkeletonInstance = InstanceType<typeof Skeleton>

export * from './src/interface'

export default FSkeleton
