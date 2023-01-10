import { setBooleanProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { ScrollCallback } from './interface'

export const Props = {
  /** 触发距离 */
  distance: setNumberProp(0),
  /** 样式列表 */
  styles: {
    type: Object as PropType<CSSProperties>,
    default: (): null => null
  },
  /** 是否 loading */
  loading: setBooleanProp(),
  /** 滚动触底时触发的回调 */
  onScrollEnd: {
    type: Function as PropType<ScrollCallback>,
    default: (): null => null
  },
  /** 滚动时触发的回调 */
  onScrollWhen: {
    type: Function as PropType<ScrollCallback>,
    default: (): null => null
  }
}

export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
