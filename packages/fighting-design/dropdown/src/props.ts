import type { ExtractPropTypes, PropType } from 'vue'
import type { DropdownTriggerType, DropdownEmitsInterface } from './interface'

export const Props = {
  /**
   * 触发器和内容直接的间距
   */
  spacing: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 触发方式：移入、点击
   *
   * @values hover click
   * @defaultValue hover
   */
  trigger: {
    type: String as PropType<DropdownTriggerType>,
    default: (): DropdownTriggerType => 'hover',
    validator: (val: DropdownTriggerType): boolean => {
      return (['hover', 'click'] as const).includes(val)
    }
  },
  /**
 * 是否带有箭头
 */
  arrow: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 弹出动画持续时间
   */
  enterDuration: {
    type: Number,
    default: (): null => null
  },
  /**
   * 关闭动画持续时间
   */
  leaveDuration: {
    type: Number,
    default: (): null => null
  },
  /**
   * 弹窗状态改变时触发的回调
   */
  onChange: {
    type: Function as PropType<DropdownEmitsInterface>,
    default: (): null => null
  },
  /**
   * 弹窗状态打开时触发的回调
   */
  onOpen: {
    type: Function as PropType<DropdownEmitsInterface>,
    default: (): null => null
  },
  /**
   * 弹窗状态关闭时触发的回调
   */
  onClose: {
    type: Function as PropType<DropdownEmitsInterface>,
    default: (): null => null
  }
} as const

export type DropdownPropsType = ExtractPropTypes<typeof Props>
