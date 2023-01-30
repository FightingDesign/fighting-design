import { setBooleanProp, setNumberProp, setStringProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 是否带圆角的 */
  round: setBooleanProp(),
  /** 是否展示波浪动画 */
  animated: setBooleanProp(),
  /** 渲染多行占位图 */
  rows: setNumberProp(1),
  /** 为 true 时，显示占位图。false 展示子组件 */
  loading: setBooleanProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  })
} as const

export type SkeletonProps = ExtractPropTypes<typeof Props>
