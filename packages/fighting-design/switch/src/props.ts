import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { SwitchSizeType, SwitchChangeInterface } from './interface'

export const Props = {
  /**
   * 绑定值
   */
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
    type: String as PropType<SwitchSizeType>,
    default: (): SwitchSizeType => 'middle',
    validator: (val: SwitchSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 关闭时的颜色
   */
  closeColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 打开时的颜色
   */
  openColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义打开时的文案
   */
  openText: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义关闭时的文案
   */
  closeText: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否为方形的
   */
  square: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 绑定值发生改变时触发的回调
   */
  onChange: {
    type: Function as PropType<SwitchChangeInterface>,
    default: (): null => null
  },
  /**
   * 自定义 icon size
   */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  }
} as const

export type SwitchPropsType = ExtractPropTypes<typeof Props>
