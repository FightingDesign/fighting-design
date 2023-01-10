import { setBooleanProp, setNumberProp, setFunctionProp, setObjectProp } from '../../_utils'
import type { ExtractPropTypes, CSSProperties } from 'vue'
import type { ScrollCallback } from './interface'

export const Props = {
  /** 触发距离 */
  distance: setNumberProp(0),
  /** 样式列表 */
  styles: setObjectProp<CSSProperties>(),
  /** 是否 loading */
  loading: setBooleanProp(),
  /** 滚动触底时触发的回调 */
  onScrollEnd: setFunctionProp<ScrollCallback>(),
  /** 滚动时触发的回调 */
  onScrollWhen: setFunctionProp<ScrollCallback>()
}

export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
