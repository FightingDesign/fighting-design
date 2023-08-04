import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingSize, FightingIcon, HandleChange } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    ...setBooleanProp(),
    required: true
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否loading */
  loading: setBooleanProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 关闭时的颜色 */
  closeColor: setStringProp(),
  /** 打开时的颜色 */
  activeColor: setStringProp(),
  /** 自定义打开时的文案 */
  activeText: setStringProp(),
  /** 自定义关闭时的文案 */
  closeText: setStringProp(),
  /** 是否为方形的 */
  square: setBooleanProp(),
  /** 自定义 icon size */
  iconSize: setStringNumberProp(),
  /** 绑定值发生改变时触发的回调 */
  onChange: setFunctionProp<HandleChange>()
} as const

/** switch 组件 props 类型 */
export type SwitchProps = ExtractPropTypes<typeof Props>
