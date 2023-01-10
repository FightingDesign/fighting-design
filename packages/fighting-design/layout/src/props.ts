import { setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { LayoutDirection } from './interface'

export const Props = {
  /**
   * 排列方向
   *
   * @values horizontal vertical
   * @defaultValue null
   */
  direction: setStringProp<LayoutDirection>(null, (val: LayoutDirection): boolean => {
    return (['horizontal', 'vertical'] as const).includes(val)
  })
} as const

export type LayoutProps = ExtractPropTypes<typeof Props>
