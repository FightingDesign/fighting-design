import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { RadioModelValue, RadioChange } from './interface'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioModelValue>,
    default: (): null => null
  },
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否纵向排列 */
  vertical: setBooleanProp(),
  /** 横向排列的间距 */
  columnGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 纵向排列的间距 */
  rowGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 是否显示边框 */
  border: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 绑定值变化时触发
   */
  onChange: {
    type: Function as PropType<RadioChange>,
    default: (): null => null
  }
} as const

export type RadioGroundProps = ExtractPropTypes<typeof Props>

export const RADIO_GROUP_PROPS_kEY: InjectionKey<RadioGroundProps> = Symbol('radio-group-props-key')
