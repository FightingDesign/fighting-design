import { setObjectProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { SwapType } from './interface'
import type { FightingIcon, HandleChange } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  /** 组件尺寸 */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 40
  },
  /**
   * 动画类型
   *
   * @values sound swap default
   * @defaultValue default
   */
  type: {
    type: String as PropType<SwapType>,
    default: (): SwapType => 'default',
    validator: (val: SwapType): boolean => {
      return (['sound', 'swap', 'default'] as const).includes(val)
    }
  },
  /** 打开展示的图标 */
  iconOn: setObjectProp<FightingIcon>(),
  /** 关闭展示的图标 */
  iconOff: setObjectProp<FightingIcon>(),
  /** 当绑定值发生改变时触发的回调 */
  onChange: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  }
} as const

export type SwapProps = ExtractPropTypes<typeof Props>
