import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type {
  CheckboxGroupSize,
  CheckboxGroupChange
} from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
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
    default: (): null => null
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
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<CheckboxGroupSize>,
    default: (): CheckboxGroupSize => 'middle',
    validator: (val: CheckboxGroupSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 横向排列的间距
   */
  columnGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 纵向排列的间距
   */
  rowGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 绑定值变化时触发
   */
  onChange: {
    type: Function as PropType<CheckboxGroupChange>,
    default: (): null => null
  }
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof Props>

export const CHECKBOX_GROUP_PROPS_KEY: InjectionKey<CheckboxGroupProps> =
  Symbol('f-checkbox-group-props-key')
