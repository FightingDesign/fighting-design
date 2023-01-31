import { setBooleanProp, setStringProp, setStringNumberProp, setNumberProp } from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingType } from '../../_interface'

export const Props = {
  /** 显示值 */
  value: setStringNumberProp(),
  /** value 为数字时的最大值，超出显示为 value+ */
  max: setNumberProp(99),
  /** 展示为一个点 */
  dot: setBooleanProp(),
  /** 是否显示 */
  show: setBooleanProp(),
  /**
   * 类型
   *
   * @values default primary success danger warning
   * @default danger
   */
  type: setStringProp<FightingType>('danger', (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义文字颜色 */
  textColor: setStringProp()
} as const

export type BadgeProps = ExtractPropTypes<typeof Props>
