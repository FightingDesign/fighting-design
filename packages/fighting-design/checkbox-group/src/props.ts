import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { CheckboxGroupLabelType, CheckboxGroupSizeType, CheckboxGroupChangeInterface } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number, Array] as PropType<CheckboxGroupLabelType>,
    default: (): [] => []
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否纵向排列
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  label: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否显示边框
   */
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 尺寸
   */
  size: {
    type: String as PropType<CheckboxGroupSizeType>,
    default: (): CheckboxGroupSizeType => 'middle',
    validator: (val: CheckboxGroupSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 横向排列的间距
   */
  columnGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 纵向排列的间距
   */
  rowGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  /**
   * 绑定值变化时触发
   */
  change: {
    type: Function as PropType<CheckboxGroupChangeInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (val: CheckboxGroupLabelType): boolean => Array.isArray(val)
} as const

export type CheckboxGroupPropsType = ExtractPropTypes<typeof Props>

export const checkboxGroupPropsKey: InjectionKey<CheckboxGroupPropsType> = Symbol('f-checkbox-group-props-key')
