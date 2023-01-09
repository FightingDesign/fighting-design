import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { BadgeType } from './interface'

export const Props = {
  /** 显示值 */
  value: setStringNumberProp(),
  /** value 为数字时的最大值，超出显示为 value+ */
  max: {
    type: Number,
    default: (): number => 99
  },
  /** 展示为一个点 */
  dot: setBooleanProp(),
  /** 是否显示 */
  show: setBooleanProp(),
  /**
   * 类型
   *
   * @values primary success danger warning
   * @defaultValue danger
   */
  type: setStringProp<BadgeType>('danger', (val: BadgeType): boolean => {
    return (['primary', 'success', 'danger', 'warning'] as const).includes(val)
  }),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义文字颜色 */
  textColor: setStringProp()
} as const

export type BadgeProps = ExtractPropTypes<typeof Props>
