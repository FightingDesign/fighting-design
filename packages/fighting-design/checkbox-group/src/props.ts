import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp,
  setArrayProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { CheckboxGroupChange, CheckboxGroupProvide } from './interface'
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
  /**横向排列的间距 */
  columnGap: setStringNumberProp(),
  /** 纵向排列的间距 */
  rowGap: setStringNumberProp(),
  /** 绑定值变化时触发 */
  onChange: setFunctionProp<CheckboxGroupChange>()
} as const

/** checkbox-group 组件 props 类型 */
export type CheckboxGroupProps = ExtractPropTypes<typeof Props>

/** checkbox-group 组件注入的依赖项 */
export const CHECKBOX_GROUP_PROPS_KEY: InjectionKey<CheckboxGroupProvide> = Symbol(
  'f-checkbox-group-props-key'
)
