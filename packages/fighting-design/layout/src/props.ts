import { setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { LayoutDirection } from './interface'

export const Props = {
  /**
   * 排列方向
   *
   * @values horizontal vertical
   */
  direction: setStringProp<LayoutDirection>(
    undefined,
    (val: LayoutDirection): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val)
    }
  )
} as const

/** layout 组件 props 类型 */
export type LayoutProps = ExtractPropTypes<typeof Props>
