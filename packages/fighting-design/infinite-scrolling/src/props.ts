import { setFunctionProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { ScrollCallback } from './interface'

export const Props = {
  /** 触发距离 */
  distance: setStringNumberProp(0),
  /** 滚动触底时触发的回调 */
  onScrollEnd: setFunctionProp<ScrollCallback>()
}

/** infinite-scrolling 组件 props 类型 */
export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
