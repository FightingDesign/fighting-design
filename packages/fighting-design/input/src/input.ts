import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type {
  InputType,
  InputSizeType,
  InputFocusInterface,
  InputChangeInterface,
  InputSearchInterface,
  InputEnterInterface
} from './interface'

export const Props = {
  modelValue: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<InputType>,
    default: (): InputType => 'text',
    validator: (val: InputType): boolean => {
      return (['text', 'password'] as const).includes(val)
    }
  },
  size: {
    type: String as PropType<InputSizeType>,
    default: (): InputSizeType => 'middle',
    validator: (val: InputSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  max: {
    type: Number,
    default: (): null => null
  },
  min: {
    type: Number,
    default: (): null => null
  },
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => 'f-input'
  },
  placeholder: {
    type: String,
    default: (): string => ''
  },
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  search: {
    type: Boolean,
    default: (): boolean => false
  },
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  showPassword: {
    type: Boolean,
    default: (): boolean => false
  },
  enterSearch: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  onSearch: {
    type: Function as PropType<InputSearchInterface>,
    default: (): null => null
  },
  onChange: {
    type: Function as PropType<InputChangeInterface>,
    default: (): null => null
  },
  onBlur: {
    type: Function as PropType<InputFocusInterface>,
    default: (): null => null
  },
  onFocus: {
    type: Function as PropType<InputFocusInterface>,
    default: (): null => null
  },
  onEnter: {
    type: Function as PropType<InputEnterInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (val: string): string => val
} as const

export type InputPropsType = ExtractPropTypes<typeof Props>
