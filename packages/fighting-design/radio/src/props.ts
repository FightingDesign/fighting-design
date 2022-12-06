import type { PropType, ExtractPropTypes } from 'vue'
import type { RadioLabelType, RadioChangeInterface } from '../../radio-group'

export const Props = {
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioLabelType>,
    default: (): null => null
  },
  /**
   * 自定义 name
   */
  name: {
    type: String,
    default: (): string => 'f-radio'
  },
  /**
   * 选框对应的值
   */
  label: {
    type: [String, Number, Boolean] as PropType<RadioLabelType>,
    default: (): null => null
  },
  /**
   * 绑定值变化时触发
   */
  onChange: {
    type: Function as PropType<RadioChangeInterface>,
    default: (): null => null
  }
} as const

export type RadioProps = ExtractPropTypes<typeof Props>
