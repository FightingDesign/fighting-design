import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { RadioModelValue, RadioChange, RadioGroundInject } from './interface'
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
  columnGap: setStringNumberProp(),
  /** 纵向排列的间距 */
  rowGap: setStringNumberProp(),
  /** 背景状态 */
  background: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 绑定值变化时触发 */
  onChange: setFunctionProp<RadioChange>()
} as const

/** radio-group 组件 props 类型 */
export type RadioGroundProps = ExtractPropTypes<typeof Props>

/** radio-group 组件注入的依赖项 */
export const RADIO_GROUP_PROPS_kEY: InjectionKey<RadioGroundInject> = Symbol(
  'radio-group-props-key'
)
