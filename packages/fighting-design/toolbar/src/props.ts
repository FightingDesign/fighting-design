import type { PropType, ExtractPropTypes } from 'vue'
import type { ToolbarClick } from './interface'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 显示为圆角 */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /** 自定义背景颜色 */
  background: {
    type: String,
    default: (): null => null
  },
  /** 字体颜色 */
  textColor: {
    type: String,
    default: (): null => null
  },
  /** 是否固定定位 */
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义宽度 */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 自定义高度 */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 点击之后触发的回调 */
  onClick: {
    type: Function as PropType<ToolbarClick>,
    default: (): null => null
  }
} as const

export type ToolbarProps = ExtractPropTypes<typeof Props>
