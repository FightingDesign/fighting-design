import { setBooleanProp, setStringProp, setStringNumberProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { ProgressType } from './interface'

export const Props = {
  /** 百分比 */
  percentage: setNumberProp(0),
  /**
   * 进度条类型
   *
   * @values primary success danger warning
   * @defaultValue primary
   */
  type: setStringProp<ProgressType>('primary', (val: ProgressType): boolean => {
    return (['primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 是否显示百分比文字内容 */
  showText: setBooleanProp(true),
  /** 是否在外部显示文本 */
  outsideText: setBooleanProp(),
  /** 百分比文字的颜色 */
  textColor: setStringProp(),
  /** 进度条颜色 */
  color: setStringProp(),
  /** 进度条背景色 */
  background: setStringProp(),
  /** 是否开启条纹效果 */
  stripe: setBooleanProp()
} as const

export type ProgressProps = ExtractPropTypes<typeof Props>
