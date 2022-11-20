import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type {
  RadioLabelType,
  RadioGroupSizeType,
  RadioChangeInterface
} from './interface'

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
   * 是否纵向排列
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false
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
    type: String as PropType<RadioGroupSizeType>,
    default: (): RadioGroupSizeType => 'middle',
    validator: (val: RadioGroupSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 绑定值变化时触发
   */
  change: {
    type: Function as PropType<RadioChangeInterface>,
    default: (): null => null
  }
} as const

export type RadioGroundPropsType = ExtractPropTypes<typeof Props>

export const RADIO_GROUP_PROPS_kEY: InjectionKey<RadioGroundPropsType> = Symbol(
  'radio-group-props-key'
) as InjectionKey<RadioGroundPropsType>
