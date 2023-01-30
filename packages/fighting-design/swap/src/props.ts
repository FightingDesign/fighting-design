import { setObjectProp, setStringNumberProp, setBooleanProp, setStringProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { SwapType } from './interface'
import type { FightingIcon, HandleChange } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    ...setBooleanProp(),
    require: true
  },
  /** 组件尺寸 */
  size: setStringNumberProp(40),
  /**
   * 动画类型
   *
   * @values sound swap default
   * @default default
   */
  type: setStringProp<SwapType>('default', (val: SwapType): boolean => {
    return (['sound', 'swap', 'default'] as const).includes(val)
  }),
  /** 打开展示的图标 */
  iconOn: setObjectProp<FightingIcon>(),
  /** 关闭展示的图标 */
  iconOff: setObjectProp<FightingIcon>(),
  /** 当绑定值发生改变时触发的回调 */
  onChange: setFunctionProp<HandleChange>()
} as const

export type SwapProps = ExtractPropTypes<typeof Props>
