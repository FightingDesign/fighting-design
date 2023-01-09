import { setBooleanProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * 类型
   *
   * @values primary success danger warning default
   * @defaultValue null
   */
  type: setStringProp<FightingType>(null, (val: FightingType): boolean => {
    return (['primary', 'success', 'danger', 'warning', 'default'] as const).includes(val)
  }),
  /** 文字大小 */
  fontSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** title 大小 */
  titleSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 是否加粗 */
  bold: setBooleanProp(),
  /** 是否居中 */
  center: setBooleanProp(),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 是否为简约的 */
  simple: setBooleanProp(),
  /** 自定义标题 */
  title: setStringProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义 title 颜色 */
  titleColor: setStringProp(),
  /** 是否为固定定位 */
  fixed: setBooleanProp(),
  /** 自定义关闭 icon */
  closeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 自定义之前的 icon */
  beforeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 滚动列表 */
  alertList: {
    type: Array as PropType<string[]>,
    default: (): null => null
  },
  /** 滚动列表动画间隔 */
  duration: {
    type: Number,
    default: (): null => null
  },
  /** 点击关闭之后执行的回调 */
  onClose: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type AlertProps = ExtractPropTypes<typeof Props>
