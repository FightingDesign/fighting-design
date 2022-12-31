import type { ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 触发距离
   */
  scrollDistance: {
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
   * 滚动触底时 触发的回调
   */
  scrollEnd: {
    type: Function,
    default: (): null => null
  },
  /**
   * 滚动时 触发的回调
   */
  scrollWhen: {
    type: Function,
    default: (): null => null
  }
}

export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
