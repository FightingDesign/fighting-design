import type { PropType, ExtractPropTypes } from 'vue'
import type { FightingSize, FightingIcon, HandleChange } from '../../_interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    required: true
  },
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
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义 icon */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 关闭时的颜色 */
  closeColor: {
    type: String,
    default: (): null => null
  },
  /** 打开时的颜色 */
  activeColor: {
    type: String,
    default: (): null => null
  },
  /** 自定义打开时的文案 */
  activeText: {
    type: String,
    default: (): null => null
  },
  /** 自定义关闭时的文案 */
  closeText: {
    type: String,
    default: (): null => null
  },
  /** 是否为方形的 */
  square: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 自定义 icon size */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 绑定值发生改变时触发的回调 */
  onChange: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof Props>
