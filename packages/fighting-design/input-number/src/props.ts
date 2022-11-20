import type { ExtractPropTypes, PropType } from 'vue'
import type {
  InputNumberSizeType,
  InputNumberModelType,
  InputNumberChangeInterface
} from './interface'
import type {
  HandleFocusEventInterface
} from '../../_interface'

export const Props = {
  /**
   * @zh 绑定值
   * @defaultValue 1
   */
  modelValue: {
    type: Number,
    default: (): number => 1
  },
  /**
   * @zh 模式
   * @values default button switch
   * @defaultValue default
   */
  model: {
    type: String as PropType<InputNumberModelType>,
    default: (): InputNumberModelType => 'default',
    validator: (val: InputNumberModelType): boolean => {
      return (['default', 'button', 'switch'] as const).includes(val)
    }
  },
  /**
   * @zh 数值精度
   */
  precision: {
    type: Number,
    default: (): number => 0
  },
  /**
   * @zh 步长
   */
  step: {
    type: Number,
    default: (): number => 1
  },
  /**
   * @zh 尺寸
   */
  size: {
    type: String as PropType<InputNumberSizeType>,
    default: (): InputNumberSizeType => 'middle',
    validator: (val: InputNumberSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * @zh 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 最大值（数字）
   */
  max: {
    type: Number,
    default: (): null => null
  },
  /**
   * @zh 最小值（数字）
   */
  min: {
    type: Number,
    default: (): null => null
  },
  /**
   * @zh 最大输入长度
   */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * @zh 是否自动聚焦
   */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 原生 name 属性
   */
  name: {
    type: String,
    default: (): string => 'f-input-number'
  },
  /**
   * @zh 占位符
   */
  placeholder: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 是否只读
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 绑定值发生改变时触发的回调
   */
  onChange: {
    type: Function as PropType<InputNumberChangeInterface>,
    default: (): null => null
  },
  /**
   * @zh 失去焦点时触发的回调
   */
  onBlur: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * @zh 获得焦点时触发的回调
   */
  onFocus: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * @zh input 事件触发的回调
   */
  onInput: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  }
} as const

export type InputNumberPropsType = ExtractPropTypes<typeof Props>
