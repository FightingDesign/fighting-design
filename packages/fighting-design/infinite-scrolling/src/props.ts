import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 触发距离
   */
  distance: {
    type: Number,
    default: (): number => 0
  },
  /**
   * 样式列表
   */
  styles: {
    type: Object,
    default: (): null => null
  },
  /**
   * 是否 loading
   */
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 滚动触底时触发的回调
   */
  onScrollEnd: {
    type: Function,
    default: (): null => null
  },
  /**
   * 滚动时触发的回调
   */
  onScrollWhen: {
    type: Function,
    default: (): null => null
  }
}

export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
