import { setBooleanProp, setStringProp, setStringNumberProp, setObjectProp, setFunctionProp } from '../../_utils'
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
   * @defaultValue middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return (['large', 'middle', 'small', 'mini'] as const).includes(val)
  }),
  /** 是否禁用 */
  disabled: setBooleanProp(),
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

export type SwitchProps = ExtractPropTypes<typeof Props>
