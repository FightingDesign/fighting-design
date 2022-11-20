import type { ExtractPropTypes, PropType } from 'vue'
import type { InputNumberSizeType } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: Number,
    default: (): number => 1
  },
  /**
   * 类型
   */
  model: {
    type: String,
    default: (): string => 'default',
    validator: (val: string): boolean => {
      return ['default', 'button', 'switch'].includes(val)
    }
  },
  /**
   * 数值精度
   */
  precision: {
    type: Number,
    default: (): number => 0
  },
  /**
   * 步长
   */
  step: {
    type: Number,
    default: (): number => 1
  },
  /**
   * 尺寸
   */
  size: {
    type: String as PropType<InputNumberSizeType>,
    default: (): InputNumberSizeType => 'middle',
    validator: (val: InputNumberSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 最大值（数字）
   */
  max: {
    type: Number,
    default: (): number => Infinity
  },
  /**
   * 最小值（数字）
   */
  min: {
    type: Number,
    default: (): number => -Infinity
  },
  /**
   * 最大输入长度
   */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * 是否自动聚焦
   */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生name属性
   */
  name: {
    type: String,
    default: (): string => ''
  },
  /**
   * 占位符
   */
  placeholder: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type InputNumberPropsType = ExtractPropTypes<typeof Props>
