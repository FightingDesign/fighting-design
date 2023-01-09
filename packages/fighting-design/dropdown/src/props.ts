import { setBooleanProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { TriggerTrigger } from '../../trigger'
import type { HandleChange } from '../../_interface'

export const Props = {
  /** 触发器和内容直接的间距 */
  spacing: setStringNumberProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /**
   * 触发方式：移入、点击
   *
   * @values hover click
   * @defaultValue hover
   */
  trigger: {
    type: String as PropType<TriggerTrigger>,
    default: (): TriggerTrigger => 'hover',
    validator: (val: TriggerTrigger): boolean => {
      return (['hover', 'click'] as const).includes(val)
    }
  },
  /** 是否带有箭头 */
  arrow: setBooleanProp(),
  /** 弹出动画持续时间 */
  enterDuration: {
    type: Number,
    default: (): null => null
  },
  /** 关闭动画持续时间 */
  leaveDuration: {
    type: Number,
    default: (): null => null
  },
  /** 弹窗状态改变时触发的回调 */
  onChange: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  },
  /** 弹窗状态打开时触发的回调 */
  onOpen: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  },
  /** 弹窗状态关闭时触发的回调 */
  onClose: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  }
} as const

export type DropdownProps = ExtractPropTypes<typeof Props>
