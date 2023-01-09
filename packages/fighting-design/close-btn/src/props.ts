import { setBooleanProp, setStringNumberProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { HandleMouse, FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义尺寸 */
  size: setStringNumberProp(),
  /** 是否为圆角的 */
  round: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 鼠标移入的颜色 */
  hoverColor: setStringProp(),
  /** 自定义 icon */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 点击之后执行的回调 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type CloseBtnProps = ExtractPropTypes<typeof Props>
