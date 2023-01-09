import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** icon 内容 */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 文字大小
   *
   * 可控制 svg 和文字
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 文字颜色
   *
   * 可控制 svg 和文字
   */
  color: {
    type: String,
    default: (): null => null
  },
  /** 跳转的路径 */
  to: {
    type: String,
    default: (): null => null
  },
  /** 唯一标识 */
  name: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type MenuItemProps = ExtractPropTypes<typeof Props>
