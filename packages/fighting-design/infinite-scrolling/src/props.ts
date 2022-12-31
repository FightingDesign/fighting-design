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
  isLoading: {
    type: Boolean,
    default: (): boolean => false
  }
}

export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>
