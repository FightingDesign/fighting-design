import { setBooleanProp, setStringNumberProp, setStringProp, setFunctionProp, setArrayProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { CheckboxGroupChange } from './interface'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: setArrayProp<string[]>([]),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否纵向排列 */
  vertical: setBooleanProp(),
  /** label */
  label: setStringProp(),
  /** 是否显示边框 */
  border: setBooleanProp(),
  /**
   * 尺寸
   * @values large middle small mini
   * @defaultValue middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return (['large', 'middle', 'small', 'mini'] as const).includes(val)
  }),
  /**横向排列的间距 */
  columnGap: setStringNumberProp(),
  /** 纵向排列的间距 */
  rowGap: setStringNumberProp(),
  /** 绑定值变化时触发 */
  onChange: setFunctionProp<CheckboxGroupChange>()
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof Props>

export const CHECKBOX_GROUP_PROPS_KEY: InjectionKey<CheckboxGroupProps> = Symbol('f-checkbox-group-props-key')
