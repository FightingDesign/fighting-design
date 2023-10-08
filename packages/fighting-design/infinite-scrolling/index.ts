import InfiniteScrolling from './src/infinite-scrolling.vue'

import style from '../../fighting-theme/src/infinite-scrolling.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FInfiniteScrolling: ComponentPublicInstance = installWebComponent(InfiniteScrolling, style)

/** infinite-scrolling 组件实例类型 */
export type InfiniteScrollingInstance = InstanceType<typeof InfiniteScrolling>

export * from './src/interface'

export default FInfiniteScrolling
