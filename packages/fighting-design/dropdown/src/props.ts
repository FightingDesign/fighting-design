import type { ExtractPropTypes, PropType } from 'vue'
import type { DropdownTriggerType } from './interface'

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
  }
} as const

export type DropdownPropsType = ExtractPropTypes<typeof Props>
