import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { SwapType, SwapOnChange } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  /**
   * 组件尺寸
   */
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
  /**
   * 打开展示的图标
   */
  iconOn: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 关闭展示的图标
   */
  iconOff: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 当绑定值发生改变时触发的回调
   */
  onChange: {
    type: Function as PropType<SwapOnChange>,
    default: (): null => null
  }
} as const

export type SwapProps = ExtractPropTypes<typeof Props>
