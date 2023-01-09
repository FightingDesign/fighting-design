import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { ToolbarClick } from './interface'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 显示为圆角 */
  round: setBooleanProp(),
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
  background: setStringProp(),
  /** 字体颜色 */
  textColor: setStringProp(),
  /** 是否固定定位 */
  fixed: setBooleanProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 点击之后触发的回调 */
  onClick: {
    type: Function as PropType<ToolbarClick>,
    default: (): null => null
  }
} as const

export type ToolbarProps = ExtractPropTypes<typeof Props>
