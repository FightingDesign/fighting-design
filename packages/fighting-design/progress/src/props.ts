import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { ProgressType } from './interface'

export const Props = {
  /** 百分比 */
  percentage: {
    type: Number,
    default: (): number => 10,
    validator: (val: number): boolean => {
      return val >= 0 && val <= 100
    }
  },
  /**
   * 进度条类型
   *
   * @values primary success danger warning
   * @defaultValue primary
   */
  type: {
    type: String as PropType<ProgressType>,
    default: (): ProgressType => 'primary',
    validator: (val: ProgressType): boolean => {
      return (['primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /** 是否为方形 */
  square: setBooleanProp(),
  /** 是否为线性 */
  linear: setBooleanProp(),
  /** 是否显示百分比文字内容 */
  showText: setBooleanProp(true),
  /** 百分比文字的颜色 */
  textColor: setStringProp(),
  /** 进度条颜色 */
  color: setStringProp(),
  /** 进度条背景色 */
  background: setStringProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp('6px'),
  /** 是否开启条纹效果 */
  stripe: setBooleanProp(),
  /** 百分比文字是否在进度条内显示 */
  textInside: setBooleanProp()
} as const

export type ProgressProps = ExtractPropTypes<typeof Props>
