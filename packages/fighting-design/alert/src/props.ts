import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * 类型
   *
   * @values primary success danger warning default
   * @defaultValue null
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['primary', 'success', 'danger', 'warning', 'default'] as const).includes(val)
    }
  },
  /**
   * 文字大小
   */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * title 大小
   */
  titleSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否加粗
   */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否居中
   */
  center: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可关闭
   */
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否为简约的
   */
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义标题
   */
  title: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否为圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义 title 颜色
   */
  titleColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否为固定定位
   */
  fixed: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义关闭 icon
   */
  closeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 自定义之前的 icon
   */
  beforeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 滚动列表
   */
  alertList: {
    type: Array as PropType<string[]>,
    default: (): null => null
  },
  /**
   * 点击关闭之后执行的回调
   */
  onClose: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type AlertProps = ExtractPropTypes<typeof Props>
